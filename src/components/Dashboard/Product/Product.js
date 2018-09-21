import React from 'react'

const Product = props => {
  console.log('props.item', props.item)
  return (
    <div>
      <p>{props.item.img}</p>
      <p> {props.item.name}</p>
      <p> {props.item.price}</p>
    </div>
  )
}

export default Product
