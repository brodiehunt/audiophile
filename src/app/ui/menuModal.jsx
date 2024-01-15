import styles from "@/app/styles/menuModal.module.css";
import CategoryCards from "./categoryCards";
export default function MenuModal() {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.categoryCardContainer}>
        <CategoryCards />
      </div>
    </div>
  );
}
