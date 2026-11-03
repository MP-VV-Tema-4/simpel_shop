
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
    <aside className="h-fit rounded-lg bg-gray-50 p-5">
      <h2 className="mb-6 text-lg font-bold">Filters</h2>

      <div className="mb-7">
        <label className="mb-3 block text-sm font-semibold">
          Maximum price: ${maxPrice}
        </label>

        <input
          type="range"
          min="0"
          max={highestPrice}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="mb-7">
        <label className="mb-2 block text-sm font-semibold">
          Minimum rating
        </label>

        <select
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
        >
          <option value="0">All ratings</option>
          <option value="3">3 stars and above</option>
          <option value="4">4 stars and above</option>
          <option value="4.5">4.5 stars and above</option>
        </select>
      </div>

      <div className="mb-7">
        <label className="mb-2 block text-sm font-semibold">
          Sort by
        </label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to high</option>
          <option value="price-high">Price: High to low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-200"
      >
        Reset filters
      </button>
    </aside>
  );
}
