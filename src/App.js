import "./App.css";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Terminal from "./components/Terminal";
import Vplayer from "./components/Vplayer";
import Error from "./components/Error";
import LoginTerminal from "./components/LoginTerminal";
import instance from "./axios";

const App = () => {
  const [token, setToken] = useState(null)
  useEffect(()=>{
    let local = localStorage.getItem("token")
    if(local)
    {
      setToken(local)
      instance.defaults.headers.common['Authorization'] = 'Bearer ' + token
    }
  })
  useEffect(()=>{
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + token
  }, [token])
  return (
    <>
      <hr id="rasterline"></hr>

      <Switch>
        <Route exact path="/" component={Vplayer} />
        <Route exact path="/terminal" render={(props)=>(<Terminal setToken={setToken} {...props} setToken={setToken}/>)} />
        <Route exact path="/login" render={(props)=><LoginTerminal setToken={setToken} {...props} setToken={setToken}/>} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
