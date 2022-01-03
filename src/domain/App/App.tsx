import "../../styles/styles.scss";
import { Menu } from "../Menu/Menu";
import { Introduction } from "../Introduction/Introduction";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";
import { Bottom } from "../Bottom/Bottom";
import styles from "./App.module.scss";
import React from "react";

const App = () => {
  return (
    <>
      <Menu />
      <Introduction />
      <About />
      <Projects />
      <div className={styles.downPart} id="contact"></div>
      <Contact />
      <Bottom />
    </>
  );
};

export default App;
