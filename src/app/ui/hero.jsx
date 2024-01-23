import styles from "@/app/styles/hero.module.css";
import ButtonLink from "./buttonLink";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <picture>
        <source
          srcSet="/assets/home/desktop/image-hero.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/assets/home/tablet/image-header.jpg"
          media="(min-width: 650px)"
        />
        <img
          className={styles.heroImg}
          src="/assets/home/mobile/image-header.jpg"
          alt="hero-img"
        />
      </picture>
      <div className={styles.heroContent}>
        <div className={styles.newProduct}>New product</div>
        <h1 className={styles.heroTitle}>
          xx99 Mark II <br /> Headphones
        </h1>
        <p className={styles.heroDescription}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <ButtonLink url="/product/65af7115d6f8caf63ceef69d" theme="primary">
          see product
        </ButtonLink>
      </div>
    </section>
  );
}
