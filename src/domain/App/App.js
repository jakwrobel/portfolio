import "../../styles/themes/default/theme.scss";
import { Menu } from "../Menu/Menu";
import { Introduction } from "../Introduction/Introduction";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";
import { Bottom } from "../Bottom/Bottom";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.wrap}>
      <Menu />
      <Introduction />
      <About />
      <Projects />
      <div className={styles.downPart} id="contact"></div>
      <Contact />
      <Bottom />
    </div>
  );
}

export default App;
