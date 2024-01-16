import styles from "@/app/styles/companyInfo.module.css";
export default function CompanyInfo() {
  return (
    <section className={styles.companyInfo}>
      <picture>
        <source
          srcSet="/assets/shared/desktop/image-best-gear.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/assets/shared/tablet/image-best-gear.jpg"
          media="(min-width: 500px)"
        />
        <img
          className={styles.img}
          src="/assets/shared/mobile/image-best-gear.jpg"
          alt="Picture of a man listening to music with headphones"
        />
      </picture>
      <div className={styles.contentContainer}>
        <h2 className={styles.contentTitle}>
          bringing you the <span className={styles.orange}>best</span> audio
          gear
        </h2>
        <p className={styles.contentDescription}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}
