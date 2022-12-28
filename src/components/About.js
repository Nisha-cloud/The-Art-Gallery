import React from 'react'
import swati from './images/swati photo.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={swati} alt='swati' style={{maxHeight:"75vh"}}/>
                <div className='nnn'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p><h5>Craft makes my life aesthetic from pathetic which motivates me to do the same for you.  The world is not balck and white nor should be your life. Crafttooth adds adds a pop to your monotonous rhythm. Here we are to make your house a home which shines like a chandelier. Your home should be filled up by your tribes and should match your vibe. Suit yourself by choosing the best from our crafttooth. Whether you like it minimal and classy Or a bit boho and massy you will be served with all sort here.</h5></p>
                    
                    {/* <button className='button'>Explore More</button> */}
                </div>
            </div>
        </div>
    )
}

export default About