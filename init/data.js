let sampleListing = [

  // 🏔 MOUNTAINS (4)
  {
    title: "Himalayan Cedar Cottage",
    description: "A cozy wooden cottage surrounded by cedar forests and snow-capped peaks.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
    price: 2200,
    location: "Manali, Himachal Pradesh",
    country: "India",
    category: "Mountains",
    owner: "695c7efb705fe1ea7f55d897"
  },
  {
    title: "Cloud View Mountain House",
    description: "Beautiful mountain house offering breathtaking cloud and valley views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
    price: 2600,
    location: "Mukteshwar, Uttarakhand",
    country: "India",
    category: "Mountains",
    owner: "695c7efb705fe1ea7f55d897"
  },
  {
    title: "Pine Ridge Retreat",
    description: "Peaceful retreat nestled among pine trees, perfect for nature lovers.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b" },
    price: 2400,
    location: "Dalhousie, Himachal Pradesh",
    country: "India",
    category: "Mountains",
    owner: "695c7efb705fe1ea7f55d897"
  },
  {
    title: "Alpine Stone Chalet",
    description: "Charming stone chalet with panoramic alpine mountain views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
    price: 3000,
    location: "Gulmarg, Jammu & Kashmir",
    country: "India",
    category: "Mountains",
    owner: "695c7efb705fe1ea7f55d897"
  },

  // 🏊 POOLS (3)
  {
    title: "Azure Poolside Villa",
    description: "Luxury villa with a private infinity pool and serene surroundings.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1576675784432-994941412c16" },
    price: 4200,
    location: "Lonavala, Maharashtra",
    country: "India",
    category: "Pools",
    owner: "695c7efb705fe1ea7f55d897"
  },
  {
    title: "Sunset Lagoon Retreat",
    description: "Elegant pool retreat offering sunset views and complete privacy.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9" },
    price: 4800,
    location: "Alibaug, Maharashtra",
    country: "India",
    category: "Pools",
    owner: "695c7efb705fe1ea7f55d897"
  },
  {
    title: "Palm Breeze Pool Villa",
    description: "Modern villa with tropical palms and a crystal-clear private pool.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6" },
    price: 4500,
    location: "Calangute, Goa",
    country: "India",
    category: "Pools",
    owner: "695c7efb705fe1ea7f55d897"
  },

  // ❄ ARCTIC (2)
  {
    title: "Aurora Glass Igloo",
    description: "Luxury glass igloo offering breathtaking views of the northern lights.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
    price: 6800,
    location: "Lapland",
    country: "Finland",
    category: "Arctic",
    owner: "695c7efb705fe1ea7f55d897"
  },
  {
    title: "Snow Drift Arctic Cabin",
    description: "Remote wooden cabin surrounded by snowfields and frozen lakes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66" },
    price: 6200,
    location: "Tromsø",
    country: "Norway",
    category: "Arctic",
    owner: "695c7efb705fe1ea7f55d897"
  },

  // 🌾 FARMS (3)
  {
    title: "Green Meadows Farmstay",
    description: "Peaceful farmstay surrounded by lush fields and fresh countryside air.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef" },
    price: 1800,
    location: "Nashik, Maharashtra",
    country: "India",
    category: "Farms",
    owner: "695c7efb705fe1ea7f55d897"
  },
  {
    title: "Sunny Acres Organic Farm",
    description: "Eco-friendly farm experience with organic food and village life.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
    price: 1600,
    location: "Coorg, Karnataka",
    country: "India",
    category: "Farms",
    owner: "695c7efb705fe1ea7f55d897"
  },
  {
    title: "Riverbend Rustic Farmhouse",
    description: "Traditional farmhouse near a river, perfect for a relaxing rural escape.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1599423300746-b62533397364" },
    price: 2000,
    location: "Palghar, Maharashtra",
    country: "India",
    category: "Farms",
    owner: "695c7efb705fe1ea7f55d897"
  },

  // 🏙 ICONIC CITIES (2)
  {
    title: "Metropolitan Skyline Loft",
    description: "Stylish city loft located in the heart of the iconic urban skyline.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1" },
    price: 3600,
    location: "Connaught Place, Delhi",
    country: "India",
    category: "Iconic cities",
    owner: "695c7efb705fe1ea7f55d897"
  },
  {
    title: "Heritage City View Apartment",
    description: "Elegant apartment offering panoramic views of a historic iconic city.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb" },
    price: 3400,
    location: "Marine Drive, Mumbai",
    country: "India",
    category: "Iconic cities",
    owner: "695c7efb705fe1ea7f55d897"
  },

  // 🛏 ROOMS (3)
  {
    title: "Minimal Urban Room",
    description: "Clean and comfortable private room in the heart of the city.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af" },
    price: 1100,
    location: "Indiranagar, Bengaluru",
    country: "India",
    category: "Rooms",
    owner: "695c7efb705fe1ea7f55d897"
  },
  {
    title: "Cozy Studio Room",
    description: "Warm studio-style room ideal for short stays and remote work.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" },
    price: 1300,
    location: "Baner, Pune",
    country: "India",
    category: "Rooms",
    owner: "695c7efb705fe1ea7f55d897"
  },
  {
    title: "Sunlit Private Room",
    description: "Bright room with natural light and modern interiors.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
    price: 1400,
    location: "Salt Lake, Kolkata",
    country: "India",
    category: "Rooms",
    owner: "695c7efb705fe1ea7f55d897"
  },

  // 🏡 VILLAS (2)
  {
    title: "Emerald Hills Villa",
    description: "Luxury hillside villa with panoramic views and private garden.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9" },
    price: 5200,
    location: "Mahabaleshwar, Maharashtra",
    country: "India",
    category: "Villas",
    owner: "695c7efb705fe1ea7f55d897"
  },
  {
    title: "Serene Palm Villa",
    description: "Elegant villa surrounded by palm trees, perfect for family stays.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6" },
    price: 5600,
    location: "Calangute, Goa",
    country: "India",
    category: "Villas",
    owner: "695c7efb705fe1ea7f55d897"
  },

  // 🏨 HOTELS (3)
  {
    title: "Grand Central Hotel",
    description: "Premium hotel offering modern comfort in a central location.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
    price: 4200,
    location: "MG Road, Bengaluru",
    country: "India",
    category: "Hotels",
    owner: "695c7efb705fe1ea7f55d897"
  },
  {
    title: "Royal Heritage Hotel",
    description: "Classic heritage hotel with royal interiors and fine dining.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" },
    price: 4800,
    location: "Udaipur, Rajasthan",
    country: "India",
    category: "Hotels",
    owner: "695c7efb705fe1ea7f55d897"
  },
  {
    title: "Skyline Business Hotel",
    description: "Contemporary business hotel with skyline views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1551776235-dde6d4829808" },
    price: 3900,
    location: "Cyber City, Gurugram",
    country: "India",
    category: "Hotels",
    owner: "695c7efb705fe1ea7f55d897"
  },

  // 🏖 BEACHES (2)
  {
    title: "Golden Sands Beach Cottage",
    description: "Charming beach cottage just steps from the ocean.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    price: 3100,
    location: "Candolim Beach, Goa",
    country: "India",
    category: "Beaches",
    owner: "695c7efb705fe1ea7f55d897"
  },
  {
    title: "Blue Horizon Seafront Stay",
    description: "Modern seafront stay with uninterrupted ocean views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
    price: 3600,
    location: "Kovalam Beach, Kerala",
    country: "India",
    category: "Beaches",
    owner: "695c7efb705fe1ea7f55d897"
  }

];

module.exports = { data: sampleListing };
