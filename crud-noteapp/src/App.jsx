import React from "react";
import Users from "./components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Update from "./components/Update";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  return (
    <BrowserRouter>
      <Users />
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/create" element={<Create />}/>
      <Route  path="/update/:id" element={<Update />}/>
      <Route  path="/read/:id" element={<Read />}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
