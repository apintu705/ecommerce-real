import React from 'react'
import "../Styles/placeorder.css"
import Navbar from "./Navbar"
import Loading from "./Loading"
import Footer from "./Footer"
import Checkout from "./Checkout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { orderaction } from '../redux/action/orderaction'

function Placeorder() {
    const {cart,shipping,payment,user}=useSelector((state)=>state);
    const navigate=useNavigate()
    const dispatch=useDispatch();

    const {loading,order}=useSelector((state)=>state.order)
    console.log(order)
    const roundPrice = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
    cart.itemsPrice = roundPrice(cart.cartitems.reduce((a, c) => a + c.quantity * c.price, 0));
    cart.shippingPrice = cart.itemsPrice > 100 ? roundPrice(5) : roundPrice(10);
    cart.taxPrice = roundPrice(0.20 * cart.itemsPrice); //for tax in Serbia 20%
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

    const data={
        orderItems:cart.cartitems,
        shippingAddress:shipping.shipping,
        paymentMethod:payment.paymentmethod,
        itemsPrice:cart.itemsPrice,
        shippingPrice:cart.shippingPrice,
        taxPrice:cart.taxPrice,
        totalPrice:cart.totalPrice,
    }
    const placeOrderHandler=(e)=>{
        e.preventDefault();
        dispatch(orderaction(data,user.user))
        

    }
    useEffect(()=>{
        if(payment.paymentmethod===null){
            navigate("/payment")
        }
        
    },[payment,navigate,order])
    
  return (
    <>
    <Navbar/>

    <div className="order-container">
            <div className="order-row">
                <div className="order-col">
                    <h2 className='order-title'>Order Preview</h2>
                </div>
                <div className="order-col">
                    <Checkout step1 step2 step3 step4 ></Checkout>
                </div>
            </div>
            <div className="order-row">
                <div className="order-col">
                    <div className="order-shipping">
                        <h4 className="order-shipping-title">Shipping:</h4>
                        <p className="order-shipping-info">{shipping.shipping.fullname}, 
                        {shipping.shipping.address}, 
                        {shipping.shipping.postalcode}, 
                        {shipping.shipping.city}, 
                        {shipping.shipping.country} 
                        <Link to="/shipping"><FontAwesomeIcon icon={faPencil} />Edit</Link></p>
                    </div>
                    <div className="order-payment">
                        <h4>Payment:</h4>
                        <span>{payment.paymentmethod}</span>
                    </div>
                    <div className="order-items">
                        <h4 className="order-items-title">Items:</h4>
                        <div className="order-cards">
                            {cart.cartitems.map((item) => (
                                <div className="order-card">
                                    <div className="order-card-body">
                                        <img src={item.image} alt={item.name} />
                                        <Link to={`/product/${item.slug}`}>{item.title}</Link>
                                    </div>
                                    <div className="order-card-footer">
                                        <span>{item.quantity}</span>
                                        <span>${item.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link className='order-edit' to="/cart"><FontAwesomeIcon icon={faPencil} />Edit</Link>
                    </div>
                </div>
                <div className="order-col">
                    <h2 className='order-summary'>Order Summary</h2>
                    <div className="order-summary-info">
                        <h4>Items</h4>
                        <span>${cart.itemsPrice.toFixed(2)}</span>
                    </div>
                    <div className="order-summary-info">
                        <h4>Shipping</h4>
                        <span>${cart.shippingPrice.toFixed(2)}</span>
                    </div>
                    <div className="order-summary-info">
                        <h4>Tax</h4>
                        <span>${cart.taxPrice.toFixed(2)}</span>
                    </div>
                    <div className="order-summary-info">
                        <h3>Total</h3>
                        <span>${cart.totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="order-summary-button">
                        <button type="button" 
                        onClick={placeOrderHandler} 
                        disabled={cart.cartitems.length === 0}>Place Order</button>
                    </div>
                    {loading && <Loading></Loading>}
                </div>
            </div>
        </div>

    <Footer/>
    </>
  )
}

export default Placeorder