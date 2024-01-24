import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import "./../LoginValidation";
import { validation } from "../LoginValidation";

function Login() {
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setvalues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
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
      <button type="submit" className="button  btn-primary">
        Login
      </button>
      <p>you are agreed to terms and policies</p>
      <Link
        to={"/signup"}
        type="submit"
        className="btn btn-primary text decoration-none"
      >
        Create an account
      </Link>
    </form>
  );
}

export default Login;
