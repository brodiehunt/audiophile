import styles from "@/app/styles/product/productSkeleton.module.css";

export default function ProductSkeleton() {
  return (
    <div className={styles.productMainContainer}>
      <div className={`${styles.productImgContainer} ${styles.shimmer}`}></div>
      <div className={styles.productInfoContainer}>
        <div className={styles.productNameContainer}>
          <div className={`${styles.productName1} ${styles.shimmer}`}></div>
          <div className={`${styles.productName2} ${styles.shimmer}`}></div>
        </div>
        <div className={styles.productDescriptionContainer}>
          <div
            className={`${styles.productDescription} ${styles.shimmer}`}
          ></div>
          <div
            className={`${styles.productDescription} ${styles.shimmer}`}
          ></div>
          <div
            className={`${styles.productDescription} ${styles.shimmer}`}
          ></div>
          <div
            className={`${styles.productDescriptionLast} ${styles.shimmer}`}
          ></div>
        </div>
        <div className={`${styles.productPrice} ${styles.shimmer}`}></div>
        <div className={styles.buttonsContainer}>
          <div className={`${styles.countContainer} ${styles.shimmer}`}></div>
          <div className={`${styles.addToCartButton} ${styles.shimmer}`}></div>
        </div>
      </div>
    </div>
  );
}
