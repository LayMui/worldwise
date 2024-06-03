import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pricing from './pages/Pricing'
import HomePage from './pages/Home'
import Product from './pages/Product'
import PagesNotFound from './pages/PagesNotFound'

export default function App() {

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="*" element={<PagesNotFound />}></Route>
      </Routes>

    </BrowserRouter>


  )
}
