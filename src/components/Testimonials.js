import React from 'react'
import user1 from './images/user1.png'
import user2 from './images/shubhi.png'
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
                        <img src={user2} alt='user1'/>
                        <p className='my-1 py-1'><span>Shubhangi Singh</span></p>
                        
                        <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star-half-full checked"></span>

                        <p className='my-1 py-1'>I enquired about a craft artist online and was referred to Swati who gave me beautiful ideas for the decorations and also hand craft which I wanted to create. Her advice turned out to be a boost for my work and I would like to give her the credit of all the praiseworthy stuff she suggested.</p>
                        
                        {/* <p>Student of "JSS Academy of Technical Noida"</p> */}
                    </div>
                    <div className='nnn'>
                        <img src={user1} alt='user1'/>
                        <p className='my-1 py-1'><span>Chitrangee Chandra</span></p>
                        <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<p className='my-1 py-1'>I enquired about a craft artist online and was referred to Swati who gave me beautiful ideas for the decorations and also hand craft which I wanted to create. Her advice turned out to be a boost for my work and I would like to give her the credit of all the praiseworthy stuff she suggested.</p>


                        
                    </div>
                    <div className='nnn'>
                        <img src={user3} alt='user1'/>
                        <p className='my-1 py-1'><span>Abhishek Kumar</span></p>
                        <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star-half-full checked"></span>
<p className='my-1 py-1'>I enquired about a craft artist online and was referred to Swati who gave me beautiful ideas for the decorations and also hand craft which I wanted to create. Her advice turned out to be a boost for my work and I would like to give her the credit of all the praiseworthy stuff she suggested.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
