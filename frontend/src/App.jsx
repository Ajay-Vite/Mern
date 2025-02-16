import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Fotter from './components/Fotter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Search from './components/Search'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import ErrorBoundary from './components/ErrorBoundary'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './components/Login'

const App = () => {

  const [cartItems, setCartItems] = useState([]);

  const [login, setLogin] = useState(false);

  return (
    <>
      <ToastContainer theme='dark' position='top-center' />

      {login ? <Login setLogin={setLogin}/> : <></>}

      <Router>
        <ErrorBoundary>
          <Header cartItems={cartItems} setLogin={setLogin}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/products/:id' element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          </Routes>
        </ErrorBoundary>
      </Router>
      <Fotter />
    </>
  )
}

export default App