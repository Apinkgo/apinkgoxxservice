import { Card, CardContent } from '@/components/ui/card';

export function SponsorCard() {
  return (
    <Card className="flex items-center justify-center p-6 transition-shadow duration-300 hover:shadow-xl md:col-span-2 lg:col-span-1">
      <CardContent className="p-0">
        <iframe
          src="https://github.com/sponsors/Apinkgo/card"
          title="Sponsor Apinkgo"
          height="225"
          width="600"
          style={{ border: 0 }}
        ></iframe>
      </CardContent>
    </Card>
  );
}
