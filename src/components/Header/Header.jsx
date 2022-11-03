import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <>
      <header className={"header"}>
        <h1>MDM COMMANDE</h1>
        <div className={"div-cart"}>
          <HeaderCartButton
            title={"Commande Ouvrant"}
            onClick={() => {
              props.onShowCart("Commande Ouvrant");
            }}
          />
          <HeaderCartButton
            title={"Commande Cadre"}
            onClick={() => {
              props.onShowCart("Commande Cadre");
            }}
          />
        </div>
      </header>
      {/* <div className={classes["main-image"]}>
        <img src={meals} alt="banner" />
      </div> */}
    </>
  );
}
