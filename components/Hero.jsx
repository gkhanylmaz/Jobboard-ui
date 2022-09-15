import Image from "next/image";
import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.hero}>
        <h1>
          {" "}
          Smart <span> Job Board </span>
          <br /> WordPress Theme
        </h1>
        <div className={styles.heroImg}>
          <Image
            src="https://pixelprime.co/themes/jobster-wp/images/hero.jpg"
            alt="Home İmage"
            height={1779}
            width={3840}
            className={styles.heroImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
