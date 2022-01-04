import React from "react";
import styles from "domain/Introduction/H1/H1.module.scss";

interface IH1Props {
  content: string;
}

export const H1 = ({ content }: IH1Props) => {
  return <h1 className={styles[`h1`]}>{content}</h1>;
};
