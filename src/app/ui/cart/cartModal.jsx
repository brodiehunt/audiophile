import styles from "@/app/styles/cart/cartModal.module.css";
import CartContext from "../../lib/cartContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import ButtonLink from "../buttonLink";
import buttonStyles from "@/app/styles/buttonLink.module.css";
import CartItem from "./cartItem";
import { calculateTotal } from "@/app/lib/calculateTotal";
import { formatPrice } from "@/app/lib/formatPrice";

export default function CartModal({ setCartOpen, toggleCart }) {
  const { cart, dispatch } = useContext(CartContext);
  const cartTotal = calculateTotal(cart);
  const router = useRouter();
  // then use the format money function on this total.

  const removeAll = () => {
    dispatch({
      type: "clear",
    });
  };

  const navigateToCheckout = () => {
    toggleCart();
    router.push("/cart");
  };

  return (
    <div className={styles.cartModal} onClick={toggleCart}>
      <div
        className={styles.cartContainer}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.cartHeader}>
          <h3 className={styles.cartTitle}>Cart ({cart.length})</h3>
          <button className={styles.removeAll} onClick={removeAll}>
            Remove all
          </button>
        </div>
        <div className={styles.cartItems}>
          {cart.length ? (
            cart.map((cartItem) => {
              return <CartItem key={cartItem._id} item={cartItem} />;
            })
          ) : (
            <div className={styles.cartEmpty}>Your cart is empty</div>
          )}
        </div>
        <div className={styles.totalContainer}>
          <span className={styles.totalLabel}>total</span>{" "}
          <span className={styles.total}>{formatPrice(cartTotal)}</span>
        </div>
        <button className={buttonStyles.primary} onClick={navigateToCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}
