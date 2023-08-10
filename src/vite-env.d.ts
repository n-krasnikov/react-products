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
    products: ICartItem[],
    total: number,
    addProduct(id: number): void,
    removeProduct(id: number): void,
    setTotal(total: number): void,
    countInc(id: number): void,
    countDec(id: number): void,
}

interface ICartItem {
    id: number,
    count: number,
}