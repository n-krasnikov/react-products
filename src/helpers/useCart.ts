import { create } from 'zustand';

import { IState } from '../vite-env';

const useCart = create<IState>((set) => {
    return {
        products: [],
        total: 0,
        addProduct: (productId: number) => set((state) => (
          {
            ...state,
            products: [...state.products, { id: productId, count: 1 }]
          })),
        removeProduct: (productId: number) => set((state) => (
          {
            ...state,
            products: state.products.filter((item) => item.id!== productId)
          })),
        setTotal: (total: number) => set((state) => ({...state, total: total})),
        countInc: (productId: number) => set((state) => (
          {
            ...state,
            products: state.products.map((item) => 
              (item.id === productId)
              ? {...item, count: item.count + 1 }
              : item
            )
          }
        )),
        countDec: (productId: number) => set((state) => (
          {
            ...state,
            products: state.products.map((item) => 
              (item.id === productId)
              ? {...item, count: item.count - 1 }
              : item
            )
          }
        )),
    };
});

export default useCart;
