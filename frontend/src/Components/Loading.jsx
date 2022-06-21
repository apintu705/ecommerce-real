import React from 'react'
import "../Styles/messagebox.css"
import Footer from './Footer'
import Navbar from './Navbar'

function Loading({error}) {
  return (
    <>
    <Navbar/>
        <div className="message-container">
            <h2 className="message-loading">Loading... </h2>
        </div>
        <Footer/>
    </>
    
  )
}

export default Loading