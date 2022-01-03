import React from "react";
import { Navigation } from "./Navigation/Navigation";
import { Anchor } from "../../components/Anchor/Anchor";
import { Hamburger } from "./Hamburger/Hamburger";
import styles from "./Menu.module.scss";

export const Menu: React.FC = () => {
  return (
    <>
      <Hamburger />
      <div className={styles.wrap}>
        <Navigation>
          <Anchor content="Projects" href="#projects" variant="menu" />
          <Anchor content="About me" href="#aboutMe" variant="menu" />
          <Anchor content="Contact" href="#contact" variant="menu" />
        </Navigation>

        <Navigation>
          <Anchor
            content={<img src="./images/facebook.png" alt="Facebook" />}
            href="https://www.facebook.com/kuba.wrobel.1"
            variant="menuIcon"
          />
          <Anchor
            content={<img src="./images/instagram.png" alt="Instagram" />}
            href="https://jakwrobel.github.io/portfolio/"
            variant="menuIcon"
          />
          <Anchor
            content={<img src="./images/linkedin.png" alt="LinkedIn" />}
            href="https://www.linkedin.com/in/jakub-wr%C3%B3bel-731931201/"
            variant="menuIcon"
          />
        </Navigation>
      </div>
    </>
  );
};
