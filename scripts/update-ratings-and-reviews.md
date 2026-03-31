# Supabase Product Rating & Reviews Update

Run this SQL manually in Supabase SQL Editor to populate rating/reviews/image for migrated products.

```sql
-- 1) Update product ratings and review content
UPDATE products SET
  rating = 4.7,
  total_reviews = 124,
  reviews = '[
    {"name":"Rajesh Kumar","rating":5,"comment":"Excellent quality boots! Very comfortable even after 8 hours of use.","date":"2026-01-15"},
    {"name":"Amit Singh","rating":4.5,"comment":"Great durability and ankle support. Worth every penny.","date":"2026-01-10"},
    {"name":"Vikram Sharma","rating":5,"comment":"Best tactical boots I\'ve owned. Highly recommend!","date":"2026-01-05"}
  ]'::jsonb,
  image = 'https://i.ibb.co/PsFHHfL4/1769704977254.png'
WHERE id = 1;

UPDATE products SET
  rating = 4.5,
  total_reviews = 121,
  reviews = '[
    {"name":"Suresh Patel","rating":5,"comment":"Perfect for monsoon treks. Water drains out quickly!","date":"2026-01-20"},
    {"name":"Arjun Reddy","rating":4,"comment":"Good quality but runs slightly large. Order half size down.","date":"2026-01-12"}
  ]'::jsonb,
  image = 'https://i.ibb.co/xqbt8sD1/IMG-20260124-WA0007.jpg'
WHERE id = 2;

UPDATE products SET
  rating = 4.6,
  total_reviews = 145,
  reviews = '[
    {"name":"Captain Verma","rating":5,"comment":"Professional grade equipment. Exceeded expectations!","date":"2026-01-18"},
    {"name":"Rahul Gupta","rating":5,"comment":"Best investment for tactical operations. Superb quality.","date":"2026-01-08"},
    {"name":"Deepak Joshi","rating":4.5,"comment":"Very sturdy and comfortable. Great for long missions.","date":"2026-01-03"}
  ]'::jsonb,
  image = 'https://i.ibb.co/gMcQB2Nh/IMG-20260124-WA0012.jpg'
WHERE id = 3;

UPDATE products SET
  rating = 4.6,
  total_reviews = 115,
  reviews = '[
    {"name":"Major Kapoor","rating":5,"comment":"Excellent modularity. Fits all my gear perfectly!","date":"2026-01-22"},
    {"name":"Rohit Chauhan","rating":4.5,"comment":"Very well constructed. Great value for money.","date":"2026-01-16"},
    {"name":"Akash Jain","rating":5,"comment":"Professional quality vest. Highly recommended!","date":"2026-01-10"}
  ]'::jsonb,
  image = 'https://i.ibb.co/KxLGB987/IMG-20260124-WA0000.jpg'
WHERE id = 9;

UPDATE products SET
  rating = 4.5,
  total_reviews = 121,
  reviews = '[
    {"name":"Sunil Kumar","rating":5,"comment":"Spacious and durable. Carried 15kg easily!","date":"2026-01-18"},
    {"name":"Dinesh Patel","rating":4,"comment":"Good backpack but straps could be more padded.","date":"2026-01-12"}
  ]'::jsonb,
  image = 'https://i.ibb.co/0phQmfX3/IMG-20260124-WA0004.jpg'
WHERE id = 10;

UPDATE products SET
  rating = 4.6,
  total_reviews = 123,
  reviews = '[
    {"name":"Vikas Rao","rating":5,"comment":"Authentic quality tags. Engraving is perfect!","date":"2026-01-23"},
    {"name":"Sachin Verma","rating":4.5,"comment":"Good quality and fast delivery. Satisfied!","date":"2026-01-17"},
    {"name":"Ramesh Singh","rating":5,"comment":"Exactly as described. Great product!","date":"2026-01-13"}
  ]'::jsonb,
  image = 'https://i.ibb.co/qMPs8XMj/1769700881062.png'
WHERE id = 13;

UPDATE products SET
  rating = 4.8,
  total_reviews = 155,
  reviews = '[
    {"name":"Deepak Saxena","rating":5,"comment":"Most comfortable tactical pants ever! Great fit.","date":"2026-01-25"},
    {"name":"Yogesh Patel","rating":4.5,"comment":"Excellent quality and lots of pockets.","date":"2026-01-19"},
    {"name":"Mukesh Kumar","rating":5,"comment":"Durable and practical. Highly recommend!","date":"2026-01-14"}
  ]'::jsonb,
  image = 'https://i.ibb.co/gMNW1dvc/1769703086906.png'
WHERE id = 17;

-- 2) Validate the update
SELECT id, name, rating, total_reviews, image, reviews
FROM products
WHERE id IN (1, 2, 3, 9, 10, 13, 17);
```
