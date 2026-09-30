const C_PATH = 'M25 8.4H12.3a3.3 3.3 0 0 0-3.3 3.3v8.6a3.3 3.3 0 0 0 3.3 3.3H25';
export const BrandMark = ({ size = 22 }: { size?: number | string }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden focusable="false">
    <rect width="32" height="32" rx="7" fill="#FCEE0A" />
    <path d={C_PATH} fill="none" stroke="#0D0D1A" strokeWidth="4" />
  </svg>
);