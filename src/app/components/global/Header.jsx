
export default function Header() {
  return (
    <>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
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

          <a href="/cart" className="cart-link">
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
            <span>Cart</span>
          </a>
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
          padding: 1rem 0;
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
        .cart-link {
          color: #222;
          font-size: .9rem;
          font-weight: 600;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: .04em;
          transition: color .2s ease;
        }

        .nav-links a:hover,
        .cart-link:hover {
          color: #888;
        }

        .search-form {
          display: flex;
          align-items: center;
          gap: .7rem;
          width: 100%;
          padding: .7rem 1rem;
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
          font-size: .85rem;
        }

        .search-form input::placeholder {
          color: #999;
        }

        .search-form:focus-within {
          border-color: #999;
        }

        .cart-link {
          display: flex;
          align-items: center;
          justify-self: end;
          gap: .6rem;
        }

        @media (max-width: 850px) {
          .site-nav {
            padding: 1rem 1.5rem;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            box-sizing: border-box;
          }

          .search-form {
            grid-column: 1 / -1;
            grid-row: 2;
          }
        }
      `}</style>
    </>
  );
}
