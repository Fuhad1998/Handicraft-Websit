import React from "react";
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
     console.log(data)
     alert('add product successful')

  
    };
  return (
    <div className="container add-product-container my-5 shadow bg-light">
      
      <form className="add-product-from" onSubmit={handleSubmit(onSubmit)}>
      <h2 className=" p-3">Add-A-Product</h2>
        <input
          className="input-btn "
          {...register("name")}
          placeholder="Write product name"
          type="name"
        />
        <br />
        <input
          className="input-btn "
          {...register("detail")}
          placeholder="Write detail"
          type="text"
        />
        <br />
        <input
          className="input-btn "
          {...register("description")}
          placeholder="Write description"
          type="text"
        />
        <br />
        <input
          className="input-btn "
          {...register("img")}
          placeholder="Write imgUrl"
          type="text"
        />
        <br />
        <input
          className="input-btn"
          {...register("number")}
          placeholder="Write product price"
          type="number"
        />
        <br />
        <input
          className="btn-submit mb-4 input-btn btn-danger"
          type="submit"
          value="Please Add product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
