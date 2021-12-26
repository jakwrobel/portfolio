import React from "react";
import { TopBar } from "./TopBar/TopBar";
import { Description } from "./Description/Description";
import { H2 } from "../../components/H2/H2";
import { Skills } from "./Skills/Skills";
import styles from "./About.module.scss";

export const About = () => {
  return (
    <div className={styles.underlay}>
      <div className={styles.wrap} id="about-me">
        <div className={styles.leftCol}></div>
        <div className={styles.midCol}>
          <div className={styles.window}>
            <TopBar />
            <H2 content="About" variant="about" />
            <div className={styles.content}>
              <Description />
              <Skills />
            </div>
          </div>
        </div>
        <div className={styles.rightCol}></div>
      </div>
    </div>
  );
};
