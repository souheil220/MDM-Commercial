import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function OuvrantCadre(props) {
  const [showText, setShowText] = useState("");

  var commande = document.getElementById("commande");
  var tdp = document.getElementById("tdp");
  var mdp = document.getElementById("mdp");
  var mdf = document.getElementById("mdf");

  const funcFordisplayTp = (el) => {
    if (el !== "") {
      props.onChange(true);
    } else {
      props.onChange(false);
    }
  };

  const funcForMDP = (onchangeMDP, el, FromText) => {
    var commande = document.getElementById("commande");
    console.log(onchangeMDP);
    if (onchangeMDP) {
      if (FromText === "Cadre Seul") {
        props.onChangeCS(false);
      } else {
        if (
          document.getElementById("tdp").options[
            document.getElementById("tdp").selectedIndex
          ].text !== ""
        ) {
          props.onChangeCS(true);
        }
      }
    } else {
      console.log("elmseeeeeeeee");
      if (
        el !== "" &&
        commande.options[commande.selectedIndex].text !== "Cadre Seul"
      ) {
        props.onChange(true);
      } else {
        props.onChange(false);
      }
    }
  };

  const funcForMDF = (e, el) => {
    if (
      commande.options[commande.selectedIndex].text !== "" &&
      tdp.options[commande.selectedIndex].text !== "" &&
      el !== ""
    ) {
      return props.onChange(true);
    } else {
      return props.onChange(false);
    }
  };

  const funcForCou = (e, el) => {
    if (
      el !== "" &&
      el !== "Aluminium" &&
      el !== "Inox" &&
      el !== "Acier Laqué" &&
      el !== "MDF Brute"
    ) {
      console.log("premier if");
      props.onChange(true);
    } else {
      if (
        commande.options[commande.selectedIndex].text === "" ||
        tdp.options[tdp.selectedIndex].text === "" ||
        mdp.options[mdp.selectedIndex].text === "" ||
        // &&
        // (E6 == "A" ||
        //   E6 == "B" ||
        //   E6 == "C" ||
        //   E6 == "D" ||
        //   E6 == "E" ||
        //   E6 == "F" ||
        //   E6 == 8 ||
        //   E6 == 9 ||
        //   E6 == 5 ||
        //   E6 == 6 ||
        //   E6 == 7)
        el === "" ||
        el === "MDF Brute" ||
        el === "Aluminium"
      ) {
        console.log("deuxieme if");
        props.onChange(false);
      } else {
        props.onChange(true);
      }
    }
  };

  const funcForNDV = (el) => {
    if (
      (el === "" &&
        commande.options[commande.selectedIndex].text === "Cadre Seul" &&
        mdf.options[mdf.selectedIndex].text === "MDF Brute") ||
      el !== ""
    ) {
      props.onChange(true);
    } else {
      if (
        commande.options[commande.selectedIndex].text === "" ||
        commande.options[tdp.selectedIndex].text === "" ||
        //     ||
        // (D5=="" //&& E6!="A" && E6!="B" && E6!="C" && E6!="D"
        // && E6!="E" && E6!="F" && E6!=8 && E6!=9 && E6!=5 && E6!=6 && E6!=7
        // )
        mdf.options[mdf.selectedIndex].text === "" ||
        (el === "" &&
          mdf.options[mdf.selectedIndex].text !== "MDF Brute" &&
          mdf.options[mdf.selectedIndex].text !== "Aluminium")
      ) {
        props.onChange(false);
      } else {
        props.onChange(true);
      }
    }
  };

  const funcForLP = (el) => {
    if ((B5 = 1 && D8 != "" && D8 != 1)) {
      return "Largeur Precadre (Intérieur)";
    } else {
      if (
        D3 == "" ||
        D4 == "" ||
        (D5 == "" && E6 != "TR" && E6 != "AL" && E6 != "SA") ||
        D6 == "" ||
        D7 == "" ||
        D6 != "MDF Brute" ||
        D6 != "Aluminium" ||
        D8 == ""
      ) {
        ("");
      } else {
        if (D8 == 2) {
          return "Largeur Precadre (Intérieur)";
        } else {
          return "";
        }
      }
    }
  };

  const handleText = (e) => {
    const el = document.getElementById(props.id).options[
      document.getElementById(props.id).selectedIndex
    ].text;
    console.log(
      document.getElementById(props.id).options[
        document.getElementById(props.id).selectedIndex
      ].text
    );

    // display TP
    if (el !== "" && props.id === "commande") {
      console.log(el);
      funcFordisplayTp(el);
    }

    // display MDP
    if (el !== "" && (props.id === "tdp" || props.id === "commande")) {
      var commande = document.getElementById("commande");
      var onchangeMDP = false;

      if (props.id === "commande") {
        onchangeMDP = true;
      }
      funcForMDP(
        onchangeMDP,
        el,
        commande.options[commande.selectedIndex].text
      );
    }

    // display MDF
    if (props.id === "mdp") {
      funcForMDF(e, el);
    }

    // display Couleur
    if (props.id === "mdf") {
      console.log("couleur");
      funcForCou(e, el);
    }

    //display Nombre de Ventaux
    if (props.id === "couleur") {
      funcForNDV();
    }

    // Largeur Precadre (Intérieur)
    if (props.id === "ndv") {
      funcForLP();
    }
    setShowText(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h6>{props.title}</h6>
          </div>
        </Col>
        <Col xs={6}>
          <Form.Select id={props.id} onChange={(e) => handleText(e, props.id)}>
            {props.options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col>
          <h6>{showText}</h6>
        </Col>
      </Row>
    </Container>
  );
}
