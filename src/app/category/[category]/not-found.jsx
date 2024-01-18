import styles from "@/app/styles/category/error.module.css";
export default function NotFound() {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.error}>
        It looks like this category doesnt exist
      </div>
    </div>
  );
}
