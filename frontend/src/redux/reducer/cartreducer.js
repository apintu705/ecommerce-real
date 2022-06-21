import {ADD_TO_CART,REMOVE_CART_ITEM,
ADD_TO_WISHLIST,REMOVE_WISHLIST_ITEM,
SAVE_SHIPPING_INFO,
PAYMENT_METHOD}  from "../const/cartcont"


export const cartreducer=(state={cartitems:[]},action)=>{
    switch(action.type){
        case ADD_TO_CART:
          const item = action.payload;
    
          const isItemExist = state.cartitems.find(
            (i) => i._id === item._id
          );
    
          if (isItemExist) {
            return {
              ...state,
              cartitems: state.cartitems.map((i) =>
                i.slug === isItemExist.slug ? item : i
              ),
            };
          } else {
            return {
              ...state,
              
              cartitems: [...state.cartitems, item],
            };
          }
    
        case REMOVE_CART_ITEM:
          return {
            ...state,
            cartitems: state.cartitems.filter((i) => i.slug !== action.payload),
          };

        default:
            return {...state}
    }
}

export const wishreducer=(state={wish:[]},action)=>{
    switch(action.type){
      case ADD_TO_WISHLIST:
        const item = action.payload;
  
        const isItemExist = state.wish.find(
          (i) => i._id === item._id
        );
  
        if (isItemExist) {
          window.alert('Sorry. Product is already added to wishlist');
          return {
            ...state,
            wish: state.wish.map((i) =>
              i.slug === isItemExist.slug ? item : i
            ),
          };
        } else {
          
          return {
            ...state,
            
            wish: [...state.wish, item],
          };
        }
  
      case REMOVE_WISHLIST_ITEM:
        return {
          ...state,
          wish: state.wish.filter((i) => i.slug !== action.payload),
        };

        default:
            return {...state}
    }
}

export const shippingeducer=(state={shipping:[]},action)=>{
  switch(action.type){
    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shipping: action.payload,
      };
      default:
          return {...state}
  }
}

export const paymentreducer=(state={payment:[]},action)=>{
  switch(action.type){
    case PAYMENT_METHOD:{
      return{
        ...state,
        paymentmethod:action.payload,
      }
    }
    default:
      return {...state}
  }
}