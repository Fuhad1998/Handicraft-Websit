import { unstable_createMuiStrictModeTheme } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import UseAuth from "../../Firebase/UseAuth";

const Register = () => {
  const {registerUser} = UseAuth();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data.name);
    console.log(data);
    registerUser(data.email, data.password)

    alert("Register successful");
  };
  return (
    <div className="container bg-success bg-opacity-25 login-container my-5 shadow">
      <h1>Please Register</h1>
      <form className="login-container" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-btn p-2"
          {...register("name")}
          placeholder="Write your name"
        />
        <br />
        <input
          className="input-btn p-2"
          {...register("email")}
          placeholder="Write your email"
        />
        <br />
        <input
          className="input-btn p-2"
          type="password"
          {...register("password")}
          placeholder="Write your password"
        />
        <br />
        <input className="btn-submit input-btn btn-danger fs-5" type="submit" value="Register" />
        <br />
        <Link className="" to="/LOGIN">
          <button className="border-0 bg-success bg-opacity-25" style={{ fontWeight: 600 }}>
            ALREADY REGISTERED? PLEASE LOG-IN
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
