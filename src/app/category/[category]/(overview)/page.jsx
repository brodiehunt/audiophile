import { fetchProductsByCategory } from "@/app/lib/data";
import { notFound } from "next/navigation";
import styles from "@/app/styles/category/categoryCards.module.css";
import CategoryCard from "@/app/ui/category/categoryCard";

export function generateStaticParams() {
  return [
    { category: "headphones" },
    { category: "speakers" },
    { category: "earphones" },
  ];
}

export default async function Page({ params: { category } }) {
  console.log("category is:", category);
  const data = await fetchProductsByCategory(category);
  const products = data.data;

  if (products.length === 0) {
    notFound();
  }

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>{category}</h1>
      </header>
      <section className={styles.cardsSection}>
        {products.map((product, index) => {
          return <CategoryCard key={product._id} product={product} />;
        })}
      </section>
    </>
  );
}
