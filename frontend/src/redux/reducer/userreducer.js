import { LOGIN_FAIL,LOGIN_REQUESTS,LOGIN_SUCCESS,LOGOUT,
REGISTER_REQUESTS,REGISTER_SUCCESS,REGISTER_FAIL,
UPDATE_FAIL,UPDATE_SUCCESS,UPDATE_REQUESTS} from "../const/userconst"


export const userreducer=(state={user:[]},action)=>{
    switch(action.type){
        case LOGIN_REQUESTS:
        case REGISTER_REQUESTS:
        case UPDATE_REQUESTS:
            return {
                loading: true,
                isauthinciteduser:false
            }

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case UPDATE_SUCCESS:
            return {
                ...state, 
                loading: false,
                isauthinciteduser:true,
                user:action.payload
            }

        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case UPDATE_FAIL:
        
            return {
                ...state, loading:false,
                user:null,
                error:action.payload
            }
        
        case LOGOUT:
            return {
                ...state,
                user:null,
                cartitems:[],
                shipping:{},
                wish:[],
                payment:[],
            }
        
        

        default:
            return state;
    }
}
