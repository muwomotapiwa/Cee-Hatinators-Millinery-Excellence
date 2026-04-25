export interface Product {
  id: string | number;
  name: string;
  slug?: string;
  price: string | number;
  category: string;
  image: string;
  description?: string;
  onSale?: boolean;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'customer';
}

export interface CartItem extends Product {
  qty: number;
  variant?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
}
