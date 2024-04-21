import React, { useEffect } from "react";
import {Login}  from "./Component/Login-Component/Login";

import { Route, Routes, useNavigate } from "react-router-dom";
import { useToken } from "./Component/useToken/useToken";

function App() {
  const {getToken, saveToken } = useToken();
  const navigate   = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate("/");
    }
  },[getToken, navigate])
  

  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element= {<Login setToken={saveToken}/>}/>
          <Route path="/mainpage" element={<><p>this is main page</p></>} />
        </Routes>
        
      
    </div>
  );
}

export default App;