import React from "react";
import { Light } from "../Light/Light";
import styles from "./TopBar.module.scss";

export const TopBar = () => {
  return (
    <div className={styles.topBar__wrap}>
      <div className={styles.topBar__lightsWrap}>
        <Light variant="red" />
        <Light variant="yellow" />
        <Light variant="green" />
      </div>
    </div>
  );
};
