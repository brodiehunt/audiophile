"use client";
import styles from "@/app/styles/notification.module.css";
import { useState, useRef } from "react";
export default function useCartNotification() {
  const [notification, setNotification] = useState(null);
  console.log(notification);
  const timeoutId = useRef(null);

  const activateNotification = (name, url, quantity) => {
    clearTimeout(timeoutId.current);
    setNotification({ name, url, quantity });
    console.log("notification set");
    timeoutId.current = setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const NotificationComponent = () => {
    if (!notification) return null;
    return (
      <div className={styles.notification}>
        <img
          className={styles.productImg}
          src={notification.url}
          alt="Product added to cart"
        />
        <div className={styles.productInfo}>
          <div className={styles.productName}>
            {notification.name} added to cart!
          </div>
          <div className={styles.productQuantity}>
            Quantity: {notification.quantity}
          </div>
        </div>
      </div>
    );
  };

  return { activateNotification, NotificationComponent };
}
