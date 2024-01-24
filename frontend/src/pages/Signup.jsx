import React from "react";
import { validation } from "../signupValidation";
import { useState, useNavigate } from "react";

function Signup() {
  //const navigate = useNavigate();
  const [values, setvalues] = useState({
    full_name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    const validationErrors = validation(values);
    setErrors(validationErrors);
  };

  const handleChange = (event) => {
    setvalues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group m-2">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            id="name"
            placeholder="Enter full name"
            className="form-control rounded-0"
            onChange={handleChange}
            name="full_name"
          />
          {errors.full_name && <span>{errors.full_name}</span>}
        </div>
        <div className="form-group m-2">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className="form-control rounded-0"
            onChange={handleChange}
            name="email"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="form-group m-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="form-control rounded-0"
            onChange={handleChange}
            name="password"
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit" className="btn btn-primary text-decoration-none">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Signup;
