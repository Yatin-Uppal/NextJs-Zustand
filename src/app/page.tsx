import ProductCard from '@/components/productCard';
import { products } from '@/lib/products';


export default function HomePage() {
  return (
    <main className="flex-1 container py-8">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Welcome to ShopCart</h1>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Browse our collection of high-quality products with fast shipping and easy returns.
          </p>
        </div>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="animate-fade-in">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
