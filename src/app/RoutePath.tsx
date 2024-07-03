import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.tsx'

export default function RoutePath() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/AboutUs" element={<AboutUs />} /> */}
    {/* <Route path="/Home" element={<Home />} /> */}
    </Routes>
  )
}
