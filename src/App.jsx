import { useState } from 'react'
import './App.css'
import Particles from 'react-particles'
import { tsParticles } from "tsparticles-engine";
import Particle from './components/Particle'
import TextComp from './components/TextComp'
// import GithubButton from './components/GithubButton'

// const tsParticles = require("tsparticles-engine");

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    
    
    <Particle />
    <TextComp />
    
    
    
    </>
  )
}

export default App
