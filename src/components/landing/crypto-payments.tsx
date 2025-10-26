import { Btc, Eth, Usdc, Usdt, Bnb } from './crypto-icons';

const CryptoIcon = ({ children, name }: { children: React.ReactNode, name: string }) => (
    <div className="flex items-center gap-2 text-primary-foreground/80">
        {children}
        <span className="text-sm font-medium">{name}</span>
    </div>
);

export function CryptoPayments() {
  return (
    <div className="flex flex-col items-center gap-4 w-full border-b border-primary-foreground/20 pb-6">
        <h3 className="text-sm font-semibold tracking-wider uppercase text-primary-foreground/70">Pembayaran Diterima</h3>
        <div className="flex flex-wrap items-center justify-center gap-6">
            <CryptoIcon name="Bitcoin"><Btc size={24} /></CryptoIcon>
            <CryptoIcon name="Ethereum"><Eth size={24} /></CryptoIcon>
            <CryptoIcon name="USDC"><Usdc size={24} /></CryptoIcon>
            <CryptoIcon name="USDT"><Usdt size={24} /></CryptoIcon>
            <CryptoIcon name="BNB"><Bnb size={24} /></CryptoIcon>
        </div>
    </div>
  );
}
