import styles from "@/app/styles/category/categoryCardsSkeleton.module.css";

export default function CategoryCardSkeleton() {
  return (
    <>
      <div className={`${styles.header} ${styles.shimmer}`}>
        <h1 className={styles.pageTitle}></h1>
      </div>
      <section className={styles.cardsSection}>
        <article className={styles.productCard}>
          <div className={`${styles.imgContainer} ${styles.shimmer}`}></div>
          <div className={styles.contentContainer}>
            <div className={styles.productNameContainer}>
              <div className={`${styles.productName1} ${styles.shimmer}`}></div>
              <div
                className={`${styles.productName2}  ${styles.shimmer}`}
              ></div>
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
            </div>
            <div className={`${styles.button} ${styles.shimmer}`}></div>
          </div>
        </article>
        <article className={styles.productCard}>
          <div className={`${styles.imgContainer} ${styles.shimmer}`}></div>
          <div className={styles.contentContainer}>
            <div className={styles.productNameContainer}>
              <div className={`${styles.productName1} ${styles.shimmer}`}></div>
              <div
                className={`${styles.productName2}  ${styles.shimmer}`}
              ></div>
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
            </div>
            <div className={`${styles.button} ${styles.shimmer}`}></div>
          </div>
        </article>
      </section>
    </>
  );
}
