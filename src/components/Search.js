import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { handleChange, handleSubmit, search, price } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h1 className="text-slanted text-capitalize">
              search product with{" "}
              <strong className="text-primary">Tech Store</strong>
            </h1>
            <form className="mt-4">
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="Samsung, etc"
                  value={search}
                  onChange={handleChange}
                />
                {/* <div className="input-group-append">
                  <button
                    type="submit"
                    className="input-group-text bg-primary text-white"
                    onClick={handleSubmit}
                  >
                    <i className="fas fa-search" />
                  </button>
                </div> */}
                <div className="ml-4">
                  <input
                    type="range"
                    name="price"
                    id="price"
                    min={0}
                    max={5000}
                    className="filter-price"
                    value={price}
                    onChange={handleChange}
                  />
                  <div>
                    Price: <span className="font-weight-bold">{price}$</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
