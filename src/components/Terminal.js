import React from 'react'
import {useState} from 'react'
import '../styles/Terminal.css'

function Terminal() {

    const questions = [
        {
            question: "test1",
            answer: "a",
            id: 0
        },
        {
            question: "test2",
            answer: "b",
            id: 1
        },
        {
            question: "test3",
            answer: "c",
            id: 2
        }
    ]
    
    const [ques,setQues] = useState(questions)

    const [ans,setAns] = useState(String)

    const [Qid,setQid] = useState(questions[0]['id'])
    const [count,setCount] = useState(1)
    const [userInput,setUserInput] = useState([])

    const handleSubmit = e => {
    if (ans === questions[Qid]['answer'])
    {
        alert("right Answer")
        userInput.push(ans)
        console.log(userInput)
        setQid((Qid) => Qid + 1)
        setCount((count) => count + 1)
    }
    else if (Qid === questions.length)
    {
        alert("End")
    }
    else
    {
        alert("wrong")
    }
    // or you can send data to backend
    };


    const handleKeypress = e => {
        
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    function resizeInput() {
        this.style.width = this.value.length + "ch";
    }

    const handleChange = e => {
        setAns(e.target.value);
      };

            return (
                <div className="Content">
                {/* <div id="ascii">


         ++01100101 01110101++            =ඏ=             ++10101110 10100110++
       +011100110110   01001111000      0♢0Ŧ0♢0     00011110010   011011001110+
   +0110010001100101 0110000101100100   000卄000   0010011010000110 1010011000100110+
    +01101101011000010111001001101011++00+0卄00++++11010110010011101000011010110110+
        0111001101100  0010110111001100100`⁆⁅´0010011001110110100  0011011001110
              011001100 110000101110010++=`⁆⁅´=++010011101000011 001100110
                +01 10100001100101011 10010ʞk01001 11010100110000101 10+
                     +0111010001101111  +01ʞk10+  1111011000101110+
                         +110101011011  00.∴.00  110110101011+
                          +01100101     0+1ʞk1+0    10100110+
                          +1100101     +0+.∴.+0+     1010011+
                            +1110010   +0+.∴.+0+   0100111+
                              +1110100  01 ∴ 10  0010111+
                                        10 ∴ 01
                                        10`∵´01
                                         00.00
                                          : :
            </div> */}
                                    

                {ques.slice(0,count).map((q)=>
                    <div key={`que-${q.id}`} className="Question">
                        C:/User/TeamName: {q.question}
                        <br></br>

                        C:/User/TeamName: {userInput[q.id]}
                        
                        
                    </div>
                )}
                  
                  C:/User/TeamName: <input
                        onChange={handleChange}
                        onKeyPress={handleKeypress}
                        autofocus
                        />
                </div>
            )
}



export default Terminal