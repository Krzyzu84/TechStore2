import React, { Component } from "react";
import Product from "./Product";
export default class ProductList extends Component {
  render() {
    const { products: products, filteredProducts, filtered } = this.props;

    let displayProducts = filtered ? filteredProducts : products;

    let test = null;
    if (filtered) {
      test = "mleko";
    }

    return (
      <>
        <div className="container py-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">products list</h1>
            </div>
          </div>

          <div className="row">
            {displayProducts.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
