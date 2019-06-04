import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Welcome from "./pages/Welcome";
import Drivers from "./pages/Drivers";
import Riders from "./pages/Riders";
import DriversList from "./pages/Drivers-list";
import RidersList from "./pages/Riders-list";
import DriverProfile from "./pages/Driver-profile";
import RiderProfile from "./pages/Rider-profile";
import { ConfigProvider } from "./context/configContext";
import SpotifyNowPlaying from "./pages/Spotify";
import About from "./pages/About";


//import Chat from "./pages/Chat";


function App() {
  return (
    <ConfigProvider>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/drivers" component={Drivers} />
            <Route exact path="/riders" component={Riders} />
            <Route exact path="/driversList/:id" component={DriverProfile} />
            <Route exact path="/ridersList/:id" component={RiderProfile} />
            <Route exact path="/driversList" component={DriversList} />
            <Route exact path="/ridersList" component={RidersList} />
            <Route exact path="/spotify" component={SpotifyNowPlaying} />
            <Route exact path="/callback" component={SpotifyNowPlaying} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path= "/chat" component={Chat} /> */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default App;
