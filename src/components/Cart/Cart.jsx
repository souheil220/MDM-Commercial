import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";
import Table from "react-bootstrap/Table";

import "./Cart.css";

export default function Cart(props) {
  const cartCxt = useContext(CartContext);
  const hasItems = true;

  const cartItemRemoveHandler = (id) => {
    console.log("id" + id);
    cartCxt.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCxt.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Largeur Precadre (Intérieur)</th>
          <th>Hauteur Ouvrant (mm)</th>
          <th>Largueur Ouvrant (mm)</th>
          <th>Mécanisation de Serrure</th>
          <th>Serrure</th>
          <th>Protecteur</th>
          <th>Sens D'Ouverture</th>
          <th>Vitrage</th>
          <th>Grille D'Airation</th>
          <th>Quincaillerie </th>
          <th>Client</th>
          <th>Code Model</th>
          <th>Code protecteur</th>
          <th>Code vitrage</th>
          <th>Code grille</th>
        </tr>
      </thead>
      <tbody>
        {cartCxt.items.map((item) => (
          <CartItem
            key={item.id}
            lp={item.lp}
            ho={item.ho}
            lo1={item.lo1}
            ms={item.ms}
            se={item.se}
            pro={item.pro}
            so={item.so}
            vi={item.vi}
            ga={item.ga}
            qu={item.qu}
            codeModel={item.codeModel}
            codeProtecteur={item.codeProtecteur}
            codeVitrage={item.codeVitrage}
            codeGrille={item.codeGrille}
            // codeEmbochure={item.codeEmbochure}
            // codeSerure={item.codeSerure}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </tbody>
    </Table>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}

      <div className={"actions"}>
        <button className={"button--alt"} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={"button"}>Order</button>}
      </div>
    </Modal>
  );
}
