import styles from "@/app/styles/product/product.module.css";

export default function ImgGallery({ galleryImages }) {
  return (
    <div className={styles.galleryContainer}>
      <picture className={styles.gridOne}>
        <source
          srcSet={galleryImages.desktop[0].url}
          media="(min-width: 1024px)"
        />
        <source
          srcSet={galleryImages.tablet[0].url}
          media="(min-width: 768px)"
        />
        <img
          src={galleryImages.mobile[0].url}
          className={`${styles.gridOne} ${styles.gridImage}`}
          alt={galleryImages.mobile[0].alt}
        />
      </picture>
      <picture className={styles.gridTwo}>
        <source
          srcSet={galleryImages.desktop[1].url}
          media="(min-width: 1024px)"
        />
        <source
          srcSet={galleryImages.tablet[1].url}
          media="(min-width: 768px)"
        />
        <img
          src={galleryImages.mobile[1].url}
          className={`${styles.gridTwo} ${styles.gridImage}`}
          alt={galleryImages.mobile[1].alt}
        />
      </picture>
      <picture className={styles.gridThree}>
        <source
          srcSet={galleryImages.desktop[2].url}
          media="(min-width: 1024px)"
        />
        <source
          srcSet={galleryImages.tablet[2].url}
          media="(min-width: 768px)"
        />
        <img
          src={galleryImages.mobile[2].url}
          className={`${styles.gridThree} ${styles.gridImage}`}
          alt={galleryImages.mobile[2].alt}
        />
      </picture>
    </div>
  );
}
