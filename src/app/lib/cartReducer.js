export default function cartReducer(state, action) {
  switch (action.type) {
    // Restore
    case "restore": {
      const restoredCart = action.data;
      return restoredCart;
    }
    // This is for the products page.
    case "add": {
      const item = action.data;
      const isInCart = state.find((cartItem) => {
        return cartItem._id === item._id;
      });
      if (isInCart) {
        const newCart = state.map((cartItem) => {
          if (cartItem._id === item._id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + item.quantity,
            };
          }
          return cartItem;
        });
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      }
      localStorage.setItem("cart", JSON.stringify([item, ...state]));
      return [item, ...state];
    }
    // Remove a single item from the cart
    case "remove": {
      // will just get an item and remove it (filter)
      const item = action.data;
      const newCart = state.filter((cartItem) => {
        return cartItem._id !== item._id;
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
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
      localStorage.setItem("cart", JSON.stringify(newCart));
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
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    }
    // reset the cart to an empty array
    case "clear": {
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    }
    default: {
      return state;
    }
  }
}
