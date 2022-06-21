import { LOGIN_FAIL,LOGIN_REQUESTS,LOGIN_SUCCESS,LOGOUT,
REGISTER_FAIL,REGISTER_SUCCESS,REGISTER_REQUESTS,
UPDATE_FAIL,UPDATE_SUCCESS,UPDATE_REQUESTS} from "../const/userconst"
import axios from "axios"

export const userlogin=(email,password)=>async(dispatch,getState)=>{
    
    try{
        let url=`https://ecommerce-real.herokuapp.com/api/users/login`
    
    dispatch({
        type:LOGIN_REQUESTS,

        
    })
    const {data}=await axios.post(url,{email,password});
    
    dispatch({ 
        type:LOGIN_SUCCESS,
        payload:data,
    })

    localStorage.setItem('userinfo',JSON.stringify(getState().user.user))
    
    }
    catch(error){ 
        window.alert("invalid E-Mail or Password")
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data.message

        })
    }
}

export const userlogout=()=>async(dispatch)=>{
    dispatch({type:LOGOUT})
}

export const userregister=(email,password,name)=>async(dispatch,getState)=>{
    
    try{
        let url=`https://ecommerce-real.herokuapp.com/api/users/signup`
    
    dispatch({
        type:REGISTER_REQUESTS,

        
    })
    const {data}=await axios.post(url,{email,password,name});
    
    dispatch({ 
        type:REGISTER_SUCCESS,
        payload:data,
    })

    localStorage.setItem('userinfo',JSON.stringify(getState().user.user))
    
    }
    catch(error){ 
        window.alert("invalid E-Mail or Password")
        dispatch({
            type:REGISTER_FAIL,
            payload:error.response.data.message

        })
    }
}

export const userupdate=(email,password,name,user)=>async(dispatch,getState)=>{
    
    try{
        let url=`https://ecommerce-real.herokuapp.com/api/users/profile`
    
    dispatch({
        type:UPDATE_REQUESTS,

        
    })
    const {data}=await axios.put(url,{email,password,name},
        {
            headers: { Authorization: `Bearer ${user.token}` },
          });
    
    dispatch({ 
        type:UPDATE_SUCCESS,
        payload:data,
    })

    localStorage.setItem('userinfo',JSON.stringify(getState().user.user))
    
    }
    catch(error){ 
        window.alert(error.response.data.message)
        dispatch({
            type:UPDATE_FAIL,
            payload:error.response.data.message

        })
    }
}