import React from "react";
import { Menu } from "domain/Menu/Menu";
import { Introduction } from "domain/Introduction/Introduction";
import { About } from "domain/About/About";
import { Projects } from "domain/Projects/Projects";
import { Contact } from "domain/Contact/Contact";
import { Bottom } from "domain/Bottom/Bottom";
import styles from "domain/App/App.module.scss";
import "styles/styles.scss";

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
