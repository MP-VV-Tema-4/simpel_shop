
"use client";

export default function ProductFilters({
  maxPrice,
  setMaxPrice,
  highestPrice,
  minRating,
  setMinRating,
  sortBy,
  setSortBy,
  onReset,
}) {
  return (
    <aside className="
      h-fit
      rounded-lg
      bg-background-secondary
      border border-border
      p-5
      transition-colors duration-300
    ">

      {/* FILTER HEADING */}
      <h2 className="
        mb-6
        text-lg
        text-foreground
      ">
        Filters
      </h2>

      {/* MAXIMUM PRICE */}
      <div className="mb-7">
        <label className="
          mb-3
          block
          text-sm
          font-semibold
          text-foreground
        ">
          Maximum price: ${maxPrice}
        </label>

        <input
          type="range"
          min="0"
          max={highestPrice}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="
            w-full
            cursor-pointer
            accent-primary
          "
        />
      </div>

      {/* MINIMUM RATING */}
      <div className="mb-7">
        <label className="
          mb-2
          block
          text-sm
          font-semibold
          text-foreground
        ">
          Minimum rating
        </label>

        <select
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          className="
            w-full
            rounded-md
            border border-border
            bg-background-card
            px-3 py-2
            text-sm
            text-foreground
            focus:outline-none
            focus:ring-2
            focus:ring-primary
          "
        >
          <option value="0">All ratings</option>
          <option value="3">3 stars and above</option>
          <option value="4">4 stars and above</option>
          <option value="4.5">4.5 stars and above</option>
        </select>
      </div>

      {/* SORT BY */}
      <div className="mb-7">
        <label className="
          mb-2
          block
          text-sm
          font-semibold
          text-foreground
        ">
          Sort by
        </label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="
            w-full
            rounded-md
            border border-border
            bg-background-card
            px-3 py-2
            text-sm
            text-foreground
            focus:outline-none
            focus:ring-2
            focus:ring-primary
          "
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to high</option>
          <option value="price-high">Price: High to low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      {/* RESET FILTERS */}
      <button
        type="button"
        onClick={onReset}
        className="
          w-full
          rounded-md
          border border-border
          px-4 py-2
          text-sm
          text-foreground
          transition-colors duration-200
          hover:bg-background
          hover:border-primary
        "
      >
        Reset filters
      </button>

    </aside>
  );
}
