import { fetchFeaturedProducts } from "@/app/lib/data";
export default async function FeaturedCards({ productId }) {
  console.log("featured", productId);
  const featured = await fetchFeaturedProducts(productId);

  return (
    <section>
      <div>This is the featured cards</div>
    </section>
  );
}
