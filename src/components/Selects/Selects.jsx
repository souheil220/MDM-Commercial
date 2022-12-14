import React, { useContext, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartContext from "../../context/cart-context";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Selects.css";
import { v4 as uuidv4 } from "uuid";
import Card from "../UI/Card";

import OuvrantCadre from "../OuvrantCadre/OuvrantCadre";

import { useEffect } from "react";
import SearchBarDropDown from "../UI/SearchBarDropDown";

export default function Selects() {
  const cartCxt = useContext(CartContext);
  const [inputB5, setInputB5] = useState(1);
  const [inputB14, setInputB14] = useState(0);

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

  const [type, setType] = useState("");

  const [quantite, setQuantite] = useState("");

  const [prixUnitaire, setPrixUnitaire] = useState("");

  const [inputValueClient, setInputValueClient] = React.useState(null);

  const [inputValueWarehouse, setInputValueWarehouse] = React.useState(null);

  const [inputValueAdressFacturation, setInputValueAdressFacturation] =
    React.useState(null);

  const [inputValueAdressLivraison, setInputValueAdressLivraison] =
    React.useState(null);

  const [inputValueCompteAnalytique, setInputValueCompteAnalytique] =
    React.useState(null);

  const [optionsClient, setOptionsClient] = React.useState([]);

  const [optionsWarehouse, setOptionsWarehouse] = React.useState([]);

  const [optionsAdressFacturation, setOptionsAdressFacturation] =
    React.useState([]);

  const [optionsAdressLivraison, setOptionsAdressLivraison] = React.useState(
    []
  );

  const [optionsCompteAnalytique, setOptionsCompteAnalytique] = React.useState(
    []
  );

  const [loadingClient, setLoadingClient] = React.useState(false);

  const [loadingWarehouse, setLoadingwarehouse] = React.useState(false);

  const [loadingAdressFacturation, setLoadingAdressFacturation] =
    React.useState(false);

  const [loadingAdressLivraison, setLoadingAdressLivraison] =
    React.useState(false);

  const [loadingCompteAnalytique, setLoadingCompteAnalytique] =
    React.useState(false);

  const [userChoiceClient, setUserChoiceClient] = useState("");

  const [userChoiceWarehouse, setUserChoiceWarehouse] = useState("");

  const [userChoiceAddresDeFacturation, setUserChoiceAddresDeFacturation] =
    useState("");

  const [userChoiceAdressLivraison, setUserChoiceAdressLivraison] =
    useState("");

  const [userChoiceCompteAnalytique, setUserChoiceCompteAnalytique] =
    useState("");

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
  function handleInputB14(input) {
    setInputB14(input);
  }

  function handleUserChoiceClient(value) {
    console.log(value);
    setUserChoiceClient(value);
  }

  function handleUserChoiceWarehouse(value) {
    console.log(value);
    setUserChoiceWarehouse(value);
  }

  function handleUserChoiceAddresDeFacturation(value) {
    console.log(value);
    setUserChoiceAddresDeFacturation(value);
  }

  function handleUserChoiceAddresDeLivraison(value) {
    console.log(value);
    setUserChoiceAdressLivraison(value);
  }

  function handleUserChoiceCompteAnalytique(value) {
    console.log(value);
    setUserChoiceCompteAnalytique(value);
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
        "F" + mdp_select.options[mdp_select.selectedIndex].text + couleur_h6
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
                "Vitrage C??t??"
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
      ga_select.options[ga_select.selectedIndex].text === "Sans M??canisation"
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
        "Porte D'Entr??e Blind??e"
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
    var data = {
      id: uuidv4(),
      code: generateCode(),
      quantite: document.getElementById("quantite").value,
      prixUnitaire: document.getElementById("prixUnitaire").value,
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
      warehouse: userChoiceWarehouse,
      client: userChoiceClient,
      addressFacturation: userChoiceAddresDeFacturation,
      addressDeLivraison: userChoiceAdressLivraison,
      compteAnalytique: userChoiceCompteAnalytique,
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
  }

  // Gat warehouses
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/get-warehouse?name=${inputValueWarehouse}`)
      .then((response) => response.json())
      .then((data) => {
        setOptionsWarehouse(data);
      });
    setLoadingwarehouse(false);
  }, [inputValueWarehouse]);

  // GET Clients
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/get-companny?name=${inputValueClient}`)
      .then((response) => response.json())
      .then((data) => {
        setOptionsClient(data);
      });
    setLoadingClient(false);
  }, [inputValueClient]);

  // GET ( Adress de Facturation / Addresse de livraison )
  useEffect(() => {
    var url = "";
    if (type === "invoice") {
      url = `http://127.0.0.1:8000/get-address?address=${inputValueAdressFacturation}&parent_id=${userChoiceClient}&type=${type}`;
    } else if (type === "delivery") {
      url = `http://127.0.0.1:8000/get-address?address=${inputValueAdressLivraison}&parent_id=${userChoiceClient}&type=${type}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setOptionsAdressFacturation(data);
      });
    setLoadingAdressFacturation(false);
  }, [inputValueAdressFacturation, inputValueAdressLivraison]);

  // GET Compte Analytique
  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/get-compteAnalytique?contratAnalytique=${inputValueCompteAnalytique}`
    )
      .then((response) => response.json())
      .then((data) => {
        setOptionsCompteAnalytique(data);
      });
    setLoadingCompteAnalytique(false);
  }, [inputValueCompteAnalytique]);

  // SET Client
  const onInputChange = (event) => {
    setLoadingClient(true);
    setTimeout(() => {
      setInputValueClient(event.target.value);
    }, 2000);
  };

  // SET WAREHOUSE
  const onInputChangeWarehouse = (event) => {
    setLoadingwarehouse(true);
    setTimeout(() => {
      setInputValueWarehouse(event.target.value);
    }, 2000);
  };

  // SET Adress de facturation
  const onInputChangeAdressFacturation = (event) => {
    setLoadingAdressFacturation(true);
    setTimeout(() => {
      setType("invoice");
      setInputValueAdressFacturation(event.target.value);
    }, 2000);
  };

  // SET Adress de livraison
  const onInputChangeAdressLivraison = (event) => {
    setLoadingAdressLivraison(true);
    setTimeout(() => {
      setType("delivery");
      setInputValueAdressLivraison(event.target.value);
    }, 2000);
  };

  // SET Compte Analytique
  const onInputChangeCompteAnalytique = (event) => {
    setLoadingCompteAnalytique(true);
    setTimeout(() => {
      setInputValueCompteAnalytique(event.target.value);
    }, 2000);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    getAllData();
  };

  return (
    <Form onSubmit={formSubmitHandler}>
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
            onChangeC={handleCOMMANDEChange}
            onChangeTDP={handleTDPChange}
            onChangeEM={handleEMChange}
            onChangeGA={handleGAChange}
            onChangeB5Value={handleInputB5}
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
                  text: "Porte D'Entr??e Massive",
                  value: "Porte D'Entr??e Massive",
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
              onChangeTDP={handleTDPChange}
              onChangeMDP={handleMDPChange}
              onChangeGA={handleGAChange}
              onChangeB5Value={handleInputB5}
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
              onChangeMDP={handleMDPChange}
              inputB5Value={inputB5}
            />
          )}

          {mdf && (
            <OuvrantCadre
              id={"mdf"}
              title={"Mati??re De Finition"}
              options={[
                { text: "", value: "" },
                { text: "M??lamin??", value: "M??lamin??", code: "" },
                { text: "Laqu??", value: "Laqu??", code: "" },
                { text: "MDF Brute", value: "MDF Brute", code: "" },
                {
                  text: "Stratifier 3mm/Aluminium",
                  value: "Stratifier 3mm/Aluminium",
                  code: "",
                },
              ]}
              onChangeMDF={handleMDFChange}
              onChangeCOULEUR={handleCOULEURChange}
              inputB5Value={inputB5}
            />
          )}

          {cou && (
            <OuvrantCadre
              id={"couleur"}
              title={"Couleur"}
              options={[
                { text: "", value: "" },
                { text: "Finza Ch??ne", value: "Finza Ch??ne", code: "FCH" },
                { text: "Finza Sapelly", value: "Finza Sapelly", code: "FWE" },
                { text: "Finza Wengue", value: "Finza Wengue", code: "FJP" },
                { text: "Brute", value: "Brute", code: "CR" },
                { text: "Blanc", value: "Blanc", code: "BL" },
                { text: "Biege", value: "Biege", code: "BE" },
                { text: "Finza Stella", value: "Finza Stella", code: "FST" },
                { text: "Finza Azabache", value: "Finza Tostado", code: "FAZ" },
              ]}
              onChangeCOULEUR={handleCOULEURChange}
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
              onChangeNDV={handleNDVChange}
              onChangeLP={handleLPChange}
              onChangeLO1={handleLO1Change}
              nameSetter={nameSetter}
              inputB5Value={inputB5}
            />
          )}

          {lp && (
            <OuvrantCadre
              id={"lp"}
              title={"Largeur Precadre (Int??rieur)"}
              options={[
                { text: "", value: "" },
                { text: "1136", value: "1136", code: "1136" },
                { text: "1236", value: "1236", code: "1236" },
                { text: "1336", value: "1336", code: "1336" },
                { text: "1459", value: "1459", code: "1459" },
                { text: "1659", value: "1659", code: "1659" },
                { text: "1859", value: "1859", code: "1859" },
              ]}
              onChangeLP={handleLPChange}
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
                { text: "Sp??ciale", value: "Sp??ciale", code: "Hauteur" },
              ]}
              onChangeHO={handleHOChange}
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
                { text: "Sp??ciale", value: "Sp??ciale", code: "Largeur" },
              ]}
              onChangeLO1={handleLO1Change}
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
              title={"M??canisation de Serrure"}
              options={[
                { text: "", value: "" },
                {
                  text: "Sans Mecanisation",
                  value: "Sans Mecanisation",
                  code: "PC",
                },
                { text: "Grande Cl??", value: "Grande Cl??", code: "GC" },
                { text: "?? Gache", value: "?? Gache", code: "G" },
                { text: "Condamnation", value: "Condamnation", code: "C" },
                { text: "Petite Cl??", value: "Petite Cl??", code: "PC" },
                {
                  text: "1 Point S??curit??",
                  value: "1 Point S??curit??",
                  code: "1PS",
                },
                {
                  text: "3 Point S??curit??",
                  value: "3 Point S??curit??",
                  code: "3PS",
                },
                { text: "Anti-Panique", value: "Anti-Panique", code: "AP" },
                {
                  text: "Serrure Magn??tique",
                  value: "Serrure Magn??tique",
                  code: "PC",
                },
                {
                  text: "grande cl?? zamak",
                  value: "grande cl?? zamak",
                  code: "GC",
                },
                { text: "?? gache zamak", value: "?? gache zamak", code: "G" },
                {
                  text: "condamnation zamak",
                  value: "condamnation zamak",
                  code: "C",
                },
                {
                  text: "petite cl?? zamak",
                  value: "petite cl?? zamak",
                  code: "PC",
                },
                {
                  text: "3 point s??curit?? zamak",
                  value: "3 point s??curit?? zamak",
                  code: "3PS",
                },
                { text: "petite cl?? tec", value: "petite cl?? tec", code: "PC" },
                {
                  text: "condamnation tec",
                  value: "condamnation tec",
                  code: "C",
                },
                {
                  text: "petite cl?? tec zamak",
                  value: "petite cl?? tec zamak",
                  code: "PC",
                },
                {
                  text: "condamnation tec zamak",
                  value: "condamnation tec zamak",
                  code: "C",
                },
                { text: "petite cl?? cf", value: "petite cl?? cf", code: "PC" },
              ]}
              onChangeSE={handleSEChange}
              onChangeSO={handleSOChange}
              onChangeB14Value={handleInputB14}
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
              inputB14={inputB14}
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
              onChangeVI={handleVIChange}
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
                  text: "Vitrage C??t??",
                  value: "Vitrage C??t??",
                  code: "Vitrage C??t??",
                },
              ]}
              onChangeGA={handleGAChange}
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
                  text: "M??canisation De Grille Sans grille d'Airation",
                  value: "M??canisation De Grille Sans grille d'Airation",
                  code: "M??canisation De Grille Sans grille d'Airation",
                },
                {
                  text: "Sans M??canisation",
                  value: "Sans M??canisation",
                  code: "Sans M??canisation",
                },
              ]}
              onChangeQu={handleQUChange}
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
              onChangeEM={handleEMChange}
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
                  text: "Sp??ciale",
                  value: "Sp??ciale",
                  code: "Epaisseur",
                },
              ]}
              onChangeCU={handleCUChange}
              onChangeCJH={handleCJHChange}
              onChangeCUValue={handleCUValue}
              inputB5Value={inputB5}
            />
          )}

          {cu && (
            <Container id={"cu"}>
              <Row>
                <Col>
                  <h6>Cadre utilis??</h6>
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
              onChangeCJL={handleCJLChange}
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
              onChangeCDCJ={handleCDCJChange}
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
                  text: "90??",
                  value: "90??",
                  code: "2",
                },
              ]}
            />
          )}

          <Container style={{ "margin-bottom": "1%" }}>
            <Row>
              <Col>
                <h6>Prix Unitaire</h6>
              </Col>
              <Col xs={6}>
                <Form.Control
                  value={prixUnitaire}
                  onChange={(e) => setPrixUnitaire(e.target.value)}
                  id="prixUnitaire"
                  required
                />
              </Col>
              <Col xs={4}></Col>
            </Row>
          </Container>
          <Container style={{ "margin-bottom": "1%" }}>
            <Row>
              <Col>
                <h6>Quantit??</h6>
              </Col>
              <Col xs={6}>
                <Form.Control
                  value={quantite}
                  onChange={(e) => setQuantite(e.target.value)}
                  id="quantite"
                  required
                />
              </Col>
              <Col xs={4}></Col>
            </Row>
          </Container>

          <Container style={{ "margin-bottom": "1%" }}>
            <Row>
              <Col>
                <h6>Warehouse</h6>
              </Col>
              <Col xs={6}>
                <SearchBarDropDown
                  options={optionsWarehouse}
                  onInputChange={onInputChangeWarehouse}
                  loadingValue={loadingWarehouse}
                  userChoice={handleUserChoiceWarehouse}
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
                <SearchBarDropDown
                  options={optionsClient}
                  onInputChange={onInputChange}
                  loadingValue={loadingClient}
                  userChoice={handleUserChoiceClient}
                />
              </Col>
              <Col xs={4}></Col>
            </Row>
          </Container>

          <Container style={{ "margin-bottom": "1%" }}>
            <Row>
              <Col>
                <h6>Adress de facturation</h6>
              </Col>
              <Col xs={6}>
                <SearchBarDropDown
                  options={optionsAdressFacturation}
                  onInputChange={onInputChangeAdressFacturation}
                  loadingValue={loadingAdressFacturation}
                  userChoice={handleUserChoiceAddresDeFacturation}
                />
              </Col>
              <Col xs={4}></Col>
            </Row>
          </Container>

          <Container style={{ "margin-bottom": "1%" }}>
            <Row>
              <Col>
                <h6>Adress de livraison</h6>
              </Col>
              <Col xs={6}>
                <SearchBarDropDown
                  options={optionsAdressLivraison}
                  onInputChange={onInputChangeAdressLivraison}
                  loadingValue={loadingAdressLivraison}
                  userChoice={handleUserChoiceAddresDeLivraison}
                />
              </Col>
              <Col xs={4}></Col>
            </Row>
          </Container>

          <Container style={{ "margin-bottom": "1%" }}>
            <Row>
              <Col>
                <h6>Compte Analytique</h6>
              </Col>
              <Col xs={6}>
                <SearchBarDropDown
                  options={optionsCompteAnalytique}
                  onInputChange={onInputChangeCompteAnalytique}
                  loadingValue={loadingCompteAnalytique}
                  userChoice={handleUserChoiceCompteAnalytique}
                />
              </Col>
              <Col xs={4}></Col>
            </Row>
          </Container>
          {/* onClick={getAllData} */}
          <Button type="submit" variant="primary">
            Confirmer
          </Button>
        </Card>
      </section>
    </Form>
  );
}
