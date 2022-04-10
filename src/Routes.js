import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cars from './pages/Cars'
import DetailCar from './pages/DetailCar'

function RouteApp() {
  return (
      <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/cars/:id" element={<DetailCar />} />
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default RouteApp