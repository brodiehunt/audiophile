import styles from "@/app/styles/product/product.module.css";

export default function ProductFeatures({ product }) {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.features}>
        <h2 className={styles.featuresTitle}>Features</h2>
        {product.features.map((feature, index) => {
          return (
            <p className={styles.featureParagraph} key={index}>
              {feature}
            </p>
          );
        })}
      </div>
      <div className={styles.inTheBox}>
        <h2 className={styles.inTheBoxTitle}>In The Box</h2>
        <ul className={styles.itemsList}>
          {product.comesWith.map((item, index) => {
            return (
              <li className={styles.item} key={index}>
                <div className={styles.itemQuantity}>{item.quantity}x</div>
                <div className={styles.itemName}>{item.item}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
