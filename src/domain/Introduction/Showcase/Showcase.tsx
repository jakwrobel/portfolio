import React from "react";
import { Anchor } from "components/Anchor/Anchor";
import { H1 } from "domain/Introduction/H1/H1";
import { H2 } from "components/H2/H2";
import styles from "domain/Introduction/Showcase/Showcase.module.scss";

export const Showcase = () => {
  return (
    <section className={styles.wrap}>
      <div className={styles.inscription}>I'm</div>
      <H1 content="Front-end developer & Programmer" />
      <H2 content="JAKUB WRÓBEL" variant="showcase" />
      <div className={styles.buttonsWrap}>
        <Anchor content="My projects" href="#projects" variant="showcase" />
        <Anchor content="More about me" href="#aboutMe" variant="showcase" />
      </div>
    </section>
  );
};
