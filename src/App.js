import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Components/Home";
import ListPoke from "./Components//ListPokemon/ListPoke";
import ListEgg from "./Components/ListEggGroup/ListEgg";
import ListItem from "./Components/ListItem/ListItem";
import Pokemon from "./Components/Pokemon/Pokemon";
import Notyet from "./Components/Main/Notyet"

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
      <Switch>
        <Route path="/listitem" exact component={ListItem} />
      </Switch>
      <Switch>
        <Route path="/listegg" exact component={ListEgg} />
      </Switch>
      <Switch>
        <Route path="/pokemon/:id" exact component={Pokemon} />
      </Switch>
      <Switch>
        <Route path="/searchpokemon" exact component={Notyet} />
      </Switch>
      <Switch>
        <Route path="/searchitem" exact component={Notyet} />
      </Switch>
      <Switch>
        <Route path="/login" exact component={Notyet} />
      </Switch>
      <Switch>
        <Route path="/register" exact component={Notyet} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
