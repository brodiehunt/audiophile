import { fetchFeaturedProducts } from "@/app/lib/data";
import styles from "@/app/styles/featured/featuredCards.module.css";
import ButtonLink from "../buttonLink";
export default async function FeaturedCards({ productId }) {
  console.log("featured", productId);
  const data = await fetchFeaturedProducts(productId);
  const featured = data.data;

  return (
    <section>
      <h2 className={styles.featuredTitle}>You May Also Like</h2>
      <div className={styles.featuredCardsContainer}>
        {featured.map((item, index) => {
          return (
            <div key={item._id} className={styles.featuredCard}>
              <img
                src={item.productImg.mobile}
                alt="fix later"
                className={styles.cardImg}
              />
              <h3 className={styles.cardTitle}>{item.name}</h3>
              <div className={styles.buttonContainer}>
                <ButtonLink url={`/product/${item._id}`} theme="primary">
                  see product
                </ButtonLink>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
