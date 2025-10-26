import Image from 'next/image';
import { Landmark, CircleDollarSign } from 'lucide-react';

const GopayIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#00AED5"/>
        <path d="M17.4309 13.9113C17.4309 13.0494 17.1524 12.2856 16.6343 11.6493C16.1162 11.013 15.3976 10.5367 14.5694 10.284C14.7702 9.99222 14.8806 9.64536 14.8806 9.27909C14.8806 8.35926 14.1201 7.59873 13.2003 7.59873C12.4498 7.59873 11.8098 8.11686 11.6514 8.79222C11.3308 8.65296 10.9712 8.57165 10.5921 8.57165C9.42308 8.57165 8.46505 9.52968 8.46505 10.6987C8.46505 11.136 8.59641 11.5443 8.81721 11.8752C7.80112 12.167 7.07062 13.0868 7.07062 14.1803C7.07062 15.4886 8.16312 16.5811 9.4714 16.5811H14.8806C16.2893 16.5811 17.4309 15.3882 17.4309 13.9113Z" fill="white"/>
    </svg>
);

const DinarkrIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="gold_grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: '#FDE08D', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#D8A441', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#A77715', stopOpacity: 1 }} />
            </radialGradient>
        </defs>
        <circle cx="12" cy="12" r="12" fill="url(#gold_grad)" />
        <path d="M12 7C10.3 8.9 9 11.2 9 13.5C9 16.5 11.5 18 12 18C12.5 18 15 16.5 15 13.5C15 11.2 13.7 8.9 12 7Z" fill="#FDE08D" fillOpacity="0.7" />
    </svg>
);

const PaymentIcon = ({ icon, name }: { icon: React.ReactNode, name: string }) => (
    <div className="flex items-center gap-2 text-primary-foreground/80">
        {icon}
        <span className="text-sm font-medium">{name}</span>
    </div>
);

export function AcceptedPayments() {
  return (
    <div className="flex flex-col items-center gap-4 w-full border-b border-primary-foreground/20 pb-6">
        <h3 className="text-sm font-semibold tracking-wider uppercase text-primary-foreground/70">Pembayaran Diterima</h3>
        <div className="flex flex-wrap items-center justify-center gap-6">
            <PaymentIcon name="Cash/Fiat" icon={<Landmark width={24} height={24} />} />
            <PaymentIcon name="Gopay" icon={<GopayIcon />} />
            <PaymentIcon name="Dinarkr" icon={<DinarkrIcon />} />
            <PaymentIcon name="Bitcoin" icon={<Image src="/icons/crypto/btc.svg" alt="Bitcoin" width={24} height={24} />} />
            <PaymentIcon name="Ethereum" icon={<Image src="/icons/crypto/eth.svg" alt="Ethereum" width={24} height={24} />} />
            <PaymentIcon name="USDC" icon={<Image src="/icons/crypto/usdc.svg" alt="USDC" width={24} height={24} />} />
            <PaymentIcon name="USDT" icon={<Image src="/icons/crypto/usdt.svg" alt="USDT" width={24} height={24} />} />
            <PaymentIcon name="BNB" icon={<Image src="/icons/crypto/bnb.svg" alt="BNB" width={24} height={24} />} />
        </div>
    </div>
  );
}