import CategoryCard from "@/app/ui/categoryCard";
import styles from "@/app/styles/categoryCards.module.css";
import earphonesThumbnail from "../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphonesThumbnail from "../../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnail from "../../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";

const cardsInfo = [
  {
    title: "headphones",
    thumbnail: headphonesThumbnail,
    url: "/category/headphones",
  },
  {
    title: "speakers",
    thumbnail: speakersThumbnail,
    url: "/category/speakers",
  },
  {
    title: "earphones",
    thumbnail: earphonesThumbnail,
    url: "/category/earphones",
  },
];
export default function CategoryCards() {
  return (
    <nav className={styles.secondaryNav}>
      {cardsInfo.map((card, index) => {
        return <CategoryCard key={index} card={card} />;
      })}
    </nav>
  );
}
