import styles from "@/app/styles/category/categoryCards.module.css";
import ButtonLink from "../buttonLink";
import { formatName } from "@/app/lib/formatName";
export default async function CategoryCard({ product }) {
  // const formatName = (name) => {
  //   const nameSplit = name.split(" ");
  //   const lastWord = nameSplit.pop();
  //   const firstLine = nameSplit.join(" ");
  //   return (
  //     <>
  //       {firstLine} <br /> {lastWord}
  //     </>
  //   );
  // };

  return (
    <article className={styles.productCard}>
      <div className={styles.imgContainer}>
        <picture>
          <source
            srcSet={product.categoryImg.desktop}
            media="(min-width: 1024px)"
          />
          <source
            srcSet={product.categoryImg.tablet}
            media="(min-width: 500px)"
          />
          <img
            className={styles.img}
            src={product.categoryImg.mobile}
            alt={product.alt}
          />
        </picture>
      </div>
      <div className={styles.contentContainer}>
        {product.new && <div className={styles.newProduct}>New Product</div>}
        <h2 className={styles.productName}>{formatName(product.name)}</h2>
        <p className={styles.productDescription}>{product.description}</p>
        <ButtonLink url={`/product/${product._id}`} theme="primary">
          See product
        </ButtonLink>
      </div>
    </article>
  );
}
