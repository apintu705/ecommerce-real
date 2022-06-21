import React from 'react'
import "../Styles/messagebox.css"
import Footer from './Footer'
import Navbar from './Navbar'

function Messagebox({error}) {
  return (
    <>
    <Navbar/>
        <div className="message-container">
            <h2 className="message">{error} </h2>
        </div>
        <Footer/>
    </>
    
  )
}

export default Messagebox