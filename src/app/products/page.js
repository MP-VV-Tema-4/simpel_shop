import ProductFilters from "../components/products/ProductFilters";
import ProductCatalog from "../components/products/ProductCatalog";
import ProductHero from "../components/products/ProductHero";

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
      <div className="grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] gap-8 items-start">

        {/* LEFT COLUMN */}
        <aside>
          <ProductFilters />
        </aside>

        {/* RIGHT COLUMN */}
        <section className="min-w-0 space-y-8">
          <ProductHero />

          <div>
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
          </div>
        </section>

      </div>
    </main>
  );
}