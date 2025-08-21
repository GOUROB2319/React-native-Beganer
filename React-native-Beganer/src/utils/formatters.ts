export const formatPrice = (price: number): string => {
  return `$${price}`;
};

export const formatDiscountPercentage = (percentage: number): string => {
  return `-${percentage}%`;
};

export const formatRating = (rating: number, reviewCount: number): string => {
  return `(${reviewCount})`;
};

export const formatCountdown = (value: number): string => {
  return value.toString().padStart(2, '0');
};