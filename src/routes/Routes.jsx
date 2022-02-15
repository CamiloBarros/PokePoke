import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App'
import About from '../pages/About'
import Compare from '../pages/Compare'
import Home from '../pages/Home'

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='compare' element={<Compare />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default RoutesComponent
