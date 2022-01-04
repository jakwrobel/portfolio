import React from "react";
import { Navigation } from "domain/Menu/Navigation/Navigation";
import { Anchor } from "components/Anchor/Anchor";
import { Hamburger } from "domain/Menu/Hamburger/Hamburger";
import styles from "domain/Menu/Menu.module.scss";
import facebook from "assets/facebook.png"
import instagram from "assets/instagram.png"
import linkedin from "assets/linkedin.png"

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
            content={<img src={facebook} alt="Facebook" />}
            href="https://www.facebook.com/kuba.wrobel.1"
            variant="menuIcon"
          />
          <Anchor
            content={<img src={instagram} alt="Instagram" />}
            href="https://jakwrobel.github.io/portfolio/"
            variant="menuIcon"
          />
          <Anchor
            content={<img src={linkedin}alt="LinkedIn" />}
            href="https://www.linkedin.com/in/jakub-wr%C3%B3bel-731931201/"
            variant="menuIcon"
          />
        </Navigation>
      </div>
    </>
  );
};
