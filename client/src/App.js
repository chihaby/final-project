import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Welcome from "./pages/Welcome";
import Drivers from "./pages/Drivers";
import Riders from "./pages/Riders";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/drivers" component={Drivers} />
          <Route exact path="/riders" component={Riders} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
