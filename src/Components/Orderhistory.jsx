import React, { useEffect } from 'react'
import "../Styles/orderhistory.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Loading from "./Loading"
import Messagebox from "./Messagebox"
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import {orderhistoryaction } from '../redux/action/orderaction'

function Orderhistory() {
    const navigate=useNavigate()
    const {user}=useSelector((state)=>state.user)
    const dispatch = useDispatch()
    const {loading,error,orderhistory}=useSelector((state)=>state.orderhistory)

    useEffect(()=>{
        dispatch(orderhistoryaction(user))
    },[dispatch,user])
  return (
    <>
    {loading?(<Loading/>):error?<Messagebox error={error}/>:(
        <>
            <Navbar/>

<div className="orderhistory-container">
                <div className="orderhistory-row">
                    <div className="orderhistory-col">
                        <h2 className="orderhistory-title">Order History</h2>
                    </div>
                </div>
                <div className="orderhistory-row">
                    <div className="orderhistory-col">
                        <div className="tables">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>DATE</th>
                                        <th>TOTAL</th>
                                        <th>PAID</th>
                                        <th>DELIVERED</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderhistory&&orderhistory.map((order) => (
                                        <tr key={order._id}>
                                            <td>{order._id}</td>
                                            <td>{order.createdAt.substring(0, 10)}</td>
                                            <td>{order.totalPrice.toFixed(2)}</td>
                                            <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                                            <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : 'No'}</td>
                                            <td>
                                                <button type="button" variant="light" onClick={() => { navigate(`/orders/${order._id}`);}}>
                                                    Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="account-back">
                            <Link to='/account'><FontAwesomeIcon icon={faChevronLeft} /> Back to Account</Link>
                        </div>
                    </div>
                </div>
            </div>

<Footer/>
        </>
    )}

    
    </>
  )
}

export default Orderhistory