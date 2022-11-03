import React, { useContext, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartContext from "../../context/cart-context";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./Selects.css";
import { v4 as uuidv4 } from "uuid";
import Card from "../UI/Card";

import OuvrantCadre from "../OuvrantCadre/OuvrantCadre";

export default function Selects() {
  const cartCxt = useContext(CartContext);
  const [inputB5, setInputB5] = useState(1);

  const [tdp, settdp] = useState(false);
  const [mdp, setmdp] = useState(false);
  const [mdf, setmdf] = useState(false);
  const [cou, setcou] = useState(false);
  const [ndv, setndv] = useState(false);
  const [lp, setlp] = useState(false);
  const [ho, setho] = useState(false);
  const [lo1, setlo1] = useState(false);
  const [lo2, setlo2] = useState(false);
  const [lo2Value, setlo2Value] = useState(false);
  const [cuValue, setcuValue] = useState(false);
  const [ms, setlms] = useState(false);
  const [se, setlse] = useState(false);
  const [pro, setlpro] = useState(false);
  const [so, setso] = useState(false);
  const [vi, setvi] = useState(false);
  const [ga, setga] = useState(false);
  const [qu, setqu] = useState(false);
  const [em, setem] = useState(false);
  const [cu, setcu] = useState(false);
  const [cjh, setcjh] = useState(false);
  const [cjl, setcjl] = useState(false);
  const [cdcj, setcdcj] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [clientName, setClientName] = useState("");
  const [quantite, setQuantite] = useState("");

  var commande_ouvrant = [];
  var commande_ouvrant_line = [];

  function handleCOMMANDEChange(newValue) {
    settdp(newValue);
  }

  function handleTDPChange(newValue) {
    setmdp(newValue);
  }

  function handleMDPChange(newValue) {
    setmdf(newValue);
  }

  function handleMDFChange(newValue) {
    setcou(newValue);
  }
  function handleCOULEURChange(newValue) {
    setndv(newValue);
  }

  function handleNDVChange(newValue) {
    console.log(newValue);
    setlp(newValue);
  }

  function handleLPChange(newValue) {
    setho(newValue);
  }
  function nameSetter(newName) {
    setFirstName(newName);
  }
  function handleHOChange(newValue) {
    setlo1(newValue);
  }
  function handleLO1Change(newValue) {
    setlo2(newValue);
  }

  function handleLO2Value(newValue) {
    setlo2Value(newValue);
  }

  function handleCUValue(newValue) {
    setcuValue(newValue);
  }

  function handleMSChange(newValue) {
    setlms(newValue);
  }
  function handleSEChange(newValue) {
    setlse(newValue);
  }

  function handleProChange(newValue) {
    setlpro(newValue);
  }

  function handleSOChange(newValue) {
    setso(newValue);
  }

  function handleVIChange(newValue) {
    setvi(newValue);
  }

  function handleGAChange(newValue) {
    setga(newValue);
  }

  function handleQUChange(newValue) {
    setqu(newValue);
  }

  function handleEMChange(newValue) {
    setem(newValue);
  }

  function handleCUChange(newValue) {
    setcu(newValue);
  }

  function handleCJHChange(newValue) {
    setcjh(newValue);
  }

  function handleCJLChange(newValue) {
    setcjl(newValue);
  }

  function handleCDCJChange(newValue) {
    setcdcj(newValue);
  }
  function handleInputB5(input) {
    setInputB5(input);
  }

  function checkIfNull(data, text) {
    if (text && data !== null) {
      return data.textContent;
    } else {
      if (data !== null && data.options[data.selectedIndex].text !== "") {
        return data.options[data.selectedIndex].text;
      } else {
        return "";
      }
    }
  }

  function codeModel(mdp_select, couleur_h6) {
    if (
      mdp_select === null ||
      mdp_select.options[mdp_select.selectedIndex].text === "Star Massif"
    ) {
      return "";
    } else {
      return (
        "F" +
        mdp_select.options[mdp_select.selectedIndex].text +
        couleur_h6.options[couleur_h6.selectedIndex].text
      );
    }
  }

  function codeProtecteur(pro_select, lo1_select) {
    if (
      pro_select.options[pro_select.selectedIndex].text === "Sans Protecteur"
    ) {
      return "";
    } else {
      if (pro_select.options[pro_select.selectedIndex].text === "1 Face") {
        return "P1F" + lo1_select.options[lo1_select.selectedIndex].text;
      } else {
        return "P2F" + lo1_select.options[lo1_select.selectedIndex].text;
      }
    }
  }

  function codeVitrage(vi_select, couleur_h6, lo1_select) {
    if (vi_select.options[vi_select.selectedIndex].text === "Sans Vitre") {
      return "";
    } else {
      if (vi_select.options[vi_select.selectedIndex].text === "Vitrage Haut") {
        return (
          "VH" + couleur_h6 + lo1_select.options[lo1_select.selectedIndex].text
        );
      } else {
        if (vi_select.options[vi_select.selectedIndex].text === "Vitrage Bas") {
          return (
            "VB" +
            couleur_h6 +
            lo1_select.options[lo1_select.selectedIndex].text
          );
        } else {
          if (vi_select.options[vi_select.selectedIndex].text === "V5AL") {
            return "V5AL3+3";
          } else {
            if (vi_select.options[vi_select.selectedIndex].text === "V4AL") {
              return "V4AL3+3";
            } else {
              if (
                vi_select.options[vi_select.selectedIndex].text ===
                "Vitrage Côté"
              ) {
                return (
                  "VB" +
                  couleur_h6 +
                  lo1_select.options[lo1_select.selectedIndex].text
                );
              } else {
                return (
                  "VO" +
                  couleur_h6 +
                  lo1_select.options[lo1_select.selectedIndex].text
                );
              }
            }
          }
        }
      }
    }
  }

  function codeGrille(ga_select, couleur_h6) {
    if (
      ga_select === null ||
      ga_select.options[ga_select.selectedIndex].text === "Sans Mécanisation"
    ) {
      return "";
    } else {
      if (
        ga_select.options[ga_select.selectedIndex].text ===
        "Mecanisation de grille et grille d'Airation"
      ) {
        if (couleur_h6 === "FCH" || couleur_h6 === "FAC") {
          return "GAM";
        } else {
          return "GAN";
        }
      } else {
        return "";
      }
    }
  }

  function codeEmbochure(
    ndv_select,
    em_select,
    em_special_value,
    lp_select,
    ho_select,
    lo1_select,
    couleur_h6
  ) {
    if (parseInt(ndv_select.options[ndv_select.selectedIndex].text) === 1) {
      if (
        em_select !== null &&
        em_select.options[em_select.selectedIndex].text === "Special"
      ) {
        if (em_special_value < 90) {
          return "";
        }
      } else {
        return (
          "EM" +
          ho_select.options[ho_select.selectedIndex].text +
          lo1_select.options[lo1_select.selectedIndex].text +
          "faut" +
          couleur_h6
        );
      }
    } else {
      if (ndv_select.options[ndv_select.selectedIndex].text === "Special") {
        if (em_special_value < 90) {
          return "";
        }
      } else {
        return (
          "EM" +
          ho_select.options[ho_select.selectedIndex].text +
          lp_select.options[lp_select.selectedIndex].text +
          "faut" +
          couleur_h6
        );
      }
    }
  }

  function codeSerure(tdp_select, ndv_select, ms_h6, so_h6) {
    if (
      tdp_select.options[tdp_select.selectedIndex].text ===
        "Porte De Passage" ||
      tdp_select.options[tdp_select.selectedIndex].text ===
        "Porte Coupe-Feu 30mm" ||
      tdp_select.options[tdp_select.selectedIndex].text === "Technique"
    ) {
      if (parseInt(ndv_select.options[ndv_select.selectedIndex].text) === 1) {
        return "S" + ms_h6 + "M" + so_h6;
      } else {
        return "S" + ms_h6 + "M" + so_h6 + "DV";
      }
    } else {
      if (
        tdp_select.options[tdp_select.selectedIndex].text ===
        "Porte D'Entrée Blindée"
      ) {
        return "S" + ms_h6 + "B" + so_h6;
      } else {
        return "S" + ms_h6 + "M" + so_h6;
      }
    }
  }

  function generateCode() {
    var code = "";

    code =
      code +
      document.getElementById("tdp_h6").textContent +
      document.getElementById("ho").options[
        document.getElementById("ho").selectedIndex
      ].text +
      document.getElementById("lo1").options[
        document.getElementById("lo1").selectedIndex
      ].text +
      document.getElementById("so_h6").textContent +
      document.getElementById("ms_h6").textContent +
      document.getElementById("couleur_h6").textContent;

    return code;
  }

  function getAllData() {
    // (checkIfNull(document.getElementById("commande"), false));
    // (checkIfNull(document.getElementById("tdp"), false));
    // (checkIfNull(document.getElementById("mdp"), false));
    // (checkIfNull(document.getElementById("mdf"), false));
    // (checkIfNull(document.getElementById("couleur"), false));
    // (checkIfNull(document.getElementById("ndv"), false));
    // checkIfNull(document.getElementById("lp"), false);
    // checkIfNull(document.getElementById("ho"), false);
    // checkIfNull(document.getElementById("lo1"), false);
    // // (checkIfNull(document.getElementById("lo2_value"), true));
    // checkIfNull(document.getElementById("ms"), false);
    // checkIfNull(document.getElementById("se"), false);
    // checkIfNull(document.getElementById("pro"), false);
    // checkIfNull(document.getElementById("so"), false);
    // checkIfNull(document.getElementById("vi"), false);
    // checkIfNull(document.getElementById("ga"), false);
    // checkIfNull(document.getElementById("qu"), false);
    // // (checkIfNull(document.getElementById("em"), false));
    // // (checkIfNull(document.getElementById("cu_value"), true));
    // // (checkIfNull(document.getElementById("cjh"), false));
    // // (checkIfNull(document.getElementById("cjl"), false));
    // // (checkIfNull(document.getElementById("cdcj"), false));

    // commande_ouvrant_line.push(
    //   codeModel(
    //     document.getElementById("mdp"),
    //     document.getElementById("couleur_h6").textContent
    //   )
    // );
    // commande_ouvrant_line.push(
    //   codeProtecteur(
    //     document.getElementById("pro"),
    //     document.getElementById("lo1")
    //   )
    // );

    // commande_ouvrant_line.push(
    //   codeVitrage(
    //     document.getElementById("vi"),
    //     document.getElementById("couleur_h6").textContent,
    //     document.getElementById("lo1")
    //   )
    // );
    // commande_ouvrant_line.push(
    //   codeGrille(
    //     document.getElementById("ga"),
    //     document.getElementById("couleur_h6").textContent
    //   )
    // );

    // commande_ouvrant_line.push(
    //   codeEmbochure(
    //     document.getElementById("ndv"),
    //     "",
    //     document.getElementById("lp"),
    //     document.getElementById("ho"),
    //     document.getElementById("lo1"),
    //     document.getElementById("couleur_h6").textContent
    //   )
    // );
    // commande_ouvrant_line.push(
    //   codeSerure(
    //     document.getElementById("tdp"),
    //     document.getElementById("ndv"),
    //     document.getElementById("ms_h6").textContent,
    //     document.getElementById("so_h6").textContent
    //   )
    // );
    // commande_ouvrant.push(commande_ouvrant_line);

    var data = {
      id: uuidv4(),
      code: generateCode(),
      quantite: document.getElementById("quantite").value,
      tdp: checkIfNull(document.getElementById("tdp"), false),
      mdp: checkIfNull(document.getElementById("mdp"), false),
      mdf: checkIfNull(document.getElementById("mdf"), false),
      couleur: checkIfNull(document.getElementById("couleur"), false),
      ndv: checkIfNull(document.getElementById("ndv"), false),
      lp: checkIfNull(document.getElementById("lp"), false),
      ho: checkIfNull(document.getElementById("ho"), false),
      lo1: checkIfNull(document.getElementById("lo1"), false),
      ms: checkIfNull(document.getElementById("ms"), false),
      se: checkIfNull(document.getElementById("se"), false),
      pro: checkIfNull(document.getElementById("pro"), false),
      so: checkIfNull(document.getElementById("so"), false),
      vi: checkIfNull(document.getElementById("vi"), false),
      ga: checkIfNull(document.getElementById("ga"), false),
      qu: checkIfNull(document.getElementById("qu"), false),
      client: document.getElementById("clientName").value,
      codeModel: codeModel(
        document.getElementById("mdp"),
        document.getElementById("couleur_h6").textContent
      ),
      codeProtecteur: codeProtecteur(
        document.getElementById("pro"),
        document.getElementById("lo1")
      ),
      codeVitrage: codeVitrage(
        document.getElementById("vi"),
        document.getElementById("couleur_h6").textContent,
        document.getElementById("lo1")
      ),
      codeGrille: codeGrille(
        document.getElementById("ga"),
        document.getElementById("couleur_h6").textContent
      ),
      codeEmbochure: codeEmbochure(
        document.getElementById("ndv"),
        document.getElementById("em"),
        document.getElementById("em_special_value") !== null
          ? document.getElementById("em_special_value").value
          : "",
        document.getElementById("lp"),
        document.getElementById("ho"),
        document.getElementById("lo1"),
        document.getElementById("couleur_h6").textContent
      ),
      codeSerure: codeSerure(
        document.getElementById("tdp"),
        document.getElementById("ndv"),
        document.getElementById("ms_h6").textContent,
        document.getElementById("so_h6").textContent
      ),
      // commande: commande_ouvrant_line,
    };
    if (document.getElementById("commande").value === "Ouvrant Seul") {
      cartCxt.addItem({ ...data });
    } else {
      console.log("elseeeeeeeeeeeeeeeeeeeeee");
      cartCxt.addItemCadre({ ...data });
    }

    // console.log(commande_ouvrant);
    // commande_ouvrant_line = [];
  }

  return (
    <section className={"section-card"}>
      <Card>
        <OuvrantCadre
          id={"commande"}
          title={"Commande"}
          options={[
            { text: "", value: "", code: "" },
            { text: "Ouvrant Seul", value: "Ouvrant Seul", code: "" },
            { text: "Cadre Seul", value: "Cadre Seul", code: "" },
            { text: "Ouvrant et Cadre", value: "Ouvrant et Cadre", code: "" },
          ]}
          onChange={handleCOMMANDEChange}
          onChangeCS={handleTDPChange}
          onChangeEm={handleEMChange}
          funcInputB5={handleInputB5}
          inputB5Value={inputB5}
        />

        {tdp && (
          <OuvrantCadre
            id={"tdp"}
            title={"Type de porte"}
            options={[
              { text: "", value: "", code: "" },
              {
                text: "Porte De Passage",
                value: "Porte De Passage",
                code: "PP",
              },
              {
                text: "Porte D'Entrée Massive",
                value: "Porte D'Entrée Massive",
                code: "PEM",
              },
              {
                text: "Porte Coupe-Feu 45mm",
                value: "Porte Coupe-Feu 45mm",
                code: "PCF45",
              },
              {
                text: "Porte Coupe-Feu 60mm",
                value: "Porte Coupe-Feu 60mm",
                code: "PCF60",
              },
              {
                text: "Porte Coupe-Feu 30mm",
                value: "Porte Coupe-Feu 30mm",
                code: "PCF30",
              },
              { text: "Technique", value: "Technique", code: "PTE" },
            ]}
            onChange={handleTDPChange}
            onChangeMDF={handleMDPChange}
            onChangeGA={handleGAChange}
            funcInputB5={handleInputB5}
            inputB5Value={inputB5}
          />
        )}

        {mdp && (
          <OuvrantCadre
            id={"mdp"}
            title={"Modele De Porte"}
            options={[
              { text: "", value: "" },
              { text: "Star Massif", value: "Star Massif", code: "STM" },
              { text: "2F", value: "2F", code: "2F" },
              { text: "4F", value: "4F", code: "4F" },
              { text: "6F", value: "6F", code: "6F" },
              { text: "4FL", value: "4FL", code: "4FL" },
              { text: "EL1", value: "EL1", code: "EL1" },
              { text: "EL7", value: "EL7", code: "EL7" },
            ]}
            onChange={handleMDPChange}
            inputB5Value={inputB5}
          />
        )}

        {mdf && (
          <OuvrantCadre
            id={"mdf"}
            title={"Matière De Finition"}
            options={[
              { text: "", value: "" },
              { text: "Mélaminé", value: "Mélaminé", code: "" },
              { text: "Laqué", value: "Laqué", code: "" },
              { text: "MDF Brute", value: "MDF Brute", code: "" },
              {
                text: "Stratifier 3mm/Aluminium",
                value: "Stratifier 3mm/Aluminium",
                code: "",
              },
            ]}
            onChange={handleMDFChange}
            onChangeNDV={handleCOULEURChange}
            inputB5Value={inputB5}
          />
        )}

        {cou && (
          <OuvrantCadre
            id={"couleur"}
            title={"Couleur"}
            options={[
              { text: "", value: "" },
              { text: "Finza Chène", value: "Finza Chène", code: "FCH" },
              { text: "Finza Sapelly", value: "Finza Sapelly", code: "FWE" },
              { text: "Finza Wengue", value: "Finza Wengue", code: "FJP" },
              { text: "Brute", value: "Brute", code: "CR" },
              { text: "Blanc", value: "Blanc", code: "BL" },
              { text: "Biege", value: "Biege", code: "BE" },
              { text: "Finza Stella", value: "Finza Stella", code: "FST" },
              { text: "Finza Azabache", value: "Finza Tostado", code: "FAZ" },
            ]}
            onChange={handleCOULEURChange}
            inputB5Value={inputB5}
          />
        )}

        {ndv && (
          <OuvrantCadre
            id={"ndv"}
            title={"Nombre de Ventaux"}
            options={[
              { text: "", value: "" },
              { text: "1", value: "1", code: "1" },
              { text: "2", value: "2", code: "2" },
            ]}
            onChange={handleNDVChange}
            onChangeCS={handleLPChange}
            onChangeLO2={handleLO1Change}
            nameSetter={nameSetter}
            inputB5Value={inputB5}
          />
        )}

        {lp && (
          <OuvrantCadre
            id={"lp"}
            title={"Largeur Precadre (Intérieur)"}
            options={[
              { text: "", value: "" },
              { text: "1136", value: "1136", code: "1136" },
              { text: "1236", value: "1236", code: "1236" },
              { text: "1336", value: "1336", code: "1336" },
              { text: "1459", value: "1459", code: "1459" },
              { text: "1659", value: "1659", code: "1659" },
              { text: "1859", value: "1859", code: "1859" },
            ]}
            onChange={handleLPChange}
            onChangeLO2Value={handleLO2Value}
          />
        )}

        {ho && (
          <OuvrantCadre
            id={"ho"}
            title={"Hauteur Ouvrant (mm)"}
            options={[
              { text: "", value: "" },
              { text: "2030", value: "2030", code: "2030" },
              { text: "2090", value: "2090", code: "2090" },
              { text: "Spéciale", value: "Spéciale", code: "Hauteur" },
            ]}
            onChange={handleHOChange}
            nameSetter={nameSetter}
            inputB5Value={inputB5}
          />
        )}

        {lo1 && (
          <OuvrantCadre
            id={"lo1"}
            title={`Largueur ${firstName} Ouvrant (mm)`}
            options={[
              { text: "", value: "" },
              { text: "623", value: "623", code: "623" },
              { text: "723", value: "723", code: "723" },
              { text: "823", value: "823", code: "823" },
              { text: "923", value: "923", code: "923" },
              { text: "1023", value: "1023", code: "1023" },
              { text: "Spéciale", value: "Spéciale", code: "Largeur" },
            ]}
            onChange={handleLO1Change}
            onChangeMS={handleMSChange}
            onChangePro={handleProChange}
            onChangeLO2Value={handleLO2Value}
          />
        )}

        {lo2 && (
          <Container id={"lo2"}>
            <Row>
              <Col>
                <h6>Largueur 2eme Ovrant (mm)</h6>
              </Col>
              <Col xs={6}>
                <p id="lo2_value">{lo2Value}</p>
              </Col>
              <Col>
                <p></p>
              </Col>
            </Row>
          </Container>
        )}

        {ms && (
          <OuvrantCadre
            id={"ms"}
            title={"Mécanisation de Serrure"}
            options={[
              { text: "", value: "" },
              {
                text: "Sans Mecanisation",
                value: "Sans Mecanisation",
                code: "PC",
              },
              { text: "Grande Clé", value: "Grande Clé", code: "GC" },
              { text: "à Gache", value: "à Gache", code: "G" },
              { text: "Condamnation", value: "Condamnation", code: "C" },
              { text: "Petite Clé", value: "Petite Clé", code: "PC" },
              {
                text: "1 Point Sécurité",
                value: "1 Point Sécurité",
                code: "1PS",
              },
              {
                text: "3 Point Sécurité",
                value: "3 Point Sécurité",
                code: "3PS",
              },
              { text: "Anti-Panique", value: "Anti-Panique", code: "AP" },
              {
                text: "Serrure Magnétique",
                value: "Serrure Magnétique",
                code: "PC",
              },
              {
                text: "grande clé zamak",
                value: "grande clé zamak",
                code: "GC",
              },
              { text: "à gache zamak", value: "à gache zamak", code: "G" },
              {
                text: "condamnation zamak",
                value: "condamnation zamak",
                code: "C",
              },
              {
                text: "petite clé zamak",
                value: "petite clé zamak",
                code: "PC",
              },
              {
                text: "3 point sécurité zamak",
                value: "3 point sécurité zamak",
                code: "3PS",
              },
              { text: "petite clé tec", value: "petite clé tec", code: "PC" },
              {
                text: "condamnation tec",
                value: "condamnation tec",
                code: "C",
              },
              {
                text: "petite clé tec zamak",
                value: "petite clé tec zamak",
                code: "PC",
              },
              {
                text: "condamnation tec zamak",
                value: "condamnation tec zamak",
                code: "C",
              },
              { text: "petite clé cf", value: "petite clé cf", code: "PC" },
            ]}
            onChange={handleSEChange}
            onChangeSO={handleSOChange}
          />
        )}

        {se && (
          <OuvrantCadre
            id={"se"}
            title={"Serrure"}
            options={[
              { text: "", value: "" },
              { text: "Oui", value: "Oui", code: "Oui" },
              { text: "Non", value: "Non", code: "Non" },
            ]}
            onChangeSO={handleSOChange}
          />
        )}

        {pro && (
          <OuvrantCadre
            id={"pro"}
            title={"Protecteur"}
            options={[
              { text: "", value: "" },
              { text: "1 Face", value: "1 Face", code: "1 Face" },
              { text: "2 Faces", value: "2 Faces", code: "2 Faces" },
              {
                text: "Sans Protecteur",
                value: "Sans Protecteur",
                code: "Sans Protecteur",
              },
            ]}
            onChangeSO={handleSOChange}
          />
        )}

        {so && (
          <OuvrantCadre
            id={"so"}
            title={"Sens D'Ouverture"}
            options={[
              { text: "", value: "" },
              { text: "Droite", value: "Droite", code: "D" },
              { text: "Gauche", value: "Gauche", code: "G" },
              { text: "Sans Sens", value: "Sans Sens", code: "D" },
            ]}
            onChange={handleVIChange}
            onChangeGA={handleGAChange}
            onChangeQu={handleQUChange}
          />
        )}

        {vi && (
          <OuvrantCadre
            id={"vi"}
            title={"Vitrage"}
            options={[
              { text: "", value: "" },
              { text: "Sans Vitre", value: "Sans Vitre", code: "Sans Vitre" },
              {
                text: "Vitrage Haut",
                value: "Vitrage Haut",
                code: "Vitrage Haut",
              },
              {
                text: "Vitrage Bas",
                value: "Vitrage Bas",
                code: "Vitrage Bas",
              },
              {
                text: "Vitrage Oculus",
                value: "Vitrage Oculus",
                code: "Vitrage Oculus",
              },
              { text: "V5AL", value: "V5AL", code: "V5AL" },
              { text: "V4AL", value: "V4AL", code: "V4AL" },
              {
                text: "Vitrage Côté",
                value: "Vitrage Côté",
                code: "Vitrage Côté",
              },
            ]}
          />
        )}

        {ga && (
          <OuvrantCadre
            id={"ga"}
            title={"Grille D'Airation"}
            options={[
              { text: "", value: "" },
              {
                text: "Mecanisation de grille et grille d'Airation",
                value: "Mecanisation de grille et grille d'Airation",
                code: "Mecanisation de grille et grille d'Airation",
              },
              {
                text: "Mécanisation De Grille Sans grille d'Airation",
                value: "Mécanisation De Grille Sans grille d'Airation",
                code: "Mécanisation De Grille Sans grille d'Airation",
              },
              {
                text: "Sans Mécanisation",
                value: "Sans Mécanisation",
                code: "Sans Mécanisation",
              },
            ]}
            onChange={handleQUChange}
            inputB5Value={inputB5}
          />
        )}

        {qu && (
          <OuvrantCadre
            id={"qu"}
            title={"Quincaillerie"}
            options={[
              { text: "", value: "" },
              {
                text: "Niquel",
                value: "Niquel",
                code: "Niquel",
              },
              {
                text: "Sans Quincaillerie",
                value: "Sans Quincaillerie",
                code: "Sans Quincaillerie",
              },
            ]}
            onChange={handleEMChange}
            inputB5Value={inputB5}
          />
        )}

        {em && (
          <OuvrantCadre
            id={"em"}
            title={"Epaisseur Mur(mm)"}
            options={[
              { text: "", value: "" },
              {
                text: "130-->165",
                value: "130-->165",
                code: "130",
              },
              {
                text: "160-->195",
                value: "160-->195",
                code: "160",
              },
              {
                text: "Spéciale",
                value: "Spéciale",
                code: "Epaisseur",
              },
            ]}
            onChange={handleCUChange}
            onChangeCJH={handleCJHChange}
            onChangeCUValue={handleCUValue}
            inputB5Value={inputB5}
          />
        )}

        {cu && (
          <Container id={"cu"}>
            <Row>
              <Col>
                <h6>Cadre utilisé</h6>
              </Col>
              <Col xs={6}>
                <h6 id="cu_value">{cuValue}</h6>
              </Col>
              <Col>
                <h6>Embochure</h6>
              </Col>
            </Row>
          </Container>
        )}

        {cjh && (
          <OuvrantCadre
            id={"cjh"}
            title={"Couvre Joint Hauteur (mm)"}
            options={[
              { text: "", value: "" },
              {
                text: "90",
                value: "90",
                code: "2",
              },
            ]}
            onChange={handleCJLChange}
            inputB5Value={inputB5}
          />
        )}

        {cjl && (
          <OuvrantCadre
            id={"cjl"}
            title={"Couvre Joint Largeur (mm)"}
            options={[
              { text: "", value: "" },
              {
                text: "90",
                value: "90",
                code: "2",
              },
            ]}
            onChange={handleCDCJChange}
            inputB5Value={inputB5}
          />
        )}
        {cdcj && (
          <OuvrantCadre
            id={"cdcj"}
            title={"Coupe De couvre Joint"}
            options={[
              { text: "", value: "" },
              {
                text: "90°",
                value: "90°",
                code: "2",
              },
            ]}
          />
        )}

        <Container style={{ "margin-bottom": "1%" }}>
          <Row>
            <Col>
              <h6>Quantité</h6>
            </Col>
            <Col xs={6}>
              <Form.Control
                value={quantite}
                onChange={(e) => setQuantite(e.target.value)}
                id="quantite"
              />
            </Col>
            <Col xs={4}></Col>
          </Row>
        </Container>
        <Container style={{ "margin-bottom": "1%" }}>
          <Row>
            <Col>
              <h6>Client</h6>
            </Col>
            <Col xs={6}>
              <Form.Control
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                id="clientName"
              />
            </Col>
            <Col xs={4}></Col>
          </Row>
        </Container>
        <Button variant="primary" onClick={getAllData}>
          Confirmer
        </Button>
      </Card>
    </section>
  );
}
