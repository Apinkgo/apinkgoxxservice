import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PortfolioCard } from './portfolio-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const featuredProjects = [
  {
    title: "Sistem CRM Kustom",
    description: "Implementasi sistem CRM untuk melacak interaksi pelanggan.",
    tags: ["CRM", "Web App"],
    image: PlaceHolderImages.find(img => img.id === 'portfolio-1'),
  },
  {
    title: "Aplikasi Mobile E-Commerce",
    description: "Membangun aplikasi mobile untuk platform e-commerce.",
    tags: ["Mobile App", "E-commerce"],
    image: PlaceHolderImages.find(img => img.id === 'portfolio-2'),
  },
  {
    title: "Dashboard Analitik Penjualan",
    description: "Membuat dashboard interaktif untuk memvisualisasikan data penjualan.",
    tags: ["Analisis Data", "BI"],
    image: PlaceHolderImages.find(img => img.id === 'portfolio-3'),
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-card border-y">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Proyek Unggulan</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lihatlah beberapa pekerjaan terbaik kami dan bagaimana kami memberikan dampak.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/portfolio">
              Lihat Semua Proyek <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
