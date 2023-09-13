import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import CartMedicine from "./CartMedicine";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartMedicineHandler = (medicine) => {
    cartCtx.addtoCart(medicine);
  };
  return (
    <>
      <button onClick={props.onHideCart}>Close</button>
      <ul>
        {cartCtx.cartMedicines.map((medicine) => (
          <li key={medicine.id}>
          <CartMedicine
            key={medicine.id}
            name={medicine.name}
            description={medicine.description}
            quantity={medicine.quantity}
            price={medicine.price}
            onAdd={cartMedicineHandler}
          />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
