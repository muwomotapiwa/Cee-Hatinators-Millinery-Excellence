import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '../types';
import { useFlash } from './FlashContext';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, qty?: number, variant?: string) => void;
  removeFromCart: (productId: string | number) => void;
  updateQty: (productId: string | number, qty: number) => void;
  clearCart: () => void;
  subtotal: number;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { flash } = useFlash();
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cee_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cee_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, qty: number = 1, variant: string = 'Standard') => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.variant === variant);
      if (existing) {
        flash(`Updated ${product.name} quantity`);
        return prev.map(item => 
          (item.id === product.id && item.variant === variant) 
            ? { ...item, qty: item.qty + qty } 
            : item
        );
      }
      flash(`Added ${product.name} to boutique bag`);
      return [...prev, { ...product, qty, variant }];
    });
  };

  const removeFromCart = (productId: string | number) => {
    setCart(prev => {
      const itemToRemove = prev.find(item => item.id === productId);
      if (itemToRemove) {
        flash(`Removed ${itemToRemove.name}`, 'info');
      }
      return prev.filter(item => item.id !== productId);
    });
  };

  const updateQty = (productId: string | number, qty: number) => {
    if (qty < 1) return;
    setCart(prev => prev.map(item => item.id === productId ? { ...item, qty } : item));
  };

  const clearCart = () => setCart([]);

  const subtotal = cart.reduce((acc, item) => {
    const priceNum = typeof item.price === 'string' 
      ? parseFloat(item.price.replace(/[^0-9.]/g, '')) 
      : item.price;
    return acc + (priceNum * item.qty);
  }, 0);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, subtotal, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
