export interface Product {
  id: number;
  name: string;
  price?: string;
  sizes: string[];
  colors: string[];
  status: 'available' | 'preorder' | 'appointment' | 'hidden-price';
  image?: string;
  category: 'couture' | 'ready-to-wear' | 'bridal' | 'accessories' | 'maison';
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Celestial Gown',
    price: '45,000 AED',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Ivory', 'Champagne'],
    status: 'available',
    category: 'couture'
  },
  {
    id: 2,
    name: 'Pearl Earrings',
    price: '8,500 AED',
    sizes: ['One Size'],
    colors: ['Silver', 'Gold'],
    status: 'available',
    category: 'accessories'
  },
  {
    id: 3,
    name: 'Silk Gloves',
    price: '2,200 AED',
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'White', 'Cream'],
    status: 'available',
    category: 'accessories'
  },
  {
    id: 4,
    name: 'Crystal Clutch',
    sizes: ['One Size'],
    colors: ['Black', 'Gold'],
    status: 'hidden-price',
    category: 'accessories'
  },
  {
    id: 5,
    name: 'Bridal Gown',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom'],
    colors: ['White', 'Ivory'],
    status: 'appointment',
    category: 'bridal'
  }
];
