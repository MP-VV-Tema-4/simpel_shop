
import Link from "next/link";

export default function ProductCard({ product, compact = false }) {
  return (
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
          </p>
        )}

        {/* PRODUCT PRICE */}
        <p className={`
          font-semibold
          text-primary
          ${compact ? "text-sm" : "text-base"}
        `}>
          ${product.price.toFixed(2)}
        </p>

      </div>
    </Link>
  );
}
