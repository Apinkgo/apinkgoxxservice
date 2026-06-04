type Props = { params: Promise<{ slug: string }> };

const articles: Record<string, { title: string; content: string[] }> = {
  'perjalanan-transformasi-digital-gdp-bablla': {
    title: 'Perjalanan Transformasi Digital di Lingkungan GDP dan PT Bablla',
    content: [
      'Transformasi digital bukan hanya tentang teknologi, tetapi tentang bagaimana teknologi digunakan untuk mendukung pertumbuhan bisnis, meningkatkan efisiensi operasional, dan menciptakan fondasi yang kuat untuk masa depan.',
      'Dalam berbagai kegiatan bersama Project GDP dan lingkungan bisnis PT Bablla, fokus utama diarahkan pada pengembangan sistem informasi, integrasi data, penguatan infrastruktur digital, serta penyusunan roadmap teknologi yang berkelanjutan.',
      'Berbagai inisiatif dilakukan mulai dari analisis kebutuhan bisnis, pengembangan aplikasi, perancangan arsitektur sistem, hingga implementasi solusi yang mampu mendukung kebutuhan operasional organisasi secara menyeluruh.',
      'Pemanfaatan cloud computing, otomatisasi proses bisnis, integrasi data lintas platform, serta eksplorasi kecerdasan buatan menjadi bagian dari upaya membangun lingkungan kerja yang lebih produktif, efisien, dan adaptif terhadap perubahan.',
      'Informasi lebih lanjut mengenai ekosistem bisnis GDP dapat diakses melalui https://gdppearl.com.'
    ]
  }
};

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Artikel tidak ditemukan</h1>
      </main>
    );
  }

  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{article.title}</h1>
      <article className="prose max-w-none">
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
