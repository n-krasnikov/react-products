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

export interface IState {
    products: number[],
    total: number,
    addProduct(productId: number): void,
    removeProduct(productId: number): void,
    setTotal(total: number): void,
}