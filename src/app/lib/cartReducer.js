export default function cartReducer(state, action) {
  switch (action.type) {
    // This is for the products page.
    case "add": {
      const item = action.data;
      const isInCart = state.find((cartItem) => {
        return cartItem._id === item._id;
      });
      if (isInCart) {
        return state.map((cartItem) => {
          if (cartItem._id === item._id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + item.quantity,
            };
          }
          return cartItem;
        });
      }
      return [item, ...state];
    }
    // Remove a single item from the cart
    case "remove": {
      // will just get an item and remove it (filter)
      const item = action.data;
      const newCart = state.filter((cartItem) => {
        return cartItem._id !== item._id;
      });
      return newCart;
    }
    // Increment the cart by 1
    case "increment": {
      const item = action.data;
      const newCart = state.map((cartItem) => {
        if (cartItem._id === item._id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      return newCart;
    }
    // decrement the item in the cart by 1
    case "decrement": {
      const item = action.data;
      const newCart = state.map((cartItem) => {
        if (cartItem._id === item._id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
      return newCart;
    }
    // reset the cart to an empty array
    case "clear": {
      return [];
    }
    default: {
      return state;
    }
  }
}
