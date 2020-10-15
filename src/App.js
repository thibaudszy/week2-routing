import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import DiscoverPage from "./pages/DiscoverPage";
import HomePage from "./pages/HomePage";
import "./App.css";
import NavBar from "./components/NavBar";
const routes = [
  {
    component: { HomePage },
    name: "home",
    path: "/",
  },
  {
    component: { AboutPage },
    name: "About",
    path: "/about",
  },
  {
    component: { HomePage },
    name: "Discover",
    path: "/discover",
  },
];
function App() {
  return (
    <div className="App">
      <NavBar links={routes} />
      <Switch>
        {/* {routes.map(({ path, component }) => (
          <Route path={path} component={component} />
        ))} */}
        <Route path="/discover" component={DiscoverPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
