import React from "react";
import styles from "./TextArea.module.scss";

interface ITextAreaProps {
  name: string;
}

export const TextArea = ({ name }: ITextAreaProps) => {
  return (
    <>
      <label htmlFor={name} className={styles.label}>
        {name}:
      </label>
      <textarea id={name} className={styles.textarea}></textarea>;
    </>
  );
};
