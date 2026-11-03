
import Link from "next/link";

export default function ProductCard({ product, compact = false }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className={`group block overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
        compact ? "h-full" : ""
      }`}
    >
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

      {/* PRODUCT INFORMATION */}
      <div className={compact ? "p-3" : "p-3"}>
        <p className="mb-1 text-[10px] uppercase tracking-wider text-gray-400">
          {product.category}
        </p>

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
  );
}
