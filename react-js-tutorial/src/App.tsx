import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import User from './components/User'
import Admin from './components/Admin'
import CityMaster from './components/CityMaster'

function App() {
  return (
    <>
      <h1>Hello React!</h1>
      <User />
      <br/>
      <Admin />
      <br/>
      <CityMaster />
    </>
  )
}

export default App
