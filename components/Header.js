import React from "react";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
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

export default Header;
