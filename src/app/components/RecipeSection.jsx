
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
    <section className="
      w-full
      px-6 py-14
      md:px-12
      bg-background
      transition-colors duration-300
    ">
      <div className="
        mx-auto
        max-w-6xl
      ">

        {/* SECTION HEADING */}
        <div className="mb-8">

          <p className="
            mb-2
            text-xs
            font-medium
            uppercase
            tracking-[0.2em]
            text-text-secondary
          ">
            Food inspiration
          </p>

          <h2 className="
            text-2xl
            text-foreground
            md:text-3xl
          ">
            Recipes to inspire you
          </h2>

          <p className="
            mt-2
            max-w-xl
            text-sm
            text-text-secondary
          ">
            Discover new favourites and find inspiration for your next meal.
          </p>

        </div>

        {/* RECIPE CARDS */}
        {recipes.length > 0 ? (
          <div className="
            grid
            grid-cols-2
            gap-6
            md:grid-cols-4
            md:gap-8
          ">

            {recipes.map((recipe) => (
              <Link
                key={recipe.id}
                href={`/recipes/${recipe.id}`}
                className="
                  group
                  overflow-hidden
                  rounded-xl
                  border border-border
                  bg-background-card
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >

                {/* IMAGE */}
                <div className="
                  relative
                  overflow-hidden
                  bg-background-secondary
                ">

                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="
                      h-32
                      w-full
                      object-cover
                      transition-transform duration-500
                      group-hover:scale-105
                      sm:h-40
                      md:h-44
                    "
                  />

                  <span className="
                    absolute
                    left-2 top-2
                    rounded-full
                    bg-background-card/90
                    px-2.5 py-1
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-wide
                    text-text-secondary
                    backdrop-blur-sm
                  ">
                    {recipe.cuisine}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="p-3 sm:p-4">

                  <h3 className="
                    min-h-10
                    line-clamp-2
                    text-sm
                    leading-snug
                    text-foreground
                    transition-colors
                    group-hover:text-text-secondary
                    sm:text-base
                  ">
                    {recipe.name}
                  </h3>

                  {/* RECIPE DETAILS */}
                  <div className="
                    mt-3
                    flex
                    flex-wrap
                    gap-2
                  ">

                    <span className="
                      rounded-md
                      bg-background-secondary
                      px-2 py-1
                      text-[11px]
                      text-text-secondary
                    ">
                      ⏱ {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                    </span>

                    <span className="
                      rounded-md
                      bg-background-secondary
                      px-2 py-1
                      text-[11px]
                      text-text-secondary
                    ">
                      {recipe.difficulty}
                    </span>

                  </div>

                  {/* BOTTOM LINK */}
                  <div className="
                    mt-4
                    flex
                    items-center
                    justify-between
                    border-t border-border
                    pt-3
                  ">

                    <span className="
                      text-[11px]
                      text-text-secondary
                    ">
                      {recipe.servings} servings
                    </span>

                    <span className="
                      text-xs
                      font-medium
                      text-primary
                      transition-opacity duration-300
                      group-hover:opacity-50
                    ">
                      View recipe →
                    </span>

                  </div>

                </div>

              </Link>
            ))}

          </div>
        ) : (
          <p className="
            text-sm
            text-text-secondary
          ">
            Recipes could not be loaded. Please try again later.
          </p>
        )}

      </div>
    </section>
  );
}
