import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import "../Styles/Navbar.css"
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userlogout } from '../redux/action/useraction'


function Navbar() {
    const {cart,wish}= useSelector((state)=>state)
    const user=JSON.parse(localStorage.getItem("userinfo"));
    const dispatch =useDispatch()

    const signoutHandler = () => {
        dispatch(userlogout())
        localStorage.removeItem('userinfo');
        localStorage.removeItem('shipping');
        localStorage.removeItem('wish');
        localStorage.removeItem('cartitems')
        localStorage.removeItem('paymentmethod');
        window.location.href = '/login';
      }
    
  return (
    <div className="n-container">
        <div className="n-row">
            <div className="n-col">
                <span className="n-email">
                    pintusingh@gmail.com
                </span>
                {
              user ? (<Link to='/account'><FontAwesomeIcon icon={faUser} /> {user.name}</Link>) : (<span><FontAwesomeIcon icon={faUser} /> Guest</span>)
            }
            </div>

            <div className="n-col">
                <div className="socials">
                    <a href="/"><img  src="/images/social/facebook.png" alt="facebook"/></a>
                    <a href="/"><img  src="/images/social/instagram.png" alt="instagram"/></a>
                    <a href="/"><img  src="/images/social/twitter.png" alt="twitter"/></a>
                    <a href="/"><img  src="/images/social/youtube.png" alt="youtube"/></a>
                </div>
            </div>
        </div>

        <div className="n-row">
            <div className="n-col">
                <a href="/"><a href="/"><img className="logo"  src="/images/logo/logo.png" alt="youtube"/></a> </a>
            </div>
            <div className="n-col">
                <div className="icons">

                {
                  user ? (<Link to="#signout" onClick={signoutHandler}><span><FontAwesomeIcon icon={faArrowRightToBracket} /> LogOut</span></Link>) : (<a href="/login"><span><FontAwesomeIcon icon={faArrowRightToBracket} /> Login</span></a>)
                }


                
                <NavLink to="/wish"  ><span><FontAwesomeIcon icon={faHeart} /> {wish.wish.length > 0 && (<span className='totoalitems'>{wish.wish.length}</span>)} </span></NavLink>
                <NavLink to="/cart"  ><span><FontAwesomeIcon icon={faShoppingCart} />{cart.cartitems.length > 0 && (<span className='totoalitems'>{cart.cartitems.reduce((a, c) => a + c.quantity, 0)}</span>)}</span></NavLink>
                
                </div>
            </div>
        </div>

        <div className="n-row">
            <div className="nav">
                <ul className="items">
                    <li className="list"><NavLink to="/"  activeclassname='active'>Home</NavLink></li>
                    <li className="list"><NavLink to="/shop"  activeclassname='active'>Shop</NavLink></li>
                    <li className="list"><NavLink to="/about"  activeclassname='active'>About</NavLink></li>
                    <li className="list"><NavLink to="/contact"  activeclassname='active'>Contact</NavLink></li>
                </ul>
                <button className="btn">BTN</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar