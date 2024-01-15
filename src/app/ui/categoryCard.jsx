import styles from "@/app/styles/categoryCard.module.css";
import ButtonLink from "./buttonLink";
import Image from "next/image";
import currentImage from "../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import { IoIosArrowForward } from "react-icons/io";

export default function CategoryCard({ card }) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.img}
        src={card.thumbnail}
        alt="earphones category thumbnail"
      />
      <div className={styles.cardTitle}>{card.title}</div>
      <ButtonLink url={card.url} theme="hollow">
        shop
        <IoIosArrowForward className={styles.svg} />
      </ButtonLink>
    </div>
  );
}
