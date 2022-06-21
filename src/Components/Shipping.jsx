import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveshippinginfo } from '../redux/action/cartaction'

import "../Styles/shipping.css"
import Checkout from './Checkout'
import Footer from './Footer'
import Navbar from './Navbar'

function Shipping() {
    const {user}=useSelector((state)=>state.user)

    const navigate=useNavigate()
    const {shipping}=useSelector((state)=>state.shipping)
    
    const [fullname,setfullname]=useState(shipping.fullname || "")
    const [address,setaddress]=useState(shipping.address || "")
    const [city,setcity]=useState(shipping.city || "");
    const [postalcode,setpostalcode]=useState(shipping.postalcode || "");
    const [country,setcountry]=useState(shipping.country || "")
    const data={fullname,address,city,postalcode,country}

    const dispatch=useDispatch()

    const submithandler=(e)=>{
        e.preventDefault();
        dispatch(saveshippinginfo(data));
        navigate("/payment")
    }
    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    },[user,navigate])
  return (
    <>
    <Navbar/>

    <div className="shipping-container">
        <div className="shipping-row">
            <div className="shipping-col">
                <h2 className="shipping-title">
                    Shipping Address
                </h2>
            </div>

            <div className="shipping-col">
                <Checkout step1 step2/>
            </div>

            <div className="shipping-col">
                <form onSubmit={submithandler} >
                    <div className="form-group">
                        <label htmlFor="Name">Full Name</label>
                        <input type="text" id="Name" required
                         value={fullname} onChange={(e)=>setfullname(e.target.value)}
                         />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Address">Address</label>
                        <input type="text" id="Address" required
                         value={address} onChange={(e)=>setaddress(e.target.value)}
                         />
                    </div>

                    <div className="form-group">
                        <label htmlFor="City">City</label>
                        <input type="text" id="City" required
                         value={city} onChange={(e)=>setcity(e.target.value)}
                         />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Postal Code">Postal Code</label>
                        <input type="text" id="Postal Code" required
                         value={postalcode} onChange={(e)=>setpostalcode(e.target.value)}
                         />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Country">Country</label>
                        <input type="text" id="Country" required
                         value={country} onChange={(e)=>setcountry(e.target.value)}
                         />
                    </div>

                    <div className="form-group">
                        <button type="submit">Continue</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default Shipping