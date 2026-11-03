
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/detailview/${product.id}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      {/* Produktbillede */}
      <div className="aspect-square overflow-hidden bg-gray-100">
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

      {/* Produktinformation */}
      <div className="p-3">
        <p className="mb-1 text-[10px] uppercase tracking-wider text-gray-400">
          {product.category}
        </p>

        <h3 className="mb-1 text-base font-semibold text-gray-900">
          {product.title}
        </h3>

        <p className="mb-2 line-clamp-2 text-xs text-gray-500">
          {product.description}
        </p>

        <p className="text-base font-semibold text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
