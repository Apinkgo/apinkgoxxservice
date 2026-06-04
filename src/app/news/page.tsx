export default function NewsPage() {
  const articles = [
    {
      slug: 'welcome-to-apink-news',
      title: 'Welcome to Apink News',
      excerpt: 'Portal berita resmi untuk publikasi dan update terbaru.'
    },
    {
      slug: 'digital-transformation',
      title: 'Digital Transformation',
      excerpt: 'Perkembangan produk, teknologi, dan inovasi.'
    }
  ];

  return (
    <main className="container mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">News</h1>
      <p className="mb-10">Berita dan publikasi terbaru.</p>

      <div className="grid gap-6">
        {articles.map((article) => (
          <article key={article.slug} className="border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
            <p>{article.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
