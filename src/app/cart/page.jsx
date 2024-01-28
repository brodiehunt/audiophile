"use client";
import styles from "@/app/styles/cart/cartPage.module.css";
import buttonStyles from "@/app/styles/buttonLink.module.css";
import GoBack from "../ui/goBack";
import CheckoutForm from "../ui/cart/checkoutForm";
import ConfirmationModal from "../ui/cart/confirmationModal";
import { calculateTotal } from "../lib/calculateTotal";
import { formatPrice } from "../lib/formatPrice";
import CartContext from "../lib/cartContext";
import { useContext, useState } from "react";
import { validationFunctions } from "../lib/validationFunctions";
import getStripe from "@/app/lib/getStripe";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    payment: "cash",
    // eNumber: "",
    // ePin: "",
  };
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const { cart, dispatch } = useContext(CartContext);
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const [confirmationOpen, setConfirmationOpen] = useState(success);

  const cartTotal = calculateTotal(cart);
  const shipping = 5000;
  const calculateVat = cartTotal * 0.2;

  async function handleCheckout() {
    const stripeItemDetails = cart.map((cartItem) => {
      return { price: cartItem.price_Id, quantity: cartItem.quantity };
    });
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: stripeItemDetails,
      mode: "payment",
      successUrl: `${process.env.NEXT_PUBLIC_CLIENT_URL}/cart?success=true`,
      cancelUrl: `${process.env.NEXT_PUBLIC_CLIENT_URL}/cart`,
      customerEmail: formState.email,
    });
  }
  const handleChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "radio") {
      if (value === "cash") {
        const formStateCopy = { ...formState };
        delete formStateCopy.ePin;
        delete formStateCopy.eNumber;
        return setFormState({ ...formStateCopy, [name]: value });
      } else {
        return setFormState({
          ...formState,
          [name]: value,
          eNumber: "",
          ePin: "",
        });
      }
    }
    setFormState({ ...formState, [name]: value });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (!value) return null;
    const validationError = validationFunctions[name](value);
    if (validationError) {
      setErrors({ ...errors, [name]: validationError });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const submitForm = () => {
    if (!cart.length) {
      alert("Add Items to your cart!");
      return;
    }
    const newErrors = {};
    Object.keys(formState).forEach((key) => {
      if (validationFunctions[key]) {
        const error = validationFunctions[key](formState[key]);

        newErrors[key] = error || "";
      }
    });
    setErrors(newErrors);

    // If there are any errors, prevent form from submitting
    const containsError = Object.keys(newErrors).find((key) => newErrors[key]);
    if (containsError) {
      return;
    }
    // Open summary modal or take user to stripe;
    handleCheckout();
  };

  return (
    <div className={styles.cartPage}>
      {confirmationOpen && (
        <ConfirmationModal
          cart={cart}
          cartTotal={cartTotal}
          dispatch={dispatch}
          setConfirmationOpen={setConfirmationOpen}
        />
      )}
      <GoBack />
      <div className={styles.cartCheckout}>
        <div className={styles.checkoutFormContainer}>
          <h1 className={styles.checkoutTitle}>checkout</h1>
          <CheckoutForm
            handleChange={handleChange}
            handleBlur={handleBlur}
            formState={formState}
            errors={errors}
          />
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
