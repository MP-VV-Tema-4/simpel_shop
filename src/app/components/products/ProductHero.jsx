
import Link from "next/link";

export default function ProductHero() {
  return (
    <section className="
      flex flex-col sm:flex-row
      items-center justify-between
      gap-4 sm:gap-[30px]
      min-h-[260px]
      p-6 sm:py-8 sm:px-[38px]
      rounded-2xl
      overflow-hidden
      bg-background-secondary
      transition-colors duration-300
    ">

      {/* HERO CONTENT */}
      <div className="flex-1 max-w-[420px]">

        <span className="
          inline-block
          mb-3
          text-[11px]
          font-bold
          tracking-[2px]
          uppercase
          text-accent
        ">
          FRESH & NATURAL
        </span>

        <h2 className="
          mb-3.5
          text-[clamp(28px,3vw,42px)]
          text-foreground
        ">
          Freshly squeezed.
        </h2>

        <p className="
          mb-6
          text-sm
          text-text-secondary
        ">
          Bring a little freshness into your everyday.
          Discover our selection of fresh favourites.
        </p>

        <Link
          href="#products"
          className="
            inline-block
            rounded-full
            px-6 py-3
            bg-primary
            text-white
            text-[11px]
            font-bold
            tracking-[1px]
            uppercase
            hover:opacity-70
            transition-all
          "
        >
          EXPLORE PRODUCTS
        </Link>

      </div>

      {/* HERO IMAGE */}
      <div className="
        w-full sm:w-[38%]
        min-h-[160px] sm:min-h-[260px]
        sm:self-stretch
        sm:-mr-8
        overflow-hidden
      ">
        <img
          src="https://images.unsplash.com/photo-1694886712783-5eefee63cedc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="Fresh orange juice"
          className="
            block
            w-full h-full
            min-h-[160px] sm:min-h-[260px]
            object-cover
            rounded-[25px]
          "
        />
      </div>

    </section>
  );
}
