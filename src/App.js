import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import DiscoverPage from "./pages/DiscoverPage";
import HomePage from "./pages/HomePage";
import "./App.css";
import NavBar from "./components/NavBar";
const routes = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Discover",
    path: "/discover",
  },
];
function App() {
  return (
    <div className="App">
      <NavBar links={routes} />
      <Switch>
        <Route path="/discover" component={DiscoverPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
