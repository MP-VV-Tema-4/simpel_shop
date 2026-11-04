
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product, quantity = 1) =>
        set((state) => {
          const amount = Math.max(
            1,
            Math.floor(Number(quantity) || 1)
          );

          const existingProduct = state.cart.find(
            (item) => item.id === product.id
          );

          if (existingProduct) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? {
                      ...item,
                      quantity: (item.quantity || 0) + amount,
                    }
                  : item
              ),
            };
          }

          return {
            cart: [
              ...state.cart,
              { ...product, quantity: amount },
            ],
          };
        }),

      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) => item.id !== productId
          ),
        })),

      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cart:
            quantity <= 0
              ? state.cart.filter(
                  (item) => item.id !== productId
                )
              : state.cart.map((item) =>
                  item.id === productId
                    ? { ...item, quantity }
                    : item
                ),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);
