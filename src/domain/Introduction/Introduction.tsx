import React from "react";
import { Showcase } from "./Showcase/Showcase";
import { Stripe } from "./Stripe/Stripe";
import styles from "./Introduction.module.scss";

export const Introduction = () => {
  return (
    <div className={styles.wrap}>
      <img src="./images/zigzag1.png" alt="background" />
      <img src="./images/zigzag2.png" alt="background" />
      <Showcase />
      <Stripe />
    </div>
  );
};
