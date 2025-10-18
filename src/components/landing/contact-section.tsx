import { WhatsAppContactCard } from './whatsapp-contact-card';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Siap untuk Bertransformasi?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hubungi kami hari ini untuk konsultasi gratis. Mari kita diskusikan bagaimana kami dapat membantu bisnis Anda tumbuh dan beradaptasi di era digital.
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
