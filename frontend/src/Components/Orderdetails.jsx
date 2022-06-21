import React from 'react'
import "../Styles/orderdetails.css"
import { useDispatch, useSelector } from 'react-redux'
import Footer from './Footer'
import Loading from "./Loading"
import Messagebox from './Messagebox'
import Navbar from './Navbar'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { orderdetailsaction } from '../redux/action/orderaction'

function Orderdetails() {
    const {id}=useParams();
    
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const {loading,error,orderdetails}=useSelector((state)=>state.orderdetails);
    

    const {user}=useSelector((state)=>state.user)
    
    
  useEffect(()=>{
    if(!user){
      navigate("/login")
    }
    dispatch(orderdetailsaction(id,user))
  },[user,navigate,dispatch,id])
  
  
  return (
    <>
    {loading?(<Loading/>):error?(<Messagebox error={error}/>):
    (
        
        <>
        <Navbar/>

        <div className="order-details-container">
                    <div className="order-details-row">
                        <div className="order-details-col">
                            <h2 className="order-details-title">Your Order</h2>
                            <h4 className="order-details-subtitle">Order ID : {id}</h4>
                        </div>
                    </div>
                    <div className="order-row">
                    <div className="order-col">
                        <div className="order-shipping">
                            <h4 className="order-shipping-title">Shipping:</h4>
                            <p className="order-shipping-info">{orderdetails&&orderdetails.shippingAddress.fullname}, {orderdetails&&orderdetails.shippingAddress.address}, {orderdetails&&orderdetails.shippingAddress.postalcode}, {orderdetails&&orderdetails.shippingAddress.city}, {orderdetails&&orderdetails.shippingAddress.country}</p>
                            {orderdetails&&orderdetails.isPaid ? (<span> Paid at {orderdetails&&orderdetails.deliveredAt} </span>) : (
                                <span>Not Delivered Yet</span>
                            )}
                        </div>
                        <div className="order-payment">
                            <h4>Payment:</h4>
                            <span>{orderdetails&&orderdetails.paymentMethod} - </span>
                            {orderdetails&&orderdetails.isPaid ? (<span> Paid at {orderdetails&&orderdetails.paidAt} </span>) : (
                                <span>Not Paid <br /><span className='after'>* You will pay after delivery</span></span>
                            )}
                            
                        </div>
                        <div className="order-items">
                            <h4 className="order-items-title">Items:</h4>
                            <div className="order-cards">
                                {orderdetails&&orderdetails.orderItems.map((item) => (
                                    <div className="order-card" key={item._id}>
                                        <div className="order-card-body">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="order-card-footer">
                                            <span>{item.quantity}</span>
                                            <span>${item.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="order-col">
                        <h2 className='order-summary'>Order Summary</h2>
                        <div className="order-summary-info">
                            <h4>Items</h4>
                            <span>${orderdetails&&orderdetails.itemsPrice.toFixed(2)}</span>
                        </div>
                        <div className="order-summary-info">
                            <h4>Shipping</h4>
                            <span>${orderdetails&&orderdetails.shippingPrice.toFixed(2)}</span>
                        </div>
                        <div className="order-summary-info">
                            <h4>Tax</h4>
                            <span>${orderdetails&&orderdetails.taxPrice.toFixed(2)}</span>
                        </div>
                        <div className="order-summary-info">
                            <h3>Total</h3>
                            <span>${orderdetails&&orderdetails.totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                </div>

        <Footer/>
        
        </>
    )}
    </>
    
  )
}

export default Orderdetails