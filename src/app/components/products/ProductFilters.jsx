
"use client";

export default function ProductFilters({
  categories = [],
  maxPrice,
  highestPrice,
  setMaxPrice,
  minRating,
  setMinRating,
  sortBy,
  setSortBy,
  selectedCategory,
  setSelectedCategory,
  resetFilters,
}) {
  return (
    <aside className="space-y-6 rounded-lg border border-border p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>

        <button
          onClick={resetFilters}
          className="text-sm text-primary hover:underline"
        >
          Reset
        </button>
      </div>

      {/* Category filter */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          Category
        </label>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full rounded-md border border-border bg-white p-2 text-sm"
        >
          <option value="all">All categories</option>

          {categories.map((item) => (
            <option key={item} value={item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Price filter */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          Maximum price: ${maxPrice}
        </label>

        <input
          type="range"
          min="0"
          max={highestPrice}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-primary"
        />

        <div className="flex justify-between text-xs text-gray-500">
          <span>$0</span>
          <span>${highestPrice}</span>
        </div>
      </div>

      {/* Rating filter */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          Minimum rating
        </label>

        <select
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="w-full rounded-md border border-border bg-white p-2 text-sm"
        >
          <option value="0">All ratings</option>
          <option value="3">3+ stars</option>
          <option value="4">4+ stars</option>
          <option value="4.5">4.5+ stars</option>
        </select>
      </div>

      {/* Sorting */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          Sort by
        </label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full rounded-md border border-border bg-white p-2 text-sm"
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to high</option>
          <option value="price-high">Price: High to low</option>
          <option value="rating">Highest rating</option>
        </select>
      </div>
    </aside>
  );
}
