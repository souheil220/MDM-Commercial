import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import OuvrantCadre from "./components/OuvrantCadre";

function App() {
  console.log("rendering");
  // const {
  //   commande,
  //   tdp,
  //   mdp,
  //   mdf,
  //   cou,
  //   ndv,
  //   lp,
  //   ho,
  //   lo1,
  //   lo2,
  //   ms,
  //   se,
  //   p,
  //   so,
  //   ve,
  //   ga,
  //   qu,
  //   em,
  //   cu,
  //   cjh,
  //   cjc,
  //   ccj,
  // } = useRef();

  const [tdp, settdp] = React.useState(false);
  const [mdp, setmdp] = React.useState(false);
  const [mdf, setmdf] = React.useState(false);
  const [cou, setcou] = React.useState(false);
  const [ndv, setndv] = React.useState(false);
  const [lp, setlp] = React.useState(false);

  function handleTDPChange(newValue) {
    console.log("newValue " + newValue);
    settdp(newValue);
  }

  function handleMDPChange(newValue) {
    setmdp(newValue);
  }

  function handleMDFChange(newValue) {
    setmdf(newValue);
  }

  function handleCOULEURChange(newValue) {
    setcou(newValue);
  }
  function handleNDVChange(newValue) {
    setndv(newValue);
  }

  function handleLPChange(newValue) {
    setlp(newValue);
  }

  return (
    <>
      <OuvrantCadre
        id={"commande"}
        title={"Commande"}
        options={[
          { text: "", value: "" },
          { text: "Ouvrant seul", value: "OS" },
          { text: "Cadre Seul", value: "CS" },
          { text: "Ouvrant et cadre", value: "OC" },
        ]}
        onChange={handleTDPChange}
        onChangeCS={handleMDPChange}
      />

      {tdp && (
        <OuvrantCadre
          id={"tdp"}
          title={"Type de porte"}
          options={[
            { text: "", value: "" },
            { text: "Porte De Passage", value: "PP" },
            {
              text: "Porte D'Entrée Massive",
              value: "PEM",
            },
            {
              text: "Porte Coupe-Feu 45mm",
              value: "PCF45",
            },
            {
              text: "Porte Coupe-Feu 60mm",
              value: "PCF60",
            },
            {
              text: "Porte Coupe-Feu 30mm",
              value: "PCF30",
            },
            { text: "Technique", value: "PTEC" },
          ]}
          onChange={handleMDPChange}
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
          onChange={handleMDFChange}
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
          onChange={handleCOULEURChange}
        />
      )}

      {cou && (
        <OuvrantCadre
          id={"couleur"}
          title={"Couleur"}
          options={[
            { text: "", value: "" },
            { text: "Finza Sapelly", value: "Finza Sapelly", code: "FWE" },
            { text: "Finza Wengue", value: "Finza Wengue", code: "FJP" },
            { text: "Brute", value: "Brute", code: "CR" },
            { text: "Blanc", value: "Blanc", code: "BL" },
            { text: "Biege", value: "Biege", code: "BE" },
            { text: "Finza Stella", value: "Finza Stella", code: "FST" },
            { text: "Finza Azabache", value: "Finza Tostado", code: "FAZ" },
          ]}
          onChange={handleNDVChange}
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
          onChange={handleLPChange}
        />
      )}

      <OuvrantCadre
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
      />
      <OuvrantCadre
        title={"Hauteur Ouvrant (mm)"}
        options={[
          { text: "", value: "" },
          { text: "2030", value: "2030", code: "2030" },
          { text: "2090", value: "2090", code: "2090" },
          { text: "Spéciale", value: "Spéciale", code: "Hauteur" },
        ]}
      />
      <OuvrantCadre
        title={"Largueur 1er Ouvrant (mm)"}
        options={[
          { text: "", value: "" },
          { text: "623", value: "623", code: "623" },
          { text: "723", value: "723", code: "723" },
          { text: "823", value: "823", code: "823" },
          { text: "923", value: "923", code: "923" },
          { text: "1023", value: "1023", code: "1023" },
          { text: "Spéciale", value: "Spéciale", code: "Largeur" },
        ]}
      />

      <Container>
        <Row>
          <Col>
            <h6>Largueur 2eme Ovrant (mm)</h6>
          </Col>
          <Col xs={6}>
            <p>1023</p>
          </Col>
          <Col>
            <p></p>
          </Col>
        </Row>
      </Container>

      <OuvrantCadre
        title={"Mécanisation de Serrure"}
        options={[
          { text: "", value: "" },
          { text: "Sans Mecanisation", value: "Sans Mecanisation", code: "PC" },
          { text: "Grande Clé", value: "Grande Clé", code: "GC" },
          { text: "à Gache", value: "à Gache", code: "G" },
          { text: "Petite Clé", value: "923", code: "923" },
          { text: "1 Point Sécurité", value: "1 Point Sécurité", code: "1PS" },
          { text: "3 Point Sécurité", value: "3 Point Sécurité", code: "3PS" },
          { text: "Anti-Panique", value: "Anti-Panique", code: "AP" },
          {
            text: "Serrure Magnétique",
            value: "Serrure Magnétique",
            code: "PC",
          },
          { text: "grande clé zamak", value: "grande clé zamak", code: "GC" },
          { text: "à gache zamak", value: "à gache zamak", code: "G" },
          {
            text: "condamnation zamak",
            value: "condamnation zamak",
            code: "C",
          },
          { text: "petite clé zamak", value: "petite clé zamak", code: "PC" },
          {
            text: "3 point sécurité zamak",
            value: "3 point sécurité zamak",
            code: "3PS",
          },
          { text: "petite clé tec", value: "petite clé tec", code: "PC" },
          { text: "condamnation tec", value: "condamnation tec", code: "C" },
          { text: "petite clé cf", value: "petite clé cf", code: "PC" },
        ]}
      />
      <OuvrantCadre
        title={"Serrure"}
        options={[
          { text: "", value: "" },
          { text: "Oui", value: "Oui", code: "Oui" },
          { text: "Non", value: "Non", code: "Non" },
        ]}
      />
      <OuvrantCadre
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
      />
      <OuvrantCadre
        title={"Sens D'Ouverture"}
        options={[
          { text: "", value: "" },
          { text: "Droite", value: "Droite", code: "D" },
          { text: "Gauche", value: "Gauche", code: "G" },
          { text: "Sans Sens", value: "Sans Sens", code: "D" },
        ]}
      />
      <OuvrantCadre
        title={"Vitrage"}
        options={[
          { text: "", value: "" },
          { text: "Sans Vitre", value: "Sans Vitre", code: "Sans Vitre" },
          { text: "Vitrage Haut", value: "Vitrage Haut", code: "Vitrage Haut" },
          { text: "Vitrage Bas", value: "Vitrage Bas", code: "Vitrage Bas" },
          {
            text: "Vitrage Oculus",
            value: "Vitrage Oculus",
            code: "Vitrage Oculus",
          },
          { text: "V5AL", value: "V5AL", code: "V5AL" },
          { text: "V4AL", value: "V4AL", code: "V4AL" },
          { text: "Vitrage Côté", value: "Vitrage Côté", code: "Vitrage Côté" },
        ]}
      />
      <OuvrantCadre
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
      />
      <OuvrantCadre
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
      />
      <OuvrantCadre
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
            text: "Spécial",
            value: "Spécial",
            code: "Epaisseur",
          },
        ]}
      />

      <Container>
        <Row>
          <Col>
            <h6>Cadre utilisé</h6>
          </Col>
          <Col xs={6}>
            <h6>160</h6>
          </Col>
          <Col>
            <h6>Embochure</h6>
          </Col>
        </Row>
      </Container>

      <OuvrantCadre
        title={"Couvre Joint Hauteur (mm)"}
        options={[
          { text: "", value: "" },
          {
            text: "90",
            value: "90",
            code: "2",
          },
        ]}
      />
      <OuvrantCadre
        title={"Couvre Joint Largeur (mm)"}
        options={[
          { text: "", value: "" },
          {
            text: "90",
            value: "90",
            code: "2",
          },
        ]}
      />
      <OuvrantCadre
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

      <Container>
        <Row>
          <Col>
            <h6>Client</h6>
          </Col>
          <Col xs={6}>
            <h6>Test</h6>
          </Col>
          <Col>
            <h6>0</h6>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
