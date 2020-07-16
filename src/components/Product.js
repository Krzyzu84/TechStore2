import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Product extends Component {
  render() {
    const { _id, url, name, price } = this.props.product;

    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card" style={{ height: "100%", width: "30vh" }}>
          <div className="img-wrapper">
            <Link
              to={`/product/${_id}`}
              className="display-button text-uppercase"
            >
              <div className="view-details">
                <span className="text-uppercase details-text">
                  view details
                </span>
              </div>
              <img
                src={url}
                style={{ height: "14rem" }}
                className="img-card-top"
                alt="recipe"
              />
            </Link>
          </div>

          <div className="card-body text-capitalize text-center">
            <h6>{name}</h6>
            Price: <span className="text-success">${price}</span>
          </div>
        </div>
      </div>
    );
  }
}
