import {ADD_TO_CART,REMOVE_CART_ITEM,
    ADD_TO_WISHLIST,REMOVE_WISHLIST_ITEM,
SAVE_SHIPPING_INFO,
PAYMENT_METHOD}  from "../const/cartcont"
import axios from "axios"


export const cartaction=(slug,quantity)=>async(dispatch,getState)=>{
    try{
        
        
        let url=`https://ecommerce-real.herokuapp.com/api/products/slug/${slug}`
    
    
    const {data}=await axios.get(url);
    
    if (data.countInStock < quantity) {
        window.alert('Sorry. Product is out of stock.');
        return;
    }
    
    dispatch({ 
        type:ADD_TO_CART,
        payload:{
            _id: data._id,
        title:data.title,
        slug: data.slug,
        desc:data.desc,
        category:data.category,
        image: data.image,
        image1: data.image1,
        image2:data.image2,
        image3:data.image3,
        countInStock:data.countInStock,
        price:data.price,
        quantity,
        },
    })

    localStorage.setItem("cartitems",JSON.stringify(getState().cart.cartitems))
    }
    catch(error){ 
        dispatch({
            
            

        })
    }
}

export const removecartaction=(slug)=>(dispatch,getState)=>{
    dispatch({type: REMOVE_CART_ITEM,
      payload:slug})

localStorage.setItem("cartitems",JSON.stringify(getState().cart.cartitems))
      

}

export const wishaction=(product)=>async(dispatch,getState)=>{
    try{
        
        let url=`https://ecommerce-real.herokuapp.com/api/products/slug/${product}`
    
    
    const {data}=await axios.get(url);
    
    
    
    dispatch({ 
        type:ADD_TO_WISHLIST,
        payload:{
            _id: data._id,
        title:data.title,
        slug: data.slug,
        desc:data.desc,
        category:data.category,
        image: data.image,
        image1: data.image1,
        image2:data.image2,
        image3:data.image3,
        countInStock:data.countInStock,
        price:data.price,
        
        },

        
    })

    localStorage.setItem('wish',JSON.stringify(getState().wish.wish))
    }
    catch(error){ 
        dispatch({
            
            

        })
    }
}

export const removewishaction=(slug)=>(dispatch,getState)=>{
    dispatch({type: REMOVE_WISHLIST_ITEM,
      payload:slug})


      localStorage.setItem('wish',JSON.stringify(getState().wish.wish))

      

}

export const saveshippinginfo=(data)=>(dispatch)=>{
    dispatch({type:SAVE_SHIPPING_INFO,
    payload:data})
    localStorage.setItem("shipping", JSON.stringify(data))
  }

  export const paymentmethodaction=(data)=>(dispatch)=>{
    dispatch({type:PAYMENT_METHOD, payload:data})
    
    localStorage.setItem("paymentmethod", JSON.stringify(data))
  }