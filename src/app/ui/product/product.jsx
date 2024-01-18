import { fetchProductById } from "@/app/lib/data";
import ProductMain from "./productMain";
import ProductFeatures from "./productFeatures";

export default async function Product({ productId }) {
  console.log("Product", productId);
  const data = await fetchProductById(productId);
  const product = data.data;
  console.log(product);
  return (
    <section>
      <ProductMain product={product} />
      <ProductFeatures product={product} />
    </section>
  );
}
