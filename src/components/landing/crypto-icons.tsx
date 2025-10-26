// Custom Crypto Icons to avoid dependency issues with react-crypto-icons and React 18

type IconProps = {
  size?: number | string;
  className?: string;
};

export const Btc = ({ size = 24, className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    color="#f7931a"
  >
    <path d="M18.21 7.42a4.24 4.24 0 0 0-5.3-1.61 4.24 4.24 0 0 0-3.32 4.14v4.24h2.55V9.45a1.68 1.68 0 0 1 1.7-1.67c.88 0 1.7.74 1.7 1.64v8.32h2.55v-8.4a4.24 4.24 0 0 0-2.43-3.9zM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
    <path d="M14.7 13.23h-5.46" />
    <path d="M14.7 10.1h-5.46" />
    <path d="M11.97 18.2v-2.14" />
    <path d="M11.97 7.93V5.8" />
  </svg>
);

export const Eth = ({ size = 24, className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    color="#627eea"
  >
    <path d="m12 3.8-8.2 6.4 8.2 6.4 8.2-6.4z" />
    <path d="m12 3.8 8.2 6.4" />
    <path d="m12 16.6-8.2-6.4" />
    <path d="M12 21v-4.4" />
    <path d="M3.8 10.2 12 16.6l8.2-6.4" />
  </svg>
);

export const Usdc = ({ size = 24, className }: IconProps) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
        color="#2775ca"
    >
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M14.53 14.39c-1.34.8-3.07.8-4.41 0-.6-.35-.97-1-.97-1.7V10.1c0-.6.3-1.12.8-1.48 1.48-1.05 3.5-1.05 4.98 0 .5.36.8 1 .8 1.58v1.31c0 .6-.3 1.12-.8 1.48z"/>
        <path d="M12 15.5v-7"/>
    </svg>
);

export const Usdt = ({ size = 24, className }: IconProps) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
        color="#26a17b"
    >
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M14 9.5h-4V12h1.5v2.5h1V12H14V9.5z"/>
    </svg>
);

export const Bnb = ({ size = 24, className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        color="#f0b90b"
    >
        <path d="M4 12.83V11.2L12 7l8 4.2v1.63L12 17l-8-4.17zM12 21l8-4.2V9.8L12 14l-8-4.2v6.98L12 21zM12 3L4 7.2v1.6L12 13l8-4.2V7.2L12 3z"/>
        <path d="m16.5 10.5-4.5 2.5-4.5-2.5"/>
    </svg>
);
