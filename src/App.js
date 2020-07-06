import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Default from "./pages/Default";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          {/* navbar */}
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/product/:id" component={SingleProduct} />
            <Route component={Default} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
