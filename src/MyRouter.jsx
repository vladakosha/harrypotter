import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Count from "./Count";
import NavBar from "./NavBar";
import Spell from "./Spell";

const MyRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/beasts" element={<Count />} />
        <Route path="/spell" element={<Spell />} />
      </Routes>
    </>
  );
};

export default MyRouter;
