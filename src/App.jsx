import { useState } from 'react'
import Appbar from './compunent/AppBar/Appbar'
import Hero from './compunent//Herosection/Hero'
import Cards from './compunent//Herosection/Cards'
import Card2 from './compunent//Herosection/Card2'
import Cards3 from './compunent//Herosection/Cards3'
import './App.css'
import Footer from './compunent/Footer'
import AboutMe from './compunent/AboutMe'
import Adious from './compunent/Herosection/Adious'
import Watches from './compunent/Herosection/Watches'
function App() {
  const [count, setCount] = useState(0)

  return (
     <>
    <Appbar/>
    <Hero/>
    <Cards/>
    <Card2/>
    <Cards3/>
    <Adious/>
    <Watches/>
    <AboutMe/>
    <Footer/>




     </>
  )
}

export default App
