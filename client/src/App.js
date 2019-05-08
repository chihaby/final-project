import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Welcome from "./pages/Welcome";
import Drivers from "./pages/Drivers";
import Riders from "./pages/Riders";
import Drivers-list from "./pages/Drivers-list";
import Riders-list from "./pages/Riders-list";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/drivers" component={Drivers} />
          <Route exact path="/riders" component={Riders} />
          <Route exact path="/drivers-list" component={Drivers-list} />
          <Route exact path="/riders-list" component={Riders-list} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
