-- SQL Migration to Update Products Table with Rating and Reviews Support
-- Execute this in your Supabase SQL Editor

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

-- Add comment to explain the new columns
COMMENT ON COLUMN products.rating IS 'Average product rating from 0-5';
COMMENT ON COLUMN products.total_reviews IS 'Total number of reviews/ratings';
COMMENT ON COLUMN products.reviews IS 'JSON array of review objects {name, rating, comment, date}';
COMMENT ON COLUMN products.image IS 'Main product image URL for display';
