"use client";

import { IoCartOutline } from "react-icons/io5";
import styles from "@/app/styles/nav.module.css";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import CartModal from "./cart/cartModal";
import { usePathname } from "next/navigation";
import CartContext from "../lib/cartContext";

export default function Nav({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(true);
  const { cart } = useContext(CartContext);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    setCartOpen(false);
  }, [pathname]);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button
          onClick={() => {
            setCartOpen(false);
            setMenuOpen(!menuOpen);
          }}
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
        <button
          className={`${styles.headerButton} ${styles.cartButton}`}
          onClick={() => {
            setMenuOpen(false);
            setCartOpen(!cartOpen);
          }}
        >
          {cart.length && <div className={styles.cartCount}>{cart.length}</div>}
          <IoCartOutline className={styles.svg} />
        </button>
        {cartOpen && <CartModal setCartOpen={setCartOpen} />}
        {menuOpen && children}
      </header>
    </div>
  );
}
