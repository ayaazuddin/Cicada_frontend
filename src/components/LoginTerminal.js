import React from "react";
import "../styles/Terminal.css";
import { useState } from "react";
import { useHistory } from "react-router";
import { handleLogin } from "../api";
import { useFocus } from "../hooks/useFocus";

function LoginTerminal({setToken}) {
  const [team, setTeam] = useState("");
  const [pass, setPass] = useState("");
  const [show, showpass] = useState(false);
  const [error,setError] = useState(null);
  const [inputRef, setInputRef] = useFocus();
  const history = useHistory();

  const handleKeypress1 = (e) => {
    setTeam(e.target.value);
    if (e.key === "Enter") {
      showpass(true);
      setInputRef();
    }
  };

  const handleKeypress2 = (e) => {
    setPass(e.target.value);
    if (e.key === "Enter") {      
      handleLogin(team,e.target.value,setToken,history,setError)
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
        <input onKeyPress={handleKeypress1} onChange={handleKeypress1} value={team} autoFocus />
        <br />
        {show ? (
          <div>
            Enter Password: <br></br>
            {`C:/Cicada> `}
            <input onKeyPress={handleKeypress2} value={pass} onChange={handleKeypress2} ref={inputRef} autoFocus />
          </div>
        ) : null}
        {
          error &&
          <div className="error">
            <br/>
            {error}
          </div>
        }
      </div>
    </div>
  );
}

export default LoginTerminal;
