import React, { useState } from 'react'
import './DIY.css'
import allswati from './images/all-swati.jpg'
import claybottle from './images/bootle-swati.jpg'
import tree from './images/tree-swati.jpg'



const DIY = () => {

  const [ hidef , Sethidef] = useState('none')
  const [ hides , Sethides] = useState('none')
  const [ hidet , Sethidet] = useState('none')



  const showkrof = async() =>{

    Sethidef('')

    setTimeout( ()=> {

      Sethidef('none')
    }, 10000)
  }


  const showkros = async() =>{

    Sethides('')

    setTimeout( ()=> {

      Sethides('none')
    }, 10000)
  }


  
  const showkrot = async() =>{

    Sethidet('')

    setTimeout( ()=> {

      Sethidet('none')
    }, 10000)
  }
  return (
    <div className='diy' id='diy'>

<div class="brdrls" style={{width: "30vw"}}>
  <img src={allswati} class="card-img-top" alt="..." style={{maxHeight:"45vh"}}/>
  <div class="card-body">
    <h5 class="card-title">ART</h5>
    <p class="card-text">Stunning visuals and striking designs to stir the emotions! We collect inspirational imagery from around the globe to spark your next project.</p>
    <button  class="btn btn-warning" onClick={showkrof}>Get Inspired</button>

<div className='hidsho' style={{display:`${hidef}` , border:'2px solid black', background:"gray" , margin:"2vh"}} >

<h5 style={{display:"flex", justifyContent:"center"}}>Reach me at</h5>
    <p ><strong>Phone:</strong> +91 797224457</p>
    <p> <strong>Email:</strong>  swati77.mishra@gmail.com</p>
</div>
  </div>
</div>




<div class="brdrls" style={{width: "30vw"}}>
  <img src={claybottle} class="card-img-top" alt="..." style={{maxHeight:"45vh"}} />
  <div class="card-body">
    <h5 class="card-title">CLAY ART</h5>
    <p class="card-text">The core of craft! 
Make those moments extra special with inspiration, tips, tricks and tutorials for all occasions and abilities.</p>
    <button  class="btn btn-warning" onClick={showkros}>Get Inspired</button>

    <div className='hidsho' style={{display:`${hides}` , border:'2px solid black', background:"gray" , margin:"2vh"}} >

<h5 style={{display:"flex", justifyContent:"center"}}>Reach me at</h5>
    <p ><strong>Phone:</strong> +91 797224457</p>
    <p> <strong>Email:</strong>  swati77.mishra@gmail.com</p>
</div>
  </div>
</div>



<div class="brdrls" style={{width: "30vw"}}>
  <img src={tree} class="card-img-top" alt="..." style={{maxHeight:"45vh"}} />
  <div class="card-body">
    <h5 class="card-title">CRAFT</h5>
    <p class="card-text">What’s your next craft make going to be? Find inspiration or improve your skills with hints, tips and tutorials from the 
world of craft. </p>
    <button  class="btn btn-warning" onClick={showkrot}>Get Inspired</button>


    <div className='hidsho' style={{display:`${hidet}` , border:'2px solid black', background:"gray" , margin:"2vh"}} >

<h5 style={{display:"flex", justifyContent:"center"}}>Reach me at</h5>
    <p><strong>Phone:</strong> +91 7972254457</p>
    <p> <strong>Email:</strong> swati77.mishra@gmail.com</p>
</div>
    
  </div>
</div>
    </div>
  )
}

export default DIY
