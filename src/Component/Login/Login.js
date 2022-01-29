import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => { 
        alert('login success')
        
      };
    return (
        <div>
            <form className="login-container" onSubmit={handleSubmit(onSubmit)}>
          <input className="" {...register("email")} placeholder="Write your email"  type="email" />
          <br />
          <input className="" {...register("password")} placeholder="Write your password" type="password" />
          <br />
          <input
            className="btn-submit"
            type="submit"
            value="Please Login"
          />
          <br />
          {/* <Link className="" to="/register"><button className="border-0 bg-light" style={{fontWeight: 600}}>NEW USER? PLEASE REGISTER</button></Link> */}
        </form>
        </div>
    );
};

export default Login;