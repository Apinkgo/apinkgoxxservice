import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import ProblemsSection from '@/components/landing/problems-section';
import SkillsSection from '@/components/landing/skills-section';
import ContactSection from '@/components/landing/contact-section';
import Footer from '@/components/landing/footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
