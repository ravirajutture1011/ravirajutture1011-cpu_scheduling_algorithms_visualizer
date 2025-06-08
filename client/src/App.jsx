import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Visualize from "./components/Visualize";
import { Routes, Route } from "react-router";
import CompareAlgorithms from "./components/CompareAlgorithms";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visualize" element={<Visualize />} />
        <Route path="/compare" element={<CompareAlgorithms />} />
      </Routes>
    </div>
  );
};

export default App;
