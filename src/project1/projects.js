import React,{useState,useEffect} from 'react'

const Projects= ()=>{

    const [projects, setProjects]=useState([
    {name:"Portfolio",
     technology:"React / JSX / SCSS",
     imageUrl:"./images/project_portfolio.webp",
    viewUrl:"http://www.jwrobel.pl",
    codeUrl:"http://www.jwrobel.pl"},
    {name:"Quizz App",
     technology:"React / JSX / SCSS",
     imageUrl:"./images/project_quiz.webp",
 viewUrl:"http://www.jwrobel.pl",
    codeUrl:"http://www.jwrobel.pl"},
     {name:"Project 3",
     technology:"W trakcie przygotowań",
     imageUrl:"./images/project_quiz.webp"},
     {name:"Project 4",
     technology:"W trakcie przygotowań",
     imageUrl:"./images/project_quiz.webp"},
])
    
	return(
		<div className="projects__underlay">
        <div className="projects" id="projects">
            <div className="projects__stripe-wrap">
                <div className="projects__stripe">
                    <h2><span className="grey">&#47;</span><span className="grey">&#47;</span> Projects</h2>
                </div>
            </div>
            <div className="content">
                <div className="content__left-col">
                </div>
                <div className="content__mid-col">
                    <div className="content__buttons-wrap">
                        <div className="content__button">HTML
                        </div>
                        <div className="content__button">CSS
                        </div>
                        <div className="content__button">JAVA SCRIPT
                        </div>
                        <div className="content__button">REACT
                        </div>
                        <div className="content__button">LOREM
                        </div>
                        <div className="content__button">IPSUM
                        </div>
                    </div>
                    <div className="content__imgs-wrap">
                        {projects.map(project=>(<Project name={project.name} technology={project.technology} imgUrl={project.imageUrl} viewUrl={project.viewUrl} codeUrl={project.codeUrl}/>))}
                    </div>
                </div>
                <div className="content__right-col">
                </div>
            </div>
        </div>
        <div className="projects__svg-container">
            <div className='projects__contact'><span className='grey'><strong>&#47; &#47;</strong></span> <strong>CONTACT</strong>
            </div>
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <svg class="outer-border-outside" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path fill="#e67095" d="M 0 0 L 0 100 L 100 100 L 100 0 Z">
                    </path>
                </svg>
                <svg class="outer-border-inside" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path fill="#2a2733" d="M 0 0 L 0 100 L 100 100 L 100 0 Z">
                    </path>
                </svg>
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path fill="#f6f6f6" d="M 0 0 A 4 30 0.2 0 0 4 30 L 50 66 L 96 30 A 4 30 0.2 0 0 100 0 Z">
                    </path>
                </svg>
                <svg class="inner-border-outside" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path fill="#e67095" d="M 0 0 A 4 30 0.2 0 0 4 30 L 50 66 L 96 30 A 4 30 0.2 0 0 100 0 Z">
                    </path>
                </svg>
                <svg class="inner-border-inside" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path fill="white" d="M 0 0 A 4 30 0.2 0 0 4 30 L 50 66 L 96 30 A 4 30 0.2 0 0 100 0 Z">
                    </path>
                </svg>
            </svg>
        </div>
    </div>)
}

const Project = ({imgUrl, name, technology, viewUrl, codeUrl})=>{
    return(
        <div className="image"><img src={imgUrl} alt={name}/>
                            <div className="image__overlay">
                                <div className="image__tittle-wrap">
                                    <h2>{name}</h2>
                                    <h3>{technology}</h3>
                                </div>
                                <div className="image__buttons-wrap">
                                <a href={viewUrl}>
                                View
                                </a>
                                <a href={codeUrl}>Code</a>
                                </div>
                            </div>
                        </div>
        )
}

export default Projects