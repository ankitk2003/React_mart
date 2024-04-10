import React from 'react'
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import Account from './components/navbar/Account/account';
// import Navbar from './navbar/Navbar'
// import Body from './components/navbar/body.jsx/body'
// import Cards from './components/navbar/card/card'
// // import { Router } from 'express'
// import Contact from './components/navbar/contact/contact';
//import Home from './components/navbar/Account/home/home';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './navbar/Navbar'
function App() {

  return (
     <>
     <BrowserRouter>
     <Navbar/>
     </BrowserRouter>
    </>
  )
}

export default App
