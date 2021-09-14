import React,{useEffect} from 'react'
// import './projects-styles.css'

const Projects= ()=>{
    
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
                        <div className="image"><img src="./images/projects_logo1.png" alt="project 1"/>
                            <div className="image__overlay">
                                <div className="image__tittle-wrap">
                                    <h2>Young</h2>
                                    <h3>Java JS / Python / Ruby</h3>
                                </div>
                                <button>View</button>
                            </div>
                        </div>
                        <div className="image"><img src="./images/projects_logo2.png" alt="project 2"/>
                            <div className="image__overlay">
                                <div className="image__tittle-wrap">
                                    <h2>Young</h2>
                                    <h3>Java JS / Python / Ruby</h3>
                                </div>
                                <button>View</button>
                            </div>
                        </div>
                        <div className="image"><img src="./images/projects_logo3.png" alt="project 3"/>
                            <div className="image__overlay">
                                <div className="image__tittle-wrap">
                                    <h2>Young</h2>
                                    <h3>Java JS / Python / Ruby</h3>
                                </div>
                                <button>View</button>
                            </div>
                        </div>
                        <div className="image"><img src="./images/projects_logo4.png" alt="project 4"/>
                            <div className="image__overlay">
                                <div className="image__tittle-wrap">
                                    <h2>Young</h2>
                                    <h3>Java JS / Python / Ruby</h3>
                                </div>
                                <button>View</button>
                            </div>
                        </div>
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

export default Projects