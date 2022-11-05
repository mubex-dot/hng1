import React from "react";

function FormEmail() {
  const [formData, setFormData] = React.useState({
    email: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="form-email">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="yourname@email.com"
        onChange={handleChange}
        name="email"
        id="email"
        value={formData.email}
      />
    </div>
  );
}

export default FormEmail;
