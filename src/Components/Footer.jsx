import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Styles/footer.css"

function Footer() {
  return (
    <div className="f-container">
        <div className="f-row">
            <div className="f-col">
                <img src="/images/logo/logo.png" alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, nesciunt! Ipsum repellat saepe, similique magnam aut ducimus eveniet nobis ut sunt neque harum consequatur.</p>
            
            </div>
            <div className="f-col">
                <h2>Quick Links</h2>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contacts</NavLink>
                    </li>
                </ul>
            </div>
            <div className="f-col">
            <h2>Category</h2>
                <ul>
                    <li>
                        <NavLink to="/">Men</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">Women</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">kids</NavLink>
                    </li>
                    
                </ul>
            </div>
            <div className="f-col">
                <h2>Stay in touch with us</h2>
                <div className="socials">
                    <a href="/"><img  src="/images/social/facebook.png" alt="facebook"/></a>
                    <a href="/"><img  src="/images/social/instagram.png" alt="instagram"/></a>
                    <a href="/"><img  src="/images/social/twitter.png" alt="twitter"/></a>
                    <a href="/"><img  src="/images/social/youtube.png" alt="youtube"/></a>
                </div>
            </div>
        </div>

        <div className="f-copyrow">
            <p>&copy; 2022. All Rights Reserved. Powered by Abhishek Kumar.</p>
        </div>
    </div>
  )
}

export default Footer