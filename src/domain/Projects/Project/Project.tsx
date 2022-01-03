import React from "react";
import { H2 } from "../../../components/H2/H2";
import { H3 } from "../../../components/H3/H3";
import { Anchor } from "../../../components/Anchor/Anchor";
import styles from "./Project.module.scss";

interface IProjectProps {
  name: string;
  technology: string;
  imgUrl: string;
  viewUrl: string;
  codeUrl: string;
}

export const Project = ({
  name,
  technology,
  imgUrl,
  viewUrl,
  codeUrl,
}: IProjectProps) => {
  return (
    <div className={styles.wrap}>
      <img src={imgUrl} alt={name} />
      <div className={styles.overlay}>
        <section className={styles.titleWrap}>
          <H2 content={name} variant="project" />
          <H3 content={technology} variant="project" />
        </section>
        <div className={styles.buttonsWrap}>
          <Anchor href={viewUrl} content="View" variant="project" />
          <Anchor href={codeUrl} content="Code" variant="project" />
        </div>
      </div>
    </div>
  );
};
