
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ProductCard from "./products/ProductCard";

export default function Hero() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/groceries?limit=8"
        );

        if (!response.ok) {
          throw new Error("Could not fetch products");
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        console.error("Product loading error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  function scrollProducts(direction) {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;

      scrollRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          {/* HERO CONTENT */}
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-eyebrow">
                FRESHNESS EVERY DAY
              </span>

              <h1>
                From farm to
                <br />
                your kitchen.
              </h1>

              <p>
                Discover the freshest and finest groceries,
                delivered quickly and conveniently.
                Find your new everyday favourites.
              </p>

              <Link href="/products" className="hero-button">
                Shop Now
                <span>→</span>
              </Link>
            </div>

            {/* HERO IMAGE */}
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85"
                alt="Fresh vegetables and groceries"
              />
            </div>
          </div>

          {/* POPULAR PRODUCTS */}
          <div className="hero-products">
            <div className="hero-products-heading">
              <div>
                <h2>Popular products</h2>
                <p>Discover our everyday favourites</p>
              </div>

              <Link href="/products" className="view-all">
                View all products
                <span>→</span>
              </Link>
            </div>

            {loading && (
              <p className="product-message">Loading products...</p>
            )}

            {error && (
              <p className="product-message">
                Could not load products. Please try again later.
              </p>
            )}

            {!loading && !error && products.length > 0 && (
              <div className="hero-carousel">
                <button
                  type="button"
                  className="carousel-arrow"
                  onClick={() => scrollProducts(-1)}
                  aria-label="Previous products"
                >
                  ←
                </button>

                <div
                  className="hero-product-scroll"
                  ref={scrollRef}
                >
                  {products.map((product) => (
                    <div
                      className="hero-product-item"
                      key={product.id}
                    >
                      <ProductCard
                        product={product}
                        compact
                      />
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="carousel-arrow"
                  onClick={() => scrollProducts(1)}
                  aria-label="Next products"
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          width: 100%;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background: linear-gradient(
            135deg,
            #ffe1bd 0%,
            #ffeedc 100%
          );
        }

        .hero-inner {
          width: 100%;
          max-width: 75rem;
          margin: 0 auto;
          padding: 2rem 2.5rem 2.25rem;
          box-sizing: border-box;
        }

        /* HERO CONTENT */

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          min-height: 16rem;
          gap: 2.5rem;
        }

        .hero-text {
          max-width: 30rem;
          padding-left: 1rem;
        }

        .hero-eyebrow {
          display: inline-block;
          margin-bottom: 0.8rem;
          color: #d66b4f;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .hero-text h1 {
          margin: 0 0 1rem;
          color: #292b27;
          font-size: clamp(2.3rem, 4vw, 3.5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .hero-text p {
          max-width: 23rem;
          margin: 0 0 1.5rem;
          color: #77746d;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* SHOP BUTTON */

        .hero-button {
          display: inline-flex;
          align-items: center;
          gap: 1.5rem;
          padding: 0.65rem 0.75rem 0.65rem 1.4rem;
          border-radius: 999px;
          background: #f45135;
          color: white;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .hero-button:hover {
          transform: translateY(-2px);
          background: #dc4029;
        }

        .hero-button span {
          display: grid;
          place-items: center;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: white;
          color: #f45135;
          font-size: 1.2rem;
        }

        /* HERO IMAGE */

        .hero-image {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 16rem;
        }

        .hero-image img {
          display: block;
          width: 100%;
          height: 16rem;
          object-fit: cover;
          object-position: center;
          border-radius: 1.5rem;
          box-shadow: 0 12px 30px rgb(80 50 30 / 8%);
        }

        /* PRODUCTS */

        .hero-products {
          margin-top: 1.25rem;
        }

        .hero-products-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.85rem;
        }

        .hero-products-heading h2 {
          margin: 0;
          color: #292b27;
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: -0.025em;
        }

        .hero-products-heading p {
          margin: 0.25rem 0 0;
          color: #8b8176;
          font-size: 0.8rem;
        }

        .view-all {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #e94d35;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          transition: gap 0.2s ease;
        }

        .view-all:hover {
          gap: 0.8rem;
        }

        .product-message {
          color: #77746d;
          font-size: 0.9rem;
        }

        /* CAROUSEL */

        .hero-carousel {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          width: 100%;
        }

        .hero-product-scroll {
          display: flex;
          flex: 1;
          gap: 1rem;
          min-width: 0;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 0.4rem 0 0.8rem;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }

        .hero-product-scroll::-webkit-scrollbar {
          display: none;
        }

        .hero-product-item {
          flex: 0 0 230px;
          min-width: 0;
          scroll-snap-align: start;
        }

        /* ARROWS */

        .carousel-arrow {
          display: grid;
          flex: 0 0 2.75rem;
          place-items: center;
          width: 2.75rem;
          height: 2.75rem;
          padding: 0;
          border: 1px solid rgb(244 81 53 / 15%);
          border-radius: 50%;
          background: #fffaf4;
          color: #f45135;
          cursor: pointer;
          box-shadow: 0 3px 12px rgb(80 50 30 / 7%);
          transition: all 0.2s ease;
        }

        .carousel-arrow:hover {
          background: #f45135;
          color: white;
          transform: scale(1.06);
          box-shadow: 0 5px 15px rgb(244 81 53 / 20%);
        }

        .carousel-arrow:active {
          transform: scale(0.96);
        }

        .carousel-arrow:focus-visible {
          outline: 2px solid #292b27;
          outline-offset: 3px;
        }

        /* TABLET */

        @media (max-width: 850px) {
          .hero-inner {
            padding: 1.75rem 2rem 2rem;
          }

          .hero-content {
            gap: 1.5rem;
          }

          .hero-text {
            padding-left: 0;
          }

          .hero-image,
          .hero-image img {
            min-height: 14rem;
            height: 14rem;
          }

          .hero-product-item {
            flex-basis: 210px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .hero-inner {
            padding: 1.5rem 1rem;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .hero-text {
            padding: 0.25rem;
          }

          .hero-text h1 {
            font-size: 2.3rem;
          }

          .hero-text p {
            font-size: 0.85rem;
            margin-bottom: 1.1rem;
          }

          .hero-image,
          .hero-image img {
            min-height: 12rem;
            height: 12rem;
          }

          .hero-image img {
            border-radius: 1rem;
          }

          .hero-products {
            margin-top: 1.5rem;
          }

          .hero-products-heading {
            align-items: flex-end;
          }

          .hero-products-heading h2 {
            font-size: 1.15rem;
          }

          .hero-products-heading p {
            font-size: 0.72rem;
          }

          .hero-carousel {
            gap: 0.4rem;
          }

          .carousel-arrow {
            flex-basis: 2rem;
            width: 2rem;
            height: 2rem;
          }

          .hero-product-scroll {
            gap: 0.75rem;
          }

          .hero-product-item {
            flex-basis: 175px;
          }
        }
      `}</style>
    </>
  );
}
