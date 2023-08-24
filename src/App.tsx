import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { BasePage } from './pages/BasePage'
import { CatalogPage } from './pages/CatalogPage'
import { ProductPage } from './pages/ProductPage'
import { CartPage } from './pages/CartPage'

import './App.css'
import { Test } from './components/Test'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />} >
          <Route path="" element={<CatalogPage />} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
        <Route path="/dbg" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
