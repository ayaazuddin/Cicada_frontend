import instance from "./axios";
import axios from "axios";

export const handleLogin = (team,pass,setToken,history, setError) => {
    axios
      .post("https://cicada-backend.herokuapp.com/login/", {
        username: team,
        password: pass,
      })
      .then((response) => {
        if(!response.data){
            // console.log(response)
            return null
        }
        if(response.data.success === true){
          localStorage.setItem("token",response.data.data.token)
          setToken(response.data.data.token)
          history.push('/terminal')
          setError(null)
        }
        else{
            setError(response.data.error)
        }
      })
      .catch((error) => {
        console.log(error);
        if(error.response)
            setError(error.response.data.error)
        else if(error.request)
            setError("An error occoured while request")
        else if(error.message)
            setError(error.message)
        else
            setError(error)
      });
};

export const getCurrentQuestion = (script, setScript, setLoading)=>{
    setLoading(true);
    instance.get('/questions/detail/current/')
    .then((response)=>{
        if (response.data.success === true){
            setScript([
                ...script,
                {
                    data:response.data.data.question,
                    error:false
                }
            ])
        }
        else{
            setScript([
                ...script,
                {
                    data:response.data.message,
                    error:true
                }
            ]) 
        }
        setLoading(false);
    })
    .catch((error)=>{
        setLoading(false);
        setScript([...script,{data:error,error:true}])
    })
}

export const getHint = (script, setScript,setLoading)=>{
    setLoading(true);
    instance.get('/hint/')
    .then((response)=>{
        console.log(response.data)
        if (response.data.success === true){
            setScript([
                ...script,
                {
                    data:response.data.message,
                    error:false
                }
            ])
        }
        else{
            setScript([
                ...script,
                {
                    data:response.data.message,
                    error:true
                }
            ]) 
        }
        setLoading(false);
    })
    .catch((error)=>{
        console.log(error)
        setScript([...script,{data:error,error:true}])
        setLoading(false);
    })
}

export const handleAnswer = (data, script, setScript,setLoading)=>{
    setLoading(true);
    instance.post('/answers/user/add/',data)
    .then((response)=>{
        console.log(response)
        let newScript = [...script]
        if(response.data.success){
            newScript.push({
                data:response.data.message,
                error:!response.data.data.answer.is_correct
            })
        }
        else{
            newScript.push({
                data:response.data.message,
                error:true
            })
        }
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
        setLoading(false);
    })
    .catch((error)=>{
        setLoading(false);
        setScript([...script,{data:error,error:true}])
    })
}