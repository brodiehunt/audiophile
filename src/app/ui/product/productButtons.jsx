"use client";
import { useState, useContext } from "react";
import CartContext from "@/app/lib/cartContext";
import styles from "@/app/styles/product/product.module.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import LinkStyles from "@/app/styles/buttonLink.module.css";
import useCartNotification from "@/app/lib/useCartNotification";

export default function ProductButtons({ product }) {
  const [productCount, setProductCount] = useState(1);
  const { store, dispatch } = useContext(CartContext);
  const { activateNotification, NotificationComponent } = useCartNotification();
  const incrementProduct = () => {
    setProductCount(productCount + 1);
  };

  const decrementProduct = () => {
    if (productCount === 1) return;
    setProductCount(productCount - 1);
  };

  const handleAddToCart = () => {
    const item = {
      _id: product._id,
      abbreviation: product.abbreviation,
      price: product.price,
      cartImg: product.cartImg,
      alt: product.alt,
      quantity: productCount,
      price_Id: product.price_Id,
    };
    activateNotification(product.abbreviation, product.cartImg, productCount);
    dispatch({
      type: "add",
      data: item,
    });
  };

  return (
    <>
      <NotificationComponent />
      <div className={styles.buttonsContainer}>
        <div className={styles.countContainer}>
          <button className={styles.countButton} onClick={decrementProduct}>
            <FaMinus className={styles.countIcon} />
          </button>
          <div className={styles.count}>{productCount}</div>
          <button className={styles.countButton} onClick={incrementProduct}>
            <FaPlus className={styles.countIcon} />
          </button>
        </div>
        <button className={LinkStyles.primary} onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </>
  );
}
