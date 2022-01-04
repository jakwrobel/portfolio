import React, { useEffect } from "react";
import { TopBar } from "domain/About/TopBar/TopBar";
import { Description } from "domain/About/Description/Description";
import { H2 } from "components/H2/H2";
import { Skills } from "domain/About/Skills/Skills";
import zigzag3 from "assets/zigzag3.png";
import zigzag4 from "assets/zigzag4.png";
import zigzag5 from "assets/zigzag5.png";
import functions from "domain/About/functions";
import styles from "domain/About/About.module.scss";

export const About = () => {
  useEffect(
    () =>
      window.addEventListener("scroll", () =>
        functions.moveWindow(0, document.querySelector(".About_window__i_i_b")!)
      ),
    []
  );

  return (
    <div className={styles.underlay}>
      <div className={styles.wrap} id="aboutMe">
        <img src={zigzag3} alt="background" />
        <img src={zigzag4} alt="background" />
        <img src={zigzag5} alt="background" />
        <div className={styles.window}>
          <TopBar />
          <H2 content="About" variant="about" />
          <div className={styles.content}>
            <Description />
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};
