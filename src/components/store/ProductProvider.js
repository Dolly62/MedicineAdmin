import React, { useState } from 'react'
import ProductContext from './product-context'

const ProductProvider = (props) => {
    const [medicines, setMedicines] = useState([]);

    const addMedicineHandler = (medicine) => {
        setMedicines((prevMedicines) => [...prevMedicines, {...medicine, id: Math.random().toString() }]);
    }


    const medicineContext = {
        medicines: medicines,
        addMedicine: addMedicineHandler, 
    }
  return (
    <ProductContext.Provider value={medicineContext}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
