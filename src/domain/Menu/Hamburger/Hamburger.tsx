import React from "react";
import functions from "domain/Menu/functions";
import styles from "domain/Menu/Hamburger/Hamburger.module.scss";

export const Hamburger = () => {
  return (
    <div className={styles.hamburger} onClick={functions.showMenu}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  );
};
