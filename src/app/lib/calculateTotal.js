export const calculateTotal = (cart) => {
  const total = cart.reduce((total, currentItem) => {
    const itemTotal = currentItem.price * currentItem.quantity;
    return total + itemTotal;
  }, 0);

  return total;
};
