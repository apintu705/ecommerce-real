import React from 'react'
import { useState } from 'react';
import { Link,  useNavigate,} from 'react-router-dom'
import "../Styles/signin.css"
import {useDispatch} from "react-redux"
import Navbar from './Navbar';
import Footer from './Footer';
import { userregister } from '../redux/action/useraction';



function Signup() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    
    const dispatch = useDispatch();
    const navigate=useNavigate()
    
    

    const submithandler=(e)=>{
        
        e.preventDefault();
        if(password!==confirmPassword){
            window.alert("Passwords do not match");
            return;
        }
        
        dispatch(userregister(email, password,name))
        navigate("/")
    }
  return (
    <>
    <Navbar/>
    <div className="signin-container">
        <div className="signin-row">
            <div className="signin-col">
            <form onSubmit={submithandler}>
                    <h2>Sign Up</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' required
                         onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id='email' required
                         onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password'
                         required onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="c_password">Confirm Password</label>
                        <input type="password" id='c_password' required
                         onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <button type="submit">Sign Up</button>
                    </div>
                    <div className="form-group">
                        <Link to={`/login/`}>Already have an account</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Signup