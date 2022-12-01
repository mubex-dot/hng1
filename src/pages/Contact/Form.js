import FormName from "./Forms/FormName";
import FormEmail from "./Forms/FormEmail";
import FormMessage from "./Forms/FormMessage";
import React from "react";

function Form() {
  const [checked, setChecked] = React.useState({
    check: false,
  });

  function handleChecked(event) {
    setChecked((prevChecked) => {
      return {
        ...prevChecked,
        [event.target.name]: event.target.checked,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <FormName />
        <FormEmail />
        <FormMessage />
        <div className="check">
          <input
            type="checkbox"
            id="check"
            name="check"
            checked={checked.check}
            onChange={handleChecked}
          />
          <label htmlFor="check">
            You agree to providing your data to Mubarak who may contact you.
          </label>
        </div>
        <br />
        <button id="btn__submit">Send message</button>
      </form>
    </>
  );
}

export default Form;
