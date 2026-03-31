import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Import products from the data file
const products = [
  // BOOTS Category
  {
    id: 1,
    name: "Liberty Warrior -Jungle Shoes",
    category: "BOOTS",
    price: 1750,
    image: "https://i.ibb.co/PsFHHfL4/1769704977254.png",
    rating: 4.7,
    totalReviews: 124,
    description: "Premium military-grade combat boots designed for extreme terrains. Features reinforced toe caps, ankle support, and slip-resistant soles. Water-resistant leather with breathable mesh panels.",
    sizes: [6, 7, 8, 9, 10],
    images: [
      "https://i.ibb.co/PsFHHfL4/1769704977254.png",
      "https://i.ibb.co/xSBRf4H0/1769709351691.png",
      "https://i.ibb.co/0RD3hSZW/1769709577080.png"
    ],
    reviews: [
      { name: "Rajesh Kumar", rating: 5, comment: "Excellent quality boots! Very comfortable even after 8 hours of use.", date: "2026-01-15" },
      { name: "Amit Singh", rating: 4.5, comment: "Great durability and ankle support. Worth every penny.", date: "2026-01-10" },
      { name: "Vikram Sharma", rating: 5, comment: "Best tactical boots I've owned. Highly recommend!", date: "2026-01-05" }
    ]
  },
  {
    id: 2,
    name: "Military Jungle Boots - Olive Green",
    category: "BOOTS",
    price: 700,
    image: "https://i.ibb.co/xqbt8sD1/IMG-20260124-WA0007.jpg",
    rating: 4.5,
    totalReviews: 121,
    description: "Specialized jungle warfare boots with superior water drainage and quick-dry technology. Reinforced with Cordura fabric for maximum durability in wet conditions.",
    sizes: [6, 7, 8, 9, 10],
    images: [
      "https://i.ibb.co/xqbt8sD1/IMG-20260124-WA0007.jpg",
      "https://i.ibb.co/bMYshfg2/1769691995325.png",
      "https://i.ibb.co/ZRc1HCst/1769692102543.png"
    ],
    reviews: [
      { name: "Suresh Patel", rating: 5, comment: "Perfect for monsoon treks. Water drains out quickly!", date: "2026-01-20" },
      { name: "Arjun Reddy", rating: 4, comment: "Good quality but runs slightly large. Order half size down.", date: "2026-01-12" }
    ]
  },
  {
    id: 3,
    name: "Short DMS Boots - Black",
    category: "BOOTS",
    price: 650,
    image: "https://i.ibb.co/gMcQB2Nh/IMG-20260124-WA0012.jpg",
    rating: 4.6,
    totalReviews: 145,
    description: "Elite-level tactical boots with advanced shock absorption and steel toe protection. Designed for special operations with silent grip soles and reinforced stitching.",
    sizes: [6, 7, 8, 9, 10],
    images: [
      "https://i.ibb.co/0Rsdv2xc/1769705175359.png",
      "https://i.ibb.co/MkSq39RN/1769708899584.png",
      "https://i.ibb.co/Z1V8mq8T/1769692932181.png"
    ],
    reviews: [
      { name: "Captain Verma", rating: 5, comment: "Professional grade equipment. Exceeded expectations!", date: "2026-01-18" },
      { name: "Rahul Gupta", rating: 5, comment: "Best investment for tactical operations. Superb quality.", date: "2026-01-08" },
      { name: "Deepak Joshi", rating: 4.5, comment: "Very sturdy and comfortable. Great for long missions.", date: "2026-01-03" }
    ]
  },
  //TACTICAL GEARS
  {
    id: 9,
    name: "Tactical Army Gloves",
    category: "TACTICAL GEARS",
    price: 499,
    image: "https://i.ibb.co/KxLGB987/IMG-20260124-WA0000.jpg",
    rating: 4.6,
    totalReviews: 115,
    description: "Tactical army gloves are engineered for high-intensity environments, featuring impact-resistant knuckle guards and reinforced palms for superior protection and grip. They utilize breathable, moisture-wicking materials and touchscreen-compatible fingertips to ensure maximum dexterity and functionality in the field. ",
    images: [
      "https://i.ibb.co/67THpzkj/1769693605235.png",
      "https://i.ibb.co/wZr8dfYM/1769711469644.png",
      "https://i.ibb.co/Q3wHyKsV/1769711637567.png"
    ],
    reviews: [
      { name: "Major Kapoor", rating: 5, comment: "Excellent modularity. Fits all my gear perfectly!", date: "2026-01-22" },
      { name: "Rohit Chauhan", rating: 4.5, comment: "Very well constructed. Great value for money.", date: "2026-01-16" },
      { name: "Akash Jain", rating: 5, comment: "Professional quality vest. Highly recommended!", date: "2026-01-10" }
    ]
  },
  {
    id: 10,
    name: "Cold Army Survival Gloves",
    category: "TACTICAL GEARS",
    price: 1200,
    image: "https://i.ibb.co/0phQmfX3/IMG-20260124-WA0004.jpg",
    rating: 4.5,
    totalReviews: 121,
    description: "These Cold Army Survival Gloves are designed for extreme thermal protection, featuring heavy-duty insulation and a long, adjustable gauntlet cuff to seal out snow and freezing air. They combine a rugged, water-resistant exterior with reinforced textured palms for a secure grip in harsh, icy conditions.",
    images: [
      "https://i.ibb.co/GQvy87ht/IMG-20260124-WA0003.jpg",
      "https://i.ibb.co/PZvr6z6z/1769694387952.png",
      "https://i.ibb.co/8nGRQJPk/1769694432519.png"
    ],
    reviews: [
      { name: "Sunil Kumar", rating: 5, comment: "Spacious and durable. Carried 15kg easily!", date: "2026-01-18" },
      { name: "Dinesh Patel", rating: 4, comment: "Good backpack but straps could be more padded.", date: "2026-01-12" }
    ]
  },

  // ARMY PATAK Category
  {
    id: 13,
    name: "Army Patak -Olive Green",
    category: "PATAK",
    price: 250,
    image: "https://i.ibb.co/qMPs8XMj/1769700881062.png",
    rating: 4.6,
    totalReviews: 123,
    description: "An army patka (shemagh) is a versatile tactical headwrap designed to protect the head, face, and neck from sun, wind, and debris. Made from breathable cotton, it features traditional woven patterns and can be worn as a head scarf, face mask, or neck gaiter in diverse outdoor environments.",
    images: [
      "https://i.ibb.co/qMPs8XMj/1769700881062.png",
      "https://i.ibb.co/j92PkKH9/1769700940680.png",
      "https://i.ibb.co/mFXLtwpz/1769700991979.png"
    ],
    reviews: [
      { name: "Vikas Rao", rating: 5, comment: "Authentic quality tags. Engraving is perfect!", date: "2026-01-23" },
      { name: "Sachin Verma", rating: 4.5, comment: "Good quality and fast delivery. Satisfied!", date: "2026-01-17" },
      { name: "Ramesh Singh", rating: 5, comment: "Exactly as described. Great product!", date: "2026-01-13" }
    ]
  },

  //HELMET Category
  {
    id: 17,
    name: "Tactical Helmet- Olive Green",
    category: "HELMET",
    price: 1650,
    image: "https://i.ibb.co/gMNW1dvc/1769703086906.png",
    rating: 4.8,
    totalReviews: 155,
    description: "A tactical army helmet is a high-performance ballistic headpiece designed to provide impact protection while supporting mission-essential gear like night vision and communication headsets. It features an adjustable suspension system and interior padding for comfort, alongside integrated side rails and a front shroud for modular attachments. ",
    images: [
      "https://i.ibb.co/gMNW1dvc/1769703086906.png",
      "https://i.ibb.co/mxtq7rP/1769703149171.png",
      "https://i.ibb.co/Qjzfkzjg/1769703231382.png"
    ],
    reviews: [
      { name: "Deepak Saxena", rating: 5, comment: "Most comfortable tactical pants ever! Great fit.", date: "2026-01-25" },
      { name: "Yogesh Patel", rating: 4.5, comment: "Excellent quality and lots of pockets.", date: "2026-01-19" },
      { name: "Mukesh Kumar", rating: 5, comment: "Durable and practical. Highly recommend!", date: "2026-01-14" }
    ]
  },
];

const migrateProducts = async () => {
  try {
    console.log('Starting product migration...');
    console.log(`Total products to migrate: ${products.length}`);

    // Prepare products for insertion - using only existing columns in the schema
    const productsToInsert = products.map(product => ({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      images: product.images,
      sizes: product.sizes,
      stock_quantity: 100, // Default stock
      is_active: true,
      featured: false,
    }));

    // Insert products in batches of 10
    const batchSize = 10;
    for (let i = 0; i < productsToInsert.length; i += batchSize) {
      const batch = productsToInsert.slice(i, i + batchSize);
      console.log(`Inserting batch ${Math.floor(i / batchSize) + 1}...`);

      const { data, error } = await supabase
        .from('products')
        .insert(batch)
        .select();

      if (error) {
        console.error(`Error inserting batch ${Math.floor(i / batchSize) + 1}:`, error);
        throw error;
      }

      console.log(`✓ Inserted ${batch.length} products`);
    }

    console.log('\n✓ Migration completed successfully!');
    console.log(`Total products migrated: ${productsToInsert.length}`);
    console.log('\n⚠️  NEXT STEPS:');
    console.log('1. Run the SQL update in your Supabase dashboard to add rating, total_reviews, reviews, and image columns');
    console.log('2. Copy the SQL from update-products-schema.sql file and execute in Supabase SQL Editor');
    console.log('3. Then update each product with ratings and reviews data from the local data file');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
};

// Run the migration
migrateProducts();
