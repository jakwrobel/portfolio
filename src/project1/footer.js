import React, { useEffect, useState, useRef } from 'react'
// import './footer-styles.css'

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
                <div className="footer__icon"><img src="./images/footer_facebook.png" alt=" facebook icon"/>
                </div>
                <div className="footer__icon"><img src="./images/footer_instagram.png" alt="instagram icon"/>
                </div>
                <div className="footer__icon"><img src="./images/footer_linkedin.png" alt="linkedin icon"/>
                </div>
            </div>
            <div className="footer__sign-wrap">
                <div className="footer__logo">
                    <img src="./images/footer_logo.png" alt="logo"/> </div>
                <div className="footer__sign">
                    <h3>JAN KOWALSKI 2021</h3>
                </div>
            </div>
        </div>
)
}

export default Footer