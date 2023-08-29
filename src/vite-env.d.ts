/// <reference types="vite/client" />

export const BASE_URL = 'https://dummyjson.com/';

export interface IGetAllResponse {
  products: IProduct[],
  total: number,
  skip: number,
  limit: number,
}

export interface IProduct {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[],
}

export interface ICartState {
  products: IBasketItem[],
  total: number,
  addProduct(product: IProduct): void,
  removeProduct(id: number): void,
  countInc(id: number): void,
  countDec(id: number): void,
}

interface IBasketItem {
  id: number;
  images: string[];
  title: string;
  description: string;
  count: number;
  price: number;
}
