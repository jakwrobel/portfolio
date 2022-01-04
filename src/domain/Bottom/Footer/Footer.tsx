import React from "react";
import { H3 } from "components/H3/H3";
import styles from "domain/Bottom/Footer/Footer.module.scss";
import logo from "assets/logo.png"

export const Footer = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <footer className={styles.sign}>
        <H3 content="JAKUB WRÓBEL 2021" variant="footer" />
      </footer>
    </div>
  );
};
