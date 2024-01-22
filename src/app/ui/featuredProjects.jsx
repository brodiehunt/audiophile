import styles from "@/app/styles/featuredProducts.module.css";
import ButtonLink from "./buttonLink";
export default function FeaturedProjects() {
  return (
    <section className={styles.featuredProducts}>
      <div className={styles.cardOne}>
        <div className={styles.cardOneImgContainer}>
          <img
            className={styles.circlesPattern}
            src="/assets/home/desktop/pattern-circles.svg"
            alt=""
          />
          <picture>
            <source
              srcSet="/assets/home/desktop/image-speaker-zx9.png"
              media="(min-width: 1024px) "
            />
            <source
              srcSet="/assets/home/tablet/image-speaker-zx9.png"
              media="(min-width: 768px) "
            />
            <img
              className={styles.cardOneImg}
              src="/assets/home/mobile/image-speaker-zx9.png"
              alt="The zx9 speaker"
            />
          </picture>
        </div>
        <div className={styles.cardOneContent}>
          <h2 className={styles.cardOneTitle}>
            zx9 <br /> speaker
          </h2>
          <div className={styles.cardOneDescription}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </div>
          <ButtonLink
            url="/product/65ac6fa8a0634fefe59b3270"
            theme="secondary2"
          >
            See product
          </ButtonLink>
        </div>
      </div>
      <div className={styles.cardTwo}>
        <picture>
          <source
            srcSet="/assets/home/desktop/image-speaker-zx7.jpg"
            media="(min-width: 1024px)"
          />
          <source
            srcSet="/assets/home/tablet/image-speaker-zx7.jpg"
            media="(min-width: 500px)"
          />
          <img
            src="/assets/home/mobile/image-speaker-zx7.jpg"
            alt="The zx7 speaker"
            className={styles.cardTwoImg}
          />
        </picture>
        <div className={styles.cardTwoContent}>
          <h2 className={styles.cardTwoTitle}>zx7 speaker</h2>
          <ButtonLink url="/product/65ac6fa8a0634fefe59b327f" theme="secondary">
            See Product
          </ButtonLink>
        </div>
      </div>
      <div className={styles.cardThree}>
        <picture>
          <source
            srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
            media="(min-width: 1024px)"
          />
          <source
            srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
            media="(min-width: 768px)"
          />
          <img
            src="/assets/home/mobile/image-earphones-yx1.jpg"
            alt="The yx1 earphones"
            className={styles.cardThreeImg}
          />
        </picture>
        <div className={styles.cardThreeContent}>
          <h2 className={styles.cardThreeTitle}>yx1 earphones</h2>
          <ButtonLink url="/product/65ac6fa8a0634fefe59b3261" theme="secondary">
            See product
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
