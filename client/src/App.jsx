import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Visualize from "./components/Visualize";
import ProcessForm from "./components/ProcessForm";
import AlgorithmSelector from "./components/AlgorithmSelector";
import GanttChart from "./components/GanttChart";
 
import { Routes,Route } from "react-router";
import CompareAlgorithms from "./components/CompareAlgorithms";
// import ParentComponent from "./components/ParentComponent";


// import Card from "./components/Card";

const App = () => {
  return (
 
        <div>
        
  
      <Navbar />
  
      {/* <CompareAlgorithms/> */}
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/visualize" element={<Visualize/>}/>
        <Route path='/compare' element={<CompareAlgorithms/>}/>
        
      </Routes>


      
    
      
      {/* <Visualize/> */}
      {/* <ProcessForm/> */}
      {/* <AlgorithmSelector/> */}
      {/* <GanttChart/> */}
     
      
    </div>
      
    
  );
};

export default App;
