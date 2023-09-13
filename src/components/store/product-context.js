import React from "react";

const ProductContext = React.createContext({
    medicines: [],
    addMedicine: (medicine) => {},
    removeItem: (id) => {},
});

export default ProductContext;