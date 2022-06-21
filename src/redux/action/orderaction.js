import {ORDER_FAIL,ORDER_SUCCESS,ORDER_REQUESTS,
    ORDER_DETAILS_REQUESTS,ORDER_DETAILS_SUCCESS,ORDER_DETAILS_FAIL,
    ORDER_HISTORY_FAIL,ORDER_HISTORY_SUCCESS,ORDER_HISTORY_REQUESTS} from "../const/orderconst";
    
import axios from "axios";



export const orderaction=(order,user)=>async(dispatch)=>{
    
    try{
        let url=`https://ecommerce-real.herokuapp.com/api/orders`
    
    dispatch({
        type:ORDER_REQUESTS,

        
    })
    const {data}=await axios.post(url,{order},
        {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          });
    
    dispatch({ 
        type:ORDER_SUCCESS,
        payload:data,
    })
    
    window.location.href =`/orders/${data.order._id}` ;
    localStorage.removeItem("cartitems")
    }
    catch(error){ 
        window.alert(error.response.data.message)
        dispatch({
            type:ORDER_FAIL,
            payload:error.response.data.message

        })
    }
}

export const orderdetailsaction=(id,user)=>async(dispatch)=>{
    
    try{
        let url=`https://ecommerce-real.herokuapp.com/api/orders/${id}`
    
    dispatch({
        type:ORDER_DETAILS_REQUESTS,

        
    })
    const {data}=await axios.get(url,
        {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          });
    
    dispatch({ 
        type:ORDER_DETAILS_SUCCESS,
        payload:data,
    })
    
    }
    catch(error){ 
        window.alert(error.response.data.message)
        dispatch({
            type:ORDER_DETAILS_FAIL,
            payload:error.response.data.message

        })
    }
}

export const orderhistoryaction=(user)=>async(dispatch)=>{
    
    try{
        let url=`https://ecommerce-real.herokuapp.com/api/orders/mine`
    
    dispatch({
        type:ORDER_HISTORY_REQUESTS,

        
    })
    const {data}=await axios.get(url,
        {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          });
    
    dispatch({ 
        type:ORDER_HISTORY_SUCCESS,
        payload:data,
    })
    
    }
    catch(error){ 
        window.alert(error.response.data.message)
        dispatch({
            type:ORDER_HISTORY_FAIL,
            payload:error.response.data.message

        })
    }
}