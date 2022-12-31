import React, { useState } from 'react'
import './DIY.css'
import allswati from './images/all-swati.jpg'
import claybottle from './images/bootle-swati.jpg'
import tree from './images/tree-swati.jpg'
import jute from './images/jute.jpg'
import glass from './images/glass-painting.jpg'
import doodling from './images/doodling.jpg'



const DIY = () => {

  const [hidef, Sethidef] = useState('none')
  const [hides, Sethides] = useState('none')
  const [hidet, Sethidet] = useState('none')
  const [hidec, Sethidec] = useState('none')
  const [hidep, Sethidep] = useState('none')
  const [hidech, Sethidech] = useState('none')






  const showkrof = async () => {

    Sethidef('')

    setTimeout(() => {

      Sethidef('none')
    }, 10000)
  }


  const showkros = async () => {

    Sethides('')

    setTimeout(() => {

      Sethides('none')
    }, 10000)
  }



  const showkrot = async () => {

    Sethidet('')

    setTimeout(() => {

      Sethidet('none')
    }, 10000)
  }
  const showkroc = async () => {

    Sethidec('')

    setTimeout(() => {

      Sethidec('none')
    }, 10000)
  }
  const showkrop = async () => {

    Sethidep('')

    setTimeout(() => {

      Sethidep('none')
    }, 10000)
  }
  const showkroch = async () => {

    Sethidech('')

    setTimeout(() => {

      Sethidech('none')
    }, 10000)
  }
  return (
    <div className='container' id='diy'>

      <div class="row">
        < div className="col-4">
          <img src={allswati} class="card-img-top" alt="..." style={{height: "30vh" }} />
          <div class="card-body" style={{height: '30vh'}}>
            <h5 class="card-title">ART</h5>
            <p class="card-text">Stunning visuals and striking designs to stir the emotions! We collect inspirational imagery from around the globe to spark your next project.</p>
            <button class="btn btn-warning" onClick={showkrof}>Get Inspired</button>

            <div className='hidsho' style={{ display: `${hidef}`, border: '2px solid black', background: "gray", margin: "1vh", zIndex:"10", position:"relative", width:"25vw" }} >

              <h5 style={{ display: "flex", justifyContent: "center" }}>Reach me at</h5>
              <p ><strong>Phone:</strong> +91 7972254457</p>
              <p> <strong>Email:</strong>  swati77.mishra@gmail.com</p>
            </div>
          </div>

        </div>





        <div class="col-4">
          <img src={claybottle} class="card-img-top" alt="..." style={{height: "30vh" }} />
          <div class="card-body" style={{height: '30vh'}}>
            <h5 class="card-title">CLAY ART</h5>
            <p class="card-text">The core of craft!
              Make those moments extra special with inspiration, tips, tricks and tutorials for all occasions and festivities.</p>
            <button class="btn btn-warning" onClick={showkros}>Get Inspired</button>

            <div className='hidsho' style={{ display: `${hides}`, border: '2px solid black', background: "gray", margin: "1vh", zIndex:"10", position:"relative", width:"25vw"  }} >

              <h5 style={{ display: "flex", justifyContent: "center" }}>Reach me at</h5>
              <p ><strong>Phone:</strong> +91 7972254457</p>
              <p> <strong>Email:</strong>  swati77.mishra@gmail.com</p>
            </div>
          </div>
        </div>



        <div class="col-4">
          <img src={tree} class="card-img-top" alt="..." style={{ maxHeight: "30vh" }} />
          <div class="card-body" style={{height: '30vh'}}>
            <h5 class="card-title">CRAFT</h5>
            <p class="card-text">What’s your next craft make going to be? Find inspiration or improve your skills with hints, tips and tutorials from the
              world of craft. </p>
            <button class="btn btn-warning" onClick={showkrot}>Get Inspired</button>


            <div className='hidsho' style={{ display: `${hidet}`, border: '2px solid black', background: "gray", margin: "1vh", zIndex:"10", position:"relative", width:"25vw"  }} >

              <h5 style={{ display: "flex", justifyContent: "center" }}>Reach me at</h5>
              <p><strong>Phone:</strong> +91 7972254457</p>
              <p> <strong>Email:</strong> swati77.mishra@gmail.com</p>
            </div>

          </div>
        </div>
      </div>


      <div class="row">
        <div className="col-4">
          <img src={jute} class="card-img-top" alt="..." style={{ minHeight: "27vh" }} />
          <div class="card-body" style={{height: '30vh'}}>
            <h5 class="card-title">JUTE ART</h5>
            <p class="card-text">The core of craft!
              Make those moments extra special with inspiration, tips, tricks and tutorials for all occasions and abilities.</p>
            <button class="btn btn-warning" onClick={showkroc}>Get Inspired</button>

            <div className='hidsho' style={{ display: `${hidec}`, border: '2px solid black', background: "gray", margin: "1vh", zIndex:"10", position:"relative", width:"25vw"  }} >

              <h5 style={{ display: "flex", justifyContent: "center" }}>Reach me at</h5>
              <p ><strong>Phone:</strong> +91 7972254457</p>
              <p> <strong>Email:</strong>  swati77.mishra@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <img src={glass} class="card-img-top" alt="..." style={{height: "31vh" }} />
          <div class="card-body" style={{height: '30vh'}}>
            <h5 class="card-title">GLASS PAINTING</h5>
            <p class="card-text">The core of craft!
              Make those moments extra special with inspiration, tips, tricks and tutorials for all occasions and abilities.</p>
            <button class="btn btn-warning" onClick={showkrop}>Get Inspired</button>

            <div className='hidsho' style={{ display: `${hidep}`, border: '2px solid black', background: "gray", margin: "1vh", zIndex:"10", position:"relative", width:"25vw"  }} >

              <h5 style={{ display: "flex", justifyContent: "center" }}>Reach me at</h5>
              <p ><strong>Phone:</strong> +91 7972254457</p>
              <p> <strong>Email:</strong>  swati77.mishra@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <img src={doodling} class="card-img-top" alt="..." style={{ maxHeight: "30vh" }} />
          <div class="card-body" style={{height: '30vh'}}>
            <h5 class="card-title">DOODLING</h5>
            <p class="card-text">The core of craft!
              Make those moments extra special with inspiration, tips, tricks and tutorials for all occasions and abilities.</p>
            <button class="btn btn-warning" onClick={showkroch}>Get Inspired</button>

            <div className='hidsho' style={{ display: `${hidech}`, border: '2px solid black', background: "gray", margin: "1vh", zIndex:"10", position:"relative", width:"25vw"  }} >

              <h5 style={{ display: "flex", justifyContent: "center" }}>Reach me at</h5>
              <p ><strong>Phone:</strong> +91 7972254457</p>
              <p> <strong>Email:</strong>  swati77.mishra@gmail.com</p>
            </div>

          </div>
        </div>


      </div>
    </div >
  )
}

export default DIY
