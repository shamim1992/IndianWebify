import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Services from './pages/Services'
import NotFound from './pages/NotFound'
function App() {

  return (
    <>
    <HashRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    </HashRouter>
       
    </>
  )
}

export default App
