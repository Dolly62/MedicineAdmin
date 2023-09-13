import React, { useContext, useState } from "react";
import ProductContext from "../store/product-context";

const InputForm = (props) => {
  const [medicineName, setMedicineName] = useState("");
  const [medicineDescription, setMedicineDescription] = useState("");
  const [medicinePrice, setMedicinePrice] = useState("");
  const prdctCtx = useContext(ProductContext);

  const addMedicineHandler = (event) => {
    event.preventDefault();
    prdctCtx.addMedicine({
        id: Math.random().toString(), 
      name: medicineName,
      description: medicineDescription,
      price: medicinePrice,
    });
    setMedicineName("");
    setMedicineDescription("");
    setMedicinePrice("");
  };

  const medicineNameHandler = (event) => {
    setMedicineName(event.target.value);
    // console.log(event.target.value);
  };
  const medicineDescriptionHandler = (event) => {
    setMedicineDescription(event.target.value);
  };
  const medicinePriceHandler = (event) => {
    setMedicinePrice(event.target.value);
  };

  return (
    <form onSubmit={addMedicineHandler}>
      <label htmlFor="medicineName">Medicine Name:</label>
      <input
        type="text"
        id="medicineName"
        value={medicineName}
        onChange={medicineNameHandler}
        required
      />
      <label htmlFor="description">Medicine Description:</label>
      <input
        type="text"
        id="description"
        value={medicineDescription}
        onChange={medicineDescriptionHandler}
        required
      />
      <label htmlFor="price">Medicine Price:</label>
      <input
        type="number"
        id="price"
        value={medicinePrice}
        onChange={medicinePriceHandler}
        required
      />
      <button type="submit">Add Medicine</button>
      <button onClick={props.onShowCart}>Cart</button>
    </form>
  );
};

export default InputForm;
