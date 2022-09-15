import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 80) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      className={color ? `${styles.header} ${styles.headerBg}` : styles.header}
    >
      <div className={styles.pxpContainer}>
        <div className={styles.headerEdit}>
          <a href="">
            {" "}
            <span className={styles.logoColor}>j</span>obster{" "}
          </a>

          <nav>
            <ul>
              <li>
                {" "}
                <a href=""> Demos</a>
              </li>
              <li>
                {" "}
                <a href=""> Jobs </a>
              </li>
              <li>
                {" "}
                <a href="">Companies </a>
              </li>
              <li>
                {" "}
                <a href="">Candidates</a>
              </li>
              <li>
                {" "}
                <a href=""> Dashboards</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
