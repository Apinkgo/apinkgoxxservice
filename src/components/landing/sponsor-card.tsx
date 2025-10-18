import { Card, CardContent } from '@/components/ui/card';

export function SponsorCard() {
  return (
    <Card className="flex items-center justify-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardContent className="p-0">
        <iframe
          src="https://github.com/sponsors/Apinkgo/card"
          title="Sponsor Apinkgo"
          height="225"
          width="300"
          style={{ border: 0, borderRadius: '6px' }}
        ></iframe>
      </CardContent>
    </Card>
  );
}
