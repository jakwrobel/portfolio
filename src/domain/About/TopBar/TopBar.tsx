import React from "react";
import { Light } from "../Light/Light";
import styles from "./TopBar.module.scss";

export const TopBar = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.lightsWrap}>
        <Light variant="Red" />
        <Light variant="Yellow" />
        <Light variant="Green" />
      </div>
    </div>
  );
};
