import React, { useEffect, useState } from 'react'
import AboutMe from './aboutMe'

const Home = () => {

    const setCoordinates = (element, title, parent, value)=>{
        element.style.left = (title.getBoundingClientRect().left - parent.getBoundingClientRect().left) + 'px'
        element.style.top = (title.getBoundingClientRect().top - parent.getBoundingClientRect().top - value * element.clientHeight) + 'px'
    }

    function detectSize(element, title, parent) {
        if(window.innerWidth>768){
        setCoordinates(element, title, parent, 0.7)
        }
        else if ((window.innerWidth<768) && (window.innerWidth>480)){
       setCoordinates(element, title, parent, 0.8)
        }
        else if (window.innerWidth<480){
        setCoordinates(element, title, parent, 0.6)
        }
    }

    useEffect(() => {
        let title = document.querySelector('.mid-header__title-wrap')
        let parent = document.querySelector('.mid-header__left-part')
        let element = document.querySelector('.mid-header__background-inscription')
        window.addEventListener('load', () => detectSize(element, title, parent))
        window.addEventListener('resize', () => detectSize(element, title, parent))
    })

    function accordionStripe(el, value, newClassName) {
    if((document.querySelector('.home').offsetHeight/document.documentElement.offsetHeight>0.5) && (document.querySelector('.home').offsetWidth<=768)){
        if (document.documentElement.scrollTop/document.querySelector('.home').offsetHeight>=0.15) {
            for (let i = 0; i < el.classList.length; i++) {
                if (el.classList[i] == newClassName) {
                    resultStripe = true;
                }
            } 
            if (resultStripe !== true) {
                el.classList.add(newClassName)
            }
        }

        if (document.documentElement.scrollTop/document.querySelector('.home').offsetHeight<0.15) {
            for (let i = 0; i < el.classList.length; i++) {
                if (el.classList[i] == newClassName) {
                    resultStripe = true;
                }
            }
            if (resultStripe == true) {
                el.classList.remove(newClassName)
            }
            resultStripe = false
        }
    }
}
    let resultStripe = false;
    const movableStripe = document.querySelector('.mid-header__stripe')
    useEffect(()=>{window.addEventListener('scroll', function() { accordionStripe(document.querySelector('.mid-header__stripe'), 230, 'mid-header__animate-stripe') })})

    return (
        <div className="home__underlay">
        <div className="home">
            <img src="images/home_zygzak1.png" alt="background image" alt="background picture"/>
            <img src="images/home_zygzak2.png" alt="background image" alt="background picture"/>
            <img src="images/home_zygzak3.png" alt="background image" alt="background picture"/>
            <img src="images/home_zygzak4.png" alt="background image" alt="background picture"/>
            <img src="images/home_zygzak5.png" alt="background image" alt="background picture"/>
            <div className="home__left-col">
            </div>
            <div className="home__mid-col">
                <div className="mid-header">
                    <section className="mid-header__left-part">
                        <div className="mid-header__background-inscription">I'm
                        </div>
                        <h1><span className="mid-header__title-wrap">Front-end developer <span>&</span> Programmer</span></h1>
                        <h2>JAKUB WRÓBEL</h2>
                        <div className="mid-header__buttons-wrap">
                            <a href="#projects" className='mid-header__button'>Moje projekty</a>
                            <a href="#about-me" className='mid-header__button'>Wiecej o mnie</a>
                        </div>
                    </section>
                    <div className="mid-header__right-part">
                        <div className="mid-header__stripe">
                            <div className='mid-header__stripe-overlay'>
                                <svg xmlns="http://www.w3.org/2000.svg" width="23rem" height="23rem">
                                    <path fill="#e67095" fillOpacity="0.5" d="M 115 0 A 115 115 0 0 1 115 230  A 180 180 1 0 0 115 0 Z"></path>
                                </svg>
                            </div>
                            <div className="mid-header__stripe-circle">
                            </div>
                            <img src='./images/ja.jpg' alt="Jakub Wróbel" alt="Photo of Jakub Wróbel"/>
                        </div>
                    </div>
                </div>
                <AboutMe/>
            </div>
            <div className="home__right-col">
                <div className="right-header">
                    <div className="right-header__stripe">
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Home