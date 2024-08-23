import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex w-full mt-10 justify-center items-center">
      <div className=" w-[50%] border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1 className="text-3xl font-semibold mb-4">Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name :
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email :
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone :
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <button className="bg-green-500 px-2 text-xl rounded ">Submit</button>
          <Link to="/">
            {" "}
            <button className="bg-gray-400 px-2 rounded text-xl"> Back </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Create;
