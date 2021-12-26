import React from "react";
import { H3 } from "../../../components/H3/H3";
import styles from "./Footer.module.scss"

export const Footer = () => {
  return (
    <div className={styles.footrer__wrap}>
      <div className={styles.footer__logo}>
        <img src="./images/footer_logo.png" alt="logo" />
      </div>
      <footer className={styles.footer__sign}>
          <H3 content="JAKUB WRÓBEL 2021" variant="footer"/>
      </footer>
    </div>
  );
};
