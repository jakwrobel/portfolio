import React from "react";
import { Light } from "domain/About/Light/Light";
import styles from "domain/About/TopBar/TopBar.module.scss";

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
