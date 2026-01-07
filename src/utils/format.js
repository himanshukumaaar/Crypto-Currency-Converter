export const fmtCurrency = (n, code = 'USD') =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: code }).format(n);

export const fmtPct = (n) =>
  `${(n ?? 0).toFixed(2)}%`;

export const classByChange = (n) =>
  (n ?? 0) >= 0 ? 'price-up' : 'price-down';
