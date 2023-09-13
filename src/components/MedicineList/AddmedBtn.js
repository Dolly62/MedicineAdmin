import React, { useContext } from "react";
import CartContext from "../store/cart-context";

const AddmedBtn = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (medicine) => {
    cartCtx.addtoCart({
      id: medicine.id,
      medicineName: medicine.name,
      description: medicine.description,
      price: medicine.price,
    });
  };
  return (
    <ul>
      {props.children}
      <button onClick={addToCartHandler}>Add to Cart</button>
    </ul>
  );
};

export default AddmedBtn;
