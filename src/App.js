import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default function App() {
  const [country, setCountry] = useState('in')
  const [type, setType] = useState("general")
  console.log("hell")
  return (
    <>
      <Navbar setType={setType} />
      <News country={country} newsType={type} />
    </>
  )
}
