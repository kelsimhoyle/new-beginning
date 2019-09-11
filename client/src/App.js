import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import posed, { PoseGroup } from 'react-pose';
import './css/skeleton.css';
import Home from "./pages/Home";
import Nav from "./components/Nav";
import About from "./pages/About";
import Footer from "./components/Footer";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 200, beforeChildren: true },
  exit: { opacity: 0 }
});
  

function App() {
  return (
    <>
      <Router>
        <Route
          render={({ location }) => (
            <div id="site-container">
              <Nav />
              <div id="content-container">
                <PoseGroup>
                  <RouteContainer key={location.key}>
                    <Switch location={location}>
                      <Route exact path="/" component={Home} key="home" />
                      <div className="container">
                      <Route path="/about" component={About} key="about" />
                      </div>
                    </Switch>
                  </RouteContainer>
                </PoseGroup>
              </div>
              <Footer />
            </div>
          )}
        />
      </Router>
    </>
  );
}

export default App;
