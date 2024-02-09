import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Details from './pages/Details'
import Navbar from './components/Navbar'

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>

}

export default App