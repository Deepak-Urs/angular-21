import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import User from './components/User'
import Admin from './components/Admin'
import CityMaster from './components/CityMaster'
import DataEventBinding from './components/DataEventBinding'

function App() {
  return (
    <>
      <h1>Hello React!</h1>
      <User />
      <br/>
      <Admin />
      <br/>
      <CityMaster />
      <br />
      <DataEventBinding />
    </>
  )
}

export default App
