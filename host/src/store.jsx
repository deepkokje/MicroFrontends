import { create } from "zustand";

export const useCartStore = create((set) => ({
cart:[],
addProducts: product => {
    set(state => {
        return {
            ...state,
            cart:[...state.cart, product]
        }
    })
},
clearCart: () => set((state) =>  state.cart = [])
}));
