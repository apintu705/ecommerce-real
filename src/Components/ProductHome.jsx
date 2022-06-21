import { faEye, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { useState } from 'react'
import { useDispatch, } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { cartaction, wishaction, } from '../redux/action/cartaction'
import "../Styles/producthome.css"
import Quick from './Quick'

function ProductHome({item}) {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  
  const [open,setopen]=useState(false)
  
  const [quantity,setquantity]=useState(1)
  
  const addtocarthandle=()=>{
    
    setquantity(quantity+1)
    dispatch(cartaction(item.slug,quantity));
    navigate("/cart")
  }
  const addtowishhandler=()=>{
    dispatch(wishaction(item.slug))
    navigate("/wish")
  }

  return (
    <div className="hp-card">
        <div className="card-header">
          <Link to={`/product/${item.slug}`}>
            <img src={item.image} alt={item.titile}/>
          </Link>
        </div>
        <div className="card-body">
            <h3 className="title">{item.title}</h3>
            <span>${item.price} </span>
        </div>
        <div className="card-footer">
            <button onClick={()=>setopen(true)}
            className="eye" ><FontAwesomeIcon icon={faEye} /></button>
            <button onClick={addtowishhandler}> <FontAwesomeIcon icon={faHeart} /></button>
            {item.countInStock===0?(<button className="cart cart-out" disabled>Out of Stock</button>):
            (<button onClick={addtocarthandle}><FontAwesomeIcon icon={faShoppingBag} /></button>)}
            
        </div>
        {open&& <Quick item={item}/>}
    </div>
  )
}

export default ProductHome