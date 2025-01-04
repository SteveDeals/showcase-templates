import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'recycled-relax-pant',
    name: 'The Recycled Relax Fit Pant',
    description:
      'A versatile style featuring an elasticated pull on style with a wider leg. Can be dressed up or down with tanks and layers, even a denim jacket for casual occasions.',
    price: 89.99,
    category: 'clothing',
    images: [
      {
        url: '/products/BIRDK-1629__Deeplagoon_089__43492.1643781040.png',
        alt: 'Recycled Relax Fit Pant - Deep Lagoon',
        isPrimary: true,
      },
    ],
    features: [
      'True fit, order your usual size',
      'Pull on wide leg style pant',
      'Elasticated waist',
      'Cropped leg length',
      'Soft, stretchy and flowy feel to fabric',
      '65% recycled 31% polyester 4% spandex',
      'Designed in Australia',
      'Made in Australia',
    ],
    variants: [
      { name: 'size', value: 'S' },
      { name: 'size', value: 'M' },
      { name: 'size', value: 'L' },
      { name: 'color', value: 'Deep Lagoon' },
    ],
  },
  {
    id: 'ponte-pencil-skirt',
    name: 'Ponte Knee Length Pencil Skirt',
    description:
      'Part of a range of affordable office basics for the busy career girl. This knee length ponte skirt gives firm support with just the right amount of stretch to be very flattering to wear.',
    price: 69.99,
    category: 'clothing',
    images: [
      {
        url: '/products/BIRDK-48-SP__Spot_090__94171.1620185722.png',
        alt: 'Ponte Knee Length Pencil Skirt',
        isPrimary: true,
      },
    ],
    features: [
      'True fit, order your usual size',
      'Wide waistband',
      'Straight skirt',
      'Smooth stretchy ponte fabric',
      'Waist to hem approx 65cm (Size 10)',
      'Polyester elastane',
      'Cold hand wash drip dry',
      'Made in Australia',
    ],
    variants: [
      { name: 'size', value: '8' },
      { name: 'size', value: '10' },
      { name: 'size', value: '12' },
      { name: 'size', value: '14' },
    ],
  },
  {
    id: 'monarch-shirt',
    name: 'Monarch Long Sleeve Shirt',
    description:
      'Regal and timeless, subtle red on white geometric, with the tiniest hint of navy. Australian Made Long Sleeve Shirt with Spread Collar.',
    price: 129.99,
    category: 'clothing',
    images: [
      {
        url: '/products/Monarch-Logo_52fa8205-1549-42f5-a5ee-fe0908dc988d_600x.png',
        alt: 'Monarch Long Sleeve Shirt',
        isPrimary: true,
      },
    ],
    features: [
      'Classic Fit',
      'Cotton',
      'Cold wash',
      'Do not tumble dry',
      'Made in Australia',
    ],
    variants: [
      { name: 'size', value: 'S' },
      { name: 'size', value: 'M' },
      { name: 'size', value: 'L' },
      { name: 'color', value: 'White/Red' },
    ],
  },
  {
    id: 'ponte-beige-skirt',
    name: 'Ponte Knee Length Pencil Skirt - Beige',
    description:
      'Part of a range of affordable office basics for the busy career girl. This knee length ponte skirt gives firm support with just the right amount of stretch to be very flattering to wear.',
    price: 69.99,
    category: 'clothing',
    images: [
      {
        url: '/products/WET-9237__Beige_009__43584.1620185714.png',
        alt: 'Ponte Knee Length Pencil Skirt in Beige',
        isPrimary: true,
      },
    ],
    features: [
      'True fit, order your usual size',
      'Wide waistband',
      'Straight skirt',
      'Smooth stretchy ponte fabric',
      'Waist to hem approx 65cm (Size 10)',
      'Polyester elastane',
      'Cold hand wash drip dry',
      'Made in Australia',
    ],
    variants: [
      { name: 'size', value: '8' },
      { name: 'size', value: '10' },
      { name: 'size', value: '12' },
      { name: 'size', value: '14' },
      { name: 'color', value: 'Beige' },
    ],
  },
  // Keeping the existing products
  {
    id: 'banks-pink',
    name: 'Banks Pink Long Sleeve',
    description: 'Comfortable and stylish long sleeve shirt in pink',
    price: 49.99,
    category: 'clothing',
    images: [
      {
        url: '/products/BanksPinkLongSleeve_600x.png',
        alt: 'Banks Pink Long Sleeve - Front View',
        isPrimary: true,
      },
      {
        url: '/products/Banks-Pink-Folded_1_600x.png',
        alt: 'Banks Pink Long Sleeve - Folded View',
      },
      {
        url: '/products/Banks-Pink-Swatch-900x_95053c66-2c36-4cc9-87f0-3abd5d718b93_600x.png',
        alt: 'Banks Pink Long Sleeve - Fabric Detail',
      },
    ],
    variants: [
      { name: 'size', value: 'XS' },
      { name: 'size', value: 'S' },
      { name: 'size', value: 'M' },
      { name: 'size', value: 'L' },
      { name: 'color', value: 'Pink' },
      { name: 'color', value: 'Blue' },
      { name: 'color', value: 'White' },
    ],
  },
  {
    id: 'bkbd-215',
    name: 'Graphite Collection Piece',
    description: 'Premium graphite design from our exclusive collection',
    price: 89.99,
    category: 'accessories',
    images: [
      {
        url: '/products/BKBD-215__Graphite_048__68353.1620269457.png',
        alt: 'Graphite Collection Piece',
        isPrimary: true,
      },
    ],
    variants: [
      { name: 'size', value: 'One Size' },
      { name: 'color', value: 'Graphite' },
    ],
  },
  {
    id: 'bkbd-158',
    name: 'Mocha Design',
    description: 'Elegant mocha-colored piece from our signature collection',
    price: 79.99,
    category: 'accessories',
    images: [
      {
        url: '/products/BKBD-158__Mocha_050__14588.1627608871.png',
        alt: 'Mocha Design',
        isPrimary: true,
      },
    ],
    variants: [
      { name: 'size', value: 'One Size' },
      { name: 'color', value: 'Mocha' },
    ],
  },
];

// Updated categories to match Everlane's structure
export const categories = [
  'all',
  'new-arrivals',
  'clothing',
  'shoes',
  'accessories',
  'sale',
] as const;
