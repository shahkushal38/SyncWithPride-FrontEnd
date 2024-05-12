import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import UsernameIcon from "./username_icon.png";
import lock from "./password.png";
import axios from "axios";


interface ILogin {
  setToken: (email: string, username: string, token: string)=> any;
}


export function Login(props: ILogin): JSX.Element {

  const { setToken } = props;

  const [login, setLogin ] = useState<String>();
  const [password, setPassword] = useState<String>();
  
  const navigate = useNavigate();

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setLogin(event.target.value);
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(event.target.value);
  }


  const handleOnSubmitClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    
    console.log("Submit clicked - ", login , password)
    
    const requestObject = {
      email: login,
      password
    }

    axios.post('http://localhost:4000/login', requestObject).then((res: { data: { data: { email: string; username: string; token: string; }; }; })=> {
      console.log("Response - ", res);
      setToken(res.data.data.email, res.data.data.username, res.data.data.token);
      event.preventDefault();
      navigate("/mainpage");
      
    }).catch((err: any) => {
      console.log("Error - ", err);
      navigate("/mainpage");
    })


  },[login, password, setToken, navigate])

  return (
    <div className="login-container">
      <div className="login">
        <form className="form">
          <div className="head">
            <h3 className="login-text">Login</h3>
          </div>

          <div className="input-container">
            <input type="text" placeholder="Email" className="input" onChange={handleLoginChange} />
            <img src={UsernameIcon} className="usericon" alt="Email" />
          </div>

          <div className="input-container">
            <input type="password" placeholder="Password" className="input" onChange ={handlePasswordChange} />
            <img src = {lock} className="lock" alt="Password"/>
          </div>

          <div className="me">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="submit"  onClick={handleOnSubmitClick} >Log in</button>
        </form>
      </div>
    </div>
  );
}
