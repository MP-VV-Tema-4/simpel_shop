
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
    <main className="
      min-h-screen
      w-full
      bg-background
      px-5 py-10
      md:px-10
    ">
      <div className="mx-auto max-w-5xl">

        {/* BACK NAVIGATION */}
        <Link
          href="/"
          className="
            mb-8
            inline-flex
            text-sm
            text-text-secondary
            transition-colors
            hover:text-foreground
          "
        >
          ← Home
        </Link>

        {/* RECIPE HEADER */}
        <div className="
          grid
          items-center
          gap-8
          md:grid-cols-2
        ">

          {/* IMAGE */}
          <div className="
            overflow-hidden
            rounded-xl
            bg-background-secondary
          ">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="
                h-[280px]
                w-full
                object-cover
                md:h-[340px]
              "
            />
          </div>

          {/* RECIPE INFORMATION */}
          <div className="py-2">

            <p className="
              mb-2
              text-xs
              uppercase
              tracking-[0.2em]
              text-text-secondary
            ">
              {recipe.cuisine}
            </p>

            <h1 className="
              mb-4
              text-2xl
              font-semibold
              leading-tight
              text-foreground
              md:text-3xl
            ">
              {recipe.name}
            </h1>

            {/* RATING */}
            <p className="
              mb-5
              text-sm
              text-text-secondary
            ">
              ★ {recipe.rating} / 5
              <span className="mx-2">·</span>
              {recipe.reviewCount} reviews
            </p>

            {/* RECIPE DETAILS */}
            <div className="
              mb-5
              grid
              grid-cols-2
              gap-3
            ">

              <div className="
                rounded-lg
                bg-background-secondary
                p-3
              ">
                <p className="text-xs text-text-secondary">
                  Prep time
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {recipe.prepTimeMinutes} min
                </p>
              </div>

              <div className="
                rounded-lg
                bg-background-secondary
                p-3
              ">
                <p className="text-xs text-text-secondary">
                  Cook time
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {recipe.cookTimeMinutes} min
                </p>
              </div>

              <div className="
                rounded-lg
                bg-background-secondary
                p-3
              ">
                <p className="text-xs text-text-secondary">
                  Servings
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {recipe.servings} people
                </p>
              </div>

              <div className="
                rounded-lg
                bg-background-secondary
                p-3
              ">
                <p className="text-xs text-text-secondary">
                  Difficulty
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {recipe.difficulty}
                </p>
              </div>

            </div>

            {/* MEAL TYPES */}
            <div className="flex flex-wrap gap-2">
              {recipe.mealType?.map((meal, index) => (
                <span
                  key={index}
                  className="
                    rounded-full
                    border
                    border-border
                    px-3 py-1
                    text-xs
                    text-text-secondary
                  "
                >
                  {meal}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* INGREDIENTS AND INSTRUCTIONS */}
        <div className="
          mt-14
          grid
          gap-12
          border-t
          border-border
          pt-10
          md:grid-cols-3
        ">

          {/* INGREDIENTS */}
          <section>
            <h2 className="
              mb-5
              text-lg
              font-semibold
              text-foreground
            ">
              Ingredients
            </h2>

            <ul className="divide-y divide-border">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="
                    py-3
                    text-sm
                    text-text-secondary
                  "
                >
                  {ingredient}
                </li>
              ))}
            </ul>
          </section>

          {/* INSTRUCTIONS */}
          <section className="md:col-span-2">
            <h2 className="
              mb-5
              text-lg
              font-semibold
              text-foreground
            ">
              How to cook
            </h2>

            <ol className="space-y-5">
              {recipe.instructions.map((step, index) => (
                <li
                  key={index}
                  className="flex gap-4"
                >
                  <span className="
                    flex
                    h-7 w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-background-secondary
                    text-xs
                    font-semibold
                    text-foreground
                  ">
                    {index + 1}
                  </span>

                  <p className="
                    pt-1
                    text-sm
                    leading-relaxed
                    text-text-secondary
                  ">
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
