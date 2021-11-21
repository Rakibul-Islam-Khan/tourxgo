import React from "react";
import Footer from "../Home/components/Footer/Footer";
import Header from "../Home/components/Header/Header";
import { useForm } from "react-hook-form";
import axois from "axios";

const AddNewPack = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
      axois.post('https://pacific-ocean-78149.herokuapp.com/package', data)
      .then(res => {
           if (res.data.insertedId) {
               reset()
               alert('Package add successfully')
           }
      })
    };
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row my-5">
            <h1 className="text-center mb-5">Add new package</h1>
          <div className="col-md-4"></div>
          <div className="col-md-4 border p-4 shadow">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label  className="form-label">
                  Title
                </label>
                <input
                  className="form-control"
                  {...register("title")}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <div className="form-floating">
                  <textarea
                    {...register("description")}
                    className="form-control"
                    id="floatingTextarea2"
                  ></textarea>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                  <input type="number"
                    {...register("price")}
                    className="form-control"
                    id="floatingTextarea2"
                  />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Image Url
                </label>
                <input
                  className="form-control"
                  {...register("img")}
                />
              </div>
              <input className="btn btn-primary w-100" type="submit" />
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddNewPack;
