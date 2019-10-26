import React from "react";

const Form = props => {
  return (
    <form className="Form" onSubmit={props.submit}>
      <input
        className="Form__input"
        type="text"
        value={props.value}
        onChange={props.change}
        placeholder="&#8981; Write City"
      ></input>
      <button className="Form__button"> Search </button>
    </form>
  );
};

export default Form;
