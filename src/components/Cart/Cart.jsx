import React from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import "./Cart.css";

export default function Cart(props) {
  const hasItems = true;

  const cartItems = (
    <ul className={"cart-items"}>
      <CartItem
        key="1"
        name="test"
        amount="10"
        price="100"
        // onRemove={cartItemRemoveHandler.bind(null, item.id)}
        // onAdd={cartItemAddHandler.bind(null, item)}
      />
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={"total"}>
        <span>Total Amount</span>
        <span>100</span>
      </div>
      <div className={"actions"}>
        <button className={"button--alt"} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={"button"}>Order</button>}
      </div>
    </Modal>
  );
}
