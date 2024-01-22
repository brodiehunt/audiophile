"use client";
import styles from "@/app/styles/cart/cartPage.module.css";
import buttonStyles from "@/app/styles/buttonLink.module.css";
import GoBack from "../ui/goBack";
import CheckoutForm from "../ui/cart/checkoutForm";
import { calculateTotal } from "../lib/calculateTotal";
import { formatPrice } from "../lib/formatPrice";
import CartContext from "../lib/cartContext";
import { useContext, useState } from "react";

export default function Page() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    eNumber: "",
    ePin: "",
  };
  const [formState, setFormState] = useState(initialState);
  const { cart, dispatch } = useContext(CartContext);
  const cartTotal = calculateTotal(cart);
  const shipping = 5000;
  const calculateVat = cartTotal * 0.2;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  const submitForm = () => {
    console.log("submit Form");
  };

  return (
    <div className={styles.cartPage}>
      <GoBack />
      <div className={styles.cartCheckout}>
        <div className={styles.checkoutFormContainer}>
          <h1 className={styles.checkoutTitle}>checkout</h1>
          <CheckoutForm handleChange={handleChange} formState={formState} />
        </div>
        <div className={styles.summaryContainer}>
          <h2 className={styles.summaryTitle}>Summary</h2>
          <div className={styles.cartItemsContainer}>
            {cart.map((item) => {
              return (
                <div key={item._id} className={styles.cartItem}>
                  <img
                    className={styles.cartImage}
                    src={item.cartImg}
                    alt={item.alt}
                  />
                  <div className={styles.infoContainer}>
                    <div className={styles.abbreviation}>
                      {item.abbreviation}
                    </div>
                    <div className={styles.price}>
                      {formatPrice(item.price)}
                    </div>
                  </div>
                  <div className={styles.quantityContainer}>
                    x{item.quantity}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.totalContainer}>
            <span className={styles.label}>Total</span>
            <span className={styles.info}>{formatPrice(cartTotal)}</span>
          </div>
          <div className={styles.shippingContainer}>
            <span className={styles.label}>Shipping</span>
            <span className={styles.info}>{formatPrice(shipping)}</span>
          </div>
          <div className={styles.vatContainer}>
            <span className={styles.label}>Vat (included)</span>
            <span className={styles.info}>{formatPrice(calculateVat)}</span>
          </div>
          <div className={styles.grandTotalContainer}>
            <span className={styles.label}>Grand Total</span>
            <span className={`${styles.info} ${styles.orange}`}>
              {formatPrice(cartTotal + shipping)}
            </span>
          </div>
          <button onClick={submitForm} className={buttonStyles.primary}>
            Continue & pay
          </button>
        </div>
      </div>
    </div>
  );
}
