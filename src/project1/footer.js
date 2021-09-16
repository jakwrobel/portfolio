import React, { useEffect, useState, useRef } from 'react'

const Footer = () => {
    const [state, changeState] = useState(500);
    const stateRef = useRef(state)
    const interRef=useRef()


    function handleClick(){
    if(window.document.documentElement.scrollTop > 0){
        interRef.current = setInterval(()=>{
            window.document.documentElement.scrollTop = window.document.documentElement.scrollTop-50;
            if (window.document.documentElement.scrollTop <5){
                clearInterval(interRef.current)
    }
        },1)  
    }
}
return (
    <div className="footer">
            <div className="footer__arrow-wrap">
                <div className="footer__arrow-circle">
                    <div className="footer__arrow" onClick={handleClick}>
                        <svg width="100%" height="100%" viewBox="0 0 100 100">
                        <path fill="#686868" d="M 20 66 L 80 66 L 50 20 Z">
                        </path>
                    </svg>
                    </div>
                </div>
            </div>
            <div className="footer__icons-wrap">
                <a href="https://www.facebook.com/kuba.wrobel.1" className="footer__icon"><img src="./images/footer_facebook.png" alt=" facebook icon"/>
                </a>
                <a className="footer__icon"><img src="./images/footer_instagram.png" alt="instagram icon"/>
                </a>
                <a href="https://www.linkedin.com/in/jakub-wr%C3%B3bel-731931201/" className="footer__icon"><img src="./images/footer_linkedin.png" alt="linkedin icon"/>
                </a>
            </div>
            <div className="footer__sign-wrap">
                <div className="footer__logo">
                    <img src="./images/footer_logo.png" alt="logo"/> 
                </div>
                <div className="footer__sign">
                    <h3>JAKUB WRÓBEL 2021</h3>
                </div>
            </div>
        </div>
)
}

export default Footer