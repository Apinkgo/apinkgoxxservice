import { Card, CardContent } from '@/components/ui/card';

export function SponsorCard() {
  return (
    <Card className="flex items-center justify-center p-6 transition-shadow duration-300 hover:shadow-xl">
      <CardContent className="p-0">
        <iframe
          src="https://github.com/sponsors/Apinkgo/button"
          title="Sponsor Apinkgo"
          height="32"
          width="114"
          style={{ border: 0, borderRadius: '6px' }}
        ></iframe>
      </CardContent>
    </Card>
  );
}
