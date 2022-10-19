import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function OuvrantCadre(props) {
  const [showText, setShowText] = useState("");
  const [showHauteur, setShowHauteur] = useState(false);
  const [showLargueur, setShowLargueur] = useState(false);

  const [inputB5, setInputB5] = useState(1);
  const [inputB9, setInputB9] = useState(2);
  const [inputB7, setInputB7] = useState(0);
  const [inputB13, setInputB13] = useState(1);
  const [inputB14, setInputB14] = useState(0);

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
      setInputB5(0);
      props.onChange(true);
    } else {
      props.onChange(false);
    }
  };

  const funcForMDP = (onchangeMDP, el, FromText) => {
    var commande = document.getElementById("commande");
    var tdp = document.getElementById("tdp");
    if (onchangeMDP) {
      if (FromText === "Cadre Seul") {
        setInputB5(1);
        props.onChangeCS(false);
      } else {
        if (tdp !== null && tdp.options[tdp.selectedIndex].text !== "") {
          props.onChangeCS(true);
        }
      }
    } else {
      if (
        el !== "" &&
        commande.options[commande.selectedIndex].text !== "Cadre Seul"
      ) {
        setInputB5(0);
        props.onChange(true);
      } else {
        props.onChange(false);
      }
    }
  };

  const funcForMDF = (e, el) => {
    if (
      commande.options[commande.selectedIndex].text === "" ||
      tdp.options[commande.selectedIndex].text === "" ||
      (el === "" && inputB5 !== 1)
    ) {
      return props.onChange(false);
    } else {
      return props.onChange(true);
    }
  };

  const funcForCou = (e, el) => {
    if (
      inputB5 === 1 &&
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
        mdp.options[mdp.selectedIndex].text === null ||
        (mdp.options[mdp.selectedIndex].text === "" &&
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
        el === "" ||
        el === "MDF Brute" ||
        el === "Aluminium"
      ) {
        setInputB7(1);
        props.onChange(false);
      } else {
        props.onChange(true);
      }
    }
  };

  const funcForNDV = (e, el) => {
    if (
      (inputB5 === 1 &&
        el === "" &&
        commande.options[commande.selectedIndex].text === "Cadre Seul" &&
        mdf.options[mdf.selectedIndex].text === "MDF Brute") ||
      (inputB5 && el !== "") ||
      (inputB5 === 1 && inputB7 === 1)
    ) {
      props.onChange(true);
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

  const funcForLP = (e, el) => {
    console.log(inputB5);
    if (inputB5 === 1 && el !== "" && parseInt(el) !== 1) {
      props.onChange(true);
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
        el === ""
      ) {
        props.onChange(false);
      } else {
        console.log(el);
        if (parseInt(el) === 2) {
          props.onChange(true);
        } else {
          props.onChange(false);
        }
      }
    }
  };

  const funcForHO = (e, el) => {
    var lp = document.getElementById("lp");
    console.log(lp);
    if (
      (inputB9 === 1 && lp.options[lp.selectedIndex].text === "") ||
      lp === null ||
      (inputB9 === 0 && lp.options[lp.selectedIndex].text !== "")
    ) {
      props.onChange(false);
      props.onChangeCS(true);
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
          lp.options[lp.selectedIndex].text === "")
      ) {
        props.onChange(false);
      } else {
        props.onChange(true);
      }
    }
  };

  const funcForLO1 = (e, el) => {
    if (el === "Spéciale") {
      setShowHauteur(true);
    } else {
      setShowHauteur(false);
    }
    if (
      (inputB5 === 1 && el !== "" && el !== "Spéciale") ||
      (inputB9 === 1 &&
        el === "Spéciale" &&
        document.getElementById("ho_special_value").textContent !== "") ||
      (inputB9 === 0 &&
        el === "Spéciale" &&
        document.getElementById("ho_special_value").textContent !== "")
    ) {
      if (parseInt(ndv.options[ndv.selectedIndex].text) === 2) {
        props.nameSetter("1er ");
      } else {
        props.nameSetter("");
      }
      props.onChange(true);
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
        el === ""
      ) {
        props.onChange(false);
      } else {
        if (parseInt(ndv.options[ndv.selectedIndex].text) === 2) {
          console.log("funcForLO1 else 1 if");
          props.nameSetter("1er ");
        } else {
          props.nameSetter("");
        }
        props.onChange(true);
      }
    }
  };

  const funcForLO2 = (e, el) => {
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
      props.onChange(true);
    } else {
      props.onChange(false);
    }
  };

  const funcForMS = (e, el) => {
    if (inputB13 === 1) {
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
      props.onChange(true);
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
        props.onChange(false);
      } else {
        props.onChange(true);
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
        se.options[se.selectedIndex].text !== ""
      ) {
        props.onChangeSO(true);
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
            lp === null &&
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
      props.onChange(true);
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
          props.onChange(false);
        } else {
          props.onChange(true);
        }
      }
    }
  };

  const funcForGA = (e, el, deactivate) => {
    if (deactivate) {
      props.onChangeGA(false);
      return;
    }
    if (
      vi === null &&
      parseInt(document.getElementById("mdp_h6").textContent) === 7
    ) {
      props.onChangeGA(true);
    } else {
      if (
        commande.options[commande.selectedIndex].text === "" ||
        commande.options[commande.selectedIndex].text === "Cadre Seul" ||
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
          lp === null &&
          lp.options[lp.selectedIndex].text === "") ||
        ho.options[ho.selectedIndex].text === "" ||
        lo1.options[lo1.selectedIndex].text === "" ||
        ms.options[ms.selectedIndex].text === "" ||
        el === "" ||
        // vi === null &&
        //   vi.options[vi.selectedIndex].text === "" &&
        tdp.options[tdp.selectedIndex].text === "Porte De Passage"
      ) {
        props.onChangeGA(false);
      } else {
        props.onChangeGA(true);
      }
    }
  };

  const funcForQu = (e, el) => {
    if (inputB5 === 1 && so !== null) {
      props.onChange(true);
    } else {
      if (
        so !== null &&
        tdp.options[tdp.selectedIndex].text !== "Porte de Passage" &&
        so.options[so.selectedIndex].text !== "" &&
        ga === null
      ) {
        props.onChange(true);
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
            (lp === null || lp.options[lp.selectedIndex].text === "")) ||
          ho.options[ho.selectedIndex].text === "" ||
          lo1.options[lo1.selectedIndex].text === "" ||
          ms.options[ms.selectedIndex].text === "" ||
          so.options[so.selectedIndex].text === "" ||
          el === "" ||
          ((vi.options[vi.selectedIndex].text === "" || el === "") &&
            commande.options[commande.selectedIndex].text === "Ouvrant Seul")
        ) {
          props.onChange(false);
        } else {
          props.onChange(true);
        }
      }
    }
  };

  const funcForEM = (e, el) => {
    if (
      parseInt(document.getElementById("tdp_h6").textContent) === 1 &&
      parseInt(document.getElementById("mdp_h6").textContent) === 7 &&
      vi !== null &&
      vi.options[vi.selectedIndex].text !== ""
    ) {
      props.onChange(true);
    } else {
      if (
        inputB5 === 1 &&
        el !== "" &&
        se.options[se.selectedIndex].text !== ""
      ) {
        props.onChange(true);
      } else {
        if (
          document.getElementById("tdp_h6").textContent === "T" &&
          document.getElementById("mdf_h6").textContent === "AL"
        ) {
          props.onChange(true);
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
            el === "" ||
            (el === "" && document.getElementById("tdp_h6").textContent === "T")
          ) {
            props.onChange(false);
          } else {
            props.onChange(true);
          }
        }
      }
    }
  };

  const funcForCU = (e, el) => {
    if (el === "") {
      props.onChange(false);
    } else {
      props.onChange(true);
    }
  };

  const funcForCJH = (e, el) => {
    if (
      inputB5 === 1 &&
      ((el !== "Spécial" && el !== "") || el === "Spécial") //&& F20 != ""
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
          (lp === null || lp.options[lp.selectedIndex].text === "")) ||
        ho.options[ho.selectedIndex].text === "" ||
        lo1.options[lo1.selectedIndex].text === "" ||
        ms.options[ms.selectedIndex].text === "" ||
        so.options[so.selectedIndex].text === "" ||
        el === "" ||
        parseInt(document.getElementById("em_h6").textContent) === 7 ||
        cu.options[cu.selectedIndex].text === ""
      ) {
        props.onChangeCJH(false);
      } else {
        props.onChangeCJH(true);
      }
    }
  };

  const funcForCJL = (e, el) => {
    if (inputB5 === 1 && el !== "") {
      props.onChange(true);
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
        props.onChange(false);
      } else {
        props.onChange(true);
      }
    }
  };

  const funcForCDCJ = (e, el) => {
    if (inputB5 === 1 && el !== "") {
      props.onChange(true);
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
        props.onChange(false);
      } else {
        props.onChange(true);
      }
    }
  };

  const handleText = (e) => {
    const el = document.getElementById(props.id).options[
      document.getElementById(props.id).selectedIndex
    ].text;

    // display TP
    if (el !== "" && props.id === "commande") {
      console.log(el);

      funcFordisplayTp(el);
    }

    // display MDP
    if (el !== "" && (props.id === "tdp" || props.id === "commande")) {
      var deactivate = null;
      if (props.id === "tdp" && so !== null) {
        if (el === "Porte De Passage") {
          deactivate = true;
        } else {
          deactivate = false;
        }
        funcForGA(e, el, deactivate);
      }
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
      funcForNDV(e, el);
    }

    // Largeur Precadre (Intérieur)
    if (props.id === "ndv") {
      if (
        document.getElementById("ndv").options[
          document.getElementById("ndv").selectedIndex
        ].text === "2"
      ) {
        setInputB9(0);
        funcForLP(e, el);
      } else {
        props.nameSetter("");
        setInputB9(1);
        funcForHO(e, el);
        props.onChangeLO2(false);
      }
    }

    // Hauteur Ouvrant (mm)
    if (props.id === "lp") {
      funcForHO(e, el);
    }

    // Largueur " + (D8==2 ? "1er " : "") + "Ouvrant (mm)
    if (props.id === "ho") {
      funcForLO1(e, el);
    }

    // Mécanisation de Serrure
    if (props.id === "lo1") {
      if (el === "Spéciale") {
        setShowLargueur(true);
      } else {
        setShowLargueur(false);
      }
      if (el !== "Spécial" || (el !== "" && el !== "Spéciale")) {
        setInputB13(1);
      } else {
        setInputB13(0);
      }
      var ndv = document.getElementById("ndv");
      if (parseInt(ndv.options[ndv.selectedIndex].text) === 2) {
        funcForLO2(e, el, false);
      }
      funcForMS(e, el);
      funcForPro(e, el, true);
    }

    if (props.id === "ms") {
      var B14 = 0;
      if (inputB13 === 1 && el === "Sans Mecanisation") {
        setInputB14(1);
        B14 = 1;
      } else {
        B14 = 0;
        setInputB14(0);
      }
      funcForSE(e, el);
      funcForSO(e, el, B14);
    }
    if (props.id === "pro") {
      funcForSO(e, el, B14);
    }
    if (props.id === "so") {
      funcForVI(e, el);
      funcForGA(e, el, null);
    }
    if (props.id === "ga") {
      funcForQu(e, el);
    }

    if (props.id === "qu") {
      funcForEM(e, el);
    }

    if (props.id === "em") {
      funcForCU(e, el);
      funcForCJH(e, el);
    }

    if (props.id === "cjh") {
      funcForCJL(e, el);
    }

    if (props.id === "cjl") {
      funcForCDCJ(e, el);
    }

    setShowText(e.target.value);
  };

  return (
    <Container>
      <Row>
        <h1 id={props.id + "_B4"} type="text" hidden></h1>
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
          {!showHauteur && <h6 id={props.id + "_h6"}>{showText}</h6>}
          {props.id === "ho" ? (
            showHauteur && (
              <div style={{ display: "flex" }}>
                <h6 id={props.id + "_special"}>Hauteur</h6>
                <input id={props.id + "_special_value"} type="number" />
              </div>
            )
          ) : props.id === "lo1" ? (
            showLargueur && (
              <div style={{ display: "flex" }}>
                <h6 id={props.id + "_special"}>Largeur</h6>
                <input id={props.id + "_special_value"} type="number" />
              </div>
            )
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </Container>
  );
}
