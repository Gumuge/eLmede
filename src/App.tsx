import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from "./Components/MainPage";
import Info from "./Components/Info";
import Manpower from "./Components/Manpower";
import Target from "./Components/Target";
import Thesis from "./Components/Thesis"

//function App(props : Movie): JSX.Element 
function App(): JSX.Element {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/eLmede" exact={true}>
            <MainPage />
        </Route>
        <Route path="/eLmede/info" exact={true}>
            <Info />
        </Route>
        <Route path="/eLmede/manpower" exact={true}>
            <Manpower />
        </Route>
        <Route path="/eLmede/target" exact={true}>
            <Target />
        </Route>
        <Route path="/eLmede/thesis" exact={true}>
            <Thesis />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
