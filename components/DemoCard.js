import React from "react";
import Image from "next/image";
import styles from "../styles/DemoCard.module.scss";

const DemoCard = ({ item }) => {
  const { title, img } = item;
  return (
    <div className={styles.demoCard}>
      <a href="">
        <div className={styles.cardImage}>
          <Image
            src={img}
            alt="Home İmage"
            layout="responsive"
            width={1020}
            height={957}
          />
        </div>
        <div className={styles.DemoCardTitle}>{title}</div>
      </a>
    </div>
  );
};

export default DemoCard;
