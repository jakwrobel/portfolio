import React from "react";
import { Navigation } from "./Navigation/Navigation";
import { Anchor } from "../../components/Anchor/Anchor";
import styles from "./Menu.module.scss";

export const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__leftCol}></div>
      <div className={styles.menu__midCol}>
        <Navigation>
          <Anchor content="Projects" href="#projects" variant="menu" />
          <Anchor content="About me" href="#aboutMe" variant="menu" />
          <Anchor content="Contact" href="#contact" variant="menu" />
        </Navigation>

        <Navigation>
          <Anchor
            content={
              <img src="../../../images/menu_facebook.png" alt="Facebook" />
            }
            href="https://www.facebook.com/kuba.wrobel.1"
            variant="icon"
          />
          <Anchor
            content={
              <img src="../../../images/menu_instagram.png" alt="Instagram" />
            }
            href="https://jakwrobel.github.io/portfolio/"
            variant="icon"
          />
          <Anchor
            content={
              <img src="../../../images/menu_linkedin.png" alt="LinkedIn" />
            }
            href="https://www.linkedin.com/in/jakub-wr%C3%B3bel-731931201/"
            variant="icon"
          />
        </Navigation>
      </div>
      <div className={styles.menu__rightCol}></div>
    </div>
  );
};
