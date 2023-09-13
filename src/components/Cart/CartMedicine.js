import React from 'react'

const CartMedicine = (props) => {
  return (
    <li>
      {props.name} - {props.description} - {props.price}
    </li>
  )
}

export default CartMedicine
