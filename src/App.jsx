import React from "react";
import "./App.css";
import Selects from "./components/Selects/Selects";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = React.useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Selects />
      </main>
    </CartProvider>
  );
}

export default App;
