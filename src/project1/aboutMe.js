import React, { useState, useEffect } from "react";
import Skill from "./skill";
import { moveWindow, changeDimension } from "./functions/aboutMe-functions";

const AboutMe = () => {
  //State stores actual skiils and percentage level of particular skill
  const [skills, changeSkills] = useState([
    { name: "HTML", level: "100%", order: "first" },
    { name: "CSS", level: "95%", order: "second" },
    { name: "JavaScript", level: "90%", order: "third" },
    { name: "SCSS", level: "85%", order: "fourth" },
    { name: "React", level: "90%", order: "fifth" },
  ]);

  useEffect(() => {
    let result = false;
    let value = 0;
    const movableWindow = document.querySelector(".window");
    let topPos = 66;
    window.addEventListener("scroll", () => {
      moveWindow(value, topPos, movableWindow);
    });
  }, []);

  useEffect(() => {
    const light = document.querySelectorAll("[class^=window__light--]");
    window.addEventListener("load", () => {
      changeDimension(light);
    });
    window.addEventListener("resize", () => {
      changeDimension(light);
    });
  });

  return (
    <>
      <div className="mid-me" id="about-me">
        <div className="window">
          <div className="window__top-bar">
            <div className="window__lights-wrap">
              <div className="window__light--red"></div>
              <div className="window__light--yellow"></div>
              <div className="window__light--green"></div>
            </div>
            <div className="window__about">&#47; &#47; About</div>
          </div>
          <div className="window__content">
            <h2>
              <span className="grey">&#47; &#47;</span> About
            </h2>
            <div className="window__description">
              <main className="window__me-skills">
                <h3>
                  <span className="grey">&lt;/</span>Me
                  <span className="grey">&gt;</span>
                </h3>
                <h3>
                  <span className="grey">&#123;</span>
                </h3>
                <article className="window__text">
                  <span className="grey">"</span>My name is Jakub Wróbel. I
                  graduated from Adam Mickiewicz University in Poznań as
                  geoinformation engineer. After finishing my studies, I started
                  learning front-end languages by myself. Few months ago I
                  joined "EasyCode" programming course to improve my knowledge.
                  <span className="grey">"</span>
                </article>
                <article className="window__text">
                  <span className="grey">"</span>I've already learned: HTML,
                  CSS, SCSS, JavaScript, React with Redux and TypeScript.
                  Currently I am looking for my first font-end job, in which I
                  could develop my programming skills
                  <span className="grey">"</span>
                </article>
                <h3>
                  <span className="grey">&#125;</span>
                </h3>
              </main>
              <div className="window__me-skills">
                <h3>
                  <span className="grey">&lt;/</span>Skills
                  <span className="grey">&gt;</span>
                </h3>
                <div className="window__skills-wrap">
                  {skills.map((skill) => (
                    <Skill
                      name={skill.name}
                      level={skill.level}
                      order={skill.order}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
