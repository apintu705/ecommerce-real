import React from 'react'
import "../Styles/wish.css"
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { removewishaction } from '../redux/action/cartaction'

function Wish() {
  const dispatch = useDispatch();
  const {wish}=useSelector((state)=>state.wish)

  const removeItemHandler=(item)=>{
    dispatch(removewishaction(item.slug))
  }
  return (
    <div>
        <Navbar/>
        <div className="wish-container">
          <div className="wish-row">
            <h2 className="wish-title">My Wish List</h2>
          </div>
          <div className="wish-row">
            <div className="wish-col">
            {wish.length===0?(<h3 className="info">Your Wish List is Empty.<Link to="/shop" >Go Shopping</Link></h3>):
                (
                  <div className="wish-cards">
                    {wish.map((item)=>(
                      <div className="wish-card" key={item._id}>
                        <div className="wish-header">
                          <img src={item.image} alt={item.title}/>
                        </div>

                        <div className="wish-body">
                            <Link to={`/product/${item.slug}`} >{item.title}</Link>
                            <span className='wish-quantity'>Quantity: 1</span>
                          </div>
                          <div className="wish-footer">
                            <span className='wish-price'>${item.price}</span>
                            <button onClick={() => removeItemHandler(item)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                          </div>
                      </div>
                      
                    ))}
                  </div>
                )}
            </div>
            <div className="wish-col"></div>
          </div>

        </div>
        <Footer/>

    </div>
  )
}

export default Wish