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
<<<<<<< HEAD
    <Link
      href={`/products/${product.id}`}
      className={`
        group
        block
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
          <p className="
            p-3
            text-sm
            text-text-secondary
          ">
            No image available
          </p>
        )}
      </div>

      {/* PRODUCT INFORMATION */}
      <div className="p-3">

        {/* CATEGORY */}
        <p className="
          mb-1
          text-[10px]
          uppercase
          tracking-wider
          text-grey
        ">
          {product.category}
        </p>

        {/* PRODUCT TITLE */}
        <h3 className={`
          text-foreground
          ${compact
            ? "mb-1 line-clamp-1 text-sm"
            : "mb-1 text-base"
          }
        `}>
          {product.title}
        </h3>

        {/* PRODUCT DESCRIPTION */}
        {!compact && (
          <p className="
            mb-2
            line-clamp-2
            text-xs
            text-text-secondary
          ">
            {product.description}
=======
    <div
      className={`group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
        compact ? "h-full" : ""
      }`}
    >
      <div className="relative">
        <Link href={`/products/${product.id}`} className="block">
          {/* PRODUCT IMAGE */}
          <div
            className={`overflow-hidden bg-gray-100 ${
              compact ? "aspect-[5/3]" : "aspect-square"
            }`}
          >
            {product.thumbnail ? (
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <p className="p-3 text-sm text-gray-500">
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
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-110"
        >
          <span
            className={`text-xl ${
              isFavorite ? "text-red-500" : "text-gray-400"
            }`}
          >
            {isFavorite ? "♥" : "♡"}
          </span>
        </button>
      </div>

      {/* PRODUCT INFORMATION */}
      <Link href={`/products/${product.id}`} className="block">
        <div className="p-3">
          <p className="mb-1 text-[10px] uppercase tracking-wider text-gray-400">
            {product.category}
>>>>>>> upstream/feature/cart-and-favorites
          </p>

<<<<<<< HEAD
        {/* PRODUCT PRICE */}
        <p className={`
          font-semibold
          text-primary
          ${compact ? "text-sm" : "text-base"}
        `}>
          ${product.price.toFixed(2)}
        </p>

=======
          <h3
            className={`font-semibold text-gray-900 ${
              compact ? "mb-1 line-clamp-1 text-sm" : "mb-1 text-base"
            }`}
          >
            {product.title}
          </h3>

          {!compact && (
            <p className="mb-2 line-clamp-2 text-xs text-gray-500">
              {product.description}
            </p>
          )}

          <p
            className={`font-semibold text-gray-900 ${
              compact ? "text-sm" : "text-base"
            }`}
          >
            ${product.price.toFixed(2)}
          </p>
        </div>
      </Link>

      {/* ADD TO CART BUTTON */}
      <div className="px-3 pb-3">
        <button
          type="button"
          onClick={handleAddToCart}
          className="w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
        >
          Add to cart
        </button>
>>>>>>> upstream/feature/cart-and-favorites
      </div>
    </div>
  );
}