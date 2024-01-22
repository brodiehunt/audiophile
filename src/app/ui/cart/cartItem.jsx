import styles from "@/app/styles/cart/cartItem.module.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useContext } from "react";
import CartContext from "@/app/lib/cartContext";
import { formatPrice } from "@/app/lib/formatPrice";
export default function CartItem({ item }) {
  const { dispatch } = useContext(CartContext);
  // Need to import format money function

  const incrementCartItem = () => {
    // Increase state quantity of cart item.
    dispatch({
      type: "increment",
      data: item,
    });
  };

  const decrementCartItem = () => {
    // determine if current count is at 1 or >
    if (item.quantity === 1) {
      dispatch({
        type: "remove",
        data: item,
      });
    } else {
      dispatch({
        type: "decrement",
        data: item,
      });
    }
    // if 1 remove from cart completey
    // if more than one, decrement the quantity
  };

  return (
    <div className={styles.cartItem}>
      <img className={styles.cartImage} src={item.cartImg} alt={item.alt} />
      <div className={styles.infoContainer}>
        <div className={styles.abbreviation}>{item.abbreviation}</div>
        <div className={styles.price}>{formatPrice(item.price)}</div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={decrementCartItem} className={styles.button}>
          <FaMinus className={styles.buttonSvg} />
        </button>
        <div className={styles.quantity}>{item.quantity}</div>
        <button onClick={incrementCartItem} className={styles.button}>
          <FaPlus className={styles.buttonSvg} />
        </button>
      </div>
    </div>
  );
}
