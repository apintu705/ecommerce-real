import {createStore,combineReducers,applyMiddleware} from"redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { categoryreducer, productreducer, singleproductreducer, sliderreducer } from "./redux/reducer/productreducer";
import { cartreducer, paymentreducer, shippingeducer, wishreducer } from "./redux/reducer/cartreducer";
import { userreducer } from "./redux/reducer/userreducer";
import { orderdetailsreducer, orderhistoryreducer, orderreducer } from "./redux/reducer/orderreducer";

const reducer=combineReducers({
    product:productreducer,
    slider:sliderreducer,
    category:categoryreducer,
    singleproduct:singleproductreducer,
    cart:cartreducer,
    wish:wishreducer,
    user:userreducer,
    shipping:shippingeducer,
    payment:paymentreducer,
    order:orderreducer,
    orderdetails:orderdetailsreducer,
    orderhistory:orderhistoryreducer
});

let initialstate={
    cart:{
        cartitems:localStorage.getItem("cartitems")?JSON.parse(localStorage.getItem("cartitems")):[]
    },
    wish:{
        wish:localStorage.getItem("wish")?JSON.parse(localStorage.getItem("wish")):[],
    },
    user:{
        user:localStorage.getItem("userinfo")?JSON.parse(localStorage.getItem("userinfo")):null
    },
    shipping:{
        shipping:localStorage.getItem("shipping")?JSON.parse(localStorage.getItem("shipping")):{}
    },
    payment:{
        paymentmethod:localStorage.getItem("paymentmethod")?JSON.parse(localStorage.getItem("paymentmethod")):null
    }
};

const middleware = [thunk];

const store=createStore(reducer,initialstate,composeWithDevTools(applyMiddleware(...middleware)));

export default store;