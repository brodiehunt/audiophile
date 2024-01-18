import { Suspense } from "react";
import ProductSkeleton from "@/app/ui/product/productSkeleton";
import FeaturedSkeleton from "@/app/ui/featured/featuredSkeleton";
import Product from "@/app/ui/product/product";
import FeaturedCards from "@/app/ui/featured/featuredCards";
import styles from "@/app/styles/product/productPage.module.css";
export default function Page({ params: { productId } }) {
  console.log(productId);
  return (
    <div className={styles.productPageContainer}>
      <Suspense fallback={<ProductSkeleton />}>
        <Product productId={productId} />
      </Suspense>
      <Suspense fallback={<FeaturedSkeleton />}>
        <FeaturedCards productId={productId} />
      </Suspense>
    </div>
  );
}
