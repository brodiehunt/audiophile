import styles from "@/app/styles/goBack.module.css";
import Link from "next/link";
export default function GoBack() {
  return (
    <div className={styles.goBackContainer}>
      <Link className={styles.goBackLink} href="/">
        Go Back
      </Link>
    </div>
  );
}
