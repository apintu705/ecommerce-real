import React from 'react'
import "../Styles/shop.css"
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import ProductsShop from '../Components/ProductsShop'

function Shop() {
  return (
    <div>
      <Navbar/>
        <div className="sh-row">
          <div className="sh-col">
            <ProductsShop />
          </div>
          
        </div>
      <Footer/>
    </div>
  )
}

export default Shop