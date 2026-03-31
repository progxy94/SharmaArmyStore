#!/bin/bash

# Helper script to easily run the product migration
# Just run: bash scripts/run-migration.sh

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Sharma Army Store - Product Migration${NC}"
echo "=============================================="

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo -e "${RED}❌ Error: .env.local file not found!${NC}"
    echo "Please ensure .env.local exists in the project root with your Supabase credentials"
    exit 1
fi

# Load environment variables from .env.local
export $(grep "^VITE_SUPABASE_URL" .env.local | xargs)
export $(grep "^VITE_SUPABASE_ANON_KEY" .env.local | xargs)

# Verify environment variables are loaded
if [ -z "$VITE_SUPABASE_URL" ] || [ -z "$VITE_SUPABASE_ANON_KEY" ]; then
    echo -e "${RED}❌ Error: Supabase credentials not found in .env.local${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Environment variables loaded${NC}"
echo "URL: ${VITE_SUPABASE_URL:0:30}..."

echo ""
echo "⚠️  IMPORTANT: Before running this migration, ensure you have:"
echo "1. Updated your Supabase schema (run update-products-schema.sql)"
echo "2. Fixed RLS policies (run setup-rls-policies.sql)"
echo ""
read -p "Ready to proceed? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Migration cancelled."
    exit 0
fi

echo ""
echo -e "${YELLOW}Running migration...${NC}"
echo ""

# Run the migration
node scripts/migrate-products.js

# Check if migration was successful
if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✓ Migration completed successfully!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Verify products in Supabase Dashboard"
    echo "2. Start your development server (npm run dev)"
    echo "3. Visit /products page to see your products"
    echo "4. (Optional) Run the ratings SQL update to add review counts"
else
    echo ""
    echo -e "${RED}❌ Migration failed!${NC}"
    echo "Check the errors above and ensure Supabase schema is updated."
    exit 1
fi
