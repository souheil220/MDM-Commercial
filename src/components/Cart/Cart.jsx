import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";
import Table from "react-bootstrap/Table";

import "./Cart.css";
import { useEffect } from "react";

export default function Cart(props) {
  const [orderValue, setOrderValue] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState({});
  const cartCxt = useContext(CartContext);
  const hasItems = true;

  console.log(orderValue);

  const cartItemRemoveHandler = (id) => {
    cartCxt.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCxt.addItem({ ...item, amount: 1 });
  };

  function handleShow() {
    setShow(false);
  }

  useEffect(() => {
    setError({ title: "", message: "" });
    console.log(orderValue);
    if (orderValue) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartCxt.items),
      };

      fetch("http://127.0.0.1:8000/commande-ouvrant/", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.error !== undefined) {
            setShow(true);
            setError(data.error);
            console.log(data.error);
            setOrderValue(true);
          } else if (data.success !== undefined) {
            console.log(data.success);
            props.cartTitle === "Commande Ouvrant"
              ? (cartCxt.items = [])
              : (cartCxt.itemsCadre = []);
            setOrderValue(true);
            props.onHideCart();
          }
        });
    }
  }, [orderValue]);

  const cartItems = (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Code</th>
          <th>Quantité</th>
          <th>Type de Porte</th>
          <th>Modele de Porte</th>
          <th>Matière De Finition</th>
          <th>Couleur</th>
          <th>Nombre de Ventaux</th>
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
        {props.cartTitle === "Commande Ouvrant" ? (
          cartCxt.items.map((item) => (
            <CartItem
              key={item.id}
              code={item.code}
              quantite={item.quantite}
              tdp={item.tdp}
              mdp={item.mdp}
              mdf={item.mdf}
              couleur={item.couleur}
              ndv={item.ndv}
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
              client={item.client}
              codeModel={item.codeModel}
              codeProtecteur={item.codeProtecteur}
              codeVitrage={item.codeVitrage}
              codeGrille={item.codeGrille}
              // codeEmbochure={item.codeEmbochure}
              // codeSerure={item.codeSerure}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))
        ) : props.cartTitle === "Commande Cadre" ? (
          cartCxt.itemsCadre.map((item) => (
            <CartItem
              key={item.id}
              code={item.code}
              quantite={item.quantite}
              tdp={item.tdp}
              mdp={item.mdp}
              mdf={item.mdf}
              couleur={item.couleur}
              ndv={item.ndv}
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
              client={item.client}
              codeModel={item.codeModel}
              codeProtecteur={item.codeProtecteur}
              codeVitrage={item.codeVitrage}
              codeGrille={item.codeGrille}
              // codeEmbochure={item.codeEmbochure}
              // codeSerure={item.codeSerure}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))
        ) : (
          <>test</>
        )}
      </tbody>
    </Table>
  );

  return (
    <Modal
      onClose={props.onHideCart}
      show={show}
      showHandle={handleShow}
      error={error}
    >
      {cartItems}

      <div className={"actions"}>
        <button className={"button--alt"} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && (
          <button
            className={"button"}
            onClick={() => setOrderValue(!orderValue)}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
}
