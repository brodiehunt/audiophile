"use client";
import styles from "@/app/styles/category/error.module.css";
import buttonStyles from "@/app/styles/buttonLink.module.css";
import ButtonLink from "@/app/ui/buttonLink";
import Link from "next/link";
export default function Error({ error, reset }) {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.oops}>Oops..</div>
      <h1 className={styles.error}>An error has occured.</h1>

      <ButtonLink url="/" theme="primary">
        Go Home
      </ButtonLink>
    </div>
  );
}
