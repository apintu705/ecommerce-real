import React from 'react'
import { useState } from 'react';
import "../Styles/productscreencard.css"
import {useDispatch, } from "react-redux"
import { cartaction, wishaction } from '../redux/action/cartaction';
import { useNavigate } from 'react-router-dom';



function ProductScreenCard({item}) {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    
    const [selectedimage,setselectedimage]=useState("");
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
    <div className="screen-container">
            <div className="screen-row">
                <div className="screen-col">
                <div className="screen-images">
                    <div className="screen-top">
                    <img src={selectedimage||item.image} alt={item.title}/> 
                    </div>
                    <div className="screen-bottom">
                        <img src={item.image} onClick={()=>setselectedimage(`${item.image}`)} alt={item.title}/>
                        <img src={item.image1} onClick={()=>setselectedimage(`${item.image1}`)} alt={item.title}/>
                        <img src={item.image2} onClick={()=>setselectedimage(`${item.image2}`)} alt={item.title}/>
                        <img src={item.image3} onClick={()=>setselectedimage(`${item.image3}`)} alt={item.title}/>
                    </div>
                </div>
                </div>
                <div className="screen-col">
                <div className="first-div div">
                    <h2 className="titile">{item.title}</h2>
                    <p className="category">{item.category} </p>
                </div>
                <div className="second-div div">
                    <span className="price">Price: ${item.price}</span>
                    <div className="quantity">Quantity: 1</div>
                </div>
                <div className="third-div div">
                    <p className="desc">{item.desc}</p>
                </div>
                <div className="fourth-div div">
                    {item.countInStock===0?(<button className="cart cart-out" disabled>Out of Stock</button>):
                    (<button className="cart" onClick={addtocarthandle}>Add to Cart</button>)}
            
                    
                    <button className="wish" onClick={addtowishhandler}>Add to Wish List</button>
                </div>
                </div>
            </div>
        </div>
  )
}

export default ProductScreenCard