import React from "react";
import { H2 } from "components/H2/H2";
import styles from "domain/Projects/Svg/Svg.module.scss";

export const Svg = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.contact}>
        <H2 content="CONTACT" variant="contact" />
      </div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <svg
          className="outer-border-outside"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path fill="#e67095" d="M 0 0 L 0 100 L 100 100 L 100 0 Z"></path>
        </svg>
        <svg
          className="outer-border-inside"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path fill="#2a2733" d="M 0 0 L 0 100 L 100 100 L 100 0 Z"></path>
        </svg>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#f6f6f6"
            d="M 0 0 A 4 30 0.2 0 0 4 30 L 50 66 L 96 30 A 4 30 0.2 0 0 100 0 Z"
          ></path>
        </svg>
        <svg
          className="inner-border-outside"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#e67095"
            d="M 0 0 A 4 30 0.2 0 0 4 30 L 50 66 L 96 30 A 4 30 0.2 0 0 100 0 Z"
          ></path>
        </svg>
        <svg
          className="inner-border-inside"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M 0 0 A 4 30 0.2 0 0 4 30 L 50 66 L 96 30 A 4 30 0.2 0 0 100 0 Z"
          ></path>
        </svg>
      </svg>
    </div>
  );
};
