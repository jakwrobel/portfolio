import React, { useEffect } from "react";
import { TopBar } from "./TopBar/TopBar";
import { Description } from "./Description/Description";
import { H2 } from "../../components/H2/H2";
import { Skills } from "./Skills/Skills";
import functions from "./functions";
import styles from "./About.module.scss";

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
        <img src="./images/zigzag3.png" alt="background" />
        <img src="./images/zigzag4.png" alt="background" />
        <img src="./images/zigzag5.png" alt="background" />
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
