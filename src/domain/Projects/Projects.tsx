import React from "react";
import projects from "../../data/projects.json";
import { Project } from "./Project/Project";
import { H2 } from "../../components/H2/H2";
import { Svg } from "./Svg/Svg";
import styles from "./Projects.module.scss";

export const Projects = () => {
  return (
    <div className={styles.underlay}>
      <div className={styles.wrap} id="projects">
        <div className={styles.stripe}>
          <H2 content="Projects" variant="projects" />
        </div>

        <div className={styles.content}>
          {projects.map((project) => (
            <Project
              name={project.name}
              technology={project.technology}
              imgUrl={project.imageUrl}
              viewUrl={project.viewUrl}
              codeUrl={project.codeUrl}
            />
          ))}
        </div>
      </div>
      <Svg />
    </div>
  );
};
