import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import './App.css'

export default function App() {
  const [country, setCountry] = useState('us')
  const [type, setType] = useState("general")
  const [theme, setTheme] = useState('light')


  return (
    <div className={theme === 'dark' ? 'App_dark' : 'App_light'}>
      {console.log("App mode", theme)}
      <Navbar setType={setType} setCountry={setCountry} setTheme={setTheme} theme={theme} />
      <News country={country} newsType={type} theme={theme} />
    </div>
  )
}
