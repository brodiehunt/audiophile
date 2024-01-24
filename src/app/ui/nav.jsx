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
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    setCartOpen(false);
    document.body.style.overflow = "unset";
  }, [pathname]);

  const toggleMenu = () => {
    if (menuOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
    setCartOpen(false);
    setMenuOpen(!menuOpen);
  };

  const toggleCart = () => {
    if (cartOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
    setMenuOpen(false);
    setCartOpen(!cartOpen);
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button
          onClick={toggleMenu}
          className={`${styles.headerButton} ${styles.hamburgerButton}`}
        >
          <img
            src="/assets/shared/tablet/icon-hamburger.svg"
            alt="Open menu hamburger"
          />
        </button>
        <Link href="/">
          <img src="/assets/shared/desktop/logo.svg" alt="audiophile logo" />
        </Link>

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
          onClick={toggleCart}
        >
          {cart.length > 0 && (
            <div className={styles.cartCount}>{cart.length}</div>
          )}
          <IoCartOutline className={styles.svg} />
        </button>
        {cartOpen && (
          <CartModal setCartOpen={setCartOpen} toggleCart={toggleCart} />
        )}
        {menuOpen && children}
      </header>
    </div>
  );
}
