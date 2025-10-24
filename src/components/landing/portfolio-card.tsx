import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type PortfolioCardProps = {
  title: string;
  description: string;
  tags: string[];
  image?: ImagePlaceholder;
};

export function PortfolioCard({ title, description, tags, image }: PortfolioCardProps) {
  return (
    <Card className="group overflow-hidden rounded-lg border bg-card shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {image && (
        <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <div className="p-4">
        <CardTitle className="text-xl font-headline mb-2">{title}</CardTitle>
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
