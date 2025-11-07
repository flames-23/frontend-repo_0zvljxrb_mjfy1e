import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <HowItWorks />
      </main>
      <footer className="border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} LuxePhone. All rights reserved.</p>
          <div className="text-sm text-zinc-600">
            <a href="#produk" className="hover:text-zinc-900">Produk</a>
            <span className="mx-3">•</span>
            <a href="#cara" className="hover:text-zinc-900">Cara Sewa</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
