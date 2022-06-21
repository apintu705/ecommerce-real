import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { paymentmethodaction } from '../redux/action/cartaction'
import "../Styles/payment.css"
import Checkout from './Checkout'
import Footer from './Footer'
import Navbar from './Navbar'

function Payment() {
    const navigate=useNavigate()
    const {shipping}=useSelector((state)=>state.shipping)
    const {paymentmethod}=useSelector((state)=>state.payment)
    const dispatch = useDispatch()
    const [paymentMethodName, setPaymentMethod] = useState(
        paymentmethod
      );

    const submithandler=(e)=>{
        e.preventDefault();
        dispatch(paymentmethodaction(paymentMethodName))
        navigate('/placeorder');
    }
    useEffect(()=>{
        if(!shipping.address){
            navigate("/shipping")
        }
    },[shipping,navigate])

  return (
    <>
    <Navbar/>

    <div className="payment-container">
                <div className="payment-row">
                    <div className="payment-col">
                        <h2 className='payment-title'>Payment Method</h2>
                    </div>
                    <div className="payment-col">
                        <Checkout step1 step2 step3 ></Checkout>
                    </div>
                </div>
                <div className="payment-row">
                    <div className="payment-col">
                        <form onSubmit={submithandler}>
                            <div className="form-group">
                                <label htmlFor="cash">Cash</label>
                                <input type="radio" value="Cash" 
                                checked={paymentMethodName === 'Cash'} 
                                className='radio' name="" id="cash" 
                                onChange={(e) => setPaymentMethod(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cash">Pay Pal</label>
                                <input type="radio" value="Cash" 
                                checked={paymentMethodName === 'paypal'} 
                                className='radio' name="" id="cash" 
                                onChange={(e) => setPaymentMethod(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cash">UPI</label>
                                <input type="radio" value="Cash" 
                                checked={paymentMethodName === 'paypal'} 
                                className='radio' name="" id="cash" 
                                onChange={(e) => setPaymentMethod(e.target.value)} />
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

export default Payment