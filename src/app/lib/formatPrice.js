export const formatPrice = (price) => {
  // Find the price in dollars
  // for conver to string?
  // inset a comma at indexes divisible by three (from the end?)

  const priceInDollars = price / 100;
  const priceString = priceInDollars.toLocaleString("en-US");

  return `$ ${priceString}`;
};
