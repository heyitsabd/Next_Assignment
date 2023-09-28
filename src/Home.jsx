import React from 'react'
import Navigation from './navbar'
import Cards from './Cards'
import App_Form from './App_Form'
import Footer from './Footer'


function Home() {
  return (
    <>
      <Navigation/>
      <div>
        <p style={{fontSize:'60px',margin:'50px 0 0 0',fontWeight:'lighter'}}>Pricing</p> 
        <p style={{fontSize:'20px',fontWeight:'lighter'}}>Quickly build an effective pricing table for your potential customers with this<br/> Bootstrap example. It's built with default Bootstrap components and utilities with<br/>little customization.</p>
        </div>
        <Cards/>
        <hr style={{width:'80%',marginLeft:'auto',marginRight:'auto'}}></hr>
        <Footer/>
    </>
  )
}

export default Home
