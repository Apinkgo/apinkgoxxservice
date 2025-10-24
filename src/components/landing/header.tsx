import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center">
          <Image src="/logo.svg" alt="Apinkgo Pointify Consulting Logo" width={200} height={54} priority />
        </Link>
        <nav className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild variant="ghost">
            <Link href="/#skills">Keahlian</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/portfolio">Portofolio</Link>
          </Button>
          <Button asChild>
            <Link href="#contact">Hubungi Kami</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
