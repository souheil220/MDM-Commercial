import React, { useState } from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const BackDrop = (props) => {
  return (
    <div className={"backdrop"} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={"modal"}>
      <div className={"content"}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

export default function Modal(props) {
  console.log(props.show);
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Alert show={props.show} variant="danger" className="alert">
          <Alert.Heading>{props.error.title}</Alert.Heading>
          <p>{props.error.message}</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={props.showHandle} variant="outline-danger">
              Fermer
            </Button>
          </div>
        </Alert>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}
