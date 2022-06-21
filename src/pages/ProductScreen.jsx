import React from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from 'react';
import { getsingleproduct } from '../redux/action/productaction';
import ProductScreenCard from './ProductScreenCard';
import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import Messagebox from '../Components/Messagebox';
import Loading from '../Components/Loading';

function ProductScreen() {
    const {slug}=useParams();
    const dispatch = useDispatch()
    const {loading,error,singleproduct} =useSelector((state)=>state.singleproduct)
    

    useEffect(()=>{
        dispatch(getsingleproduct(slug))
    },[dispatch,slug])

  return (
    <>
    {loading?(<Loading/>):error?(<Messagebox error={error} />):(
        <>
            <Navbar/>
            <ProductScreenCard item={singleproduct} />
            <Footer/>
        </>
        
    )
    
    }
    </>
  )
}

export default ProductScreen