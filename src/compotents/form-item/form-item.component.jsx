import React from "react";
import "./form-item.styles.scss";

const FormItem = (props) => (
  <div className="group">
    <input className="form-input" {...props} />
    {props.label ? (
      <label
        className={`${props.value.length ? "shrink" : ""} form-input-label`}
      >
        {props.label}
      </label>
    ) : null}
  </div>
);

export default FormItem;
