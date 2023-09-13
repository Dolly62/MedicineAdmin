import React, { useContext } from "react";
import ProductContext from "../store/product-context";
import AddmedBtn from "./AddmedBtn";

const MedicineList = () => {
  const prdctCtx = useContext(ProductContext);
  return (
    <div>
      <h2>Medicine List</h2>
      <ul>
        {prdctCtx.medicines.map((medicine) => (
          <li key={medicine.id}>
            <AddmedBtn
              id={medicine.id}
              name={medicine.name}
              description={medicine.description}
              price={medicine.price}
            >
              {medicine.name} - {medicine.description} -{medicine.price}
            </AddmedBtn>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
