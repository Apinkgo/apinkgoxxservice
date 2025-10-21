import { WhatsAppContactCard } from './whatsapp-contact-card';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Marijo Berubah ke Arah Digital!</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hubungi torang skarang, konsultasi gratis dulu. Torang baku dengar, bantu cari cara biar ngana pe usaha naik level dan siap hadapi dunia digital masa kini.
            </p>
            <div className="mt-8 space-y-4 text-foreground">
              {/* Future contact details can be added here */}
            </div>
          </div>
          <div>
            <WhatsAppContactCard />
          </div>
        </div>
      </div>
    </section>
  );
}
