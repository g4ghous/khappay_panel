import React, { Component } from "react";
import { Serverurl, Serverurlimg } from "../Common/ServerUrl";
import axios from "axios";
import renderHTML from "react-render-html";

export class ViewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
    };
  }

  componentDidMount() {
    var id = localStorage.getItem("productId", id);

    axios({
      method: "get",
      url: Serverurl + "products_show/" + id,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      config: {
        headers: { "Content-Type": "application/json" },
      },
    })
      .then((res) => {
        console.log("products_show api response.data is: ", res.data);

        this.setState({
          productData: res.data,
        });

        // $(document).ready(function () {
        //   $("#datatable2").DataTable();
        // });
      })
      .catch((err) => {
        console.log("Error from products_show api is: ", err);
      });
  }

  render() {
    return (
      <div className="container">
        <div class="row justify-content-center">
          <div class="col-lg-11 col-sm-11">
            <div class="card">
              <div class="card-body table-responsive">
                <div className="head view-list-style">
                  <h4>Product Details</h4>
                  <ul>
                    <div class="row">
                      <li class="col-12">
                        <h5>Image</h5>
                        <img
                          src={this.state.productData.image}
                          width="100%"
                          height="200px"
                        />
                      </li>
                    </div>
                    <div class="row">
                      <li class="col-12">
                        <h5>Name</h5>
                        <h6>{this.state.productData.name}</h6>
                      </li>
                    </div>
                    <div class="row">
                      <li class="col-12">
                        <h5>Description</h5>
                        <h6>{this.state.productData.description}</h6>
                      </li>
                    </div>
                    <div class="row">
                      <li class="col-12">
                        <h5>Stock</h5>
                        <h6>{this.state.productData.stock}</h6>
                      </li>
                    </div>
                    <div class="row">
                      <li class="col-12">
                        <h5>Price</h5>
                        <h6>Rs {this.state.productData.price}</h6>
                      </li>
                    </div>

                    <div class="row">
                      <li class="col-12">
                        <h5>Discount percent</h5>
                        <h6>{this.state.productData.discount_percent} %</h6>
                      </li>
                    </div>
                    <div class="row">
                      <li class="col-12">
                        <h5>Discounted price</h5>
                        <h6>Rs {this.state.productData.discounted_price}</h6>
                      </li>
                    </div>
                  </ul>
                  <div class="button-align">
                    <a
                      href="/component/gridProducts"
                      type="button"
                      class="btn btn-danger waves-effect waves-light submit-button"
                    >
                      Back
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewProduct;
