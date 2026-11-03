
import ProductCatalog from "../components/products/ProductCatalog";

async function getProducts() {
  const response = await fetch(
    "https://dummyjson.com/products/category/groceries?limit=0"
  );

  if (!response.ok) {
    throw new Error("Could not fetch products");
  }

  const data = await response.json();
  return data.products;
}

export default async function ProductsPage({ searchParams }) {
  const products = await getProducts();
  const params = await searchParams;
  const query = params?.search || "";

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-3 text-3xl font-bold">
        Our Products
      </h1>

      <p className="mb-8 text-gray-500">
        Explore our selection of grocery products.
      </p>

      <ProductCatalog
        products={products}
        query={query}
      />
    </main>
  );
}
