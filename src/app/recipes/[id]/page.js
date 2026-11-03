
import Link from "next/link";
import { notFound } from "next/navigation";

async function getRecipe(id) {
  try {
    const response = await fetch(
      `https://dummyjson.com/recipes/${id}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) return null;

    return await response.json();
  } catch (error) {
    console.error("Recipe fetch error:", error);
    return null;
  }
}

export default async function RecipePage({ params }) {
  const { id } = await params;
  const recipe = await getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full px-5 py-10 md:px-10">
      <div className="mx-auto max-w-5xl">

        {/* Back navigation */}
        <Link
          href="/"
          className="mb-8 inline-flex text-sm text-gray-500 transition hover:text-black"
        >
          ← Home
        </Link>

        {/* Recipe header */}
        <div className="grid items-center gap-8 md:grid-cols-2">

          {/* Image */}
          <div className="overflow-hidden rounded-xl bg-gray-100">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="h-[280px] w-full object-cover md:h-[340px]"
            />
          </div>

          {/* Recipe information */}
          <div className="py-2">

            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gray-400">
              {recipe.cuisine}
            </p>

            <h1 className="mb-4 text-2xl font-semibold leading-tight text-gray-900 md:text-3xl">
              {recipe.name}
            </h1>

            {/* Rating */}
            <p className="mb-5 text-sm text-gray-500">
              ★ {recipe.rating} / 5
              <span className="mx-2">·</span>
              {recipe.reviewCount} reviews
            </p>

            {/* Recipe details */}
            <div className="mb-5 grid grid-cols-2 gap-3">

              <div className="rounded-lg bg-gray-50 p-3">
                <p className="text-xs text-gray-400">Prep time</p>
                <p className="mt-1 text-sm font-medium text-gray-800">
                  {recipe.prepTimeMinutes} min
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-3">
                <p className="text-xs text-gray-400">Cook time</p>
                <p className="mt-1 text-sm font-medium text-gray-800">
                  {recipe.cookTimeMinutes} min
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-3">
                <p className="text-xs text-gray-400">Servings</p>
                <p className="mt-1 text-sm font-medium text-gray-800">
                  {recipe.servings} people
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-3">
                <p className="text-xs text-gray-400">Difficulty</p>
                <p className="mt-1 text-sm font-medium text-gray-800">
                  {recipe.difficulty}
                </p>
              </div>

            </div>

            {/* Meal types */}
            <div className="flex flex-wrap gap-2">
              {recipe.mealType?.map((meal, index) => (
                <span
                  key={index}
                  className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500"
                >
                  {meal}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Ingredients and instructions */}
        <div className="mt-14 grid gap-12 border-t border-gray-100 pt-10 md:grid-cols-3">

          {/* Ingredients */}
          <section>
            <h2 className="mb-5 text-lg font-semibold text-gray-900">
              Ingredients
            </h2>

<ul className="divide-y divide-gray-100">
  {recipe.ingredients.map((ingredient, index) => (
    <li
      key={index}
      className="py-3 text-sm text-gray-600"
    >
      {ingredient}
    </li>
  ))}
</ul>
          </section>

          {/* Instructions */}
          <section className="md:col-span-2">
            <h2 className="mb-5 text-lg font-semibold text-gray-900">
              How to cook
            </h2>

            <ol className="space-y-5">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex gap-4">

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                    {index + 1}
                  </span>

                  <p className="pt-1 text-sm leading-relaxed text-gray-600">
                    {step}
                  </p>

                </li>
              ))}
            </ol>
          </section>

        </div>

      </div>
    </main>
  );
}
