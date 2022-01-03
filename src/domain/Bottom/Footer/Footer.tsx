import React from "react";
import { H3 } from "../../../components/H3/H3";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.logo}>
        <img src="./images/logo.png" alt="logo" />
      </div>
      <footer className={styles.sign}>
        <H3 content="JAKUB WRÓBEL 2021" variant="footer" />
      </footer>
    </div>
  );
};
