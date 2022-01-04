import React from "react";
import { Arrow } from "domain/Bottom/Arrow/Arrow";
import { Anchor } from "components/Anchor/Anchor";
import { Footer } from "domain/Bottom/Footer/Footer";
import facebook from "assets/facebook.png";
import instagram from "assets/instagram.png";
import linkedin from "assets/linkedin.png";
import styles from "domain/Bottom/Bottom.module.scss";

export const Bottom = () => {
  return (
    <div className={styles.footer}>
      <Arrow />
      <div className={styles.iconsWrap}>
        <Anchor
          content={<img src={facebook} alt="facebook" />}
          href="https://www.facebook.com/kuba.wrobel.1"
          variant="footerIcon"
        />
        <Anchor
          content={<img src={instagram} alt="instagram" />}
          href="/"
          variant="footerIcon"
        />
        <Anchor
          content={<img src={linkedin} alt="linkedin" />}
          href="https://www.linkedin.com/in/jakub-wr%C3%B3bel-731931201/"
          variant="footerIcon"
        />
      </div>
      <Footer />
    </div>
  );
};
