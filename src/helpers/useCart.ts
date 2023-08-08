import { create } from 'zustand';
import { IState } from '../vite-env';

const useCart = create<IState>((set) => {
    return {
        products: [],
        total: 0,
        addProduct: (productId: number) => set((state) => (
          {
            ...state,
            products: [...state.products, productId]
          })),
        removeProduct: (productId: number) => set((state) => (
          {
            ...state,
            products: state.products.filter((id) => id!== productId)
          })),
        setTotal: (total: number) => set((state) => ({...state, total: total}))
    };
});

export default useCart;