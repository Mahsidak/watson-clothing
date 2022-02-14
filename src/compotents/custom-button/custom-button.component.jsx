import React from "react";
import "./custom-button.styles.scss";

const CustomButton = (props) => (
  <button
    className={`${props.inverted ? "inverted" : ""}${
      props.isgoolesignedin ? "google-signed-in" : ""
    } custom-button`}
    {...props}
  >
    {props.children}
  </button>
);

export default CustomButton;
