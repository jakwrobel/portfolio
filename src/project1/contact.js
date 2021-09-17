import React from 'react'

import Footer from './footer'

const Contact= ()=>{
	return(
		<>
		 <div className="down-part-overlay" id="contact">
    	 </div>
    <div className="contact__wrap">
        <div className="contact">
            <form action="mailto:kubus_96-1996@tlen.pl">
                <label for="name">Name:</label>
                <input type="text" name="name" id="name"/>
                <label for="e-mail">Email:</label>
                <input type="email" name="email" id="email"/>
                <label for="message">Message</label>
                <textarea id="message"></textarea>
                <input type="submit" value="Send &gt;"/>
            </form>
            <div className="contact__light-stripe-wrap">
                <div className="contact__light-stripe">
                </div>
            </div>
        </div>
        <Footer/>
        </div>
        </>)
}

export default Contact