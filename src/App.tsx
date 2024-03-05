import React from "react";
// import "./App.css";
import { Login } from "./Component/Login-Component/Login";
import { Profile } from "./Component/Profile/Profile";
import { Mainpage } from "./Component/MainPage/Mainpage";
import { Gateway } from "./Component/Gateway/Gateway";
import { Aboutus } from "./Component/AboutUs/Aboutus";
import { Booking } from "./Component/BookingHistory/Booking";
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

          {/* 

            This Is Main Page,
            i did't reseved Date and Time picker so,
            i added a demo date picker that draw the line how things working 
            as i will reseved Date and Time picker i will be updating asap

                                                                - Chirag();

          */}
          <Route path="/Mainpage" element={<Mainpage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Gateway" element={<Gateway />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;