import "./CartItem.css";

const CartItem = (props) => {
  console.log(props.onRemove);
  return (
    <tr>
      <td>{props.lp}</td>
      <td>{props.ho}</td>
      <td>{props.lo1}</td>
      <td>{props.ms}</td>
      <td>{props.se}</td>
      <td>{props.pro}</td>
      <td>{props.so}</td>
      <td>{props.vi}</td>
      <td>{props.ga}</td>
      <td>{props.qu}</td>
      <td>test</td>
      <td>{props.codeModel}</td>
      <td>{props.codeProtecteur}</td>
      <td>{props.codeVitrage}</td>
      <td>{props.codeGrille}</td>
      {/* <td>{props.codeEmbochure}</td>
      <td>{props.codeSerure}</td> */}
      <div style={{ height: "100%" }} className="actions">
        <button onClick={props.onRemove}>−</button>
      </div>
    </tr>
  );
};

export default CartItem;
