import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default class App extends Component {
  render() {
    let country = 'in';

    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={12} country={country} newsType='general' />} />
          <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={12} country={country} newsType='entertainment' />} />
          <Route exact path="/Science" element={<News key="Science" pageSize={12} country={country} newsType='Science' />} />
          <Route exact path="/Business" element={<News key="Business" pageSize={12} country={country} newsType='Business' />} />
          <Route exact path="/Sports" element={<News key="sports" pageSize={12} country={country} newsType='sports' />} />
          <Route exact path="/Technology" element={<News key="Technology" pageSize={12} country={country} newsType='Technology' />} />
        </Routes>
      </Router >
    )
  }
}
