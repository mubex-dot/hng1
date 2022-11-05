import React from "react";

function FormName() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
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
    <div className="form-name">
      <div className="fname">
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          onChange={handleChange}
          name="firstName"
          id="first_name"
          value={formData.firstName}
        />
      </div>
      <div className="lname">
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          placeholder="Enter your last name"
          onChange={handleChange}
          name="lastName"
          id="last_name"
          value={formData.lastName}
        />
      </div>
    </div>
  );
}

export default FormName;
