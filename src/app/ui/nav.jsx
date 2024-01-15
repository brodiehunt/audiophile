"use client";

import { IoCartOutline } from "react-icons/io5";
import styles from "@/app/styles/nav.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Nav({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`${styles.headerButton} ${styles.hamburgerButton}`}
        >
          <img
            src="/assets/shared/tablet/icon-hamburger.svg"
            alt="Open menu hamburger"
          />
        </button>
        <img src="/assets/shared/desktop/logo.svg" alt="audiophile logo" />
        <nav className={styles.nav}>
          <ul className={styles.linkList}>
            <li>
              <Link className={styles.link} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/category/headphones">
                Headphones
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/category/speakers">
                Speakers
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/category/earphones">
                Earphones
              </Link>
            </li>
          </ul>
        </nav>
        <button className={`${styles.headerButton} ${styles.cartButton}`}>
          <IoCartOutline className={styles.svg} />
        </button>
        {menuOpen && children}
      </header>
    </div>
  );
}
