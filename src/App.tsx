import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from "./Components/MainPage";


//function App(props : Movie): JSX.Element 
function App(): JSX.Element {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/eLmede" exact={true}>
            <MainPage />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
