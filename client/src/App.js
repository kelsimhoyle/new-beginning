import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Nav";
import About from "./pages/About";
import Footer from "./components/Footer";


class App extends Component {
  state={
    width: {
      menuOpen: true,
      width: 0
    }
    
  }

  componentDidMount() {
  }

  handleMenuClick = () => {
    this.setState({width: {menuOpen: !this.state.width.menuOpen}})
    console.log(this.state.menuOpen);
  }



  render() {
    return (
      <>
        <Router>
         <Navigation />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
