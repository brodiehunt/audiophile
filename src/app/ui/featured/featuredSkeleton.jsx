import styles from "@/app/styles/featured/featuredSkeleton.module.css";
export default function FeaturedSkeleton() {
  return (
    <div>
      <div className={`${styles.featuredTitle} ${styles.shimmer}`}></div>
      <div className={styles.featuredCardsContainer}>
        <div className={styles.featuredCard}>
          <div className={`${styles.cardImg} ${styles.shimmer}`}></div>
          <div className={`${styles.cardTitle} ${styles.shimmer}`}></div>
          <div className={`${styles.cardButton} ${styles.shimmer}`}></div>
        </div>
        <div className={styles.featuredCard}>
          <div className={`${styles.cardImg} ${styles.shimmer}`}></div>
          <div className={`${styles.cardTitle} ${styles.shimmer}`}></div>
          <div className={`${styles.cardButton} ${styles.shimmer}`}></div>
        </div>
        <div className={styles.featuredCard}>
          <div className={`${styles.cardImg} ${styles.shimmer}`}></div>
          <div className={`${styles.cardTitle} ${styles.shimmer}`}></div>
          <div className={`${styles.cardButton} ${styles.shimmer}`}></div>
        </div>
      </div>
    </div>
  );
}
