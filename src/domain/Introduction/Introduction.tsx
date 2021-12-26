import React from "react";
import { Showcase } from "./Showcase/Showcase";
import { Stripe } from "./Stripe/Stripe";
import styles from "./Introduction.module.scss";

export const Introduction = () => {
  return (

      <div className={styles.introduction__wrap}>
        <img src="../../../images/home_zygzak1.png" alt="background" />
        <img src="../../../images/home_zygzak2.png" alt="background" />
        <img src="../../../images/home_zygzak3.png" alt="background" />
        <img src="../../../images/home_zygzak4.png" alt="background" />
        <img src="../../../images/home_zygzak5.png" alt="background" />
        <div className={styles.introduction__leftCol}></div>
        <div className={styles.introduction__midCol}>
          <Showcase />
          <Stripe />
        </div>
        <div className={styles.introduction__rightCol}>
          <div className={styles.right__wrap}>
            <div className={styles.right__stripe}></div>
          </div>
        </div>
      </div>
 
  );
};
