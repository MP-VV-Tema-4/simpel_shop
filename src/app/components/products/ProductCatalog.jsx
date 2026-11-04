
"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Fuse from "fuse.js";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";

export default function ProductCatalog({
  products = [],
  query = "",
  children,
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Kun produkter fra Groceries
  const groceryProducts = useMemo(
    () => products.filter((product) => product.category === "groceries"),
    [products]
  );

  const highestPrice = Math.max(
    ...groceryProducts.map((product) => product.price),
    0
  );

  const [maxPrice, setMaxPrice] = useState(highestPrice);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("groceries");

  useEffect(() => {
    setMaxPrice(highestPrice);
  }, [highestPrice]);

  // Søgning
  const fuse = useMemo(
    () =>
      new Fuse(groceryProducts, {
        keys: ["title", "description", "category"],
        threshold: 0.35,
      }),
    [groceryProducts]
  );

  const searchResults = query.trim()
    ? fuse.search(query).map((result) => result.item)
    : groceryProducts;

  // Filtrering
  const filteredProducts = searchResults.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const matchesPrice = product.price <= maxPrice;
    const matchesRating = product.rating >= minRating;

    return matchesCategory && matchesPrice && matchesRating;
  });

  // Sortering
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;

    return 0;
  });

  // Nulstil alle filtre og søgning
  const resetFilters = () => {
    setMaxPrice(highestPrice);
    setMinRating(0);
    setSortBy("default");
    setSelectedCategory("groceries");

    // Fjern søgningen fra URL'en
    router.replace(pathname);
  };

  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
      <ProductFilters
        categories={["groceries"]}
        maxPrice={maxPrice}
        highestPrice={highestPrice}
        setMaxPrice={setMaxPrice}
        minRating={minRating}
        setMinRating={setMinRating}
        sortBy={sortBy}
        setSortBy={setSortBy}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        resetFilters={resetFilters}
      />

      <div>
        {children}

        <p className="mb-4 text-sm text-gray-500">
          {sortedProducts.length} produkter fundet
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <p className="py-10 text-center">
            Ingen produkter matcher dine filtre.
          </p>
        )}
      </div>
    </section>
  );
}
