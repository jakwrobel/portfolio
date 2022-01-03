import React from "react";
import { H3 } from "../../../components/H3/H3";
import { Skill } from "./skill";
import skills from "../../../data/skills.json";
import styles from "./Skills.module.scss";

export const Skills = () => {
  return (
    <div className={styles.wrap}>
      <H3 content="Skills" variant="about" />

      <div className={styles.barsWrap}>
        {skills.map((skill) => (
          <Skill name={skill.name} value={skill.value} />
        ))}
      </div>
    </div>
  );
};
