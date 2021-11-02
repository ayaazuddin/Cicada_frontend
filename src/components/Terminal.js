import React from "react";
import { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import { getCurrentQuestion, handleAnswer } from "../api";
import "../styles/Terminal.css";

function Terminal({token, setToken}) {

  // const questions = [
  //   {
  //     question: "question1",
  //     answer: "a",
  //     id: 0,
  //   },
  //   {
  //     question: "question2",
  //     answer: "b",
  //     id: 1,
  //   },
  //   {
  //     question: "question3",
  //     answer: "c",
  //     id: 2,
  //   },
  // ];

  // const [ques, setQues] = useState(questions);
  const [script, setScript] = useState([])
  const [ans, setAns] = useState(String);
  const [count, setCount] = useState(1);
  const [userInput, setUserInput] = useState([]);
  var test = "C:/User/TeamName: ";

  const [showq, setShowq] = useState(true);
  const correct = "Correct Answer";
  const wrong = "Wrong Answer";
  const [result, setresult] = useState("");
  const [show, showResult] = useState(false);

  // const handleSubmit = (e) => {
  //   if (ans === questions[Qid]["answer"]) {
  //     setresult(correct);
  //     test = test.concat(String(ans));
  //     setTimeout(() => {
  //       showResult(true);
  //       setShowq(false);
  //     }, 0);

  //     setTimeout(() => {
  //       showResult(false);
  //       setShowq(true);
  //     }, 2000);

  //     userInput.push(test);
  //     setQid((Qid) => Qid + 1);
  //     setCount((count) => count + 1);
  //     console.log(Qid);
  //   } else {
  //     setresult(wrong);
  //     setTimeout(() => {
  //       showResult(true);
  //       setShowq(false);
  //     }, 1000);

  //     setTimeout(() => {
  //       showResult(false);
  //       setShowq(true);
  //     }, 2000);
  //   }
  // };

  // useEffect(() => {
  //   var resu = document.getElementById("result");
  //   resu.innerHTML = result;
  // });

  useEffect(()=>{
    getCurrentQuestion(script,setScript);
  },[])

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      if(ans.trim() === "3301 logout"){
        localStorage.removeItem("token")
        setToken(null);
      }
      else{
        handleAnswer({
          "answer":ans
        },script,setScript)
      }
    }
  };

  const handleChange = (e) => {
    setAns(e.target.value);
  };

  // if (Qid === Object.keys(questions).length) {
  //   return (
  //     <div>
  //       <div id="result">DONE</div>
  //     </div>
  //   );
  // } else {
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
        {/* {showq
          ? ques.slice(count - 1, count).map((q) => (
              <div key={`que-${q.id}`} className="Question">
                {q.question}
                <div className="Answer" key={`ans-${Qid}`}>
                  <input
                    onChange={handleChange}
                    onKeyPress={handleKeypress}
                    autoFocus
                  />
                </div>
              </div>
            ))
          : null} */}
        {script.map((each,index)=>
        <div key={index} className={`Question ${each.error && "error"}`}>
        {each.data} <br></br>
        {`C:/Cicada> `}
        <input
          onChange={handleChange}
          onKeyPress={handleKeypress}
          autoFocus
        />
        <br />
        </div>
        )}
        <div id="result">{show ? result : null}</div>
        {/* <div className="Answer" key={`ans-${Qid}`}>
          <input
            onChange={handleChange}
            onKeyPress={handleKeypress}
            autoFocus
          />
          <div id="result">{show ? result : null}</div>
        </div> */}
      </div>
    );
  }
// }

export default Terminal;
