import { useState } from 'react';
import { ShoppingCart, Smartphone, Menu, X, Shield } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-br from-black to-zinc-700 text-white shadow-sm">
              <Smartphone size={18} />
            </div>
            <span className="text-xl font-semibold tracking-tight">LuxePhone</span>
            <span className="ml-3 hidden sm:flex items-center gap-1 text-xs text-zinc-600">
              <Shield size={14} /> Garansi Resmi
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#produk" className="text-zinc-700 hover:text-black transition">Produk</a>
            <a href="#cara" className="text-zinc-700 hover:text-black transition">Cara Sewa</a>
          </div>

          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-black/5 transition">
              <ShoppingCart size={18} /> Keranjang
            </button>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-black/5"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              <a onClick={() => setOpen(false)} href="#produk" className="rounded-lg px-3 py-2 text-zinc-800 hover:bg-black/5">Produk</a>
              <a onClick={() => setOpen(false)} href="#cara" className="rounded-lg px-3 py-2 text-zinc-800 hover:bg-black/5">Cara Sewa</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
