import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "banks-pink",
    name: "Banks Pink Long Sleeve",
    description: "Comfortable and stylish long sleeve shirt in pink",
    price: 49.99,
    category: "clothing",
    images: [
      {
        url: "/products/BanksPinkLongSleeve_600x.png",
        alt: "Banks Pink Long Sleeve - Front View",
        isPrimary: true,
      },
      {
        url: "/products/Banks-Pink-Folded_1_600x.png",
        alt: "Banks Pink Long Sleeve - Folded View",
      },
      {
        url: "/products/Banks-Pink-Swatch-900x_95053c66-2c36-4cc9-87f0-3abd5d718b93_600x.png",
        alt: "Banks Pink Long Sleeve - Fabric Detail",
      },
    ],
  },
  {
    id: "bkbd-215",
    name: "Graphite Collection Piece",
    description: "Premium graphite design from our exclusive collection",
    price: 89.99,
    category: "accessories",
    images: [
      {
        url: "/products/BKBD-215__Graphite_048__68353.1620269457.png",
        alt: "Graphite Collection Piece",
        isPrimary: true,
      },
    ],
  },
  {
    id: "bkbd-158",
    name: "Mocha Design",
    description: "Elegant mocha-colored piece from our signature collection",
    price: 79.99,
    category: "accessories",
    images: [
      {
        url: "/products/BKBD-158__Mocha_050__14588.1627608871.png",
        alt: "Mocha Design",
        isPrimary: true,
      },
    ],
  },
];

export const categories = ["all", "clothing", "accessories"] as const;
