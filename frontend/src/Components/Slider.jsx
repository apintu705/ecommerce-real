import {  faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { slideraction } from '../redux/action/productaction'

import "../Styles/slider.css"

function Slider() {
    const [slideIndex, setSlideIndex] =React.useState(0);
    const dispatch= useDispatch()
    const {loading,slider,error}=useSelector((state)=>state.slider)

  const handleclick = (direction) => {
    
    if(direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2) 
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }

  }



  useEffect(()=>{
    dispatch(slideraction())
  },[dispatch])
  
  return (
    <>
    {loading?(<h1>Loading...</h1>):error?(<h1>{error} </h1>):
      <div className="s-container">
        
      <div className="s-arrow left"
      onClick={()=>handleclick("left")}
      >
          <FontAwesomeIcon icon={faArrowCircleLeft} />   
      </div>

      <div className="wrapper" slideIndex={slideIndex} style={{transform: `translateX(${slideIndex * -100}vw)`}}>
          {slider.map((item)=>(
              <div className="slide" key={item._id}>
              <div className="img-container">
                  <img className="s-img" src={item.image} alt="slide"/>
              </div>
          </div>
          ))}
          
          
      </div>

      <div className="s-arrow right"
      onClick={()=>handleclick("right")}
      >
          <FontAwesomeIcon icon={faArrowCircleRight}/>
      </div>
  </div>
        }</>
    
  )
}

export default Slider