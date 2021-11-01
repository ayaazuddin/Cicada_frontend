import "./App.css";
import { Route, Switch } from "react-router-dom";
import Terminal from "./components/Terminal";
import Vplayer from "./components/Vplayer";
import Error from "./components/Error";
import LoginTerminal from "./components/LoginTerminal";

const App = () => {
  return (
    <>
      <hr id="rasterline"></hr>

      <Switch>
        <Route exact path="/" component={Vplayer} />
        <Route exact path="/terminal" component={Terminal} />
        <Route exact path="/login" component={LoginTerminal} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
