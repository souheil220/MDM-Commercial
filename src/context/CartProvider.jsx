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
//   if (action.type === "REMOVE") {
//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.id === action.id
//     );

//     const existingItem = state.items[existingCartItemIndex];
//     console.log(existingItem.ho);
//     let updatedItems;
//     updatedItems = state.items.filter((item) => item.id !== action.id);

//     console.log(updatedItems);

//     return {
//       items: updatedItems,
//     };
//   }

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

  // const removeItemFromCartHandler = (id) => {
  //   dispatchCartAction({
  //     type: "REMOVE",
  //     id: id,
  //   });
  // };

  const cartContext = {
    items: defaultCartState.items,
    itemsCadre: defaultCartState.itemsCadre,
    addItem: addItemFromCartHandler,
    addItemCadre: addItemFromCartHandlerCadre,
    // removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
