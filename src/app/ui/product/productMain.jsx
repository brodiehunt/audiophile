import styles from "@/app/styles/product/product.module.css";
import ProductButtons from "./productButtons";
import { formatName } from "@/app/lib/formatName";
import { formatPrice } from "@/app/lib/formatPrice";
export default function ProductMain({ product }) {
  return (
    <div className={styles.productMainContainer}>
      <div className={styles.productImgContainer}>
        <picture>
          <source
            srcSet={product.productImg.desktop}
            media="(min-width: 1024px)"
          />
          <source
            srcSet={product.productImg.tablet}
            media="(min-width: 768px)"
          />
          <img
            className={styles.productImg}
            src={product.productImg.mobile}
            alt={product.alt}
          />
        </picture>
      </div>
      <div className={styles.productInfoContainer}>
        {product?.new && <div className={styles.productNew}>new product</div>}
        <h1 className={styles.productName}>{formatName(product.name)}</h1>
        <p className={styles.productDescription}>{product?.description}</p>
        <div className={styles.productPrice}>{formatPrice(product.price)}</div>
        {/* This is where a client component will go to add cart */}
        <ProductButtons />
      </div>
    </div>
  );
}
