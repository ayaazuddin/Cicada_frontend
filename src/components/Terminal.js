import React from "react";
import { useState } from "react";
import "../styles/Terminal.css";
// import song from '../audio/slowkey.mp3'

function Terminal() {
  const questions = [
    {
      question: "question1",
      answer: "a",
      id: 0,
    },
    {
      question: "question2",
      answer: "b",
      id: 1,
    },
    {
      question: "question3",
      answer: "c",
      id: 2,
    },
  ];

  const [ques, setQues] = useState(questions);
  const [ans, setAns] = useState(String);
  const [Qid, setQid] = useState(questions[0]["id"]);
  const [count, setCount] = useState(1);
  const [userInput, setUserInput] = useState([]);
  var test = "C:/User/TeamName: ";

  const correct = "Correct Answer";
  const wrong = "Wrong Answer";

  const handleSubmit = (e) => {
    if (ans === questions[Qid]["answer"]) {
      alert("right Answer");
      test = test.concat(String(ans));
      userInput.push(test);
      setQid((Qid) => Qid + 1);
      setCount((count) => count + 1);
      console.log(Qid);
    } else {
      alert("wrong");
    }
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleChange = (e) => {
    setAns(e.target.value);
  };

  if (Qid === Object.keys(questions).length) {
    return <div>done</div>;
  } else {
    return (
      <div className="Content">
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

        {ques.slice(0, count).map((q) => (
          <div key={`que-${q.id}`} className="Question">
            {q.question}
            <br></br>

            {userInput[q.id]}
          </div>
        ))}

        <div className="Answer" key={`ans-${Qid}`}>
          C:/User/TeamName:
          <input
            onChange={handleChange}
            onKeyPress={handleKeypress}
            autoFocus
          />
        </div>
      </div>
    );
  }
}

export default Terminal;
