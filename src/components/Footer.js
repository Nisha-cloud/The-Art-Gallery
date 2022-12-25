import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    
                    <li className='nav-item'>
                        <a href='#diy'>DIY Arts and Crafts</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Testimonials</a>
                    </li>
                </ul>
                <div className="conatiner">
                    <h5>Contact</h5>
                    <ul>
                        <li style={{margin: "0", padding: "0"}}><i class="fa-solid fa-phone" style={{padding: '1vh', margin: "1vw"}}></i>Phone no: +91 7972254457</li>
                        
                    </ul>
                    <ul>
                        <li style={{margin: '0', padding: "0"}}><i class="fa-solid fa-envelope" style={{padding: '1vh', margin:"1vw"}}></i>Email: swati77.mishra@gmail.com</li>
                    </ul>
                </div>

                <div className='bottom'>
                    <span className='line'></span>
                    <p>2022 , Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
