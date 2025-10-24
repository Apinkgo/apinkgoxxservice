import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <video
        src="/12662101_1920_1080_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container max-w-4xl px-4">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
          Transformasi Digital untuk Ngana Pe Usaha
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
          Pointify Consulting bantu ngana pe usaha konvensional biar bisa ikut maju deng teknologi sekarang — kerja jadi lebih ringan, pelanggan tambah banyak, dan penjualan makin lancar.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground">
            <Link href="#skills">Lihat Apa yang Torang Bisa Bantu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
