import React, { useEffect } from 'react'
import "../Styles/account.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

function Account() {
    const navigate=useNavigate()
    const {user}=useSelector((state)=>state.user)

    useEffect(()=>{
        if(!user){
            navigate("/login")
        }
    })
  return (
    <>
    <Navbar/>

    <div className="account-container">
                <div className="account-row">
                    <div className="account-col">
                        <h2 className="account-title">Your Account</h2>
                    </div>
                </div>
                <div className='account-row'>
                    <div className="account-col">
                        <Link to='/profile'>User profile <FontAwesomeIcon icon={faChevronRight} /></Link>
                        <Link to='/orderhistory'>Order History <FontAwesomeIcon icon={faChevronRight} /></Link>
                    </div>
                    <div className="account-col">
                        <img src="./images/users/user.png" alt="User" />
                        <span className='name-user'>{user.name}</span>
                    </div>
                </div>
            </div>

    <Footer/>
    </>
  )
}

export default Account