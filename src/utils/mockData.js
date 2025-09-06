// Mock data for development and demo purposes
export const mockProducts = [
  {
    id: '1',
    title: 'Bamboo Wireless Charger',
    description: 'Eco-friendly wireless charging pad made from sustainable bamboo. Compatible with all Qi-enabled devices.',
    price: 29.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    seller: {
      id: '2',
      username: 'ecotech_store',
      email: 'store@ecotech.com'
    }
  },
  {
    id: '2',
    title: 'Organic Cotton T-Shirt',
    description: 'Soft, comfortable t-shirt made from 100% organic cotton. Available in multiple colors and sizes.',
    price: 24.99,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    seller: {
      id: '3',
      username: 'green_apparel',
      email: 'hello@greenapparel.com'
    }
  },
  {
    id: '3',
    title: 'Reusable Stainless Steel Water Bottle',
    description: 'Double-walled insulated water bottle that keeps drinks cold for 24h and hot for 12h. BPA-free and eco-friendly.',
    price: 19.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
    seller: {
      id: '4',
      username: 'hydro_life',
      email: 'support@hydrolife.com'
    }
  },
  {
    id: '4',
    title: 'Solar-Powered LED Garden Lights',
    description: 'Beautiful solar garden lights that automatically turn on at dusk. Waterproof and energy-efficient.',
    price: 34.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    seller: {
      id: '5',
      username: 'solar_garden',
      email: 'info@solargarden.com'
    }
  },
  {
    id: '5',
    title: 'Recycled Plastic Backpack',
    description: 'Durable backpack made from recycled ocean plastic. Perfect for daily commuting and outdoor adventures.',
    price: 49.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    seller: {
      id: '6',
      username: 'ocean_gear',
      email: 'contact@oceangear.com'
    }
  },
  {
    id: '6',
    title: 'Biodegradable Phone Case',
    description: 'Protective phone case made from biodegradable materials. Stylish protection that doesn\'t harm the planet.',
    price: 15.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop',
    seller: {
      id: '7',
      username: 'green_tech',
      email: 'hello@greentech.com'
    }
  }
];

export const mockCategories = [
  { value: 'electronics', label: 'Electronics' },
  { value: 'clothing', label: 'Clothing' },
  { value: 'home', label: 'Home & Garden' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'beauty', label: 'Beauty & Personal Care' },
  { value: 'sports', label: 'Sports & Outdoor' },
];

export const mockUser = {
  id: '1',
  username: 'demo_user',
  email: 'demo@ecofinds.com',
  avatar: null
};

export const mockCart = {
  items: [
    {
      id: '1',
      product: mockProducts[0],
      quantity: 1
    },
    {
      id: '2',
      product: mockProducts[2],
      quantity: 2
    }
  ],
  total: 69.97
};

export const mockOrders = [
  {
    id: '1',
    date: '2024-01-15',
    total: 54.98,
    status: 'delivered',
    items: [
      { product: mockProducts[0], quantity: 1, price: 29.99 },
      { product: mockProducts[1], quantity: 1, price: 24.99 }
    ]
  },
  {
    id: '2',
    date: '2024-01-10',
    total: 19.99,
    status: 'shipped',
    items: [
      { product: mockProducts[2], quantity: 1, price: 19.99 }
    ]
  }
];