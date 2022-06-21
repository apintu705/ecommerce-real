import {ALL_PRODUCT_FAIL,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_REQUESTS,SLIDER_FAIL,
SLIDER_SUCCESS,SLIDER_REQUESTS,
CATEGORY_REQUESTS,CATEGORY_SUCCESS,CATEGORY_FAIL,
SINGLE_PRODUCT_FAIL,SINGLE_PRODUCT_SUCCESS,SINGLE_PRODUCT_REQUESTS,} from "../const/productconst.js"



    export const productreducer=(state={products:[]},action)=>{
        switch(action.type){
            case ALL_PRODUCT_REQUESTS:
                return {
                    loading:true,
                    ...state
                }

            case ALL_PRODUCT_SUCCESS:{
                return {
                    loading:false,
                    
                    products:action.payload
                }
            }

            case ALL_PRODUCT_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload
            }

            default:
                return {...state}
        }
    }

    export const sliderreducer=(state={slider:[]},action)=>{
        switch(action.type){
            case SLIDER_REQUESTS:
                return {
                    loading:true,
                    ...state
                }

            case SLIDER_SUCCESS:{
                return {
                    loading:false,
                    
                    slider:action.payload
                }
            }

            case SLIDER_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload
            }

            default:
                return {...state}
        }
    }

    export const categoryreducer=(state={category:[]},action)=>{
        switch(action.type){
            case CATEGORY_REQUESTS:
                return {
                    loading:true,
                    ...state
                }

            case CATEGORY_SUCCESS:{
                return {
                    loading:false,
                    
                    category:action.payload
                }
            }

            case CATEGORY_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload
            }

            default:
                return {...state}
        }
    }

    export const singleproductreducer=(state={singleproduct:[]},action)=>{
        switch(action.type){
            case SINGLE_PRODUCT_REQUESTS:
                return {
                    loading:true,
                    ...state
                }

            case SINGLE_PRODUCT_SUCCESS:{
                return {
                    loading:false,
                    
                    singleproduct:action.payload
                }
            }

            case SINGLE_PRODUCT_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload
            }

            default:
                return {...state}
        }
    }