import React, { useState } from 'react'
import CartContext from './cart-context'

const CartContextProvider = (props) => {
    const [cartMedicine, setCartMedicine] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addMedicineToCartHanlder = (cartMedicine) => {
        setCartMedicine((prevMedicines) => [...prevMedicines, cartMedicine] )
        setTotalAmount((prevTotalAmount) => prevTotalAmount + cartMedicine.price)
    }

    const cartContext = {
        cartMedicines: cartMedicine,
        totalAmount: totalAmount,
        addtoCart: addMedicineToCartHanlder,
    }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
