import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 container max-w-4xl px-4">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
          Transformasi Digital untuk Penjualan Anda
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
          Pointify Consulting membantu bisnis konvensional untuk beradaptasi dengan teknologi terkini, meningkatkan efisiensi, dan mencapai target penjualan.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#skills">Lihat Keahlian Kami</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
