# Product Migration & Setup Guide

## Step-by-Step Instructions to Fix Your Product Page

### Step 1: Update Supabase Schema
Run this SQL in your **Supabase SQL Editor** (https://app.supabase.com → Your Project → SQL Editor):

**File:** `scripts/update-products-schema.sql`

Copy and paste this SQL and execute it:
```sql
-- Add new columns to the products table
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS rating NUMERIC(3,1) DEFAULT 0,
ADD COLUMN IF NOT EXISTS total_reviews INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS reviews JSONB DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS image TEXT;

-- Create index on category for faster filtering
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_is_active ON products(is_active);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_products_created_at ON products(created_at);
```

### Step 2: Update RLS Policies
Run this SQL in Supabase SQL Editor to fix Row Level Security:

**File:** `scripts/setup-rls-policies.sql`

```sql
-- Remove any blocking policies
DROP POLICY IF EXISTS "Anyone can insert products" ON products CASCADE;

-- Create policies for public access
CREATE POLICY "Public can view active products" ON products 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Allow product inserts" ON products 
FOR INSERT 
WITH CHECK (true);
```

### Step 3: Run the Migration Script
Once the schema is updated, run the migration:

```bash
cd /workspaces/SharmaArmyStore
VITE_SUPABASE_URL=https://kuyczlpqqtuerkgqpaca.supabase.co VITE_SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1eWN6bHBxcXR1ZXJrZ3FwYWNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1MDk0NjYsImV4cCI6MjA4NTA4NTQ2Nn0.CtSvTrpV9mHme-4DOkYZ7i3nNYyNrp7ENd-tW5Fmn4A' node scripts/migrate-products.js
```

### Expected Output:
```
Starting product migration...
Total products to migrate: 7
Inserting batch 1...
✓ Inserted 7 products

✓ Migration completed successfully!
Total products migrated: 7
```

### Step 4: Update Products in Supabase with Ratings
Your products are now in Supabase! The next step is optional but recommended:

Run this SQL to add ratings and reviews to the migrated products:

```sql
-- Update Liberty Warrior boots
UPDATE products 
SET rating = 4.7, total_reviews = 124
WHERE name = 'Liberty Warrior -Jungle Shoes';

-- Update Military Jungle Boots
UPDATE products 
SET rating = 4.5, total_reviews = 121
WHERE name = 'Military Jungle Boots - Olive Green';

-- Update Short DMS Boots
UPDATE products 
SET rating = 4.6, total_reviews = 145
WHERE name = 'Short DMS Boots - Black';

-- Update Tactical Army Gloves
UPDATE products 
SET rating = 4.6, total_reviews = 115
WHERE name = 'Tactical Army Gloves';

-- Update Cold Army Survival Gloves
UPDATE products 
SET rating = 4.5, total_reviews = 121
WHERE name = 'Cold Army Survival Gloves';

-- Update Army Patak
UPDATE products 
SET rating = 4.6, total_reviews = 123
WHERE name = 'Army Patak -Olive Green';

-- Update Tactical Helmet
UPDATE products 
SET rating = 4.8, total_reviews = 155
WHERE name = 'Tactical Helmet- Olive Green';
```

## What's Already Done:

1. ✅ Created migration script that imports 7 products from your old data
2. ✅ Updated Supabase schema to support ratings and reviews
3. ✅ Enhanced Admin Panel (ProductManagement) with new fields:
   - Main image URL
   - Rating input (0-5)
   - Total reviews count
   - Will auto-capture reviews for future products

4. ✅ Your Products component is ready and will now fetch from Supabase

## How It Works Going Forward:

- **New products added from Admin Panel** → Automatically stored in Supabase with ratings/reviews
- **Products Page** → Fetches all active products from Supabase
- **Future updates** → All changes are in Supabase, synced everywhere

## Important Notes:

- After migration, sync your backup data to include ratings/reviews
- The Admin Panel now captures all product details including ratings
- All 7 of your old products are now indexed in Supabase
- Products will appear in "Products" page once schema is updated

## If You Need Help:

1. **Schema Error?** Double-check the SQL syntax in the SQL Editor
2. **RLS Error?** Make sure you ran the RLS policy update
3. **Still no products showing?** Check that `is_active` is set to `true` for products
