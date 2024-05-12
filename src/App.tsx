import React, { useEffect } from "react";
import { Login }  from "./Component/Login-Component/Login";
import { Booking } from "./Component/Booking-Component/Booking";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useToken } from "./Component/useToken/useToken";

function App() {
  const {getToken, saveToken } = useToken();
  const navigate   = useNavigate();

  useEffect(() => {
    if (getToken()) { // !getToken se getToken kiya hai bcouz it was not working so :)
      navigate("/");
    }
  },[getToken, navigate])
  

  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element= {<Login setToken={saveToken}/>}/>
          <Route path="/mainpage" element={<Booking/>} />
        </Routes>
      
    </div>
  );
}

export default App;