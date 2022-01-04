import React, { useEffect } from "react";
import styles from "domain/Introduction/Stripe/Stripe.module.scss";
import functions from "domain/Introduction/functions";
import me from "assets/ja-big.webp"

export const Stripe = () => {
  useEffect(
    () =>
      window.addEventListener("scroll", () =>
        functions.moveStripe(
          document.querySelector<HTMLDivElement>(".Stripe_stripe___sS8U")!
        )
      ),
    []
  );

  return (
    <div className={styles.stripe}>
      <div className={styles.overlay}>
        <svg xmlns="http://www.w3.org/2000.svg" width="23rem" height="23rem">
          <path
            fill="#e1cdb5"
            fillOpacity="0.5"
            d="M 115 0 A 115 115 0 0 1 115 230  A 180 180 1 0 0 115 0 Z"
          ></path>
        </svg>
      </div>
      <div className={styles.circle}></div>
      <img src={me} alt="Jakub Wróbel" />
    </div>
  );
};
