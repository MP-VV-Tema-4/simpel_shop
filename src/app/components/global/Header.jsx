
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

          <form className="search-form" action="/products" method="GET">
            <button type="submit" aria-label="Search">
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
            </button>

            <input
              type="search"
              name="search"
              placeholder="Search products..."
              aria-label="Search products"
            />
          </form>

          <Link href="/cart" className="cart-link">
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
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>

            <span>Cart ({cartCount})</span>
          </Link>
        </nav>
      </header>

      <style>{`
        .site-header {
          width: 100%;
          background: #fff;
          color: #222;
          border-bottom: 1px solid #eee;
        }

        .site-nav {
          width: 100%;
          max-width: 75rem;
          min-height: 85px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: 1fr 360px 1fr;
          align-items: center;
        }

        .nav-links {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 2rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }

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
  );
}
