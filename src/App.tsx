import { useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { CatalogPage } from './pages/CatalogPage'
import { ProductPage } from './pages/ProductPage'

import './App.css'


function App() {

  useEffect(() => {},[])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

