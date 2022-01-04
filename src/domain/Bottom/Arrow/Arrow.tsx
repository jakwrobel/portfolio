import React from "react";
import functions from "domain/Bottom/functions"
import styles from "domain/Bottom/Arrow/Arrow.module.scss";

export const Arrow = () => {
  return (
    <div className={styles.arrowBase}>
      <div className={styles.circle}>
        <div
          className={styles.arrowWrap}
            onClick={functions.scrollToTheTop}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <path fill="#686868" d="M 20 66 L 80 66 L 50 20 Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
