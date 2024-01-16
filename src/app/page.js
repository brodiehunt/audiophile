import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./ui/hero";
import CategoryCards from "./ui/categoryCards";
import FeaturedProjects from "./ui/featuredProjects";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <CategoryCards />
      <FeaturedProjects />
    </main>
  );
}
