import React, { useContext } from "react";
import CartContext from "../store/cart-context";

const AddmedBtn = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
    cartCtx.addtoCart({
      id: props.id,
      name: props.name,
      description: props.description,
      quantity: 1,
      price: props.price,
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
