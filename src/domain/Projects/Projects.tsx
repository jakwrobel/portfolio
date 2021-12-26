import React from "react";
import projects from "../../projects.json";
import { Project } from "./Project/Project";
import { H2 } from "../../components/H2/H2";
import { Svg } from "./Svg/Svg";
import styles from "./Projects.module.scss";

export const Projects = () => {
  return (
    <div className={styles.projects__underlay}>
      <div className={styles.projects__wrap} id="projects">
        <div className={styles.projects__stripe}>
          <H2 content="Projects" variant="projects" />
        </div>

        <div className={styles.projects__content}>
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
      <Svg/>
    </div>
  );
};
