import React, { Component } from "react";
import ProductList from "../components/ProductList";
import Search from "../components/Search";
import axios from "axios";
export default class Products extends Component {
  state = {
    search: "",
    imagesUrl: [""],
    products: [
      {
        _id: 0,
        description: "",
        name: "",
        price: 0,
        url: "",
      },
    ],
    query: "&q=",
    error: "",
    filtered: false,
    filteredProducts: [],
    price: 0,
  };

  getProductData = () => {
    axios
      .get("https://barbarashop-d8171.firebaseio.com/products.json")
      .then((result) => {
        this.setState({
          products: result.data,
          filterProducts: result.data,
        });
      })
      .catch((error) => console.log(error));
  };

  addUrl(url) {
    this.setState({
      url: "test",
    });
  }

  componentDidMount() {
    this.getProductData();
    //this.getImages();
  }

  handleChange = (e) => {
    const name = e.target.name;

    this.setState(
      {
        [name]: e.target.value,
        filtered: e.target.value.length > 0 ? true : false,
      },
      () => this.filterProducts()
    );
    console.log(this.state.filtered);
  };

  filterProducts = () => {
    const { products, price, search } = this.state;

    let tempPrice = parseInt(price);

    let tempProducts = [...products];
    console.log(tempProducts);
    tempProducts = tempProducts.filter(
      (item) => parseFloat(item.price) >= tempPrice
    );

    if (search.length > 0 && products.length) {
      tempProducts = tempProducts.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.name.toLowerCase().slice(0, tempSearch.length);
        if (tempSearch === tempTitle) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      filterProducts: tempProducts,
    });
  };

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          price={this.state.price}
        />
        {this.state.error ? (
          <section>
            <div className="row">
              <div className="col">
                <h2 className="text-orange text-center text-uppercase mt-5">
                  {this.state.error}
                </h2>
              </div>
            </div>
          </section>
        ) : (
          <ProductList
            products={this.state.products}
            filteredProducts={this.state.filterProducts}
            filtered={this.state.filtered}
          />
        )}
      </>
    );
  }
}
