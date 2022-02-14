import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert("login success");
  };
  return (
    <div className="container bg-success bg-opacity-25 login-container my-5 shadow">
      <h1 className="p-2 ">Please Log in</h1>
      <form className="login-container" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-btn p-2"
          {...register("email")}
          placeholder="Write your email"
          type="email"
        />
        <br />
        <input
          className="input-btn p-2"
          {...register("password")}
          placeholder="Write your password"
          type="password"
        />
        <br />
        <input className="btn-submit input-btn btn-danger fs-5" type="submit" value="Login" />
        <br />
        <button className="btn-submit input-btn btn-danger fs-5 ">Google Sign-in</button>
        <br/>
        <button className="btn-submit input-btn btn-danger fs-5">Facebook log-in</button>
        <Link className="p-3" to="/register"><button className="border-0 bg-success bg-opacity-25" style={{fontWeight: 600}}>NEW USER? PLEASE REGISTER</button></Link>
        
        
      </form>
    </div>
  );
};

export default Login;
