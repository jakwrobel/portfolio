import React from "react";
import styles from "./Label.module.scss";

interface ILabel {
  name: string;
}

export const Label: React.FC<ILabel> = ({ name }) => {
  return (
    <label htmlFor={name} className={styles.label}>
      {name}:
    </label>
  );
};
