import React, { useState } from "react";
import { triggerMenu } from "./functions/menu-functions";

const Menu = () => {
  //State tells if mobile version of menu is displayed
  const [isTriggered, changeMenu] = useState(false);

  return (
    <header className="menu">
      <div className="menu__left-col"></div>

      <menu className="menu__mid-col">
        <div className="left-part-menu">
          <div
            className="left-part-menu__button"
            onClick={() => triggerMenu(isTriggered, changeMenu)}
          >
            |||
          </div>
          <div className="left-part-menu__logo">
            <img src="./images/menu_logo.png" alt="site logo" />
          </div>
          <div className="left-part-menu__subpages-wrap">
            <div className="left-part-menu__subpage">
              <a href="#projects">Projects</a>
            </div>
            <div className="left-part-menu__subpage">
              <a href="#about-me">About me</a>
            </div>
            <div className="left-part-menu__subpage">
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="right-part-menu">
          <a
            href="https://www.facebook.com/kuba.wrobel.1"
            className="right-part-menu__item"
          >
            <img src="./images/menu_facebook.png" alt="facebook icon" />
          </a>
          <a className="right-part-menu__item">
            <img src="./images/menu_instagram.png" alt="instagram icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jakub-wr%C3%B3bel-731931201/"
            className="right-part-menu__item"
          >
            <img src="./images/menu_linkedin.png" alt="linkedin icon" />
          </a>
        </div>
      </menu>
      <div className="menu__right-col"></div>
    </header>
  );
};

export default Menu;
