
"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "../store/cartStore";

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setCustomer((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (cart.length === 0) return;

    setOrderPlaced(true);
    clearCart();
  }

  if (orderPlaced) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="mb-6 text-5xl">✓</div>

        <h1 className="mb-4 text-3xl font-bold">
          Thank you for your order!
        </h1>

        <p className="mb-8 text-gray-600">
          Your order has been placed successfully.
        </p>

        <Link
          href="/products"
          className="inline-block rounded-lg bg-black px-8 py-3 text-white hover:bg-gray-800"
        >
          Continue shopping
        </Link>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="mb-4 text-3xl font-bold">
          Your cart is empty
        </h1>

        <p className="mb-8 text-gray-600">
          Add some products before proceeding to checkout.
        </p>

        <Link
          href="/products"
          className="inline-block rounded-lg bg-black px-8 py-3 text-white hover:bg-gray-800"
        >
          Continue shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-10 text-3xl font-bold">Checkout</h1>

      <div className="grid gap-10 md:grid-cols-[1fr_360px]">
        <section>
          <h2 className="mb-6 text-xl font-bold">
            Customer information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block font-medium">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={customer.name}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-medium">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={customer.email}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="address" className="mb-2 block font-medium">
                Street address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                value={customer.address}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
                placeholder="Street and house number"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="city" className="mb-2 block font-medium">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  value={customer.city}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-3"
                  placeholder="City"
                />
              </div>

              <div>
                <label htmlFor="postalCode" className="mb-2 block font-medium">
                  Postal code
                </label>
                <input
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  required
                  value={customer.postalCode}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-3"
                  placeholder="Postal code"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-black px-6 py-4 font-semibold text-white hover:bg-gray-800"
            >
              Place order
            </button>

            <p className="text-sm text-gray-500">
              This is a demo checkout. No real payment will be processed.
            </p>
          </form>
        </section>

        <aside className="h-fit rounded-lg bg-gray-100 p-6">
          <h2 className="mb-6 text-xl font-bold">Order summary</h2>

          <div className="space-y-4">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex justify-between gap-4"
              >
                <div>
                  <p className="font-medium">{product.title}</p>
                  <p className="text-sm text-gray-600">
                    Quantity: {product.quantity}
                  </p>
                </div>

                <p className="font-medium">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between border-t pt-4 text-lg font-bold">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <Link
            href="/cart"
            className="mt-6 block text-center text-sm underline"
          >
            Back to cart
          </Link>
        </aside>
      </div>
    </main>
  );
}
