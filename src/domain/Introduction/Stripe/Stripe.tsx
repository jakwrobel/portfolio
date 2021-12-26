import React from "react";
import styles from "./Stripe.module.scss"

export const Stripe = ()=>{
    return(
        <div className={styles.stripe__wrap}>
        <div className={styles.stripe}>
          <div className={styles.stripe__overlay}>
            <svg
              xmlns="http://www.w3.org/2000.svg"
              width="23rem"
              height="23rem"
            >
              <path
                fill="#e67095"
                fillOpacity="0.5"
                d="M 115 0 A 115 115 0 0 1 115 230  A 180 180 1 0 0 115 0 Z"
              ></path>
            </svg>
          </div>
          <div className={styles.stripe__circle}></div>
          <img
            src="./images/ja.webp"
            alt="Jakub Wróbel photo"
          />
        </div>
      </div>
    )
}