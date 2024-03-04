import React from "react";
// import "./App.css";
import { Login } from "./Component/Login-Component/Login";
import { Aboutus } from "./Component/AboutUs/Aboutus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* 
            
            for view this About-Us Component 
            go to url and after localhost:3000 add /Aboutus
            and this component will show up :)

            this component is pushed becz the main component's Time picker is not ready yet
            if it grt's ready i definetly push that till i will be pushing all other component's like this :)

                                                                - Chirag();
          
          */}
          <Route path="/Aboutus" element={<Aboutus />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;