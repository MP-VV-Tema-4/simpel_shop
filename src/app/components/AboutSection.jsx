
export default function AboutSection() {
  return (
    <section className="
      w-full
      px-6 py-16
      md:px-12
      bg-background
      transition-colors duration-300
    ">

      <div className="
        mx-auto
        grid
        max-w-6xl
        items-center
        gap-10
        md:grid-cols-2
        md:gap-16
      ">

        {/* IMAGE */}
        <div className="
          overflow-hidden
          rounded-xl
        ">
          <img
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85"
            alt="Fresh ingredients and healthy food"
            className="
              h-[300px]
              w-full
              object-cover
              md:h-[380px]
            "
          />
        </div>

        {/* ABOUT US TEXT */}
        <div className="max-w-lg">

          <p className="
            mb-3
            text-xs
            uppercase
            tracking-[0.2em]
            text-text-secondary
          ">
            Get to know us
          </p>

          <h2 className="
            mb-5
            text-3xl
            text-foreground
          ">
            A little about us.
          </h2>

          <div className="
            space-y-4
            text-sm
            text-text-secondary
          ">
            <p>
              We believe everyday shopping should be simple,
              inspiring and enjoyable.
            </p>

            <p>
              Simple Shop brings everyday products and food
              inspiration together in one place. Whether you are
              looking for something useful or a little inspiration
              for your next meal, we want to make it easy to find.
            </p>

            <p>
              Less searching, more discovering. That's the idea
              behind Simple Shop.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
