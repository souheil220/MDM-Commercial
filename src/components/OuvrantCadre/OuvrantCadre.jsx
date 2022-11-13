import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import "./OuvrantCadre.css";

export default function OuvrantCadre(props) {
  const [showText, setShowText] = useState("");
  const [showHauteur, setShowHauteur] = useState(false);
  const [showLargueur, setShowLargueur] = useState(false);
  const [showEpaisseur, setShowEpesseur] = useState(false);
  const [largeur, setLargeur] = useState(0);
  const [epaisseur, setEpaisseur] = useState(0);

  const [inputB9, setInputB9] = useState(1);
  const [inputB7, setInputB7] = useState(0);
  const [inputB13, setInputB13] = useState(1);

  var commande = document.getElementById("commande");
  var tdp = document.getElementById("tdp");
  var mdp = document.getElementById("mdp");
  var mdf = document.getElementById("mdf");
  var ndv = document.getElementById("ndv");
  var couleur = document.getElementById("couleur");
  var lp = document.getElementById("lp");
  var ho = document.getElementById("ho");
  var lo1 = document.getElementById("lo1");
  var ms = document.getElementById("ms");
  var se = document.getElementById("se");
  var pro = document.getElementById("pro");
  var vi = document.getElementById("vi");
  var so = document.getElementById("so");
  var ga = document.getElementById("ga");
  var qu = document.getElementById("qu");
  var em = document.getElementById("em");
  var cu = document.getElementById("cu");
  var cjh = document.getElementById("cjh");

  const funcFordisplayTp = (el) => {
    if (el !== "") {
      props.onChangeB5Value(0);
      props.onChangeC(true);
    } else {
      props.onChangeC(false);
    }
  };

  const funcForMDP = () => {
    var tdp = document.getElementById("tdp");

    if (
      tdp === null ||
      (tdp !== null &&
        tdp.options[document.getElementById("tdp").selectedIndex].text ===
          "") ||
      (commande !== null &&
        commande.options[document.getElementById("commande").selectedIndex]
          .text === "Cadre Seul" &&
        tdp !== null &&
        tdp.options[document.getElementById("tdp").selectedIndex].text !== "")
    ) {
      props.onChangeB5Value(1);
      props.onChangeTDP(false);
    } else {
      console.log("TDP " + tdp);
      props.onChangeB5Value(0);
      props.onChangeTDP(true);
    }
  };

  const funcForMDF = () => {
    var mdp = document.getElementById("mdp");
    if (
      commande.options[commande.selectedIndex].text === "" ||
      tdp.options[commande.selectedIndex].text === "" ||
      (mdp.options[mdp.selectedIndex].text === "" && props.inputB5Value !== 1)
    ) {
      props.onChangeMDP(false);
    } else {
      props.onChangeMDP(true);
    }
  };

  const funcForCou = () => {
    var mdf = document.getElementById("mdf");

    if (
      props.inputB5Value === 1 &&
      mdf.options[mdf.selectedIndex].text !== "" &&
      mdf.options[mdf.selectedIndex].text !== "Aluminium" &&
      mdf.options[mdf.selectedIndex].text !== "Inox" &&
      mdf.options[mdf.selectedIndex].text !== "Acier Laqué" &&
      mdf.options[mdf.selectedIndex].text !== "MDF Brute"
    ) {
      props.onChange(true);
    } else {
      if (
        commande.options[commande.selectedIndex].text === "" ||
        tdp.options[tdp.selectedIndex].text === "" ||
        (mdp !== null && mdp.options[mdp.selectedIndex].text === "") ||
        (mdp !== null &&
          mdp.options[mdp.selectedIndex].text === "" &&
          (document.getElementById("mdf_h6").textContent === "A" ||
            document.getElementById("mdf_h6").textContent === "B" ||
            document.getElementById("mdf_h6").textContent === "C" ||
            document.getElementById("mdf_h6").textContent === "D" ||
            document.getElementById("mdf_h6").textContent === "E" ||
            document.getElementById("mdf_h6").textContent === "F" ||
            document.getElementById("mdf_h6").textContent === 8 ||
            document.getElementById("mdf_h6").textContent === 9 ||
            document.getElementById("mdf_h6").textContent === 5 ||
            document.getElementById("mdf_h6").textContent === 6 ||
            document.getElementById("mdf_h6").textContent === 7)) ||
        mdf.options[mdf.selectedIndex].text === "" ||
        mdf.options[mdf.selectedIndex].text === "MDF Brute" ||
        mdf.options[mdf.selectedIndex].text === "Aluminium"
      ) {
        setInputB7(1);
        props.onChangeMDF(false);
      } else {
        props.onChangeMDF(true);
      }
    }
  };

  const funcForNDV = () => {
    var couleur = document.getElementById("couleur");
    if (
      (props.inputB5Value === 1 &&
        couleur.options[couleur.selectedIndex].text === "" &&
        commande.options[commande.selectedIndex].text === "Cadre Seul" &&
        mdf.options[mdf.selectedIndex].text === "MDF Brute") ||
      (props.inputB5Value === 1 &&
        couleur.options[couleur.selectedIndex].text !== "") ||
      (props.inputB5Value === 1 && inputB7 === 1)
    ) {
      props.onChangeCOULEUR(true);
    } else {
      if (
        commande.options[commande.selectedIndex].text === "" ||
        tdp.options[tdp.selectedIndex].text === "" ||
        (mdp.options[mdp.selectedIndex].text === "" &&
          document.getElementById("mdf_h6").textContent !== "A" &&
          document.getElementById("mdf_h6").textContent !== "B" &&
          document.getElementById("mdf_h6").textContent !== "C" &&
          document.getElementById("mdf_h6").textContent !== "D" &&
          document.getElementById("mdf_h6").textContent !== "E" &&
          document.getElementById("mdf_h6").textContent !== "F" &&
          document.getElementById("mdf_h6").textContent !== 8 &&
          document.getElementById("mdf_h6").textContent !== 9 &&
          document.getElementById("mdf_h6").textContent !== 5 &&
          document.getElementById("mdf_h6").textContent !== 6 &&
          document.getElementById("mdf_h6").textContent !== 7) ||
        mdf.options[mdf.selectedIndex].text === "" ||
        (couleur.options[couleur.selectedIndex].text === "" &&
          mdf.options[mdf.selectedIndex].text !== "MDF Brute" &&
          mdf.options[mdf.selectedIndex].text !== "Aluminium")
      ) {
        props.onChangeCOULEUR(false);
      } else {
        props.onChangeCOULEUR(true);
      }
    }
  };

  const funcForLP = () => {
    var ndv = document.getElementById("ndv");
    if (
      props.inputB5Value === 1 &&
      ndv.options[ndv.selectedIndex].text !== "" &&
      parseInt(ndv.options[ndv.selectedIndex].text) !== 1
    ) {
      props.onChangeNDV(true);
    } else {
      if (
        commande.options[commande.selectedIndex].text === "" ||
        tdp.options[tdp.selectedIndex].text === "" ||
        (mdp !== null &&
          mdp.options[mdp.selectedIndex].text === "" &&
          document.getElementById("mdf_h6").textContent !== "TR" &&
          document.getElementById("mdf_h6").textContent !== "AL" &&
          document.getElementById("mdf_h6").textContent !== "SA") ||
        mdf.options[mdf.selectedIndex].text === "" ||
        (couleur !== null &&
          couleur.options[couleur.selectedIndex].text === "" &&
          mdf.options[mdf.selectedIndex].text !== "MDF Brute" &&
          mdf.options[mdf.selectedIndex].text !== "Aluminium") ||
        ndv.options[ndv.selectedIndex].text === ""
      ) {
        props.onChangeNDV(false);
      } else {
        if (parseInt(ndv.options[ndv.selectedIndex].text) === 2) {
          props.onChangeNDV(true);
        } else {
          props.onChangeNDV(false);
        }
      }
    }
  };

  const funcForHO = () => {
    var lp = document.getElementById("lp");
    var ndv = document.getElementById("ndv");
    if (
      (inputB9 === 1 && lp === null) ||
      (inputB9 === 0 && lp !== null && lp.options[lp.selectedIndex].text !== "")
    ) {
      props.onChangeLP(true);
    } else {
      if (
        commande.options[commande.selectedIndex].text === "" ||
        tdp.options[tdp.selectedIndex].text === "" ||
        (mdp !== null &&
          mdp.options[mdp.selectedIndex].text === "" &&
          document.getElementById("mdf_h6").textContent !== "TR" &&
          document.getElementById("mdf_h6").textContent !== "AL" &&
          document.getElementById("mdf_h6").textContent !== "SA") ||
        mdf.options[mdf.selectedIndex].text === "" ||
        (couleur !== null &&
          couleur.options[couleur.selectedIndex].text === "" &&
          mdf.options[mdf.selectedIndex].text !== "MDF Brute" &&
          mdf.options[mdf.selectedIndex].text !== "Aluminium") ||
        ndv.options[ndv.selectedIndex].text === "" ||
        (parseInt(ndv.options[ndv.selectedIndex].text) === 2 &&
          lp !== null &&
          lp.options[lp.selectedIndex].text === "")
      ) {
        props.onChangeLP(false);
      } else {
        props.onChangeLP(true);
      }
    }
  };

  const funcForLO1 = () => {
    var ho = document.getElementById("ho");
    if (ho.options[ho.selectedIndex].text === "Spéciale") {
      setShowHauteur(true);
    } else {
      setShowHauteur(false);
    }
    if (
      (props.inputB5Value === 1 &&
        ho.options[ho.selectedIndex].text !== "" &&
        ho.options[ho.selectedIndex].text !== "Spéciale") ||
      (inputB9 === 1 &&
        ho.options[ho.selectedIndex].text === "Spéciale" &&
        document.getElementById("ho_special_value") !== null &&
        document.getElementById("ho_special_value").textContent !== "") ||
      (inputB9 === 0 &&
        ho.options[ho.selectedIndex].text === "Spéciale" &&
        document.getElementById("ho_special_value") !== null &&
        document.getElementById("ho_special_value").textContent !== "")
    ) {
      if (parseInt(ndv.options[ndv.selectedIndex].text) === 2) {
        props.nameSetter("1er ");
      } else {
        props.nameSetter("");
      }
      props.onChangeHO(true);
    } else {
      if (
        commande.options[commande.selectedIndex].text === "" ||
        tdp.options[tdp.selectedIndex].text === "" ||
        (mdp.options[mdp.selectedIndex].text === "" &&
          document.getElementById("mdf_h6").textContent !== "TR" &&
          document.getElementById("mdf_h6").textContent !== "AL" &&
          document.getElementById("mdf_h6").textContent !== "SA") ||
        mdf.options[mdf.selectedIndex].text === "" ||
        (couleur.options[couleur.selectedIndex].text === "" &&
          mdf.options[mdf.selectedIndex].text !== "MDF Brute" &&
          mdf.options[mdf.selectedIndex].text !== "Aluminium") ||
        ndv.options[ndv.selectedIndex].text === "" ||
        (parseInt(ndv.options[ndv.selectedIndex].text) === 2 &&
          lp.options[lp.selectedIndex].text === "") ||
        ho.options[ho.selectedIndex].text === ""
      ) {
        props.onChangeHO(false);
      } else {
        if (parseInt(ndv.options[ndv.selectedIndex].text) === 2) {
          console.log("funcForLO1 else 1 if");
          props.nameSetter("1er ");
        } else {
          props.nameSetter("");
        }
        props.onChangeHO(true);
      }
    }
  };

  const funcForLO2 = (e, el) => {
    var lo2 = document.getElementById("lo2");
    var hauteurContent = "";
    if (el !== null && el === "Spéciale") {
      hauteurContent = document.getElementById("ho_special_value").textContent;
    }
    if (
      (el !== null &&
        parseInt(ndv.options[ndv.selectedIndex].text) === 2 &&
        el !== "" &&
        el !== "Spéciale") ||
      (parseInt(ndv.options[ndv.selectedIndex].text) === 2 &&
        hauteurContent !== "" &&
        el === "Spéciale")
    ) {
      props.onChangeLO1(true);
    } else {
      props.onChangeLO1(false);
    }
  };

  const funcForMS = (e, el, B13) => {
    if (B13 === 1) {
      props.onChangeMS(true);
    } else {
      if (
        commande.options[commande.selectedIndex].text === "" ||
        tdp.options[tdp.selectedIndex].text === "" ||
        (mdp.options[mdp.selectedIndex].text === "" &&
          document.getElementById("mdf_h6").textContent !== "TR" &&
          document.getElementById("mdf_h6").textContent !== "AL" &&
          document.getElementById("mdf_h6").textContent !== "SA") ||
        mdf.options[mdf.selectedIndex].text === "" ||
        (couleur.options[couleur.selectedIndex].text === "" &&
          mdf.options[mdf.selectedIndex].text !== "MDF Brute" &&
          mdf.options[mdf.selectedIndex].text !== "Aluminium") ||
        parseInt(ndv.options[ndv.selectedIndex].text) === "" ||
        (parseInt(ndv.options[ndv.selectedIndex].text) === 2 &&
          lp.options[lp.selectedIndex].text === "") ||
        ho.options[ho.selectedIndex].text === "" ||
        el === ""
      ) {
        props.onChangeMS(false);
      } else {
        props.onChangeMS(true);
      }
    }
  };

  const funcForSE = (e, el) => {
    if (inputB13 === 1 && el !== "") {
      props.onChangeSE(true);
    } else {
      if (
        commande.options[commande.selectedIndex].text === "" ||
        tdp.options[tdp.selectedIndex].text === "" ||
        (mdp.options[mdp.selectedIndex].text === "" &&
          document.getElementById("mdf_h6").textContent !== "TR" &&
          document.getElementById("mdf_h6").textContent !== "AL" &&
          document.getElementById("mdf_h6").textContent !== "SA") ||
        mdf.options[mdf.selectedIndex].text === "" ||
        (couleur.options[couleur.selectedIndex].text === "" &&
          mdf.options[mdf.selectedIndex].text !== "MDF Brute" &&
          mdf.options[mdf.selectedIndex].text !== "Aluminium") ||
        ndv.options[ndv.selectedIndex].text === "" ||
        (parseInt(commande.options[commande.selectedIndex].text) === 2 &&
          lp.options[lp.selectedIndex].text === "") ||
        ho.options[ho.selectedIndex].text === "" ||
        lo1.options[lo1.selectedIndex].text === "" ||
        el === "" ||
        el === "Sans Mecanisation"
      ) {
        props.onChangeSE(false);
      } else {
        props.onChangeSE(true);
      }
    }
  };

  const funcForPro = (e, el, activate) => {
    var ms = document.getElementById("ms");
    if (ms !== null || activate) {
      props.onChangePro(true);
    } else {
      if (commande.options[commande.selectedIndex].text === "Cadre Seul") {
        props.onChangePro(false);
      } else {
        if (
          commande.options[commande.selectedIndex].text === "" ||
          tdp.options[tdp.selectedIndex].text === "" ||
          (mdp.options[mdp.selectedIndex].text === "" &&
            document.getElementById("mdf_h6").textContent !== "TR" &&
            document.getElementById("mdf_h6").textContent !== "AL" &&
            document.getElementById("mdf_h6").textContent !== "SA") ||
          mdf.options[mdf.selectedIndex].text === "" ||
          (couleur.options[couleur.selectedIndex].text === "" &&
            mdf.options[mdf.selectedIndex].text !== "MDF Brute" &&
            mdf.options[mdf.selectedIndex].text !== "Aluminium") ||
          ndv.options[ndv.selectedIndex].text === "" ||
          (parseInt(ndv.options[ndv.selectedIndex].text) === 2 &&
            lp.options[lp.selectedIndex].text === "") ||
          ho.options[ho.selectedIndex].text === "" ||
          el === "" ||
          ms === null ||
          ms.options[ms.selectedIndex].text === "" ||
          (se.options[se.selectedIndex].text === "" &&
            document.getElementById("se_h6").textContent !== "SM")
        ) {
          props.onChangePro(false);
        } else {
          props.onChangePro(true);
        }
      }
    }
  };

  const funcForSO = (e, el, B14) => {
    if (B14 === 1) {
      props.onChangeSO(true);
    } else {
      if (
        commande.options[commande.selectedIndex].text === "Cadre Seul" &&
        se !== null &&
        se.options[se.selectedIndex].text !== ""
      ) {
        props.onChangeSO(true);
      } else {
        console.log("lp " + lp);
        if (
          commande.options[commande.selectedIndex].text === "" ||
          tdp.options[tdp.selectedIndex].text === "" ||
          (mdp !== null &&
            mdp.options[mdp.selectedIndex].text === "" &&
            document.getElementById("mdf_h6").textContent !== "TR" &&
            document.getElementById("mdf_h6").textContent !== "AL" &&
            document.getElementById("mdf_h6").textContent !== "SA") ||
          mdf.options[mdf.selectedIndex].text === "" ||
          (couleur !== null &&
            couleur.options[couleur.selectedIndex].text === "" &&
            mdf.options[mdf.selectedIndex].text !== "MDF Brute" &&
            mdf.options[mdf.selectedIndex].text !== "Aluminium") ||
          ndv.options[ndv.selectedIndex].text === "" ||
          (parseInt(ndv.options[ndv.selectedIndex].text) === 2 &&
            lp !== null &&
            lp.options[lp.selectedIndex].text === "") ||
          ho.options[ho.selectedIndex].text === "" ||
          lo1.options[lo1.selectedIndex].text === "" ||
          el === "" ||
          pro === null ||
          pro.options[pro.selectedIndex].text === ""
        ) {
          props.onChangeSO(false);
        } else {
          props.onChangeSO(true);
        }
      }
    }
  };

  const funcForVI = (e, el) => {
    if (el !== "") {
      props.onChangeVI(true);
    } else {
      if (parseInt(document.getElementById("mdp_h6").textContent) === 7) {
        return "";
      } else {
        if (
          commande.options[commande.selectedIndex].text === "" ||
          commande.options[commande.selectedIndex].text === "Cadre Seul" ||
          tdp.options[tdp.selectedIndex].text === "" ||
          tdp.options[tdp.selectedIndex].text !== "Porte de Passage" ||
          (mdp.options[mdp.selectedIndex].text === "" &&
            document.getElementById("mdf_h6").textContent !== "TR" &&
            document.getElementById("mdf_h6").textContent !== "AL" &&
            document.getElementById("mdf_h6").textContent !== "SA") ||
          mdf.options[mdf.selectedIndex].text === "" ||
          (couleur.options[couleur.selectedIndex].text === "" &&
            mdf.options[mdf.selectedIndex].text !== "MDF Brute" &&
            mdf.options[mdf.selectedIndex].text !== "Aluminium") ||
          ndv.options[ndv.selectedIndex].text === "" ||
          (parseInt(ndv.options[ndv.selectedIndex].text) === 2 &&
            (lp === null || lp.options[lp.selectedIndex].text === "")) ||
          ho.options[ho.selectedIndex].text === "" ||
          lo1.options[lo1.selectedIndex].text === "" ||
          ms.options[ms.selectedIndex].text === "" ||
          el === "" ||
          document.getElementById("mdf_h6").textContent === "SA" ||
          document.getElementById("mdf_h6").textContent === "AL" ||
          document.getElementById("mdf_h6").textContent === "TR"
        ) {
          props.onChangeVI(false);
        } else {
          props.onChangeVI(true);
        }
      }
    }
  };

  const funcForGA = (el) => {
    var vi = document.getElementById("vi");
    if (
      vi === null &&
      document.getElementById("mdp_h6") !== null &&
      parseInt(document.getElementById("mdp_h6").textContent) === 7
    ) {
      props.onChangeGA(true);
    } else {
      if (
        commande.options[commande.selectedIndex].text === "" ||
        commande.options[commande.selectedIndex].text === "Cadre Seul" ||
        tdp.options[tdp.selectedIndex].text === "" ||
        (mdp !== null &&
          mdp.options[mdp.selectedIndex].text === "" &&
          document.getElementById("mdf_h6").textContent !== "TR" &&
          document.getElementById("mdf_h6").textContent !== "AL" &&
          document.getElementById("mdf_h6").textContent !== "SA") ||
        mdf.options[mdf.selectedIndex].text === "" ||
        (couleur.options[couleur.selectedIndex].text === "" &&
          mdf.options[mdf.selectedIndex].text !== "MDF Brute" &&
          mdf.options[mdf.selectedIndex].text !== "Aluminium") ||
        ndv.options[ndv.selectedIndex].text === "" ||
        (parseInt(ndv.options[ndv.selectedIndex].text) === 2 &&
          lp !== null &&
          lp.options[lp.selectedIndex].text === "") ||
        ho.options[ho.selectedIndex].text === "" ||
        lo1.options[lo1.selectedIndex].text === "" ||
        ms.options[ms.selectedIndex].text === "" ||
        (vi !== null &&
          vi.options[vi.selectedIndex].text === "" &&
          // vi === null &&
          //   vi.options[vi.selectedIndex].text === "" &&
          tdp.options[tdp.selectedIndex].text === "Porte De Passage")
      ) {
        props.onChangeGA(false);
      } else {
        props.onChangeGA(true);
      }
    }
  };

  const funcForQu = (e, el) => {
    if (props.inputB5Value === 1 && so !== null) {
      props.onChangeQU(true);
    } else {
      if (
        so !== null &&
        tdp.options[tdp.selectedIndex].text !== "Porte de Passage" &&
        so.options[so.selectedIndex].text !== "" &&
        ga === null
      ) {
        props.onChangeQU(true);
      } else {
        var content = "";
        // if (props.id === "so") {
        //   content = el;
        // } else {
        //   content = so.options[so.selectedIndex].text;
        // }
        if (
          commande.options[commande.selectedIndex].text === "" ||
          tdp.options[tdp.selectedIndex].text === "" ||
          (mdp !== null &&
            mdp.options[mdp.selectedIndex].text === "" &&
            document.getElementById("mdf_h6").textContent !== "TR" &&
            document.getElementById("mdf_h6").textContent !== "AL" &&
            document.getElementById("mdf_h6").textContent !== "SA") ||
          mdf.options[mdf.selectedIndex].text === "" ||
          (couleur !== null &&
            couleur.options[couleur.selectedIndex].text === "" &&
            mdf.options[mdf.selectedIndex].text !== "MDF Brute" &&
            mdf.options[mdf.selectedIndex].text !== "Aluminium") ||
          ndv.options[ndv.selectedIndex].text === "" ||
          (parseInt(ndv.options[ndv.selectedIndex].text) === 2 &&
            lp !== null &&
            lp.options[lp.selectedIndex].text === "") ||
          ho.options[ho.selectedIndex].text === "" ||
          lo1.options[lo1.selectedIndex].text === "" ||
          ms.options[ms.selectedIndex].text === "" ||
          (so !== null && so.options[so.selectedIndex].text === "") ||
          (el === "" &&
            ((vi !== null && vi.options[vi.selectedIndex].text === "") ||
              el === "") &&
            commande.options[commande.selectedIndex].text === "Ouvrant Seul")
        ) {
          props.onChangeQU(false);
        } else {
          console.log("gatlah 28");
          props.onChangeQU(true);
        }
      }
    }
  };

  const funcForEM = (B5) => {
    var qu = document.getElementById("qu");
    if (
      parseInt(document.getElementById("tdp_h6").textContent) === 1 &&
      parseInt(document.getElementById("mdp_h6").textContent) === 7 &&
      vi !== null &&
      vi.options[vi.selectedIndex].text !== ""
    ) {
      props.onChangeEM(true);
    } else {
      if (
        B5 === 1 &&
        qu.options[qu.selectedIndex].text !== "" &&
        se.options[se.selectedIndex].text !== ""
      ) {
        console.log("tzst");
        props.onChangeEM(true);
      } else {
        if (
          document.getElementById("tdp_h6").textContent === "T" &&
          document.getElementById("mdf_h6").textContent === "AL"
        ) {
          props.onChangeEM(true);
        } else {
          if (
            commande.options[commande.selectedIndex].text === "" ||
            commande.options[commande.selectedIndex].text === "Ouvrant Seul" ||
            tdp.options[tdp.selectedIndex].text === "" ||
            (mdp !== null &&
              mdp.options[mdp.selectedIndex].text === "" &&
              document.getElementById("mdf_h6").textContent !== "TR" &&
              document.getElementById("mdf_h6").textContent !== "AL" &&
              document.getElementById("mdf_h6").textContent !== "SA") ||
            mdf.options[mdf.selectedIndex].text === "" ||
            (couleur.options[couleur.selectedIndex].text === "" &&
              mdf.options[mdf.selectedIndex].text !== "MDF Brute" &&
              mdf.options[mdf.selectedIndex].text !== "Aluminium") ||
            ndv.options[ndv.selectedIndex].text === "" ||
            (parseInt(ndv.options[ndv.selectedIndex].text) === 2 &&
              lp !== null &&
              lp.options[lp.selectedIndex].text === "") ||
            ho.options[ho.selectedIndex].text === "" ||
            lo1.options[lo1.selectedIndex].text === "" ||
            ms.options[ms.selectedIndex].text === "" ||
            so.options[so.selectedIndex].text === "" ||
            qu.options[qu.selectedIndex].text === "" ||
            (qu.options[qu.selectedIndex].text === "" &&
              document.getElementById("tdp_h6").textContent === "T")
          ) {
            console.log(mdp !== null);
            console.log(mdp.options[mdp.selectedIndex].text === "");
            props.onChangeEM(false);
          } else {
            props.onChangeEM(true);
          }
        }
      }
    }
  };

  const funcForCU = (el) => {
    console.log("el " + el);
    if (el === "") {
      props.onChangeCU(false);
    } else {
      if (el !== "Spéciale") {
        setShowEpesseur(false);
        if (el === "130-->165") {
          props.onChangeCUValue("100");
        } else if (el === "160-->195") {
          props.onChangeCUValue("130");
        } else {
          props.onChangeCUValue("160");
        }
        props.onChangeCU(true);
      }
    }
  };

  const funcForCJH = (el, em_h6, F20) => {
    if (
      props.inputB5Value === 1 &&
      ((el !== "Spécial" && el !== "") || el === "Spécial") &&
      F20 !== ""
    ) {
      props.onChangeCJH(true);
    } else {
      if (
        commande.options[commande.selectedIndex].text === "" ||
        commande.options[commande.selectedIndex].text === "Ouvrant Seul" ||
        tdp.options[tdp.selectedIndex].text === "" ||
        (mdp.options[mdp.selectedIndex].text === "" &&
          document.getElementById("mdf_h6").textContent !== "TR" &&
          document.getElementById("mdf_h6").textContent !== "AL" &&
          document.getElementById("mdf_h6").textContent !== "SA") ||
        mdf.options[mdf.selectedIndex].text === "" ||
        (couleur.options[couleur.selectedIndex].text === "" &&
          mdf.options[mdf.selectedIndex].text !== "MDF Brute" &&
          mdf.options[mdf.selectedIndex].text !== "Aluminium") ||
        ndv.options[ndv.selectedIndex].text === "" ||
        (parseInt(ndv.options[ndv.selectedIndex].text) === 2 &&
          lp !== null &&
          lp.options[lp.selectedIndex].text === "") ||
        ho.options[ho.selectedIndex].text === "" ||
        lo1.options[lo1.selectedIndex].text === "" ||
        ms.options[ms.selectedIndex].text === "" ||
        so.options[so.selectedIndex].text === "" ||
        el === "" ||
        parseInt(em_h6) === 7 ||
        (document.getElementById("cu_value") !== null &&
          document.getElementById("cu_value").textContent === "")
      ) {
        props.onChangeCJH(false);
      } else {
        props.onChangeCJH(true);
      }
    }
  };

  const funcForCJL = (e, el) => {
    if (props.inputB5Value === 1 && el !== "") {
      props.onChangeCJL(true);
    } else {
      if (
        commande.options[commande.selectedIndex].text === "" ||
        commande.options[commande.selectedIndex].text === "Ouvrant Seul" ||
        tdp.options[tdp.selectedIndex].text === "" ||
        (mdp.options[mdp.selectedIndex].text === "" &&
          document.getElementById("mdf_h6").textContent !== "TR" &&
          document.getElementById("mdf_h6").textContent !== "AL" &&
          document.getElementById("mdf_h6").textContent !== "SA") ||
        mdf.options[mdf.selectedIndex].text === "" ||
        (couleur.options[couleur.selectedIndex].text === "" &&
          mdf.options[mdf.selectedIndex].text !== "MDF Brute" &&
          mdf.options[mdf.selectedIndex].text !== "Aluminium") ||
        ndv.options[ndv.selectedIndex].text === "" ||
        (parseInt(ndv.options[ndv.selectedIndex].text) === 2 &&
          (lp === null || lp.options[lp.selectedIndex].text === "")) ||
        ho.options[ho.selectedIndex].text === "" ||
        lo1.options[lo1.selectedIndex].text === "" ||
        ms.options[ms.selectedIndex].text === "" ||
        so.options[so.selectedIndex].text === "" ||
        em.options[em.selectedIndex].text === "" ||
        el === ""
      ) {
        props.onChangeCJL(false);
      } else {
        props.onChangeCJL(true);
      }
    }
  };

  const funcForCDCJ = (e, el) => {
    if (props.inputB5Value === 1 && el !== "") {
      props.onChangeCDCJ(true);
    } else {
      if (
        commande.options[commande.selectedIndex].text === "" ||
        commande.options[commande.selectedIndex].text === "Ouvrant Seul" ||
        tdp.options[tdp.selectedIndex].text === "" ||
        (mdp.options[mdp.selectedIndex].text === "" &&
          document.getElementById("mdf_h6").textContent !== "TR" &&
          document.getElementById("mdf_h6").textContent !== "AL" &&
          document.getElementById("mdf_h6").textContent !== "SA") ||
        mdf.options[mdf.selectedIndex].text === "" ||
        (couleur.options[couleur.selectedIndex].text === "" &&
          mdf.options[mdf.selectedIndex].text !== "MDF Brute" &&
          mdf.options[mdf.selectedIndex].text !== "Aluminium") ||
        ndv.options[ndv.selectedIndex].text === "" ||
        (parseInt(ndv.options[ndv.selectedIndex].text) === 2 &&
          (lp === null || lp.options[lp.selectedIndex].text === "")) ||
        ho.options[ho.selectedIndex].text === "" ||
        lo1.options[lo1.selectedIndex].text === "" ||
        ms.options[ms.selectedIndex].text === "" ||
        so.options[so.selectedIndex].text === "" ||
        em.options[em.selectedIndex].text === "" ||
        cjh.options[cjh.selectedIndex].text === "" ||
        el === ""
      ) {
        props.onChangeCDCJ(false);
      } else {
        props.onChangeCDCJ(true);
      }
    }
  };

  const funcCalculateLO2 = (lp, lo1, largeur) => {
    props.onChangeLO2Value(parseInt(lp) - 13 - parseInt(lo1) - largeur);
  };

  const blurFunctionLargeur = (event) => {
    var lp = document.getElementById("lp");
    funcCalculateLO2(lp.options[lp.selectedIndex].text, 0, event.target.value);
  };

  const funcCalculateCU = (lp, lo1, largeur) => {
    props.onChangeCUValue(parseInt(lp) - 13 - parseInt(lo1) - largeur);
  };

  const handleLargeurChange = (event) => {
    setLargeur(event.target.value);
    setInputB13(1);
    props.onChangeLO1(true);
    console.log(largeur);
    funcCalculateLO2(
      lp.options[lp.selectedIndex].text,
      event.target.value,
      largeur
    );
  };

  const blurFunction = (event) => {
    if (
      172 < parseInt(event.target.value) &&
      parseInt(event.target.value) &&
      parseInt(event.target.value) &&
      parseInt(event.target.value) <= 201
    ) {
      props.onChangeCUValue("100");
    } else if (
      202 < parseInt(event.target.value) &&
      parseInt(event.target.value) <= 231
    ) {
      props.onChangeCUValue("130");
    } else if (
      244 < parseInt(event.target.value) &&
      parseInt(event.target.value) <= 273
    ) {
      props.onChangeCUValue("100");
    } else if (
      274 < parseInt(event.target.value) &&
      parseInt(event.target.value) <= 303
    ) {
      props.onChangeCUValue("130");
    } else if (
      232 < parseInt(event.target.value) &&
      parseInt(event.target.value) <= 261
    ) {
      props.onChangeCUValue("160");
    } else if (
      304 < parseInt(event.target.value) &&
      parseInt(event.target.value) <= 333
    ) {
      props.onChangeCUValue("160");
    } else {
      props.onChangeCUValue("0");
    }
    em = document.getElementById("em");
    props.onChangeCU(true);
    funcForCJH(
      em.options[em.selectedIndex].text,
      props.options[em.selectedIndex].code,
      event.target.value
    );
  };

  const handleText = (e) => {
    const el = document.getElementById(props.id).options[
      document.getElementById(props.id).selectedIndex
    ].text;

    // display TP
    if (el !== "" && props.id === "commande") {
      var commande = document.getElementById("commande");
      var B5 = 0;
      if (el === "Cadre Seul") {
        B5 = 1;
        props.onChangeB5Value(1);
      }
      setShowText(props.options[commande.selectedIndex].code);
      funcFordisplayTp(el);
      funcForMDP();
      funcForGA();
      funcForEM(B5);
  
  
      //////////////////////// verifie ////////////////////
      funcForCJH()
      funcForCJL()
      funcForCDCJ()
      ///////////////////////////
    }

    // display MDP
    if (el !== "" && props.id === "tdp") {
      var tdp = document.getElementById("tdp");
      setShowText(props.options[tdp.selectedIndex].code);
      funcForMDP();
    }

    // display MDF
    if (props.id === "mdp") {
      funcForMDF();
    }

    // display Couleur
    if (props.id === "mdf") {
      funcForCou();
    }

    //display Nombre de Ventaux
    if (props.id === "couleur") {
      var couleur = document.getElementById("couleur");
      setShowText(props.options[couleur.selectedIndex].code);
      funcForNDV();
    }

    // Largeur Precadre (Intérieur)
    if (props.id === "ndv") {
      if (el === "2") {
        setInputB9(0);
      } else {
        props.nameSetter("");
        setInputB9(1);
        props.onChangeLO1(false);
      }
      funcForLP(e, el);
      funcForHO(e, el, "nvd");

      var ndv = document.getElementById("ndv");
      setShowText(props.options[ndv.selectedIndex].code);
    }

    // Hauteur Ouvrant (mm)
    if (props.id === "lp") {
      funcForHO();
      var lo1 = document.getElementById("lo1");
      if (lo1 !== null) {
        funcCalculateLO2(el, lo1.options[lo1.selectedIndex].text, 0);
      }
    }

    // Largueur " + (D8==2 ? "1er " : "") + "Ouvrant (mm)
    if (props.id === "ho") {
      funcForLO1();
      // funcForLO2(e, el, false);
    }

    // Mécanisation de Serrure (a revoir)
    if (props.id === "lo1") {
      var B13 = 0;
      var ndv = document.getElementById("ndv");
      var lp = document.getElementById("lp");
      if (el === "Spéciale") {
        setShowLargueur(true);
      } else {
        setShowLargueur(false);
      }

      if (el !== "" && el !== "Spéciale") {
        B13 = 1;
        setInputB13(1);
        // funcCalculateLO2(lp.options[lp.selectedIndex].text, el, 0);
      }

      if (parseInt(ndv.options[ndv.selectedIndex].text) === 2) {
        if (el !== "spécial") {
          console.log("here");
          funcForLO2(e, el, false);
          funcCalculateLO2(lp.options[lp.selectedIndex].text, el, 0);
        } else {
          console.log(props.onChange);
          // lO2ActivationFunc = props.onChange;
          // console.log(lO2ActivationFunc);
        }
      }
      funcForMS(e, el, B13);
      funcForPro(e, el, true);
    }

    if (props.id === "ms") {
      var B14 = 0;
      if (inputB13 === 1 && el === "Sans Mecanisation") {
        props.onChangeB14Value(1);
        B14 = 1;
      } else {
        B14 = 0;
        props.onChangeB14Value(1);
      }
      funcForSE(e, el);
      funcForSO(e, el, B14);
      var ms = document.getElementById("ms");
      setShowText(props.options[ms.selectedIndex].code);
    }

    if (props.id === "se") {
      // var ms = document.getElementById("ms")
      // if (ms.options[ms.selectedIndex].text !== "Sans Mecanisation") {
      //   funcForSO(e, el, inputB14, "se");
      // }
      console.log("B14 " + props.inputB14);
      funcForSO(e, el, props.inputB14);
    }

    if (props.id === "so") {
      funcForVI(e, el);
      // funcForGA(e, el, null);
      // funcForQu(e, el);
      var so = document.getElementById("so");
      setShowText(props.options[so.selectedIndex].code);
      // funcForQu(e, el);
    }

    if (props.id === "vi") {
      funcForGA(el);
    }

    if (props.id === "ga") {
      funcForQu(e, el);
    }

    if (props.id === "qu") {
      funcForEM(props.inputB5Value);
    }

    if (props.id === "em") {
      if (el !== "Spéciale") {
        var em = document.getElementById("em");
        console.log(props.options[em.selectedIndex].code);
        setShowText(props.options[em.selectedIndex].code);
        setShowEpesseur(false);
        // console.log(document.getElementById("em_h6").textContent);
        funcForCU(el);
        funcForCJH(el, props.options[em.selectedIndex].code, "");
      } else {
        setShowEpesseur(true);
      }
    }

    if (props.id === "cjh") {
      funcForCJL(e, el);
      var cjh = document.getElementById("cjh");
      setShowText(props.options[cjh.selectedIndex].code);
    }

    if (props.id === "cjl") {
      funcForCDCJ(e, el);
      var cjl = document.getElementById("cjl");
      setShowText(props.options[cjl.selectedIndex].code);
    }

    if (props.id === "cdcj") {
      var cdcj = document.getElementById("cdcj");
      setShowText(props.options[cdcj.selectedIndex].code);
    }
  };

  return (
    <Container className={"conteneur"}>
      <Row>
        <h1 className="center" id={props.id + "_B4"} type="text" hidden></h1>
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

        <Col xs={4}>
          {props.id === "ho" ? (
            showHauteur && (
              <>
                {!showHauteur && (
                  <h6 className="center" id={props.id + "_h6"}>
                    {showText}
                  </h6>
                )}
                <div style={{ display: "flex" }}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id={props.id + "_special"}>
                      Hauteur
                    </InputGroup.Text>
                    <Form.Control
                      id={props.id + "_special_value"}
                      type="number"
                    />
                  </InputGroup>
                </div>
              </>
            )
          ) : props.id === "lo1" ? (
            showLargueur && (
              <>
                {!showLargueur && (
                  <h6 className="center" id={props.id + "_h6"}>
                    {showText}
                  </h6>
                )}
                <div style={{ display: "flex" }}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id={props.id + "_special"}>
                      Largeur
                    </InputGroup.Text>
                    <Form.Control
                      id={props.id + "_special_value"}
                      type="number"
                      value={largeur}
                      // onChange={handleLargeurChange}
                      onChange={(e) => setLargeur(e.target.value)}
                      onBlur={blurFunctionLargeur}
                    />
                  </InputGroup>
                </div>
              </>
            )
          ) : props.id === "em" ? (
            showEpaisseur ? (
              <>
                {!showEpaisseur && (
                  <h6 className="center" id={props.id + "_h6"}>
                    {showText}
                  </h6>
                )}
                <div style={{ display: "flex" }}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id={props.id + "_special"}>
                      Epaisseur
                    </InputGroup.Text>
                    <Form.Control
                      id={props.id + "_special_value"}
                      type="number"
                      value={epaisseur}
                      onChange={(e) => setEpaisseur(e.target.value)}
                      onBlur={blurFunction}
                      max="90"
                    />
                  </InputGroup>
                </div>
              </>
            ) : (
              <h6 id={props.id + "_h6"}>{showText}</h6>
            )
          ) : (
            <>
              <h6 className="center" id={props.id + "_h6"}>
                {showText}
              </h6>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}
