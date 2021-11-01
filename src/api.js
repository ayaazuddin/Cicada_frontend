import instance from "./axios";
import axios from "axios";

export const handleLogin = async (team,pass,setToken,history) => {
    axios
      .post("https://cicada-backend.herokuapp.com/login/", {
        username: team,
        password: pass,
      })
      .then((response) => {
        console.log(response);
        if(response.data.success === true){
          localStorage.setItem("token",response.data.data.token)
          setToken(response.data.data.token)
          history.push('/terminal')
        }
      })
      .catch((error) => {
        console.log(error);
      });
};

export const getCurrentQuestion = (script, setScript)=>{
    instance.get('/questions/detail/current/')
    .then((response)=>{
        console.log(response.data)
        if (response.data.success === true){
            setScript([...script,{data:response.data.data.question,error:false}])
        }
    })
    .catch((error)=>{
        setScript([...script,{data:error,error:true}])
    })
}

export const handleAnswer = (data, script, setScript)=>{
    instance.post('/answers/user/add/',data)
    .then((response)=>{
        console.log(response)
        let newScript = [
            ...script,
            {
                data:response.data.message,
                error:response.data.data.answer.is_correct
            },
        ]
        if(response.data.data.next_question){
            newScript.push({
                data:`Your next question is: 
                ${response.data.data.next_question.question}`,
                error:false
            })
        }
        if(response.data.data.completed){
            newScript.push({
                data:"***********YOU HAVE COMPLETED THE TEST****************",
                error:false
            })
        }
        setScript(newScript)
    })
    .catch((error)=>{
        setScript([...script,{data:error,error:true}])
    })
}