import React from "react";

const CartContext = React.createContext({
  items: [],
  itemsCadre: [],
  totalAmount: 0,
  addItem: (item) => {},
  addItemCadre: (item) => {},
  removeItem: (item) => {},
});

export default CartContext;
