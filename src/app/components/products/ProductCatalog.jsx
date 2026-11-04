
"use client";

import { useState } from "react";
import Fuse from "fuse.js";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";

export default function ProductCatalog({
  products,
  query = "",
  children,
}) {
  const highestPrice = Math.ceil(
    Math.max(0, ...products.map((product) => product.price))
  );

  const [maxPrice, setMaxPrice] = useState(highestPrice);
  const [minRating, setMinRating] = useState("0");
  const [sortBy, setSortBy] = useState("default");

  const searchTerm = query.trim();

  const fuse = new Fuse(products, {
    keys: ["title", "description", "category"],
    threshold: 0.4,
    ignoreLocation: true,
  });

  const exactMatch = products.some(
    (product) =>
      product.title.toLowerCase() === searchTerm.toLowerCase()
  );

  const searchResults = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : products;

  let filteredProducts = searchResults.filter(
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
    <div className="
      grid
      grid-cols-1
      gap-8
      md:grid-cols-[220px_minmax(0,1fr)]
    ">
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

      <section className="min-w-0">

        {children}

        {searchTerm && !exactMatch && filteredProducts.length > 0 && (
          <p className="mb-3 text-sm text-text-secondary">
            No exact matches for "{query}" — here are some products
            you might mean:
          </p>
        )}

        <p className="mb-5 text-sm text-text-secondary">
          Showing {filteredProducts.length} products
        </p>

        {filteredProducts.length > 0 ? (
          <div className="
            grid
            grid-cols-2
            gap-5
            lg:grid-cols-3
            xl:grid-cols-4
          ">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <p className="py-10 text-text-secondary">
            No products match your search or filters.
          </p>
        )}

      </section>
    </div>
  );
}
