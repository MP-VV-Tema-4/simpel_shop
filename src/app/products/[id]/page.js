
import Link from "next/link";
import { notFound } from "next/navigation";

async function getProduct(id) {
  const response = await fetch(
    `https://dummyjson.com/products/${id}`
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      {/* Back navigation */}
      <nav className="mb-8">
        <Link
          href="/products"
          className="text-sm font-medium text-gray-500 hover:text-black"
        >
          ← Back to products
        </Link>
      </nav>

      {/* Product layout */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

{/* Product image */}
<div className="flex items-center justify-center rounded-xl bg-gray-100 p-6">
  <img
    src={product.thumbnail}
    alt={product.title}
    className="max-h-[300px] w-full max-w-[300px] object-contain"
  />
</div>

        {/* Product information */}
        <div className="flex flex-col justify-center">

          <p className="mb-3 text-sm uppercase tracking-widest text-gray-400">
            {product.category}
          </p>

          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            {product.title}
          </h1>

          <p className="mb-5 leading-relaxed text-gray-600">
            {product.description}
          </p>

          <p className="mb-3 text-2xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </p>

          <div className="mb-6 flex gap-4 text-sm text-gray-500">
            <span>★ {product.rating} / 5</span>
            <span>{product.stock} in stock</span>
          </div>

          {product.brand && (
            <p className="mb-3 text-sm text-gray-600">
              Brand: {product.brand}
            </p>
          )}

          <div className="border-t border-gray-200 pt-5">
            <h2 className="mb-3 text-lg font-semibold">
              Product details
            </h2>

            <p className="mb-2 text-sm text-gray-600">
              SKU: {product.sku}
            </p>

            <p className="mb-2 text-sm text-gray-600">
              Availability: {product.availabilityStatus}
            </p>

            <p className="text-sm text-gray-600">
              Shipping: {product.shippingInformation}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
