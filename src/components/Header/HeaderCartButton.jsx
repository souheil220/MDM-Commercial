import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart-context";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const { itemsCadre } = cartCtx;
  var numberOfCartItems = 0;

  if (props.title === "Commande Cadre" && itemsCadre !== undefined) {
    console.log(cartCtx.itemsCadre);
    numberOfCartItems = cartCtx.itemsCadre.reduce((curNumber, item) => {
      return itemsCadre.length;
    }, 0);
  } else if (props.title === "Commande Ouvrant" && items !== undefined) {
    numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
      return items.length;
    }, 0);
  }
  // else {
  //   return 0;
  // }

  const [btnIsHighlighted, setBtnIsHilghted] = useState(false);
  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  //   return items.length;
  // }, 0);

  const btnClasses = `button ${btnIsHighlighted ? "bump" : ""}`;

  useEffect(() => {
    if (props.title === "Commande Ouvrant" && items !== undefined) {
      if (items.length === 0) {
        return;
      }
    } else if (props.title === "Commande Cadre" && itemsCadre !== undefined) {
      if (itemsCadre.length === 0) {
        return;
      }
    }
    setBtnIsHilghted(true);
    const timer = setTimeout(() => {
      setBtnIsHilghted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items, itemsCadre]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={"icon"}>
        <CartIcon />
      </span>
      <span>{props.title}</span>
      <span className={"badge"}>{numberOfCartItems}</span>
    </button>
  );
}
