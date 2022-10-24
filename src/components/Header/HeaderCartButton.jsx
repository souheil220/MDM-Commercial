import { useContext, useEffect, useState } from "react";
// import CartContext from "../../context/cart-context";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";

export default function HeaderCartButton(props) {
  // const cartCtx = useContext(CartContext);

  // const { items } = cartCtx;
  // const [btnIsHighlighted, setBtnIsHilghted] = useState(false);
  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);

  // const btnClasses = `${classes.button} ${
  //   btnIsHighlighted ? classes.bump : ""
  // }`;

  // useEffect(() => {
  //   if (items.length === 0) {
  //     return;
  //   }
  //   setBtnIsHilghted(true);
  //   const timer = setTimeout(() => {
  //     setBtnIsHilghted(false);
  //   }, 300);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [items]);

  return (
    // <button className={btnClasses} onClick={props.onClick}>
    <button className={"button"} onClick={props.onClick}>
      <span className={"icon"}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {/* <span className={"badge"}>{numberOfCartItems}</span> */}
      <span className={"badge"}>1</span>
    </button>
  );
}
