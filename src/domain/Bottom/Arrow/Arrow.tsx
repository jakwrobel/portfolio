import React from "react";
import styles from "./Arrow.module.scss";

export const Arrow = () => {
  return (
    <div className={styles.arrow__base}>
      <div className={styles.arrow__circle}>
        <div
          className={styles.arrow__wrapper}
        //   onClick={() => handleClick(interRef)}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <path fill="#686868" d="M 20 66 L 80 66 L 50 20 Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
