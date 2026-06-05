import Link from 'next/link';

export default function NewsPage() {
  const articles = [
    {
      slug: 'perjalanan-transformasi-digital-gdp-bablla',
      title: 'Perjalanan Transformasi Digital di Lingkungan GDP dan PT Bablla',
      excerpt: 'Perjalanan pengembangan sistem, integrasi data, cloud computing, dan transformasi digital dalam mendukung berbagai inisiatif bisnis di lingkungan GDP dan PT Bablla.',
      category: 'Technology',
      date: '2026-06-05'
    }
  ];

  return (
    <main className="container mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">News</h1>
      <p className="mb-10">Berita dan publikasi terbaru.</p>

      <div className="grid gap-6">
        {articles.map((article) => (
          <Link key={article.slug} href={`/news/${article.slug}`}>
            <article className="border rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-sm mb-2 opacity-70">
                {article.category} • {article.date}
              </div>
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p>{article.excerpt}</p>
              <div className="mt-4 font-medium">Baca selengkapnya →</div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
