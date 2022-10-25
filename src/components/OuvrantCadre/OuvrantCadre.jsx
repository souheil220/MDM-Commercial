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
      props.funcInputB5(0);
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
        props.funcInputB5(1);
        props.onChangeCS(false);
      } else {
        if (tdp !== null && tdp.options[tdp.selectedIndex].text !== "") {
          props.funcInputB5(0);
          props.onChangeCS(true);
        }
      }
    } else {
      if (
        el !== "" &&
        commande.options[commande.selectedIndex].text !== "Cadre Seul"
      ) {
        console.log("onchangeMDP " + onchangeMDP);
        props.funcInputB5(0);
        props.onChange(true);
      } else {
        props.onChange(false);
      }
    }
  };

  const funcForMDF = (e, el, from) => {
    if (from === "tdp" && el !== "") {
      props.onChangeMDF(true);
    } else {
      if (
        commande.options[commande.selectedIndex].text === "" ||
        tdp.options[commande.selectedIndex].text === "" ||
        (el === "" && props.inputB5Value !== 1)
      ) {
        return props.onChange(false);
      } else {
        return props.onChange(true);
      }
    }
  };

  const funcForCou = (e, el) => {
    if (
      props.inputB5Value === 1 &&
      el !== "" &&
      el !== "Aluminium" &&
      el !== "Inox" &&
      el !== "Acier Laqué" &&
      el !== "MDF Brute"
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

  const funcForNDV = (e, el, from) => {
    if (from === "mdf" && el === "MDF Brute") {
      props.onChangeNDV(true);
    } else {
      if (
        (props.inputB5Value === 1 &&
          el === "" &&
          commande.options[commande.selectedIndex].text === "Cadre Seul" &&
          mdf.options[mdf.selectedIndex].text === "MDF Brute") ||
        (props.inputB5Value === 1 && el !== "") ||
        (props.inputB5Value === 1 && inputB7 === 1)
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
    }
  };

  const funcForLP = (e, el) => {
    if (props.inputB5Value === 1 && el !== "" && parseInt(el) !== 1) {
      props.onChange(true);
      props.onChangeCS(false);
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
        el === ""
      ) {
        props.onChange(false);
      } else {
        if (parseInt(el) === 2) {
          props.onChange(true);
          props.onChangeCS(false);
        } else {
          console.log("else el " + el);
          props.onChangeCS(true);
          props.onChange(false);
        }
      }
    }
  };

  const funcForHO = (e, el, from) => {
    if (
      (inputB9 === 1 && lp === null) ||
      (inputB9 === 0 && lp !== null && lp.options[lp.selectedIndex].text !== "")
    ) {
      if (from === "nvd") {
        props.onChange(false);
        props.onChangeCS(true);
      } else {
        props.onChange(true);
      }
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
        el === "" ||
        (parseInt(el) === 2 &&
          lp !== null &&
          lp.options[lp.selectedIndex].text === "")
      ) {
        if (from === "nvd") {
          props.onChangeCS(false);
        } else {
          props.onChange(false);
        }
      } else {
        if (from === "nvd") {
          props.onChangeCS(true);
        } else {
          props.onChange(true);
        }
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
      (props.inputB5Value === 1 && el !== "" && el !== "Spéciale") ||
      (inputB9 === 1 &&
        el === "Spéciale" &&
        document.getElementById("ho_special_value") !== null &&
        document.getElementById("ho_special_value").textContent !== "") ||
      (inputB9 === 0 &&
        el === "Spéciale" &&
        document.getElementById("ho_special_value") !== null &&
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

  const funcForSO = (e, el, B14, from) => {
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
      document.getElementById("mdp_h6") !== null &&
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
        (el === "" &&
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
      props.onChange(true);
      props.onChangeQu(true);
    } else {
      if (
        so !== null &&
        tdp.options[tdp.selectedIndex].text !== "Porte de Passage" &&
        so.options[so.selectedIndex].text !== "" &&
        ga === null
      ) {
        props.onChange(true);
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
          props.onChange(false);
          props.onChangeQu(false);
        } else {
          console.log("gatlah 28");
          props.onChange(true);
          props.onChangeQu(true);
        }
      }
    }
  };

  const funcForEM = (e, el, from) => {
    if (
      from === "commande" &&
      commande.options[commande.selectedIndex].text === "Ouvrant Seul"
    ) {
      props.onChangeEm(false);
    } else if (
      from === "commande" &&
      commande.options[commande.selectedIndex].text !== "Ouvrant Seul"
    ) {
      props.onChangeEm(true);
    } else {
      console.log(from);
      if (
        parseInt(document.getElementById("tdp_h6").textContent) === 1 &&
        parseInt(document.getElementById("mdp_h6").textContent) === 7 &&
        vi !== null &&
        vi.options[vi.selectedIndex].text !== ""
      ) {
        props.onChange(true);
      } else {
        if (
          props.inputB5Value === 1 &&
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
              commande.options[commande.selectedIndex].text ===
                "Ouvrant Seul" ||
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
              (el === "" &&
                document.getElementById("tdp_h6").textContent === "T")
            ) {
              props.onChange(false);
            } else {
              console.log(props.onChange);
              props.onChange(true);
            }
          }
        }
      }
    }
  };

  const funcForCU = (e, el) => {
    if (el === "") {
      props.onChange(false);
    } else {
      if (el === "Spéciale") {
        setShowEpesseur(true);
        props.onChangeCUValue("0");
      } else {
        setShowEpesseur(false);
        if (el === "130-->165") {
          props.onChangeCUValue("100");
        } else if (el === "160-->195") {
          props.onChangeCUValue("130");
        } else {
          props.onChangeCUValue("160");
        }
        props.onChange(true);
      }
    }
  };

  const funcForCJH = (e, el, em_h6) => {
    if (
      props.inputB5Value === 1 &&
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
    if (props.inputB5Value === 1 && el !== "") {
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

  const funcCalculateLO2 = (lp, lo1, largeur) => {
    props.onChangeLO2Value(parseInt(lp) - 13 - parseInt(lo1) - largeur);
  };

  const funcCalculateCU = (lp, lo1, largeur) => {
    props.onChangeCUValue(parseInt(lp) - 13 - parseInt(lo1) - largeur);
  };

  const handleLargeurChange = (event) => {
    setLargeur(event.target.value);
    props.onChange(true);
    funcCalculateLO2(lp.options[lp.selectedIndex].text, event.target.value, 0);
  };

  const handleEpaisseurChange = (event) => {
    setEpaisseur(event.target.value);
  };

  const handleText = (e) => {
    const el = document.getElementById(props.id).options[
      document.getElementById(props.id).selectedIndex
    ].text;

    // display TP
    if (el !== "" && props.id === "commande") {
      var commande = document.getElementById("commande");
      setShowText(props.options[commande.selectedIndex].code);
      funcFordisplayTp(el);
      if (document.getElementById("qu") !== null) {
        funcForEM(
          e,
          document.getElementById("qu").options[
            document.getElementById("qu").selectedIndex
          ].text,
          "commande"
        );
      }
    }

    // display MDP
    if (el !== "" && (props.id === "tdp" || props.id === "commande")) {
      var so = document.getElementById("so");
      var tdp = document.getElementById("tdp");
      var deactivate = null;
      if (props.id === "tdp" && so !== null) {
        console.log(so === null);
        if (
          el === "Porte De Passage" &&
          vi !== null &&
          vi.options[vi.selectedIndex].text === ""
        ) {
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
      if (
        commande.options[commande.selectedIndex].text === "Cadre Seul" &&
        props.id === "tdp"
      ) {
        funcForMDF(e, el, "tdp");
      }
      if (props.id === "tdp") {
        setShowText(props.options[tdp.selectedIndex].code);
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
      funcForCou(e, el);
    }

    //display Nombre de Ventaux
    if (props.id === "couleur" || props.id === "mdf") {
      if (props.id === "mdf" && el === "MDF Brute") {
        console.log("deuxieme else");
        funcForNDV(e, el, "mdf");
      } else {
        funcForNDV(e, el, "");
      }
      if (props.id === "couleur") {
        var couleur = document.getElementById("couleur");
        setShowText(props.options[couleur.selectedIndex].code);
      }
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
        funcForLP(e, el);
        funcForHO(e, el, "nvd");
        props.onChangeLO2(false);
      }
      var ndv = document.getElementById("ndv");
      setShowText(props.options[ndv.selectedIndex].code);
    }

    // Hauteur Ouvrant (mm)
    if (props.id === "lp") {
      funcForHO(e, el, "");
    }

    // Largueur " + (D8==2 ? "1er " : "") + "Ouvrant (mm)
    if (props.id === "ho") {
      funcForLO1(e, el);
    }

    // Mécanisation de Serrure
    if (props.id === "lo1" || props.id === "lp") {
      var ndv = document.getElementById("ndv");
      if (props.id === "lp" && lo1 !== null) {
        if (
          lo1.options[lo1.selectedIndex].text !== "Spécial" ||
          ((lo1.options[lo1.selectedIndex].text !== "Spécial") !== "" &&
            (lo1.options[lo1.selectedIndex].text !== "Spécial") !== "Spéciale")
        ) {
          funcCalculateLO2(el, lo1.options[lo1.selectedIndex].text);
          setInputB13(1);
        } else {
          setInputB13(0);
        }
      } else {
        if (el === "Spéciale") {
          setShowLargueur(true);
        } else {
          setShowLargueur(false);
        }
        if (
          el !== "" &&
          el !== "Spéciale" &&
          parseInt(ndv.options[ndv.selectedIndex].text) === 2
        ) {
          funcCalculateLO2(lp.options[lp.selectedIndex].text, el, 0);
          setInputB13(1);
        } else {
          setInputB13(0);
        }

        if (parseInt(ndv.options[ndv.selectedIndex].text) === 2) {
          if (el !== "spécial") {
            funcForLO2(e, el, false);
          } else {
            console.log(props.onChange);
            // lO2ActivationFunc = props.onChange;
            // console.log(lO2ActivationFunc);
          }
        }
        funcForMS(e, el);
        funcForPro(e, el, true);
      }
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
      var ms = document.getElementById("ms");
      setShowText(props.options[ms.selectedIndex].code);
    }

    if (props.id === "se") {
      if (ms.options[ms.selectedIndex].text !== "Sans Mecanisation") {
        funcForSO(e, el, inputB14, "se");
      }
    }

    if (props.id === "pro") {
      funcForSO(e, el, B14);
    }

    if (props.id === "so") {
      funcForVI(e, el);
      funcForGA(e, el, null);
      var so = document.getElementById("so");
      setShowText(props.options[so.selectedIndex].code);
      // funcForQu(e, el);
    }

    if (props.id === "ga") {
      funcForQu(e, el);
    }

    if (props.id === "qu") {
      funcForEM(e, el, "qu");
    }

    if (props.id === "em") {
      if (el !== "Spéciale") {
        var em = document.getElementById("em");
        console.log(props.options[em.selectedIndex].code);
        setShowText(props.options[em.selectedIndex].code);
      }
      console.log(document.getElementById("em_h6").textContent);
      funcForCU(e, el);
      funcForCJH(e, el, props.options[em.selectedIndex].code);
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
                      onChange={handleLargeurChange}
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
                      onChange={handleEpaisseurChange}
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
