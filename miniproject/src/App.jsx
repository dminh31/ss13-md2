import React from 'react'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Product from './components/Product/Product'
export default function App() {
  return (
    <>
      <Header></Header>
    <Routes>
      <Route path='/' element={<Product></Product>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
    </Routes>
    </>
  )
}
