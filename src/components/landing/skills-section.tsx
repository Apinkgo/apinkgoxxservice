import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BrainCircuit, BarChart3, Lightbulb, ClipboardCheck, Tag } from 'lucide-react';

const skills = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "Strategi Digital Lokal",
    description: "Bantu rancang jalur digital buat ngana pe usaha — dari promosi sampai pelayanan pelanggan."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Analisa Data Penjualan",
    description: "Dari data sederhana, torang olah jadi insight biar ngana pe usaha bisa tumbuh lebih cepat."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Perbaikan Proses Kerja",
    description: "Bikin sistem kerja lebih efisien, jadi nda banyak waktu terbuang percuma."
  },
  {
    icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
    title: "Implementasi CRM",
    description: "Supaya pelanggan bisa dikelola lebih rapi dan hubungan bisnis makin kuat."
  },
  {
    icon: <Tag className="h-10 w-10 text-primary" />,
    title: "Branding & ID Digital Produk",
    description: "Dari logo, desain, sampe teknologi tag digital buat naikkan nilai produk lokal."
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-card/50 border-y">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Keahlian Torang</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Torang gabungkan pengalaman lapangan sama teknologi biar hasilnya nyata.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <Card key={index} className="flex flex-col p-6 transition-shadow duration-300 hover:shadow-xl bg-card">
              <div className="mb-4">{skill.icon}</div>
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-semibold">{skill.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base flex-grow">
                {skill.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
