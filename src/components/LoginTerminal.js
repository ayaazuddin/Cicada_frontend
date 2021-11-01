import React from "react";
import "../styles/Terminal.css";
import { useState, useEffect, useRef } from "react";
import instance from "../axios";
import { useHistory } from "react-router";
import { handleLogin } from "../api";

function LoginTerminal({setToken}) {
  const [team, setTeam] = useState("");
  const [pass, setPass] = useState("");
  const [show, showpass] = useState(false);
  const history = useHistory();

  const handleKeypress1 = (e) => {
    if (e.key === "Enter") {
      setTeam(e.target.value);
      showpass(true);
    }
  };

  useEffect(() => {
    console.log(team);
    console.log(pass);
  });

  const handleKeypress2 = (e) => {
    if (e.key === "Enter") {
      setPass(e.target.value);
      handleLogin(team,e.target.value,setToken,history);
    }
  };

  return (
    <div>
      <div className="header">
        <p>WELCOME TO CICADA 3302</p>
        <p>Let us begin.... shall we?</p>
      </div>
      <div className="question">
        Enter Team Name: <br></br>
        {`C:/Cicada> `}
        <input onKeyPress={handleKeypress1} autoFocus />
        <br />
        {show ? (
          <div>
            Enter Password: <br></br>
            {`C:/Cicada> `}
            <input onKeyPress={handleKeypress2} autoFocus />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default LoginTerminal;
