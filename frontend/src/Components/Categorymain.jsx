import React, { useEffect } from 'react'

import {useDispatch,useSelector} from "react-redux"
import "../Styles/categorymain.css"
import { categoryaction } from '../redux/action/productaction'

function Categorymain() {
  const dispatch = useDispatch();
  const {loading,category,error}=useSelector((state)=>state.category)

  useEffect(()=>{
    dispatch(categoryaction())
  },[dispatch])
  return (
    <>
    {loading?(<h1>Loading...</h1>):error?(<h1>{error} </h1>):(
      <div className="c-container">
      <div className="c-row">
          {category.map((item)=>(
              <div className="c-col" key={item._id}>
              <img src={item.image} alt={item.title}/>
              <div className="category-content">
                  <p>{item.title} </p>
                  <button className="c-btn">Shop Now</button>
              </div>
          </div>
          ))}
          
          
      </div>
  </div>
    )}
    </>
    
  )
}

export default Categorymain