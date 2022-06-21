import {ORDER_FAIL,ORDER_SUCCESS,ORDER_REQUESTS,
ORDER_DETAILS_REQUESTS,ORDER_DETAILS_SUCCESS,ORDER_DETAILS_FAIL,
ORDER_HISTORY_FAIL,ORDER_HISTORY_SUCCESS,ORDER_HISTORY_REQUESTS} from "../const/orderconst";



export const orderreducer=(state={order:[]},action)=>{
    switch(action.type){
        case ORDER_REQUESTS:
            return {
                loading:true,
                ...state
            }

        case ORDER_SUCCESS:{
            return {
                loading:false,
                
                order:action.payload
            }
        }

        case ORDER_FAIL:
        return {
            ...state,
            loading:false,
            error:action.payload
        }

        default:
            return {...state}
    }
}

export const orderdetailsreducer=(state={orderdetils:[]},action)=>{
    switch(action.type){
        case ORDER_DETAILS_REQUESTS:
            return {
                loading:true,
                ...state
            }

        case ORDER_DETAILS_SUCCESS:{
            return {
                loading:false,
                
                orderdetails:action.payload
            }
        }

        case ORDER_DETAILS_FAIL:
        return {
            ...state,
            loading:false,
            error:action.payload
        }

        default:
            return {...state}
    }
}

export const orderhistoryreducer=(state={orderhistory:[]},action)=>{
    switch(action.type){
        case ORDER_HISTORY_REQUESTS:
            return {
                loading:true,
                ...state
            }

        case ORDER_HISTORY_SUCCESS:{
            return {
                loading:false,
                
                orderhistory:action.payload
            }
        }

        case ORDER_HISTORY_FAIL:
        return {
            ...state,
            loading:false,
            error:action.payload
        }

        default:
            return {...state}
    }
}