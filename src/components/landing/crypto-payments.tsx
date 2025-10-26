import Image from 'next/image';

const CryptoIcon = ({ icon, name }: { icon: string, name: string }) => (
    <div className="flex items-center gap-2 text-primary-foreground/80">
        <Image src={`/icons/crypto/${icon}.svg`} alt={name} width={24} height={24} />
        <span className="text-sm font-medium">{name}</span>
    </div>
);

export function CryptoPayments() {
  return (
    <div className="flex flex-col items-center gap-4 w-full border-b border-primary-foreground/20 pb-6">
        <h3 className="text-sm font-semibold tracking-wider uppercase text-primary-foreground/70">Pembayaran Diterima</h3>
        <div className="flex flex-wrap items-center justify-center gap-6">
            <CryptoIcon name="Bitcoin" icon="btc" />
            <CryptoIcon name="Ethereum" icon="eth" />
            <CryptoIcon name="USDC" icon="usdc" />
            <CryptoIcon name="USDT" icon="usdt" />
            <CryptoIcon name="BNB" icon="bnb" />
        </div>
    </div>
  );
}
