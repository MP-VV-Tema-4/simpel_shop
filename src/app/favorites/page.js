"use client";

import Link from "next/link";
import { useFavoritesStore } from "../store/FavoritesStore";
import ProductCard from "../components/products/ProductCard";

export default function FavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <main className="mx-auto min-h-[400px] max-w-7xl px-6 py-12">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">
        My Favorites
      </h1>

      <p className="mb-8 text-gray-500">
        Your favorite products in one place.
      </p>

      {favorites.length === 0 ? (
        <div className="py-16 text-center">
          <p className="mb-6 text-lg text-gray-600">
            You have no favorite products yet.
          </p>

          <Link
            href="/products"
            className="inline-block rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-700"
          >
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}