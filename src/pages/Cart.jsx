import React from 'react'
import "../Styles/cart.css"
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {cartaction, removecartaction} from "../redux/action/cartaction"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Cart() {
  const navigate=useNavigate();
  const user=useSelector((state)=>state.user)
  const dispatch = useDispatch();
  const {cartitems}=useSelector((state)=>state.cart);

  const updatecarthandler=(item,quantity)=>{
    
    dispatch(cartaction(item.slug,quantity))
  }
  
  const removecartitemhandler=(item)=>{
    dispatch(removecartaction(item.slug))
  }
  const checkouthandler=()=>{
    if(!user){
      navigate("/logini")
    }else{
      navigate("/shipping")
    }
  }
  return (
    <div>
        <Navbar/>
        <div className="cart-container">
          <div className="cart-row">
            <h2 className="cart-title">Shopping Cart</h2>
          </div>
          <div className="cart-row">
            <div className="cart-col">
                {cartitems.length===0?(<h3 className="info">Cart is Empty.<Link to="/shop" >Go Shopping</Link></h3>):
                (
                  <div className="cart-cards">
                    {cartitems.map((item)=>(
                      <div className="cart-card" key={item._id}>
                        <div className="cart-header">
                          <img src={item.image} alt={item.title}/>
                        </div>

                        <div className="cart-body">
                          <Link to={`/product/${item.slug}`}>{item.title} </Link>
                          <div className="buttons">
                            <button onClick={()=>updatecarthandler(item,item.quantity-1)}
                             disabled={item.quantity===1}><FontAwesomeIcon icon={faMinusCircle}/> </button>{" "}
                              <span className="cart-quantity">{item.quantity}</span> {" "}
                            <button onClick={()=>updatecarthandler(item,item.quantity+1)}
                             disabled={item.quantity===item.countInStock}><FontAwesomeIcon icon={faPlusCircle}/> </button>
                          </div>
                        </div>

                        <div className="cart-footer">
                          <div className="cart-price">${item.price}</div>
                          <button onClick={()=>removecartitemhandler(item)} ><FontAwesomeIcon icon={faTrashAlt}/> </button>
                        </div>


                      </div>
                    ))}
                  </div>
                )}
            </div>
            <div className="cart-col">
              <div className="checkout-cart">
                <div className="checkout-card">
                  <div className="checkout-body">
                    <h3 className="checkout-title">
                      subtotal ({cartitems.reduce((a,c)=>a+c.quantity,0)} {" "}
                      items) : $ {cartitems.reduce((a,c)=>a+c.price*c.quantity,0)}
                    </h3>

                  </div>

                  <div className="checkout-footer">
                    <button onClick={checkouthandler} className="checkout-btn" type="button" disabled={cartitems.length===0}>
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Footer/>

    </div>
  )
}

export default Cart