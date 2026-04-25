# Cee Hatinators - Backend Configuration & API Specification

This document tracks the backend requirements for the Cee Hatinators platform.

## 1. Technology Stack
- **Framework**: Flask (Python)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: JWT (Access/Refresh tokens)
- **Storage**: Supabase Storage

## 2. Core Tables (High-Level)
- `users`: id, email, first_name, last_name, role (admin/customer), referral_token, referred_by, referral_credit.
- `products`: id, name, slug, category_id, description (Rich Text), price, sale_price, stock_qty, is_featured, is_active.
- `categories`: id, name, slug, description, image_url, parent_id.
- `orders`: id, user_id, status, subtotal, discount, total, shipping_address.
- `specials`: id, name, discount_id, banner_image_url, starts_at, ends_at.

## 3. Required API Endpoints (Planning)

### Auth
- `POST /api/auth/register`: New user registration.
- `POST /api/auth/login`: Login, returns JWT + httpOnly refresh cookie.
- `POST /api/auth/refresh`: New token from refresh cookie.

### Storefront
- `GET /api/site/homepage`: Returns hero JSON, announcement data, and featured categories.
- `GET /api/products`: 
    - Query Params: `category` (slug), `color`, `min_price`, `max_price`, `sort` (newest, price_asc, price_desc), `page`.
- `GET /api/products/:slug`: Returns product detail with `variants` (sizes/colors) and `images` (array).
- `GET /api/products/:slug/related`: Returns 4 related products based on category.
- `GET /api/categories`: Basic category tree.
- `GET /api/specials/active`: Current active promotion banners with countdown data.

### Cart & Orders
- `GET /api/cart`: Fetch current cart state.
- `POST /api/cart/add`: Body `{ product_id, quantity, variant_id }`.
- `PUT /api/cart/:itemId`: Update quantity.
- `DELETE /api/cart/:itemId`: Remove item.
- `POST /api/orders`: Create order from cart.
- `POST /api/payments/initiate`: Initiate gateway (PayFast/Yoco) session.

## 4. Security Requirements
- All `/admin/*` routes must require `role == 'admin'` claim.
- Rate limiting on Auth endpoints.
- Supabase RLS for user-specific data.
