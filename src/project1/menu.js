import React from 'react'
// import './menu-styles.css'

const Menu= ()=>{
	return(
		<div className='menu'>
        <div className='menu__left-col'>
        </div>
        <div className='menu__mid-col'>
            <div className='left-part-menu'>
                <div className="left-part-menu__button">|||</div>
                <div className='left-part-menu__logo'>
                    <img src="./images/menu_logo.png" alt="site logo"/>
                </div>
                <div className='left-part-menu__subpages-wrap'>
                    <div className='left-part-menu__subpage'><a href="#projects">Projects</a></div>
                    <div className='left-part-menu__subpage'><a href="#about-me">About me</a></div>
                    <div className='left-part-menu__subpage'><a href="#contact">Contact</a></div>
                </div>
            </div>
            <div className='right-part-menu'>
                <div className='right-part-menu__item'>
                    <img src="./images/menu_facebook.png" alt="facebook icon"/>
                </div>
                <div className='right-part-menu__item'>
                    <img src="./images/menu_instagram.png" alt="instagram icon"/>
                </div>
                <div className='right-part-menu__item'>
                    <img src="./images/menu_linkedin.png" alt="linkedin icon"/>
                </div>
            </div>
        </div>
        <div className='menu__right-col'>
        </div>
    </div>
    )
}

export default Menu