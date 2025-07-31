import React, { useContext } from "react";

const cartContext = React.createContext({
  item: [],
  addItem: () => {},
  removeItem: () => {},
});

export default cartContext;
