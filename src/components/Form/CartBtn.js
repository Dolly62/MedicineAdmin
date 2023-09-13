import React, { useContext } from 'react'
import CartContext from '../store/cart-context'

const CartBtn = (props) => {
    const cartCtx = useContext(CartContext);
  return (
    <button onClick={props.onClick}>
      <span>Cart</span>
      <span>{cartCtx.cartMedicines?.length || 0}</span>
    </button>
  )
}

export default CartBtn
