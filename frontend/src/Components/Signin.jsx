import React from 'react'
import { useState } from 'react';
import { Link, useLocation, useNavigate,} from 'react-router-dom'
import "../Styles/signin.css"
import {useDispatch} from "react-redux"
import { userlogin } from '../redux/action/useraction';



function Signin() {
    
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const {search}=useLocation();
    const redirecturl= new URLSearchParams(search).get("redirect");
    const redirect=redirecturl?redirecturl:"/"

    const submithandler=(e)=>{
        
        e.preventDefault();
        dispatch(userlogin(email,password))

        navigate("/cart")

    }
  return (
    <div className="signin-container">
        <div className="signin-row">
            <div className="signin-col">
                <form  onSubmit={submithandler}>
                    <h2>Sign In</h2>
                    <div className="form-group">
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" id="email" required
                        onChange={(e)=>setemail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Password</label>
                        <input type="password" id="password" required
                        onChange={(e)=>setpassword(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <button type="submit">Signin</button>
                    </div>
                    <div className="form-group">
                        <Link to={`/signup?redirect=${redirect}/`} >Create Your Account</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signin