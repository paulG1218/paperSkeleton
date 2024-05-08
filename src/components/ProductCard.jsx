import React from 'react'
import "../css/ProductCard.css"

const ProductCard = ({title, description, image}) => {
  return (
    <div className='productCard'>
      <img src={image} alt={`image of ${title}`} className='productImg'/>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default ProductCard
