import React, { useState } from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props) => {
  const [cartMedicine, setCartMedicine] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addMedicineToCartHanlder = (newMedicine) => {
    const existingMedicine = cartMedicine.findIndex(
      (medicine) => medicine.id === newMedicine.id
    );

    if (existingMedicine !== -1) {
      const updatedCartMedicines = [...cartMedicine];
      updatedCartMedicines[existingMedicine].quantity += 1
      setCartMedicine(updatedCartMedicines)
      // setCartMedicine((cartMedicine) => [
      //   { ...cartMedicine, quantity: cartMedicine.quantity + 1 },
      // ]);
    } else {
      setCartMedicine((prevMedicines) => [...prevMedicines, {...newMedicine, quantity: 1}]);
    }
    setTotalAmount((prevTotalAmount) => prevTotalAmount + cartMedicine.price);
  };

  const cartContext = {
    cartMedicines: cartMedicine,
    totalAmount: totalAmount,
    addtoCart: addMedicineToCartHanlder,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
