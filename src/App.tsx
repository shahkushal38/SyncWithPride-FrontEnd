import React from "react";
// import "./App.css";
import { Login } from "./Component/Login-Component/Login";
import { Profile } from "./Component/Profile-component/Profile";
import { Aboutus } from "./Component/Aboutus-component/Aboutus";
import { Booking } from "./Component/Booking-component/Booking";
import { Gateway } from "./Component/Gateway-component/Gateway";
import { Mainpage } from "./Component/Mainpage-Component/Mainpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Mainpage" element={<Mainpage />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Gateway" element={<Gateway />} />
          <Route path="/Aboutus" element={<Aboutus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;