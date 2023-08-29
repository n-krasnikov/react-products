import { create } from 'zustand';

import { IProduct, ICartState } from '../vite-env';

const useBasket = create<ICartState>((set) => {
    return {
        products: [],
        total: 0,
        addProduct: (product: IProduct) => set((state) => (
          {
            ...state,
            total: state.total + product.price,
            products: [
              ...state.products, 
              { 
                id: product.id,
                images: product.images,
                title: product.title,
                description: product.description,
                price: product.price,
                count: 1,
              }
            ],
          })),
        removeProduct: (productId: number) => set(state => {
          const item = state.products.find(item => item.id === productId);
          if (!item) return {...state};
          return {
            ...state,
            products: state.products.filter(item => item.id!== productId),
            total: state.total - item.price,
          };
        }),
        countInc: (productId: number) => set(state => {
          const item = state.products.find(item => item.id === productId);
          if (!item) return {...state};
          return {
            ...state,
            products: state.products.map(product => (product.id === item.id) 
              ? { ...product, count: product.count + 1 }
              : { ...product }),
            total: state.total + item.price,
          };
        }),
        countDec: (productId: number) => set(state => {
          const item = state.products.find(item => item.id === productId);
          if (!item) return {...state};
          return {
            ...state,
            products: state.products.map(product => (product.id === item.id) 
              ? { ...product, count: product.count - 1 }
              : { ...product }),
            total: state.total - item.price,
          };
        }),
    };
});

export default useBasket;
