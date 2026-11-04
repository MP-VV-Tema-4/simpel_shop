
"use client";

import Link from "next/link";
import { useCartStore } from "../../store/cartStore";
import { useFavoritesStore } from "../../store/FavoritesStore";

export default function ProductCard({ product, compact = false }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const toggleFavorite = useFavoritesStore(
    (state) => state.toggleFavorite
  );

  const isFavorite = useFavoritesStore((state) =>
    state.favorites.some((item) => item.id === product.id)
  );

  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();
    addToCart(product);
  };

  const handleToggleFavorite = (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleFavorite(product);
  };

  return (
    <div
      className={`
        group
        overflow-hidden
        rounded-xl
        bg-background-card
        border border-border
        shadow-sm
        transition-all duration-200
        hover:-translate-y-1
        hover:shadow-lg
        ${compact ? "h-full" : ""}
      `}
    >
      <div className="relative">
        <Link href={`/products/${product.id}`} className="block">
          {/* PRODUCT IMAGE */}
          <div
            className={`
              overflow-hidden
              bg-background-secondary
              ${compact ? "aspect-[5/3]" : "aspect-square"}
            `}
          >
            {product.thumbnail ? (
              <img
                src={product.thumbnail}
                alt={product.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform duration-300
                  group-hover:scale-105
                "
              />
            ) : (
              <p className="p-3 text-sm text-text-secondary">
                No image available
              </p>
            )}
          </div>
        </Link>

        {/* FAVORITE BUTTON */}
        <button
          type="button"
          onClick={handleToggleFavorite}
          aria-label={
            isFavorite ? "Remove from favorites" : "Add to favorites"
          }
          className="
            absolute right-3 top-3 z-10
            flex h-9 w-9 items-center justify-center
            rounded-full bg-background-card shadow-md
            transition-transform hover:scale-110
          "
        >
          <span
            className={`text-xl ${
              isFavorite ? "text-red-500" : "text-text-secondary"
            }`}
          >
            {isFavorite ? "♥" : "♡"}
          </span>
        </button>
      </div>

      {/* PRODUCT INFORMATION */}
      <Link href={`/products/${product.id}`} className="block">
        <div className="p-3">
          <p className="mb-1 text-[10px] uppercase tracking-wider text-text-secondary">
            {product.category}
          </p>

          <h3
            className={`
              font-semibold text-foreground
              ${
                compact
                  ? "mb-1 line-clamp-1 text-sm"
                  : "mb-1 text-base"
              }
            `}
          >
            {product.title}
          </h3>

          {!compact && (
            <p className="mb-2 line-clamp-2 text-xs text-text-secondary">
              {product.description}
            </p>
          )}
        </div>
      </Link>

      {/* PRODUCT PRICE AND ADD TO CART */}
      <div className="px-3 pb-3">
        <p
          className={`
            mb-2 font-semibold text-primary
            ${compact ? "text-sm" : "text-base"}
          `}
        >
          ${product.price.toFixed(2)}
        </p>

        <button
          type="button"
          onClick={handleAddToCart}
          className="
            w-full rounded-lg
            bg-foreground px-4 py-2
            text-sm font-semibold text-background
            transition-colors hover:opacity-80
          "
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
