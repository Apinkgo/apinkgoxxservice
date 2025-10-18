import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BrainCircuit, BarChart3, Lightbulb, ClipboardCheck } from 'lucide-react';

const skills = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "Strategi Digital",
    description: "Merancang peta jalan digital yang komprehensif untuk bisnis Anda."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Analisis Data Penjualan",
    description: "Mengubah data mentah menjadi wawasan yang dapat ditindaklanjuti untuk pertumbuhan."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Inovasi Proses Bisnis",
    description: "Mengoptimalkan alur kerja untuk efisiensi dan produktivitas maksimal."
  },
  {
    icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
    title: "Implementasi CRM",
    description: "Membantu Anda memilih dan mengimplementasikan sistem CRM yang tepat."
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-card border-y">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Keahlian Kami</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Kami menggabungkan keahlian industri dengan inovasi teknologi untuk hasil terbaik.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Card key={index} className="flex flex-col p-6 transition-shadow duration-300 hover:shadow-xl bg-background">
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
