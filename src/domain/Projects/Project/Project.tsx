import React from "react";
import { H2 } from "../../../components/H2/H2";
import { H3 } from "../../../components/H3/H3";
import { Anchor } from "../../../components/Anchor/Anchor";
import styles from "./Project.module.scss";

interface IProject {
  name: string;
  technology: string;
  imgUrl: string;
  viewUrl: string | undefined;
  codeUrl: string | undefined;
}

export const Project: React.FC<IProject> = ({
  name,
  technology,
  imgUrl,
  viewUrl,
  codeUrl,
}) => {
  return (
    <div className={styles.project__wrap}>
      <img src={imgUrl} alt={name} />
      <div className={styles.project__overlay}>
        <section className={styles.project__titleWrap}>
          <H2 content={name} variant="project" />
          <H3 content={technology} variant="project" />
        </section>
        <div className={styles.project__buttonsWrap}>
          <Anchor href={viewUrl} content="View" variant="project"/>
          <Anchor href={codeUrl} content="Code" variant="project"/>
        </div>
      </div>
    </div>
  );
};
