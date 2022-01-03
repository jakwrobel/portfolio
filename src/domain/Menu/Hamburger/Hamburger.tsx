import React from "react";
import functions from "../functions";
import styles from "./Hamburger.module.scss";

export const Hamburger = () => {
  return (
    <div className={styles.hamburger} onClick={functions.showMenu}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  );
};
