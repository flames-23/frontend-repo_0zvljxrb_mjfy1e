import { CalendarDays, Truck, BadgeCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { icon: CalendarDays, title: 'Pilih Durasi', desc: 'Tentukan paket harian, mingguan, atau bulanan sesuai kebutuhan.' },
    { icon: BadgeCheck, title: 'Verifikasi Cepat', desc: 'Unggah KTP & data pendukung. Proses verifikasi kurang dari 15 menit.' },
    { icon: Truck, title: 'Kirim atau Ambil', desc: 'Kami kirim ke alamat Anda atau ambil di store terdekat.' },
  ];

  return (
    <section id="cara" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">Cara Sewa</h2>
        <p className="mt-2 text-zinc-600">Proses sederhana, cepat, dan transparan.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="inline-flex items-center justify-center rounded-xl bg-black text-white w-10 h-10">
                <s.icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-medium text-zinc-900">{s.title}</h3>
              <p className="mt-1 text-sm text-zinc-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
