import { useReducer, useState } from "react";
import CartContext from "./cart-context";

// const cartReducer = (state, action) => {
//   if (action.type === "ADD") {
//     let updatedItems;

//     updatedItems = state.items.concat(action.item);

//     if (action.from === "Ouvrant") {
//       updatedItems = state.items.concat(action.item);
//       return {
//         items: updatedItems,
//       };
//     } else {
//       updatedItems = state.itemsCadre.concat(action.item);
//       return {
//         itemsCadre: updatedItems,
//       };
//     }
//   }
// if (action.type === "REMOVE") {
//   const existingCartItemIndex = state.items.findIndex(
//     (item) => item.id === action.id
//   );

//   const existingItem = state.items[existingCartItemIndex];
//   console.log(existingItem.ho);
//   let updatedItems;
//   updatedItems = state.items.filter((item) => item.id !== action.id);

//   console.log(updatedItems);

//   return {
//     items: updatedItems,
//   };
// }

//   return defaultCartState;
// };

export default function CartProvider(props) {
  const [itemOuvrant, setItemOuvrant] = useState([]);
  const [itemCadre, setItemCadre] = useState([]);

  const defaultCartState = {
    items: itemOuvrant,
    itemsCadre: itemCadre,
    totalAmount: 0,
  };

  // const [cartState, dispatchCartAction] = useReducer(
  //   cartReducer,
  //   defaultCartState
  // );

  // const addItemFromCartHandler = (item) => {
  //   dispatchCartAction({
  //     type: "ADD",
  //     item: item,
  //     from: "Ouvrant",
  //   });
  // };
  const addItemFromCartHandler = (item) => {
    setItemOuvrant([...itemOuvrant, item]);
  };
  // const addItemFromCartHandlerCadre = (item) => {
  //   dispatchCartAction({
  //     type: "ADD",
  //     item: item,
  //     from: "Cadre",
  //   });
  // };
  const addItemFromCartHandlerCadre = (item) => {
    setItemCadre([...itemCadre, item]);
  };

  const removeItemFromCartOuvrantHandler = (id) => {
    const existingCartItemIndex = itemOuvrant.findIndex(
      (item) => item.id === id
    );
    itemOuvrant.splice(existingCartItemIndex, 1);
    setItemOuvrant([...itemOuvrant]);
  };

  const removeItemFromCartCadreHandler = (id) => {
    const existingCartItemIndex = itemCadre.findIndex((item) => item.id === id);
    itemCadre.splice(existingCartItemIndex, 1);
    setItemCadre([...itemCadre]);
  };
  const emptyCartHandler = () => {
    setItemOuvrant([]);
  };

  const emptyCartHandlerCadre = () => {
    setItemCadre([]);
  };

  const cartContext = {
    items: itemOuvrant,
    itemsCadre: itemCadre,
    addItem: addItemFromCartHandler,
    addItemCadre: addItemFromCartHandlerCadre,
    emptyCartCadre: emptyCartHandlerCadre,
    emptyCart: emptyCartHandler,
    removeItem: removeItemFromCartOuvrantHandler,
    removeCadreItem: removeItemFromCartCadreHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
