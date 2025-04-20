export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'korean' | 'chinese' | 'japanese' | 'desi' | 'neutral';
  imageUrl: string;
  tag?: 'New Drop' | 'Trending' | 'Limited Edition' | 'Best Seller';
  description: string;
  sizes: string[];
}

export interface Category {
  id: number;
  name: string;
  slug: 'korean' | 'chinese' | 'japanese' | 'desi' | 'neutral';
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  rating: number;
}

export interface SizeRecommendation {
  height: number;
  weight: number;
  age: number;
  gender: 'male' | 'female' | 'other';
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}