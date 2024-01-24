import React, { useState, useNavigate } from "react";
import "./Login.css";
import "./../LoginValidation";
import { validation } from "../LoginValidation";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
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
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/login", { values })
        .then((res) => {
          if (res.data === "Sucess") {
            navigate("/");
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => console.log(err));
    }
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
