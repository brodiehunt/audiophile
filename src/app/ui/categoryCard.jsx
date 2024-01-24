import styles from "@/app/styles/categoryCard.module.css";
import buttonStyles from "@/app/styles/buttonLink.module.css";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function CategoryCard({ card }) {
  return (
    <Link href={card.url} className={styles.card}>
      <Image
        className={styles.img}
        src={card.thumbnail}
        alt="earphones category thumbnail"
      />
      <div className={styles.cardTitle}>{card.title}</div>
      {/* <ButtonLink url={card.url} theme="hollow">
        shop
        <IoIosArrowForward className={styles.svg} />
      </ButtonLink> */}
      <div className={buttonStyles.hollow}>
        shop <IoIosArrowForward className={styles.svg} />
      </div>
    </Link>
  );
}
