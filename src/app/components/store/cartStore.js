
import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  // Tilføj produkt til kurven
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }),

  // Fjern produkt fra kurven
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  // Opdater antal af et produkt
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart:
        quantity <= 0
          ? state.cart.filter((item) => item.id !== productId)
          : state.cart.map((item) =>
              item.id === productId
                ? { ...item, quantity }
                : item
            ),
    })),

  // Tøm hele kurven
  clearCart: () => set({ cart: [] }),
}));
