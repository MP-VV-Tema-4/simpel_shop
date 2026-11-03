
"use client";

import Link from "next/link";
import { useCartStore } from "../store/cartStore";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="py-12 text-center">
          <p className="mb-6 text-lg">Your cart is currently empty.</p>

          <Link
            href="/products"
            className="inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
          >
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-10 md:grid-cols-[1fr_320px]">
          <section>
            <div className="mb-6 flex items-center justify-between">
              <p>{cart.length} product(s) in your cart</p>

              <button
                onClick={clearCart}
                className="text-sm text-red-600 hover:underline"
              >
                Clear cart
              </button>
            </div>

            <div className="space-y-6">
              {cart.map((product) => (
                <article
                  key={product.id}
                  className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-center"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-24 w-24 rounded-lg bg-gray-100 object-contain"
                  />

                  <div className="flex-1">
                    <h2 className="font-semibold">{product.title}</h2>
                    <p className="text-gray-600">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        updateQuantity(product.id, product.quantity - 1)
                      }
                      className="rounded border px-3 py-1"
                      aria-label={`Decrease quantity of ${product.title}`}
                    >
                      −
                    </button>

                    <span>{product.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(product.id, product.quantity + 1)
                      }
                      className="rounded border px-3 py-1"
                      aria-label={`Increase quantity of ${product.title}`}
                    >
                      +
                    </button>
                  </div>

                  <p className="font-semibold">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </article>
              ))}
            </div>
          </section>

          <aside className="h-fit rounded-lg bg-gray-100 p-6">
            <h2 className="mb-6 text-xl font-bold">Order summary</h2>

            <div className="mb-4 flex justify-between">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="mb-6 flex justify-between border-t pt-4 text-lg font-bold">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <Link
              href="/checkout"
              className="block w-full rounded-lg bg-black px-6 py-3 text-center text-white hover:bg-gray-800"
            >
              Proceed to checkout
            </Link>

            <Link
              href="/products"
              className="mt-4 block text-center text-sm underline"
            >
              Continue shopping
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}
