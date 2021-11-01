import React from "react";
import "../styles/Terminal.css";
import Axios from "axios";
import { useState, useEffect, useRef } from "react";
import { instance } from "./axios";

function LoginTerminal() {
  const [team, setTeam] = useState("");
  const [pass, setPass] = useState("");
  const [show, showpass] = useState(false);

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
      handleSubmit();
      setPass(e.target.value);
    }
  };

  const handleSubmit = async () => {
    instance
      .post("https://cicada-backend.herokuapp.com/login/", {
        username: team,
        password: pass,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
