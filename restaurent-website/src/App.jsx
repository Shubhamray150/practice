import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import "./App.css";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      {showCart && <Cart onClose={closeCartHandler} />}
      <Header onCartOpen={showCartHandler} />
      <Meals />
    </>
  );
}

export default App;
