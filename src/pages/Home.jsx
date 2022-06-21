import React from 'react'
import Banner from '../Components/Banner'
import Categorymain from '../Components/Categorymain'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import ProductsHome from '../Components/ProductsHome'
import Slider from '../Components/Slider'

function Home() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Banner/>
        <Categorymain/>
        <ProductsHome/>
        <Newsletter/>
        <Footer/>
        Home
    </div>
  )
}

export default Home