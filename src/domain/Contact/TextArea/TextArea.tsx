import React from "react";
import styles from "./TextArea.module.scss";

interface ITextArea {
  name: string;
}

export const TextArea: React.FC<ITextArea> = ({ name }) => {
  return <textarea id={name} className={styles.textarea}></textarea>;
};
