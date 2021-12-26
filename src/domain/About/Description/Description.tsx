import React from "react";
import { H3 } from "../../../components/H3/H3"
import { Article } from "../Article/Article";
import styles from "./Description.module.scss";

export const Description = () => {
  return (
    <main className={styles.description__wrap}>
      <H3 content="Me" variant="about" />
      <H3 content="{" variant="aboutBracket" />
      <Article
        content='My name is Jakub Wróbel. I graduated from
        Adam Mickiewicz University in Poznań as geoinformation engineer. After
        finishing my studies, I started learning front-end languages by myself.
        Few months ago I joined "EasyCode" programming course to improve my
        knowledge.'
        variant="about"
      />

      <Article
        content="I've already learned: HTML, CSS, SCSS,
        JavaScript, React with Redux and TypeScript. Currently I am looking for
        my first font-end job, in which I could develop my programming skills"
        variant="about"
      />
      <H3 content="}" variant="aboutBracket" />
    </main>
  );
};
