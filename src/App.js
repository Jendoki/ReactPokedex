import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Components/Home";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
