import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Components/Home";
import ListPoke from "./Components/ListPoke";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Switch>
        <Route path="/listpokemon" exact component={ListPoke} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
