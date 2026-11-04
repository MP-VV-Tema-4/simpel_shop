
import Fuse from "fuse.js";
import ProductCard from "./ProductCard";

export default function ProductList({
  products = [],
  query = "",
  hasSearched = false,
}) {
  const searchTerm = query.trim().toLowerCase();

  const fuse = new Fuse(products, {
    keys: ["title", "description", "category"],
    threshold: 0.4,
  });

  const exactMatch = products.some(
    (product) =>
      product.title.toLowerCase() === searchTerm
  );

  const filteredProducts = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : products;

  if (filteredProducts.length === 0) {
    return (
      <p className="text-sm text-text-secondary">
        No grocery products match your search.
      </p>
    );
  }

  return (
    <>
      {hasSearched && !searchTerm && (
        <p className="mb-4 text-sm text-text-secondary">
          Enter a product name to search.
        </p>
      )}

      {searchTerm && !exactMatch && (
        <p className="mb-4 text-sm text-text-secondary">
          No exact match for "{query}" — here are some
          products you might be looking for:
        </p>
      )}

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
    </>
  );
}
