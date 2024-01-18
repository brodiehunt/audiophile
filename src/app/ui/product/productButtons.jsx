"use client";
import { useState, useContext } from "react";
import styles from "@/app/styles/product/product.module.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import LinkStyles from "@/app/styles/buttonLink.module.css";
export default function ProductButtons() {
  const [productCount, setProductCount] = useState(1);

  const incrementProduct = () => {
    setProductCount(productCount + 1);
  };

  const decrementProduct = () => {
    if (productCount === 1) return;
    setProductCount(productCount - 1);
  };

  const handleAddToCart = () => {
    console.log("addding items to cart", productCount);
  };
  return (
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
  );
}
