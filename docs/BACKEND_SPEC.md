# Cee Hatinators - Backend Configuration & API Specification

This document tracks the backend requirements for the Cee Hatinators platform.

## 1. Technology Stack
- **Framework**: Flask (Python)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: JWT (Access/Refresh tokens)
- **Storage**: Supabase Storage

## 2. Core Tables (Detailed Schema)

### `users`
| Field | Type | Notes |
|-------|------|-------|
| `id` | UUID | Primary Key (Default: auth.uid()) |
| `email` | String | Unique |
| `first_name` | String | |
| `last_name` | String | |
| `role` | Enum | `customer`, `admin` (Default: `customer`) |
| `referral_token` | String | Generated on signup |
| `referred_by` | UUID | Foreign Key to `users.id` |
| `referral_credit`| Decimal| Default: 0.00 |

### `products`
| Field | Type | Notes |
|-------|------|-------|
| `id` | UUID | Primary Key |
| `name` | String | |
| `slug` | String | Unique (used for SEO URLs) |
| `category_id` | UUID | Foreign Key to `categories.id` |
| `description` | Text | Markdown or HTML support |
| `price` | Decimal | Base price |
| `sale_price` | Decimal | Nullable |
| `stock_qty` | Integer | |
| `image_url` | String | Primary display image |
| `is_featured` | Boolean | For homepage highlight |

### `categories`
| Field | Type | Notes |
|-------|------|-------|
| `id` | UUID | Primary Key |
| `name` | String | |
| `slug` | String | Unique |
| `parent_id` | UUID | Self-referencing FK for sub-categories |

### `orders`
| Field | Type | Notes |
|-------|------|-------|
| `id` | UUID | Primary Key |
| `user_id` | UUID | FK to `users.id` |
| `status` | Enum | `pending`, `processing`, `shipped`, `delivered`, `cancelled` |
| `subtotal` | Decimal | |
| `discount` | Decimal | |
| `total` | Decimal | |
| `shipping_addr` | JSONB | Nested object with street, city, postal code |

### `bespoke_requests`
| Field | Type | Notes |
|-------|------|-------|
| `id` | UUID | Primary Key |
| `user_id` | UUID | Nullable (anonymous requests allowed) |
| `event_date` | Date | |
| `occasion` | String | |
| `vision` | Text | |
| `budget_range`| String | |
| `status` | Enum | `new`, `contacted`, `designing`, `completed` |

## 2.1 Referral Logic Requirements
- **Referral Tracking**: When a user signs up with a `?ref=TOKEN` query param, the backend must validate the token and link the new user to the referrer.
- **Reward**: Upon the first successful purchase by the referred user, the referrer should receive a credit (e.g., R200) to their `referral_credit` balance.

## 3. Required API Endpoints (Planning)

### Auth
- `POST /api/auth/register`: New user registration. Handles referral linking if token is provided.
- `POST /api/auth/login`: Login via Supabase Auth, returns JWT.
- `POST /api/auth/logout`: Revoke session.

### Storefront
- `GET /api/products`: Full product listing with filtering (category, price range, search).
- `GET /api/products/:slug`: Product details.
- `GET /api/categories`: Category hierarchy for navigation.

### Bespoke
- `POST /api/bespoke/request`: Submit the curation form. Triggers a notification email to the admin.

## 4. Environment Configuration (.env)
```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_KEY=your-service-role-key-for-admin-operations
SUPABASE_JWT_SECRET=your-jwt-secret
DATABASE_URL=postgresql://postgres:password@db.your-project-id.supabase.co:5432/postgres
FLASK_ENV=production
PAYFAST_MERCHANT_ID=your-id
PAYFAST_MERCHANT_KEY=your-key
```

## 5. Security & RLS (Supabase)
- **RLS Enabled**: On `users`, `orders`, and `cart` tables.
- **Policies**: 
    - `users`: Users can only read/update their own profile.
    - `orders`: Users can only read their own order history.
    - `products`: Public read-only access.
- **Service Role**: Flask backend uses the Supabase service role key for restricted operations like updating stock levels or applying referral credits.
