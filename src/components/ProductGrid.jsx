import { useState } from 'react';
import { CheckCircle2, Info } from 'lucide-react';

const PRODUCTS = [
  {
    id: '14-pro',
    name: 'iPhone 14 Pro',
    priceDay: 250000,
    priceWeek: 1500000,
    priceMonth: 5200000,
    color: 'Deep Purple',
    storage: '256GB',
    image: 'https://images.unsplash.com/photo-1695048132832-b41495f12eb4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjAxNXxlbnwwfDB8fHwxNzYyNTM5MzIzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: '15',
    name: 'iPhone 15',
    priceDay: 280000,
    priceWeek: 1680000,
    priceMonth: 5800000,
    color: 'Blue',
    storage: '128GB',
    image: 'https://images.unsplash.com/photo-1695619575474-9b45e37bc1e6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjAxNSUyMFByb3xlbnwwfDB8fHwxNzYyNTM5MzI0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: '15-pro',
    name: 'iPhone 15 Pro',
    priceDay: 350000,
    priceWeek: 2100000,
    priceMonth: 7200000,
    color: 'Natural Titanium',
    storage: '256GB',
    image: 'https://images.unsplash.com/photo-1636032204208-fdd9d7b11394?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjAxM3xlbnwwfDB8fHwxNzYyNTM5MzI0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: '13',
    name: 'iPhone 13',
    priceDay: 180000,
    priceWeek: 1080000,
    priceMonth: 3800000,
    color: 'Midnight',
    storage: '128GB',
    image: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI0OTY0MjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

function formatIDR(n) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
}

export default function ProductGrid() {
  const [duration, setDuration] = useState('week');

  return (
    <section id="produk" className="py-16 sm:py-20 bg-gradient-to-b from-white to-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">Pilihan iPhone Untuk Disewa</h2>
            <p className="mt-2 text-zinc-600">Semua unit bergaransi, IMEI terdaftar, lengkap dengan aksesoris.</p>
          </div>
          <div className="flex items-center gap-2 bg-white border border-black/10 rounded-xl p-1">
            {[
              { key: 'day', label: 'Harian' },
              { key: 'week', label: 'Mingguan' },
              { key: 'month', label: 'Bulanan' },
            ].map((opt) => (
              <button
                key={opt.key}
                onClick={() => setDuration(opt.key)}
                className={`px-3 py-2 text-sm rounded-lg transition ${duration === opt.key ? 'bg-black text-white' : 'text-zinc-800 hover:bg-black/5'}`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <article key={p.id} className="group relative rounded-2xl border border-black/10 bg-white overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-zinc-100">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-zinc-900">{p.name}</h3>
                <p className="mt-0.5 text-sm text-zinc-600">{p.storage} • {p.color}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-zinc-900 font-semibold">
                    {duration === 'day' && <span>{formatIDR(p.priceDay)}<span className="text-zinc-500 font-normal">/hari</span></span>}
                    {duration === 'week' && <span>{formatIDR(p.priceWeek)}<span className="text-zinc-500 font-normal">/minggu</span></span>}
                    {duration === 'month' && <span>{formatIDR(p.priceMonth)}<span className="text-zinc-500 font-normal">/bulan</span></span>}
                  </div>
                  <button className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg bg-black text-white hover:opacity-90">
                    Sewa Sekarang
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-zinc-600">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  <span>Free anti-gores + case</span>
                  <span>•</span>
                  <span>Asuransi opsional</span>
                  <button className="ml-auto text-zinc-500 hover:text-zinc-800" title="Detail"><Info size={16} /></button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
