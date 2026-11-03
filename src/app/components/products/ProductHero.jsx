
export default function ProductHero() {
  return (
    <>
      <section className="product-hero">
        <div className="product-hero-content">
          <span className="product-hero-label">
            FRESH & NATURAL
          </span>

          <h2>Freshly squeezed.</h2>

          <p>
            Bring a little freshness into your everyday.
            Discover our selection of fresh favourites.
          </p>

          <a href="#products" className="product-hero-button">
            EXPLORE PRODUCTS
          </a>
        </div>

        <div className="product-hero-image">
          <img
            src="https://images.unsplash.com/photo-1694886712783-5eefee63cedc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Fresh orange juice"
          />
        </div>
      </section>

      <style>{`
        .product-hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          min-height: 260px;
          padding: 32px 38px;
          background: #e8e9d9;
          border-radius: 16px;
          overflow: hidden;
        }

        .product-hero-content {
          flex: 1;
          max-width: 420px;
        }

        .product-hero-label {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #687451;
          margin-bottom: 12px;
        }

        .product-hero h2 {
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1.1;
          color: #344735;
          margin: 0 0 14px;
        }

        .product-hero p {
          font-size: 14px;
          line-height: 1.7;
          color: #59624c;
          margin-bottom: 24px;
        }

        .product-hero-button {
          display: inline-block;
          padding: 12px 22px;
          background: #344735;
          color: #fff;
          border-radius: 30px;
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          transition: background 0.2s ease;
        }

        .product-hero-button:hover {
          background: #596b4c;
        }

  .product-hero-image {
  flex: 0 0 38%;
  min-height: 260px;
  height: 100%;
  margin: -32px -32px -32px 0;
}

.product-hero-image img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 260px;
  object-fit: cover;
  border-radius: 25px;
}

        @media (max-width: 600px) {
          .product-hero {
            padding: 24px;
            gap: 16px;
          }

          .product-hero-image {
            flex: 0 0 35%;
            height: 160px;
          }

          .product-hero p {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}
