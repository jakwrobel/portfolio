import React,{useState, useEffect} from 'react'


const AboutMe=()=>{

    //State stores actual skiils and percentage level of particular skill
    const [skills,changeSkills]=useState([
        {name:"HTML",
         level: "100%",
         order: "first"},
         {name:"CSS",
         level: "95%",
        order: "second"},
         {name:"JavaScript",
         level: "90%",
         order: "third"},
         {name:"SCSS",
         level: "85%",
         order: "fourth"},
         {name:"React",
         level: "90%",
         order: "fifth"}
        ])
    
    //Function makes window comming from down, when page is scrolled to certain value and makes it hiding back when page
    //is scrolled to certain value
    function moveWindow(value,topPos,movableWindow){
 if(document.documentElement.querySelector('.home').offsetWidth>768){
        value=0.09;
      }

      else{
        value= 0.25;
      }

        if (document.documentElement.scrollTop/document.documentElement.offsetHeight >=value) {
            if(topPos>=22){
                while(topPos>0){
            topPos-=22
            movableWindow.style.top=topPos+'vh'
        }
        }
        }

        if (document.documentElement.scrollTop/document.documentElement.offsetHeight <value) {
            if(topPos<=44){
                while(topPos<66){
            topPos+=22
            movableWindow.style.top=topPos+'vh'
        }
        }
    }
    }

useEffect(()=>{
    let result = false;
    let value=0;
    const movableWindow = document.querySelector('.window')
    let topPos=66
    window.addEventListener('scroll', ()=>{moveWindow(value,topPos,movableWindow)}
    )
},[])

    //Function keeps lights on topbar of window being circular. Prevents size changing while resizing the window
function changeDimension(element) {
    if (document.querySelector('.window__lights-wrap').clientWidth * 0.2 > document.querySelector('.window__lights-wrap').clientHeight * 0.5) {
        for (let i = 0; i < element.length; i++) {
            element[i].style.height = '50%'
            element[i].style.width = element[0].clientHeight + 'px'
        }
    } else {
        for (let i = 0; i < element.length; i++) {
            element[i].style.width = '20%'
            element[i].style.height = element[0].clientWidth + 'px'
        }
    }
}

useEffect(()=>{
    const light = document.querySelectorAll('[class^=window__light--]')
    window.addEventListener('load', () => { changeDimension(light) })
    window.addEventListener('resize', () => { changeDimension(light) })
})

	return(
	<>
	<div className="mid-me" id="about-me">
                    <div className="window">
                        <div className="window__top-bar">
                            <div className="window__lights-wrap">
                                <div className="window__light--red">
                                </div>
                                <div className="window__light--yellow">
                                </div>
                                <div className="window__light--green">
                                </div>
                            </div>
                            <div className="window__about">&#47; &#47; About
                            </div>
                        </div>
                        <div className="window__content">
                            <h2><span className="grey">&#47; &#47;</span> About</h2>
                            <div className="window__description">
                                <main className="window__me-skills">
                                    <h3><span className="grey">&lt;/</span>Me<span className="grey">&gt;</span></h3>
                                    <h3><span className="grey">&#123;</span></h3>
                                    <article className="window__text">
                                        <span className="grey">"</span>My name is Jakub Wróbel. I am bachelor of engineering in Geoinfomration on Adam Michkiewicz University in Poznań.
                                        After finishing my studies, I started learning front-end languages by myself. Few months ago I joined "EasyCode" programming course to improve my knowledge.
                                        <span className="grey">"</span>
                                    </article>
                                    <article className="window__text">
                                        <span className="grey">"</span>I've already learned HTML, CSS, SCSS, JavaScript i React. Currently I am looking for my first font-end job, in which I could develop my programming skills
                                        <span className="grey">"</span>
                                    </article>
                                    <h3><span className="grey">&#125;</span></h3>
                                </main>
                                <div className="window__me-skills">
                                    <h3><span className="grey">&lt;/</span>Skills<span className="grey">&gt;</span></h3>
                                    <div className="window__skills-wrap">
                                       {skills.map((skill)=>(<Skill name={skill.name} level={skill.level} order={skill.order}/>))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>)
}

const Skill = ({name, level, order})=>{
    return(
        <div className="window__skill-line">
            <div className="window__skill-bar">
                <div className={`window__skill-level--${order}`}>{name}
                </div>
            </div>
            <div className="window__skill-number">{level}</div>
        </div>
        )
}

export default AboutMe