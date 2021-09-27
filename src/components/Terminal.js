import React from 'react'
import {useState,useEffect} from 'react'


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


    const handleSubmit = e => {
    if (ans === questions[Qid]['answer'])
    {
        alert("right Answer")
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

    const handleChange = e => {
        setAns(e.target.value);
      };
   
   
            return (
                <>
                {ques.slice(0,count).map((q)=>
                    <div key="`{count}`">
                        {q.question}
                        <br></br>
                        <input
                            onChange={handleChange}
                            onKeyPress={handleKeypress}
                        />
                    </div>
                )}
                </>
            )
}

export default Terminal