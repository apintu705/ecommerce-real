
import './App.css';
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Wish from './pages/Wish';
import Cart from './pages/Cart';
import ProductScreen from './pages/ProductScreen';
import Shipping from './Components/Shipping';
import Signup from './Components/Signup';
import Payment from './Components/Payment';
import Placeorder from './Components/Placeorder';
import Orderdetails from './Components/Orderdetails';
import Account from './Components/Account';
import Orderhistory from './Components/Orderhistory';
import Profile from './Components/Profile';


function App() {
  
  return (
    <Router>
      <div>
        <ToastContainer position="bottom-center" limit={1} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:slug" element={<ProductScreen/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/wish" element={<Wish/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/orderhistory" element={<Orderhistory/>}/>
        <Route path="/shipping" element={<Shipping/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/placeorder" element={<Placeorder/>}/>
        <Route path="/orders/:id" element={<Orderdetails/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
