
import { create } from "zustand";

export const useFavoritesStore = create((set) => ({
  favorites: [],

  // Tilføj eller fjern et produkt fra favoritter
  toggleFavorite: (product) =>
    set((state) => {
      const isFavorite = state.favorites.some(
        (item) => item.id === product.id
      );

      return {
        favorites: isFavorite
          ? state.favorites.filter((item) => item.id !== product.id)
          : [...state.favorites, product],
      };
    }),

  // Fjern et produkt fra favoritter
  removeFavorite: (productId) =>
    set((state) => ({
      favorites: state.favorites.filter(
        (item) => item.id !== productId
      ),
    })),

  // Tøm favoritlisten
  clearFavorites: () => set({ favorites: [] }),
}));
