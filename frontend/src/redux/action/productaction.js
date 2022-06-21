import axios from 'axios';
import {ALL_PRODUCT_FAIL,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_REQUESTS,SLIDER_FAIL,
SLIDER_SUCCESS,SLIDER_REQUESTS,
CATEGORY_REQUESTS,CATEGORY_SUCCESS,CATEGORY_FAIL,
SINGLE_PRODUCT_FAIL,SINGLE_PRODUCT_SUCCESS,SINGLE_PRODUCT_REQUESTS} from "../const/productconst.js"



    export const getproduct=()=>async(dispatch)=>{
        try{
            let url=`https://ecommerce-real.herokuapp.com/api/products`
        
        dispatch({
            type:ALL_PRODUCT_REQUESTS,

            
        })
        const {data}=await axios.get(url);
        
        dispatch({ 
            type:ALL_PRODUCT_SUCCESS,
            payload:data,
        })
        }
        catch(error){ 
            dispatch({
                type:ALL_PRODUCT_FAIL,
                payload:error.response.data.message
    
            })
        }
    }

    export const slideraction=()=>async(dispatch)=>{
        try{
            let url=`https://ecommerce-real.herokuapp.com/api/slider`
        
        dispatch({
            type:SLIDER_REQUESTS,

            
        })
        const {data}=await axios.get(url);
        
        dispatch({ 
            type:SLIDER_SUCCESS,
            payload:data,
        })
        }
        catch(error){ 
            dispatch({
                type:SLIDER_FAIL,
                payload:error.response.data.message
    
            })
        }
    }

    export const categoryaction=()=>async(dispatch)=>{
        try{
            let url=`https://ecommerce-real.herokuapp.com/api/category`
        
        dispatch({
            type:CATEGORY_REQUESTS,

            
        })
        const {data}=await axios.get(url);
        
        dispatch({ 
            type:CATEGORY_SUCCESS,
            payload:data,
        })
        }
        catch(error){ 
            dispatch({
                type:CATEGORY_FAIL,
                payload:error.response.data.message
    
            })
        }
    }

    export const getsingleproduct=(slug)=>async(dispatch)=>{
        try{
            let url=`https://ecommerce-real.herokuapp.com/api/products/slug/${slug}`
        
        dispatch({
            type:SINGLE_PRODUCT_REQUESTS,

            
        })
        const {data}=await axios.get(url);
        
        dispatch({ 
            type:SINGLE_PRODUCT_SUCCESS,
            payload:data,
        })
        }
        catch(error){ 
            dispatch({
                type:SINGLE_PRODUCT_FAIL,
                payload:error.response.data.message
    
            })
        }
    }