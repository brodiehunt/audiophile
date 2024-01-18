import { fetchProductById } from "@/app/lib/data";
import styles from "@/app/styles/product/productPage.module.css";
import ProductMain from "./productMain";
import ProductFeatures from "./productFeatures";
import ImgGallery from "./imgGallery";
export default async function Product({ productId }) {
  console.log("Product", productId);
  const data = await fetchProductById(productId);
  const product = data.data;
  console.log(product);
  return (
    <section className={styles.productContainer}>
      <ProductMain product={product} />
      <ProductFeatures product={product} />
      <ImgGallery galleryImages={product.galleryImages} />
    </section>
  );
}
