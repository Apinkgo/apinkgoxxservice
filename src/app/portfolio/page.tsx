import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { PortfolioCard } from '@/components/landing/portfolio-card';
import { SponsorCard } from '@/components/landing/sponsor-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    title: "Sistem CRM Kustom",
    description: "Implementasi sistem CRM untuk melacak interaksi pelanggan dan mengelola pipeline penjualan secara efisien.",
    tags: ["CRM", "Analisis Data", "Web App"],
    image: PlaceHolderImages.find(img => img.id === 'portfolio-1'),
  },
  {
    title: "Aplikasi Mobile E-Commerce",
    description: "Membangun aplikasi mobile untuk platform e-commerce yang ada, meningkatkan jangkauan pelanggan dan penjualan.",
    tags: ["Mobile App", "E-commerce"],
    image: PlaceHolderImages.find(img => img.id === 'portfolio-2'),
  },
  {
    title: "Dashboard Analitik Penjualan",
    description: "Membuat dashboard interaktif untuk memvisualisasikan data penjualan dan mengidentifikasi tren utama.",
    tags: ["Analisis Data", "Business Intelligence"],
    image: PlaceHolderImages.find(img => img.id === 'portfolio-3'),
  },
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Portofolio Proyek Kami</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Berikut adalah beberapa contoh bagaimana kami telah membantu klien kami mencapai tujuan mereka melalui solusi digital.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
            <SponsorCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
