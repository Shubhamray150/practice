import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import "./App.css";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Cart />
      <Header />
      <Meals />
    </>
  );
}

export default App;
