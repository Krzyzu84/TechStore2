import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

import "firebase/storage";

export default class Home extends Component {
  render() {
    return (
      <Header title="Welcome to the store">
        <Link
          to="products"
          className="text-uppercase btn btn-secondary btn-lg mt-3"
        >
          search products
        </Link>
      </Header>
    );
  }
}
