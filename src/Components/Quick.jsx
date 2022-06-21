import React from 'react'
import { useState } from 'react'
import { useDispatch,} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartaction,wishaction } from '../redux/action/cartaction';
import "../Styles/quick.css"


function Quick({item}) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const [selectedimage,setselectedimage]=useState("");

    const [style,setstyle]=useState("main-container");

    const changeStyle=()=>{
        setstyle("main-containerone")
    }
    const [quantity,setquantity]=useState(1)
  
  const addtocarthandle=()=>{
    setquantity(quantity+1)
    dispatch(cartaction(item.slug,quantity))
    navigate("/cart")
  }

    const addtowishhandler=()=>{
        dispatch(wishaction(item.slug))
        navigate("/wish")
      }
  return (
    <div className={style}>
        <div className="card-quick" key={item._id}>
            <div className="card-row">
                <div className="card-images">
                    <div className="card-top">
                    <img src={selectedimage||item.image} alt={item.title}/> 
                    </div>
                    <div className="card-bottom">
                        <img src={item.image} onClick={()=>setselectedimage(`${item.image}`)} alt={item.title}/>
                        <img src={item.image1} onClick={()=>setselectedimage(`${item.image1}`)} alt={item.title}/>
                        <img src={item.image2} onClick={()=>setselectedimage(`${item.image2}`)} alt={item.title}/>
                        <img src={item.image3} onClick={()=>setselectedimage(`${item.image3}`)} alt={item.title}/>
                    </div>
                </div>
            </div>

            <div className="card-row">
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
        <button className='back'  onClick={changeStyle}>Close</button>
    </div>
  )
}

export default Quick