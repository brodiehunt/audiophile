import Link from "next/link";
import styles from "@/app/styles/buttonLink.module.css";

export default function ButtonLink({ children, theme, url }) {
  const getClassName = (theme) => {
    if (theme === "primary") {
      return styles.primary;
    } else if (theme === "secondary") {
      return styles.secondary;
    } else if (theme === "hollow") {
      return styles.hollow;
    } else {
      return styles.secondary2;
    }
  };
  const styleToApply = getClassName(theme);
  return (
    <Link href={url} className={styleToApply}>
      {children}
    </Link>
  );
}
