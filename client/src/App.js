import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Home from "./pages/Home";
// import NavDisplay from "./components/NavDisplay";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tips from "./pages/Tips";
import Blog from "./pages/Blog";
import Recipes from "./pages/Recipes";
import Footer from "./components/Footer";
import CreatePost from './pages/CreatePost';
// import { Nav } from 'react-bootstrap';


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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/tips" component={Tips} />
            <Route exact path="/newpost" component={CreatePost} />
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
