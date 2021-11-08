import React from "react";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { getCurrentQuestion, getHint, handleAnswer } from "../api";
import "../styles/Terminal.css";

function Terminal({token, setToken}) {
  const [script, setScript] = useState([])
  const [ans, setAns] = useState("");
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    getCurrentQuestion(script,setScript,setLoading);
  },[])
  
  useEffect(()=>{
    window.scrollTo(0,document.body.scrollHeight);
  },[script])

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      let newScript = [
        ...script,
        {
          data:e.target.value,
          error:false
        }
      ]
      setScript(newScript)
      setAns("");
      let answer = ans.trim()
      switch(answer){
        case "/logout":
          localStorage.removeItem("token")
          setToken(null);
          break;

        case "/hint":
          getHint(newScript,setScript,setLoading)
          break;

        default:
          handleAnswer({
            "answer":ans
          },newScript,setScript,setLoading)
      }
      // setLoading(false);
    }
  };

  const handleChange = (e) => {
    setAns(e.target.value);
  };
    return (
      !token? <Redirect to="/login"/>
      :<div className="Content">
        <hr class="dashed"></hr>
        <hr class="dashed"></hr>
        <div className="header">
          <p>WELCOME TO CICADA 3302</p>
          <p>Let us begin.... shall we?</p>
          <div id="ascii">
            <code>{`
            
            

         ++01100101 01110101++            =ඏ=             ++10101110 10100110++
       +011100110110   01001111000      0♢0Ŧ0♢0     00011110010   011011001110+
   +0110010001100101 0110000101100100   000卄000   0010011010000110 1010011000100110+
    +01101101011000010111001001101011++00+0卄00++++11010110010011101000011010110110+
        0111001101100  0010110111001100100 ⁆⁅ 0010011001110110100  0011011001110
              011001100 110000101110010++= ⁆⁅ =++010011101000011 001100110
                +01 10100001100101011 10010ʞk01001 11010100110000101 10+
                     +0111010001101111  +01ʞk10+  1111011000101110+
                         +110101011011  00.∴.00  110110101011+
                          +01100101     0+1ʞk1+0    10100110+
                          +1100101     +0+.∴.+0+     1010011+
                            +1110010   +0+.∴.+0+   0100111+
                              +1110100  01 ∴ 10  0010111+
                                        10 ∴ 01
                                        10 ∵ 01
                                         00.00
                                          : :
                                          
                                          
                                          `}</code>
          </div>
        </div>
        <hr class="dashed"></hr>
        <hr class="dashed"></hr>
        {script.map((each,index)=>
          <div key={index} className={`Question ${each.error && "error"}`}>
          {`C:/Cicada> `}
          {each.data} <br></br>
          <br />
          </div>
        )}
        {loading?
        <div className={`Question`}>
          {`C:/Cicada> Loading...`}
          <br></br>
          <br />
        </div>
        :<div className={`Question`}>
        {`C:/Cicada> `}
        <input
          onChange={handleChange}
          value={ans}
          onKeyPress={handleKeypress}
          autoFocus
        />
        <br />
        </div>}
      </div>
    );
  }
export default Terminal;
