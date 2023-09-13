import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/Form/InputForm";
import ProductProvider from "./components/store/ProductProvider";
import MedicineList from "./components/MedicineList/MedicineList";
import CartContextProvider from "./components/store/CartContext";
import { useState } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartMedicineShown, setCartMedicineShown] = useState(false);

  const showCartMedicineHandler = () => {
    setCartMedicineShown(true)
  }

  const hideCartMedicineHandler = () => {
    setCartMedicineShown(false)
  }
  return (
    <CartContextProvider>
      <ProductProvider>
        {cartMedicineShown && <Cart onHideCart={hideCartMedicineHandler}/>}
        <InputForm onShowCart={showCartMedicineHandler}/>
        <MedicineList />
      </ProductProvider>
    </CartContextProvider>
  );
}

export default App;
