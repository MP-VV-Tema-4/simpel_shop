
import Link from "next/link";

export default async function RecipeSection() {
  let recipes = [];

  try {
    const response = await fetch(
      "https://dummyjson.com/recipes?limit=4",
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error("Could not fetch recipes");
    }

    const data = await response.json();
    recipes = data.recipes || [];
  } catch (error) {
    console.error("Recipe fetch error:", error);
  }

  return (
    <section className="w-full px-6 py-14 md:px-12">
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            Food inspiration
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Recipes to inspire you
          </h2>

          <p className="mt-2 max-w-xl text-sm text-gray-500">
            Discover new favourites and find inspiration for your next meal.
          </p>
        </div>

        {/* Recipe cards */}
        {recipes.length > 0 ? (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {recipes.map((recipe) => (
              <Link
                key={recipe.id}
                href={`/recipes/${recipe.id}`}
                className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-40 md:h-44"
                  />

                  <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-gray-600 backdrop-blur-sm">
                    {recipe.cuisine}
                  </span>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4">

                  <h3 className="line-clamp-2 min-h-10 text-sm font-semibold leading-snug text-gray-900 transition-colors group-hover:text-gray-500 sm:text-base">
                    {recipe.name}
                  </h3>

                  {/* Details */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-md bg-gray-50 px-2 py-1 text-[11px] text-gray-500">
                      ⏱ {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                    </span>

                    <span className="rounded-md bg-gray-50 px-2 py-1 text-[11px] text-gray-500">
                      {recipe.difficulty}
                    </span>
                  </div>

                  {/* Bottom link */}
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                    <span className="text-[11px] text-gray-400">
                      {recipe.servings} servings
                    </span>

                    <span className="text-xs font-medium text-gray-800 transition group-hover:translate-x-1">
                      View recipe →
                    </span>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">
            Recipes could not be loaded. Please try again later.
          </p>
        )}

      </div>
    </section>
  );
}
