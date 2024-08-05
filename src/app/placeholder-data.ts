export interface Product {
  id: string;
  name: string;
  company: string;
  description: string;
  price: number;
  discount: number;
  thumbnail: string;
}

export const products = [
  {
    id: '1',
    name: 'Fall Limited Edition Sneakers',
    company: 'Sneaker company',
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 250,
    discount: 0.5,
    thumbnail: 'products/thumbnails/image-product-1-thumbnail.jpg',
  },
];
