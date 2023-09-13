import React from 'react'

const CartMedicine = (props) => {
  return (
    <ul>
      {props.name} - {props.description} - {props.quantity} - {props.price}
    </ul>
  )
}

export default CartMedicine
