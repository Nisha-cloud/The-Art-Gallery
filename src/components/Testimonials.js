import React from 'react'
import user1 from './images/user1.jpg'
import user2 from './images/user2.jpg'
import user3 from './images/user3.jpg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='nnn'>
                        <img src={user1} alt='user1'/>
                        <p>It is not every day that you come across a passionate and trustworthy Game advisor. Shwetank Kushwaha is true professional who does his work really well. Thanks Shwetank!</p>
                        <p><span>Aditya Dubey</span></p>
                        <p>Student of "JSS Academy of Technical Noida"</p>
                    </div>
                    <div className='nnn'>
                        <img src={user2} alt='user1'/>
                        <p>In just 2 very short meetings with Shwetank he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.</p>
                        <p><span>Aniket Pratap Singh</span></p>
                        <p>Managemnet Head and Stage cordinator "Verve Society of JSS"</p>
                    </div>
                    <div className='nnn'>
                        <img src={user3} alt='user1'/>
                        <p>A very professional Gaming advisor, who is true to his word. Shwetank has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns.</p>
                        <p><span>Akhil Kumar Singh</span></p>
                        <p>Managing Director and Music head at "Verve Society of JSS"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
