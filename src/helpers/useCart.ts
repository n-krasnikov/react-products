import { create } from 'zustand';

const useCart = create((set) => {
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