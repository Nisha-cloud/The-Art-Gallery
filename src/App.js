import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
// import Contact from './components/Contact'

import Footer from './components/Footer'
import DIY from './components/DIY'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <DIY />
      <Testimonials />
      {/* <Contact/> */}
      
      <Footer />
    </div>
  );
}

export default App;
