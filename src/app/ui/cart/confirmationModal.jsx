import styles from "@/app/styles/cart/confirmationModal.module.css";
import ButtonStyles from "@/app/styles/buttonLink.module.css";
import { FaCheck } from "react-icons/fa6";
import { formatPrice } from "@/app/lib/formatPrice";
import { useRouter } from "next/navigation";

export default function ConfirmationModal({
  cart,
  cartTotal,
  dispatch,
  setConfirmationOpen,
}) {
  const numOtherItems = cart.length - 1;
  const router = useRouter();
  const backToHome = () => {
    setConfirmationOpen(false);

    dispatch({
      type: "clear",
    });
    router.push("/");
  };

  return (
    <div className={styles.modal}>
      <div className={styles.confirmationContainer}>
        <div className={styles.checkContainer}>
          <FaCheck className={styles.checkIcon} />
        </div>
        <h1 className={styles.confirmationTitle}>Thank you for your order</h1>
        <p className={styles.confirmationStatement}>
          You will recieve an email confirmation shortly
        </p>
        <div className={styles.orderSummary}>
          <div className={styles.items}>
            <div className={styles.firstItem}>
              <img
                className={styles.itemImg}
                src={cart[0]?.cartImg}
                alt={cart[0]?.alt}
              />
              <div className={styles.itemInfo}>
                <div className={styles.itemName}>{cart[0]?.abbreviation}</div>
                <div className={styles.itemPrice}>
                  {formatPrice(cart[0]?.price)}
                </div>
              </div>
              <div className={styles.itemQuantity}>x{cart[0]?.quantity}</div>
            </div>
            {numOtherItems > 1 && (
              <div className={styles.otherItems}>
                and {numOtherItems} other item(s)
              </div>
            )}
          </div>
          <div className={styles.grandTotal}>
            <div className={styles.grandTotalLabel}>Grand Total</div>
            <div className={styles.grandTotalPrice}>
              {formatPrice(cartTotal)}
            </div>
          </div>
        </div>
        <button className={ButtonStyles.primary} onClick={backToHome}>
          Back To Home
        </button>
      </div>
    </div>
  );
}
