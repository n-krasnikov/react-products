import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { BasePage } from './pages/BasePage'
import { CatalogPage } from './pages/CatalogPage'
import { ProductPage } from './pages/ProductPage'
import { CartPage } from './pages/CartPage'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />} >
          <Route path="" element={<CatalogPage />} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
