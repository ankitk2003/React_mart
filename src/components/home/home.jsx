import React from 'react'
import Navbar from '../../navbar/Navbar'
import Body from '../body.jsx/body'
import Cards from '../navbar/card/card'
import Footer from '../footer/footer'
import Cart from '../cart/cart'
//import { BrowserRouter } from 'react-router-dom'
// import Electronics from '../../2-components/electronics'
const home = () => {
  return (
    <>
    <Body/>
    <Cards/>
    <Footer/>
    {/* <Cart/> */}
    {/* <Electronics/> */}
    </>
  )
}

export default home