import React from "react";
import { H3 } from "../../../components/H3/H3";
import {Skill} from "./skill";
import skills from "../../../skills.json";
import styles from "./Skills.module.scss";

export const Skills = () => {
  return (
    <div className={styles.skills__wrap}>
      <H3 content="Skills" variant="about" />

      <div className={styles.skills__barsWrap}>
        {skills.map((skill) => (
          <Skill name={skill.name} level={skill.level} order={skill.order} />
        ))}
      </div>
    </div>
  );
};
