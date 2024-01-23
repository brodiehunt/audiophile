import styles from "@/app/styles/footer.module.css";
import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContentWrapper}>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <img
              className={styles.logo}
              src="/assets/shared/desktop/logo.svg"
              alt="audiophile logo"
            />
          </div>
          <nav className={styles.footerNav}>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} href="/">
                  Home
                </Link>
              </li>
              <li className={styles.listItem}>
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
        </div>
        <div className={styles.footerContent}>
          <p className={styles.companyDescription}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we are open 7 days a week.
          </p>
          <p className={styles.copyright}>
            Copyright 2021. All Rights Reserved
          </p>
        </div>
        <div className={styles.socialLinks}>
          <Link
            href="https://www.facebook.com/"
            aria-label="Go to our facebook"
            className={styles.socialLink}
          >
            <AiFillFacebook className={styles.socialIcon} />
          </Link>
          <Link
            href="https://twitter.com/"
            aria-label="Go to our twitter"
            className={styles.socialLink}
          >
            <FaTwitter className={styles.socialIcon} />
          </Link>
          <Link
            href="https://www.instagram.com/"
            aria-label="Go to our Instagram"
            className={styles.socialLink}
          >
            <FaInstagram className={styles.socialIcon} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
