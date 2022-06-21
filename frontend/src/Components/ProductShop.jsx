import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../Styles/productshop.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, } from 'react-redux'
import { cartaction, wishaction } from '../redux/action/cartaction'
import { useState } from 'react'

function ProductShop({item}) {
  const dispatch=useDispatch()
  const [quantity,setquantity]=useState(1)
  const navigate=useNavigate()
  
  const addtocarthandle=()=>{
    setquantity(quantity+1)
    dispatch(cartaction(item.slug,quantity))
    navigate("/cart")
  }
  const addtowishhandler=()=>{
    dispatch(wishaction(item.slug));
    navigate("/wish")
  }
  return (
    <div className="ps-card">
        <div className="card-header">
            <Link to={`/product/${item.slug}`}>
            <img src={item.image} alt={item.title}/>
            </Link>

        </div>
        <div className="card-body">
            <h3 className="title">{item.title}</h3>
            <span>${item.price}</span>
        </div>
        <div className="card-footer">
            <button onClick={addtowishhandler}><FontAwesomeIcon icon={faHeart} /></button>
            {item.countInStock===0?(<button className="cart cart-out" disabled>Out of Stock</button>):
            (<button onClick={addtocarthandle}><FontAwesomeIcon icon={faShoppingBag} /></button>)}
            
        </div>
    </div>
  )
}

export default ProductShop