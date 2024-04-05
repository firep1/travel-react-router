import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import Destination from './components/Destination'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/destination' element={<Destination/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>


        {/* <Navbar/> */}
        <main>
          {/* <div id='home'> */}
            {/* <Home/> */}
          {/* </div> */}
          {/* <div id='features'>
            <Features/>
          </div>
          <div id='destination'>
            <Destination/>
          </div>
          <div id='about'>
            <About/>
          </div>
          <div id='contact'>
            <Contact/>
          </div> */}
        </main>
        {/* <Footer/> */}

    </div>
  )
}

export default App