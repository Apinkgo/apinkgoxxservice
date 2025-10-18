import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingDown, Users, Clock, Target } from 'lucide-react';

const problems = [
  {
    icon: <TrendingDown className="h-10 w-10 text-destructive" />,
    title: "Penjualan Stagnan",
    description: "Kesulitan meningkatkan angka penjualan dari bulan ke bulan."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Sulit Mendapatkan Pelanggan Baru",
    description: "Ketergantungan pada pelanggan lama dan kesulitan menjangkau pasar yang lebih luas."
  },
  {
    icon: <Clock className="h-10 w-10 text-accent" />,
    title: "Proses Manual yang Memakan Waktu",
    description: "Banyak waktu terbuang untuk tugas administratif yang bisa diotomatisasi."
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: "Strategi Pemasaran Tidak Efektif",
    description: "Upaya pemasaran yang tidak terukur dan tidak memberikan hasil yang diharapkan."
  },
]

export default function ProblemsSection() {
  return (
    <section id="problems" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Masalah Dalam Penjualan Konvensional</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Banyak bisnis menghadapi tantangan yang sama. Kami hadir untuk memberikan solusi.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-4">{problem.icon}</div>
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-semibold">{problem.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base">
                {problem.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
