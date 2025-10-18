import { Package } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-6 flex items-center justify-between flex-col sm:flex-row gap-4">
        <div className="flex items-center gap-2">
          <Package className="h-5 w-5" />
          <span className="font-bold">Pointify Consulting</span>
        </div>
        <div className="flex flex-col items-center sm:items-end gap-2">
          <p className="text-sm text-primary-foreground/70">
            NIB: 2705220053295
          </p>
          <p className="text-sm text-center sm:text-right text-primary-foreground/70">
            © {new Date().getFullYear()} Pointify Consulting. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
