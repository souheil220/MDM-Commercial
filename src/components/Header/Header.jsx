import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <>
      <header className={"header"}>
        <h1>MDM COMMANDE</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/* <div className={classes["main-image"]}>
        <img src={meals} alt="banner" />
      </div> */}
    </>
  );
}
