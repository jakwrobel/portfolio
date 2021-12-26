import React from "react";
import { Anchor } from "../../../components/Anchor/Anchor";
import { H1 } from "../../../components/H1/H1";
import { H2 } from "../../../components/H2/H2";
import styles from "./Showcase.module.scss";

export const Showcase = () => {
  return (
    <section className={styles.showcase}>
      <div className={styles.showcase__inscription}>I'm</div>
      <H1 content="Front-end developer & Programmer" variant="showcase" />
      <H2 content="JAKUB WRÓBEL" variant="showcase" />
      <div className={styles.showcase__buttonsWrap}>
        <Anchor content="My projects" href="#projects" variant="showcase" />
        <Anchor content="More about me" href="#aboutMe" variant="showcase" />
      </div>
    </section>
  );
};
