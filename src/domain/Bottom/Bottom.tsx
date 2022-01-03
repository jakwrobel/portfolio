import React from "react";
import { Arrow } from "./Arrow/Arrow";
import { Anchor } from "../../components/Anchor/Anchor";
import { Footer } from "./Footer/Footer";
import styles from "./Bottom.module.scss";

export const Bottom = () => {
  return (
    <div className={styles.footer}>
      <Arrow />
      <div className={styles.iconsWrap}>
        <Anchor
          content={<img src="./images/facebook.png" alt="facebook" />}
          href="https://www.facebook.com/kuba.wrobel.1"
          variant="footerIcon"
        />
        <Anchor
          content={<img src="./images/instagram.png" alt="instagram" />}
          href="/"
          variant="footerIcon"
        />
        <Anchor
          content={<img src="././images/linkedin.png" alt="linkedin" />}
          href="https://www.linkedin.com/in/jakub-wr%C3%B3bel-731931201/"
          variant="footerIcon"
        />
      </div>
      <Footer />
    </div>
  );
};
