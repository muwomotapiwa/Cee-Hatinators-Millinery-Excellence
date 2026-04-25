/**
 * Cee Hatinators API Service Layer
 * This file handles all communication with the Flask/Supabase backend.
 */

import { Product } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

interface RequestOptions extends RequestInit {
  token?: string;
}

async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { token, ...init } = options;
  
  const headers = new Headers(init.headers);
  headers.set('Content-Type', 'application/json');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await window.fetch(`${API_BASE_URL}${endpoint}`, {
    ...init,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'An unexpected error occurred' }));
    throw new Error(error.message || error.error || 'Request failed');
  }

  return response.json();
}

export const api = {
  auth: {
    login: (credentials: any) => request('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
    register: (data: any) => request('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
    refresh: () => request('/auth/refresh', { method: 'POST' }),
    logout: () => request('/auth/logout', { method: 'POST' }),
  },
  products: {
    getAll: (params: string = '') => request<Product[]>(`/products${params}`),
    getOne: (slug: string) => request<Product>(`/products/${slug}`),
    getRelated: (slug: string) => request<Product[]>(`/products/${slug}/related`),
    getCategories: () => request<any[]>('/categories'),
  },
  cart: {
    get: (token: string) => request('/cart', { token }),
    addItem: (item: any, token: string) => request('/cart/add', { method: 'POST', body: JSON.stringify(item), token }),
    updateItem: (id: string, qty: number, token: string) => request(`/cart/${id}`, { method: 'PUT', body: JSON.stringify({ quantity: qty }), token }),
    removeItem: (id: string, token: string) => request(`/cart/${id}`, { method: 'DELETE', token }),
  },
  orders: {
    create: (orderData: any, token: string) => request('/orders', { method: 'POST', body: JSON.stringify(orderData), token }),
    getHistory: (token: string) => request('/orders', { token }),
    getOne: (id: string, token: string) => request(`/orders/${id}`, { token }),
  },
  site: {
    getHomepage: () => request('/site/homepage'),
    getSpecials: () => request('/specials/active'),
    getConfig: () => request('/site/config'),
  }
};
