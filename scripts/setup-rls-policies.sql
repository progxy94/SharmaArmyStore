-- IMPORTANT: Run this BEFORE the migration
-- Temporarily disable migration issues by allowing inserts to products table

-- First, let's check existing policies
-- SELECT * FROM pg_policies WHERE tablename = 'products';

-- Remove the old policy if it exists
DROP POLICY IF EXISTS "Anyone can insert products" ON products;

-- Create a new policy that allows product inserts
CREATE POLICY "Allow product inserts for migration" ON products 
FOR INSERT 
WITH CHECK (true);

-- If you want to be more restrictive after migration, update this policy
-- This ensures authenticated users can see all active products
CREATE POLICY "Public can view active products" ON products 
FOR SELECT 
USING (is_active = true);

-- Allow admins to manage all products (if you have admin functionality)
-- For now, we'll keep it simple - anyone who can insert can see all products
