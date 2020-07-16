import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default class SingleProduct extends Component {
  // constructor(props) {
  //   super(props);
  //   const id = this.props.match.params.id;
  state = {
    // recipe: recipeData,
    product: {},
    loading: true,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("https://barbarashop-d8171.firebaseio.com/products/" + id + ".json")
      .then((result) => {
        console.log(result.data);
        this.setState(
          {
            product: result.data,
            url: ".." + result.data.url,
          },
          () => this.setState({ loading: false })
        );
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { description, name, price, url } = this.state.product;

    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase text-orange text-center">
                loading product....
              </h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link
              to="/products"
              className="btn btn-warning mb-5 text-capatilize"
            >
              back to product list
            </Link>
            <img
              src={"../" + url}
              className="d-block w-100"
              style={{ maxHeight: "30rem" }}
              alt="product"
            />
          </div>
          {/* info */}
          <div className="col-10 mx-auto col-md-6 my-3">
            <h6 className="text-uppercase font-weight-bold">{name}</h6>
            <h6 className="text-success text-capitalize ">${price}</h6>
            <h6 className="text-capitalize font-weight-bold ">description:</h6>
            <div className="mt-3">{description}</div>
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block mt-5"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
