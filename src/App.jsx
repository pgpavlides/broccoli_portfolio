import { useState } from 'react'
import './App.css'
import Particles from 'react-particles'
import { tsParticles } from "tsparticles-engine";
import Particle from './components/Particle'

// const tsParticles = require("tsparticles-engine");

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Particle />
    
    </>
  )
}

export default App
