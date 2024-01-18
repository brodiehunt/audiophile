export const formatPrice = (price) => {
  const priceInDollars = price / 100;
  return `$ ${priceInDollars}`;
};
