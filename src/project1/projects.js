import React, { useState, useEffect } from "react";
import Project from "./project";
import { initialProjects } from "./data/initialProjects";

const Projects = () => {
  //State is array of objects. Each one includes: project name, technology, url of proj photo, urls of code and live version
  const [projects, setProjects] = useState(initialProjects);

  return (
    <div className="projects__underlay">
      <div className="projects" id="projects">
        <div className="projects__stripe-wrap">
          <div className="projects__stripe">
            <h2>
              <span className="grey">&#47;</span>
              <span className="grey">&#47;</span> Projects
            </h2>
          </div>
        </div>
        <div className="content">
          <div className="content__left-col"></div>
          <div className="content__mid-col">
            <div className="content__imgs-wrap">
              {projects.map((project) => (
                <Project
                  name={project.name}
                  technology={project.technology}
                  imgUrl={project.imageUrl}
                  viewUrl={project.viewUrl}
                  codeUrl={project.codeUrl}
                />
              ))}
            </div>
          </div>
          <div className="content__right-col"></div>
        </div>
      </div>
      <div className="projects__svg-container">
        <div className="projects__contact">
          <span className="grey">
            <strong>&#47; &#47;</strong>
          </span>{" "}
          <strong>CONTACT</strong>
        </div>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <svg
            class="outer-border-outside"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path fill="#e67095" d="M 0 0 L 0 100 L 100 100 L 100 0 Z"></path>
          </svg>
          <svg
            class="outer-border-inside"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path fill="#2a2733" d="M 0 0 L 0 100 L 100 100 L 100 0 Z"></path>
          </svg>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              fill="#f6f6f6"
              d="M 0 0 A 4 30 0.2 0 0 4 30 L 50 66 L 96 30 A 4 30 0.2 0 0 100 0 Z"
            ></path>
          </svg>
          <svg
            class="inner-border-outside"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              fill="#e67095"
              d="M 0 0 A 4 30 0.2 0 0 4 30 L 50 66 L 96 30 A 4 30 0.2 0 0 100 0 Z"
            ></path>
          </svg>
          <svg
            class="inner-border-inside"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              fill="white"
              d="M 0 0 A 4 30 0.2 0 0 4 30 L 50 66 L 96 30 A 4 30 0.2 0 0 100 0 Z"
            ></path>
          </svg>
        </svg>
      </div>
    </div>
  );
};

export default Projects;
