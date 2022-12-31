import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className='container'>
               
                <div className="container">
                    <h5>Contact</h5>
                    <ul>
                        <li style={{margin: "0", padding: "0"}}><i class="fa-solid fa-phone" style={{padding: '1vh', margin: "1vw"}}></i>Phone no: +91 7972254457</li>
                        
                    </ul>
                    <ul>
                        <li style={{margin: '0', padding: "0"}}><i class="fa-solid fa-envelope" style={{padding: '1vh'}}></i>Email: swati77.mishra@gmail.com</li>
                    </ul>
                </div>

                <div className='bottom'>
                    <span className='line'></span>
                    <p className='nisha' style={{marginBottom:"0px"}}>Copyright &copy; 2022 , nisha.art-gallery</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
