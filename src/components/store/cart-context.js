import React from "react";

const CartContext = React.createContext({
    cartMedicines: [],
    totalAmount: 0,
    addtoCart: (cartMedicine) => {},
    // removeMedicine: (id) => {},
})

export default CartContext;