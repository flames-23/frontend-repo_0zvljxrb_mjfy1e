import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-6 sm:pt-10">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_-20%,rgba(0,0,0,0.08),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 bg-white/70 backdrop-blur border border-zinc-200 rounded-full px-3 py-1">
            Sewa iPhone Premium • Kilat & Terpercaya
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900">
            Rasakan Kemewahan iPhone Terbaru Tanpa Komitmen Panjang
          </h1>
          <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
            Nikmati berbagai seri iPhone dengan harga fleksibel. Pilih durasi harian, mingguan, hingga bulanan. Semua unit bergaransi, full set, dan kondisi prima.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#produk" className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 text-sm font-medium shadow-sm hover:shadow-md transition">
              Jelajahi Produk
            </a>
            <a href="#cara" className="inline-flex items-center justify-center rounded-xl border border-black/10 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-black/5 transition">
              Cara Sewa
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-zinc-600">
            <span>Garansi resmi</span>
            <span>•</span>
            <span>Unit terawat</span>
            <span>•</span>
            <span>Pengiriman cepat</span>
          </div>
        </div>

        <div className="relative h-[360px] sm:h-[440px] lg:h-[520px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-black/10 bg-white">
            <Spline scene="https://prod.spline.design/tJk7Sz7xxl4VbQ0I/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
