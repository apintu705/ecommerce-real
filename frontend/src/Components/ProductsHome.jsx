import React, { useEffect } from 'react'
import "../Styles/productshome.css"

import {useDispatch,useSelector} from "react-redux"

import ProductHome from './ProductHome'
import { getproduct } from '../redux/action/productaction'

function ProductsHome() {
  const dispatch= useDispatch();
  
  const {loading,products,error}= useSelector((state)=>state.product)
  
  useEffect(()=>{
    dispatch(getproduct())
  },[dispatch])
  
  return (
    <div className="hps-container">
      <h2>Latest Products</h2>
        <div className="hps-row">
          {/* 0,8 is fprst 8 but for lates8is -8 */}
          {
          loading?(<h1 className="loading">loading...</h1>):error?(<h1 className="error">{error}</h1>):(
          <div className="hps-row">{products&&products.slice(-8).map((item)=>(
            <ProductHome item={item} key={item._id}/>
        ))}</div>
            
          ) }
        
        </div>
    </div>
  )
}

export default ProductsHome