
"use client";

import { useState } from "react";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";

export default function ProductCatalog({ products }) {
  const highestPrice = Math.ceil(
    Math.max(0, ...products.map((product) => product.price))
  );

  const [maxPrice, setMaxPrice] = useState(highestPrice);
  const [minRating, setMinRating] = useState("0");
  const [sortBy, setSortBy] = useState("default");

  let filteredProducts = products.filter(
    (product) =>
      product.price <= maxPrice &&
      product.rating >= Number(minRating)
  );

  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "name") {
    filteredProducts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  function resetFilters() {
    setMaxPrice(highestPrice);
    setMinRating("0");
    setSortBy("default");
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_minmax(0,1fr)]">
      <ProductFilters
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        highestPrice={highestPrice}
        minRating={minRating}
        setMinRating={setMinRating}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onReset={resetFilters}
      />

      <section>
        <p className="mb-5 text-sm text-gray-500">
          Showing {filteredProducts.length} products
        </p>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="py-10 text-gray-500">
            No products match your filters.
          </p>
        )}
      </section>
    </div>
  );
}
