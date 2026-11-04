
"use client";

import Link from "next/link";
import { useFavoritesStore } from "../../store/FavoritesStore";
import { useCartStore } from "../../store/cartStore";

export default function Header() {
  const favoriteCount = useFavoritesStore(
    (state) => state.favorites.length
  );

  const cartCount = useCartStore((state) =>
    state.cart.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    )
  );

  return (
<<<<<<< HEAD
    <header className="
      w-full
      border-b border-border
      bg-background
      text-foreground
      transition-colors duration-300
    ">
=======
    <>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/products">Products</Link>
            </li>

            <li>
              <Link href="/favorites" className="favorites-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
                </svg>

                <span>Favorites ({favoriteCount})</span>
              </Link>
            </li>
          </ul>
>>>>>>> upstream/feature/cart-and-favorites

      <nav
        aria-label="Main navigation"
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-2
          items-center
          gap-4
          px-4 py-4
          sm:px-6
          md:grid-cols-[1fr_360px_1fr]
          md:gap-6
          md:px-8
          md:py-5
        "
      >

        {/* NAVIGATION LINKS */}
        <ul className="
          flex
          items-center
          justify-start
          gap-5
          p-0
          m-0
          list-none
          sm:gap-8
        ">
          <li>
            <Link
              href="/"
              className="
                text-xs
                font-semibold
                uppercase
                tracking-wide
                text-foreground
                transition-colors duration-200
                hover:text-text-secondary
                sm:text-sm
              "
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/products"
              className="
                text-xs
                font-semibold
                uppercase
                tracking-wide
                text-foreground
                transition-colors duration-200
                hover:text-text-secondary
                sm:text-sm
              "
            >
              Products
            </Link>
          </li>
        </ul>

        {/* SEARCH FORM */}
        <form
          action="/products"
          method="GET"
          className="
            col-span-2
            row-start-2
            flex
            w-full
            items-center
            gap-3
            rounded-md
            border border-border
            bg-background-secondary
            px-4 py-3
            transition-colors duration-200
            focus-within:border-primary
            md:col-span-1
            md:col-start-2
            md:row-start-1
          "
        >
          <button
            type="submit"
            aria-label="Search"
            className="
              flex
              shrink-0
              items-center
              justify-center
              bg-transparent
              text-text-secondary
              transition-colors
              hover:text-primary
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
<<<<<<< HEAD
          </button>
=======

            <span>Cart ({cartCount})</span>
          </Link>
        </nav>
      </header>
>>>>>>> upstream/feature/cart-and-favorites

          <input
            type="search"
            name="search"
            placeholder="Search products..."
            aria-label="Search products"
            className="
              w-full
              min-w-0
              bg-transparent
              text-sm
              text-foreground
              outline-none
              placeholder:text-text-secondary
            "
          />
        </form>

        {/* SHOPPING CART */}
        <Link
          href="/cart"
          className="
            flex
            items-center
            justify-self-end
            gap-2
            whitespace-nowrap
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-foreground
            transition-colors duration-200
            hover:text-text-secondary
            sm:text-sm
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>

          <span>Cart</span>
        </Link>

<<<<<<< HEAD
      </nav>
    </header>
=======
        .nav-links a,
        .site-nav .cart-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: #222;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          transition: color 0.2s ease;
          white-space: nowrap;
        }

        .nav-links a:hover,
        .site-nav .cart-link:hover {
          color: #888;
        }

        .favorites-link svg {
          flex-shrink: 0;
        }

        .search-form {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          width: 100%;
          padding: 0.7rem 1rem;
          box-sizing: border-box;
          background: #f5f5f5;
          border: 1px solid #eee;
          border-radius: 4px;
        }

        .search-form button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          border: none;
          background: none;
          color: #555;
          cursor: pointer;
        }

        .search-form input {
          width: 100%;
          min-width: 0;
          border: none;
          outline: none;
          background: transparent;
          color: #222;
          font: inherit;
          font-size: 0.85rem;
        }

        .search-form input::placeholder {
          color: #999;
        }

        .search-form:focus-within {
          border-color: #999;
        }

        .site-nav .cart-link {
          justify-self: end;
          flex-direction: row;
          gap: 0.6rem;
          line-height: normal;
        }

        .site-nav .cart-link svg {
          display: block;
          flex-shrink: 0;
        }

        @media (max-width: 850px) {
          .site-nav {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }

          .search-form {
            grid-column: 1 / -1;
            grid-row: 2;
          }
        }

        @media (max-width: 480px) {
          .site-nav {
            padding: 1rem;
          }

          .nav-links {
            gap: 1rem;
          }

          .nav-links a,
          .site-nav .cart-link {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </>
>>>>>>> upstream/feature/cart-and-favorites
  );
}
