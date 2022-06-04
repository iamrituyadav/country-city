import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddCity from "./Components/Body/AddCity";
import AddCountry from "./Components/Body/AddCountry";
import Navbar from "./Components/Body/Navbar";
import Population from "./Components/Body/Population";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/addcountry"} element={<AddCountry />} />
        <Route path={"/addcity"} element={<AddCity />} />
        <Route path={"/"} element={<Population />} />
      </Routes>
    </div>
  );
}

export default App;
