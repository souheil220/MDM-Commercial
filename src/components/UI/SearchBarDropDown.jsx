import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./three-dots.css";

export default function SearchBarDropDown(props) {
  const { options, onInputChange, loadingValue } = props;
  const ulRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.addEventListener("click", (event) => {
      event.stopPropagation();
      ulRef.current.style.display = "flex";
      onInputChange(event);
    });
    document.addEventListener("click", (event) => {
      ulRef.current.style.display = "none";
    });
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          position: "relative",
          alignItems: "center",
        }}
      >
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Search"
          onChange={onInputChange}
          required
        />
        {loadingValue && (
          <div className="sk-flow">
            <div className="sk-flow-dot"></div>
            <div className="sk-flow-dot"></div>
            <div className="sk-flow-dot"></div>
          </div>
        )}
      </div>
      <ul className="list-group" ref={ulRef}>
        {options.map((option, index) => {
          return (
            <option
              type="button"
              key={index}
              className="list-group-item list-group-item-action"
              onClick={(e) => {
                props.userChoice(option.value);
                inputRef.current.value = option.label;
              }}
              value={option.value}
            >
              {option.label}
            </option>
          );
        })}
      </ul>
    </div>
  );
}
