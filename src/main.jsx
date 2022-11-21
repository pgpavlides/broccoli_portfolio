import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './App'
import './main.css'
import GithubButtona from './components/GithubButtona'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <GithubButtona/>
    
   <App />
   
    
  </React.StrictMode>
)

{/* <Canvas
camera={ {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [ 1, 2, 6 ]
} } 
>

</Canvas> */}
