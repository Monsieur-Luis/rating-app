import React from 'react'
import star from '../images/icon-star.svg'


const StarComponent = ({handleButtonClick}) => {
  return (
    <button className='round-button'>
        
       <img src={star} alt="" />
    </button>
  )
}

export default StarComponent