const CryptoIcon = ({ children, name }: { children: React.ReactNode, name: string }) => (
    <div className="flex items-center gap-2 text-primary-foreground/80">
        {children}
        <span className="text-sm font-medium">{name}</span>
    </div>
);

const BtcIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-orange-400">
        <path d="M17.7 19.4c-2.3 2.3-5.2 3.6-8.2 3.6-5 0-9-4-9-9s4-9 9-9c3.1 0 6 .9 8.2 3.6" />
        <path d="M7 11.5h5.5a2.5 2.5 0 0 1 0 5H7" />
        <path d="M10 11.5v5" />
        <path d="M7 8h5.5a2.5 2.5 0 0 0 0-5H7" />
        <path d="M10 8V3" />
    </svg>
);

const EthIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-300">
        <path d="M12 2l6 7-6 7-6-7z" />
        <path d="M12 16v5" />
        <path d="M6 9l6 7 6-7" />
    </svg>
);

const UsdIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-400">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4h-6" />
        <path d="M12 6v12" />
    </svg>
);

const BnbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-yellow-400">
        <path d="m6.1 6.1 4.2-4.2 1.6 1.6-3 3-1.8-1.8z" />
        <path d="m17.9 6.1 1.8-1.8-3-3-1.6 1.6 4.2 4.2z" />
        <path d="m19.7 7.9 4.2-4.2-1.8-1.8-4.2 4.2 1.8 1.8z" />
        <path d="m12 12 1.8-1.8-1.8-1.8-1.8 1.8L12 12z" />
        <path d="m4.3 7.9 1.8 1.8 4.2-4.2-1.8-1.8L4.3 7.9z" />
        <path d="m6.1 17.9 1.8 1.8 3-3-1.6-1.6-3.2 2.8z" />
        <path d="m12 12 1.8 1.8-1.8 1.8-1.8-1.8L12 12z" />
        <path d="m19.7 16.1 1.8 1.8-4.2 4.2-1.8-1.8 4.2-4.2z" />
        <path d="m17.9 6.1-4.2 4.2 1.8 1.8 4.2-4.2-1.8-1.8z" />
    </svg>
);

export function CryptoPayments() {
  return (
    <div className="flex flex-col items-center gap-4 w-full border-b border-primary-foreground/20 pb-6">
        <h3 className="text-sm font-semibold tracking-wider uppercase text-primary-foreground/70">Pembayaran Diterima</h3>
        <div className="flex flex-wrap items-center justify-center gap-6">
            <CryptoIcon name="Bitcoin"><BtcIcon /></CryptoIcon>
            <CryptoIcon name="Ethereum"><EthIcon /></CryptoIcon>
            <CryptoIcon name="USDC"><UsdIcon /></CryptoIcon>
            <CryptoIcon name="USDT"><UsdIcon /></CryptoIcon>
            <CryptoIcon name="BNB"><BnbIcon /></CryptoIcon>
        </div>
    </div>
  );
}