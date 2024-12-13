import React from 'react';
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import List from './components/List.jsx'
import Sidebar from './components/Sidebar.jsx'
import HomePage from './components/pages/HomePage.jsx';
import AboutPage from './components/pages/AboutPage.jsx';
import {Route, Routes } from 'react-router-dom';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      
      <Sidebar/>
      <Footer/>

     <Routes>

<Route path='/' element={< HomePage />} />
<Route path='/about' element={< AboutPage />} />
<Route path='/list' element={<List/>} />

<Route path='*' element={<h1>404 page</h1>}></Route>

</Routes>
      
    </>
  )
}

export default App
