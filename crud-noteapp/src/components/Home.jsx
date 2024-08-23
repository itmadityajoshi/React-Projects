import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col justify-center items-center bg-lime-50 h-svh">
      <h1 className="text-2xl font-semibold mb-3">List of Users</h1>

    

      <div className="w-[55%] rounded bg-white border shadow p-4 ">
      <Link to={"/create"} >  
      <button className="ml-[85%] mb-3 bg-green-500 px-3 rounded text-xl font-semibold ">
        
        Add + 
      </button></Link> 
        <table className="">
          <thead>
            <tr className="border-b-2 border-slate-600 ">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i} className="border-b-2 border-slate-600 ">
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td className="">
                  <button className=" bg-blue-400 px-2 m-2 rounded ">
                    {" "}
                    Edit{" "}
                  </button>
                  <button className=" bg-red-500 px-2 rounded "> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
