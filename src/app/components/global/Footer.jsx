
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="
      w-full
      bg-foreground
      text-background
      transition-colors duration-300
    ">

      {/* MAIN FOOTER */}
      <div className="
        mx-auto
        grid
        w-full
        max-w-7xl
        grid-cols-1
        gap-8
        px-5 py-8
        sm:px-8
        md:grid-cols-[1.2fr_1fr]
        md:gap-12
        md:py-12
        lg:gap-16
      ">

        {/* FOOTER INTRO */}
        <div className="max-w-xl">

          <h2 className="
            mb-4
            text-[clamp(2rem,4vw,3rem)]
            tracking-[-0.04em]
            text-background
          ">
            Good things
            <br />
            are worth sharing.
          </h2>

          <p className="
            max-w-lg
            text-sm
            text-background/65
          ">
            Discover something you love. Explore our collection
            and find your next favourite. We believe great products
            should make everyday life a little better.
          </p>

        </div>

        {/* FOOTER LINK COLUMNS */}
        <div className="
          grid
          grid-cols-2
          gap-x-6
          gap-y-6
          sm:grid-cols-3
          md:pt-1
        ">

          {/* EXPLORE */}
          <div className="
            flex
            flex-col
            items-start
            gap-3
          ">
            <h3 className="
              mb-1
              text-sm
              text-background
            ">
              Explore
            </h3>

            <Link
              href="/"
              className="
                text-[0.8rem]
                text-background/60
                no-underline
                transition-colors duration-200
                hover:text-background
              "
            >
              Home
            </Link>

            <Link
              href="/products"
              className="
                text-[0.8rem]
                text-background/60
                no-underline
                transition-colors duration-200
                hover:text-background
              "
            >
              All products
            </Link>

            <Link
              href="/cart"
              className="
                text-[0.8rem]
                text-background/60
                no-underline
                transition-colors duration-200
                hover:text-background
              "
            >
              Shopping cart
            </Link>
          </div>

          {/* INFORMATION */}
          <div className="
            flex
            flex-col
            items-start
            gap-3
          ">
            <h3 className="
              mb-1
              text-sm
              text-background
            ">
              Information
            </h3>

            <Link
              href="/about"
              className="
                text-[0.8rem]
                text-background/60
                no-underline
                transition-colors duration-200
                hover:text-background
              "
            >
              About us
            </Link>

            <Link
              href="/contact"
              className="
                text-[0.8rem]
                text-background/60
                no-underline
                transition-colors duration-200
                hover:text-background
              "
            >
              Contact
            </Link>

            <Link
              href="/faq"
              className="
                text-[0.8rem]
                text-background/60
                no-underline
                transition-colors duration-200
                hover:text-background
              "
            >
              FAQ
            </Link>
          </div>

          {/* CUSTOMER CARE */}
          <div className="
            flex
            flex-col
            items-start
            gap-3
          ">
            <h3 className="
              mb-1
              text-sm
              text-background
            ">
              Customer care
            </h3>

            <Link
              href="/shipping"
              className="
                text-[0.8rem]
                text-background/60
                no-underline
                transition-colors duration-200
                hover:text-background
              "
            >
              Shipping
            </Link>

            <Link
              href="/returns"
              className="
                text-[0.8rem]
                text-background/60
                no-underline
                transition-colors duration-200
                hover:text-background
              "
            >
              Returns
            </Link>

            <Link
              href="/terms"
              className="
                text-[0.8rem]
                text-background/60
                no-underline
                transition-colors duration-200
                hover:text-background
              "
            >
              Terms and conditions
            </Link>
          </div>

        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="
        mx-auto
        flex
        w-full
        max-w-7xl
        flex-col
        gap-4
        border-t border-background/15
        px-5 py-5
        sm:px-8
        md:flex-row
        md:items-center
        md:justify-between
      ">

        {/* PAYMENT METHODS */}
        <div className="
          flex
          flex-wrap
          items-center
          gap-4
        ">

          <span className="
            text-sm
            font-bold
            italic
            text-background
          ">
            VISA
          </span>

          <span className="
            text-sm
            font-bold
            tracking-tight
            text-background
          ">
            Mastercard
          </span>

          <span className="
            text-sm
            font-bold
            italic
            text-background
          ">
            PayPal
          </span>

          <span className="
            text-sm
            font-bold
            text-background
          ">
            Apple Pay
          </span>

        </div>

        {/* COPYRIGHT AND LEGAL */}
        <div className="
          flex
          flex-wrap
          items-center
          justify-start
          gap-x-6
          gap-y-3
          text-xs
          text-background/55
          md:justify-end
        ">

          <span>
            © 2026 Simple Shop. All rights reserved.
          </span>

          <Link
            href="/privacy"
            className="
              text-background/70
              no-underline
              transition-colors duration-200
              hover:text-background
            "
          >
            Privacy Policy
          </Link>

        </div>

      </div>

    </footer>
  );
}
