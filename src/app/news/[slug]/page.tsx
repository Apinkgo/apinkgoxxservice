type Props = { params: Promise<{ slug: string }> };

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{slug.replace(/-/g, ' ')}</h1>
      <p className="text-muted-foreground mb-8">Draft article page.</p>
      <article className="prose max-w-none">
        <p>Konten berita akan diambil dari Firestore pada tahap berikutnya.</p>
      </article>
    </main>
  );
}
