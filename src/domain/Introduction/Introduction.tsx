import React from "react";
import { Showcase } from "domain/Introduction/Showcase/Showcase";
import { Stripe } from "domain/Introduction/Stripe/Stripe";
import styles from "domain/Introduction/Introduction.module.scss";
import zigzag1 from "assets/zigzag1.png"
import zigzag2 from "assets/zigzag2.png"

export const Introduction = () => {
  return (
    <div className={styles.wrap}>
      <img src={zigzag1} alt="background" />
      <img src={zigzag2} alt="background" />
      <Showcase />
      <Stripe />
    </div>
  );
};
