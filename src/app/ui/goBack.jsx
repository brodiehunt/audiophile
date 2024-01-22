"use client";
import styles from "@/app/styles/goBack.module.css";
import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();
  return (
    <div className={styles.goBackContainer}>
      <button className={styles.goBackButton} onClick={() => router.back()}>
        Go Back
      </button>
    </div>
  );
}
