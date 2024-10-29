export const formatNumber = (value) =>
  new Intl.NumberFormat("en", { maximumFractionDigits: 0 }).format(value);
