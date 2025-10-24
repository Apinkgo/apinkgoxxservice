import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingDown, Users, Clock, Target } from 'lucide-react';

const problems = [
  {
    icon: <TrendingDown className="h-10 w-10 text-destructive" />,
    title: "Penjualan Macet-Macet Terus",
    description: "Tiap bulan angka jualan nda naik-naik, padahal kerja so keras."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Susah Dapa Pelanggan Baru",
    description: "Masih bergantung sama pelanggan lama, pasar baru susah dijangkau."
  },
  {
    icon: <Clock className="h-10 w-10 text-accent" />,
    title: "Kerja Manual yang Buang-Buang Waktu",
    description: "Banyak waktu habis ngatur catatan, stok, dan administrasi — padahal bisa otomatis."
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: "Promosi Kurang Gigit",
    description: "Sudah promosi di mana-mana, tapi hasilnya nda terasa dan pelanggan nda bertambah."
  },
]

export default function ProblemsSection() {
  return (
    <section id="problems" className="py-16 md:py-24 bg-transparent">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Masalah yang Sering Dapa di Usaha Konvensional</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Banyak pelaku usaha alami hal yang sama. Torang datang bukan cuma kasi teori — tapi solusi nyata.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl bg-card">
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
