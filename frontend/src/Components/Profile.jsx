import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userupdate } from '../redux/action/useraction'
import "../Styles/profile.css"
import Footer from './Footer'
import Navbar from './Navbar'

function Profile() {
    const dispatch = useDispatch();
    const navigate=useNavigate()

    const { user } = useSelector((state)=>state.user)

    
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email  || "");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const submithandler=(e)=>{
    e.preventDefault();
    if(password!==confirmPassword){
        window.alert("Passwords do not match");
        return;
    }
    dispatch(userupdate(email,password,name,user))
    navigate("/account")
  }
  return (
    <>
      <Navbar />
        <div className='signin-container'>
            <div className="signin-row">
                <div className="signin-col">
                    <form onSubmit={submithandler}>
                        <h2>User Profile</h2>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id='name' value={name} required onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id='email' value={email} required onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' required onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="c_password">Confirm Password</label>
                            <input type="password" id='c_password' required onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <button type="submit">Update</button>
                        </div>
                        <div className="account-back">
                            <Link to='/account'><FontAwesomeIcon icon={faChevronLeft} /> Back to Account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      <Footer />
    </>
  )
}

export default Profile