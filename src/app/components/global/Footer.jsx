
export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-main">

          <div className="footer-intro">
            <h2>
              Good things
              <br />
              are worth sharing.
            </h2>

            <p>
              Discover something you love. Explore our collection
              and find your next favourite. We believe great products
              should make everyday life a little better.
            </p>
          </div>

          <div className="footer-columns">

            <div className="footer-column">
              <h3>Explore</h3>
              <a href="/">Home</a>
              <a href="/products">All products</a>
              <a href="/cart">Shopping cart</a>
            </div>

            <div className="footer-column">
              <h3>Information</h3>
              <a href="/about">About us</a>
              <a href="/contact">Contact</a>
              <a href="/faq">FAQ</a>
            </div>

            <div className="footer-column">
              <h3>Customer care</h3>
              <a href="/shipping">Shipping</a>
              <a href="/returns">Returns</a>
              <a href="/terms">Terms and conditions</a>
            </div>

          </div>
        </div>

        <div className="footer-bottom">

          <div className="payment-methods">
            <span className="visa">VISA</span>
            <span className="mastercard">Mastercard</span>
            <span className="paypal">PayPal</span>
            <span className="apple-pay">Apple Pay</span>
          </div>

          <div className="footer-legal">
            <span>© 2026 Simple Shop. All rights reserved.</span>
            <a href="/privacy">Privacy Policy</a>
          </div>

        </div>
      </footer>

      <style>{`
        .site-footer {
          width: 100%;
          background: #191919;
          color: #ffffff;
        }

        /* Main layout */
        .footer-main {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;

          width: 100%;
          max-width: 75rem;
          margin: 0 auto;
          padding: 3rem 0;
          box-sizing: border-box;
        }

        /* Intro */
        .footer-intro {
          max-width: 38rem;
        }

        .footer-intro h2 {
          margin: 0 0 1rem;
          color: #ffffff;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .footer-intro p {
          max-width: 32rem;
          margin: 0;
          color: #a5a5a5;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* Link columns */
        .footer-columns {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.5rem;
          padding-top: 0.25rem;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.8rem;
        }

        .footer-column h3 {
          margin: 0 0 0.25rem;
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .footer-column a {
          color: #999999;
          font-size: 0.8rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-column a:hover {
          color: #ffffff;
        }

        /* Bottom bar */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;

          width: 100%;
          max-width: 75rem;
          min-height: 60px;
          margin: 0 auto;
          padding: 1rem 0;
          box-sizing: border-box;

          border-top: 1px solid #333333;
        }

        /* Payment methods */
        .payment-methods {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .visa,
        .mastercard,
        .paypal,
        .apple-pay {
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .visa {
          font-size: 0.9rem;
          font-style: italic;
        }

        .mastercard {
          letter-spacing: -0.04em;
        }

        .paypal {
          font-style: italic;
        }

        /* Copyright */
        .footer-legal {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 1.5rem;

          color: #888888;
          font-size: 0.75rem;
        }

        .footer-legal a {
          color: #aaaaaa;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-legal a:hover {
          color: #ffffff;
        }

        /* Tablet */
        @media (max-width: 1250px) {
          .footer-main,
          .footer-bottom {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        @media (max-width: 850px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }

          .footer-intro {
            max-width: 35rem;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .footer-main {
            padding: 2rem 1.25rem;
            gap: 2rem;
          }

          .footer-columns {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            row-gap: 1.5rem;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.25rem;
            gap: 1rem;
          }

          .footer-legal {
            justify-content: flex-start;
            gap: 0.75rem 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
