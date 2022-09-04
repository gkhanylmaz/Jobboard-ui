import Image from "next/image";
import styles from "../styles/Hero.module.scss";
import heroImg from "../public/images/hero.jpg";

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
          <Image src={heroImg} alt={heroImg} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
