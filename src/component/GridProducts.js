import avatar2 from "../component/assets/images/users/avatar2.jpg";
import React, { Component } from "react";
import { Serverurl, Serverurlimg } from "../Common/ServerUrl";
import axios from "axios";
import $ from "jquery";
import swal from "sweetalert";

export class GridProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
    };
  }

  componentDidMount() {
    // var data;
    axios({
      method: "get",
      url: Serverurl + "products_show",
      // data: data,
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

        $(document).ready(function () {
          $("#datatable2").DataTable();
        });

        // console.log('data', res.data.data)
      })
      .catch((err) => {
        console.log("Error from products_show api is: ", err);
      });
  }

  updateProduct(id) {
    localStorage.setItem("productId", id);
    console.log("product id is: ", id);
  }

  deleteProductHandler = (id) => {
    axios({
      method: "delete",
      url: Serverurl + "products_delete/" + id,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        console.log("products_delete API response data is --> ", response.data);
        swal("Product is successfully deleted!");

        // after delete from cart, again fetching new data from cart_user api
        axios({
          method: "get",
          url: Serverurl + "products_show",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((response) => {
            console.log(
              "products_show API response data is --> ",
              response.data
            );

            this.setState({
              productData: response.data,
            });
          })
          .catch((error) => {
            console.log("Error from products_show API is --> ", error.response);
          });
      })
      .catch((error) => {
        console.log("Error from products_delete API is --> ", error.response);
      });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div class="row justify-content-center">
            <div class="col-lg-11 col-sm-11">
              <div class="card">
                <div class="card-body table-responsive">
                  <div className="list-head-btn">
                    <div className="head">
                      <h4>Products List</h4>
                    </div>
                    <div class="button-align">
                      <a
                        href="/component/CreateProduct"
                        type="button"
                        class="btn btn-danger waves-effect waves-light submit-button"
                      >
                        Add Product
                      </a>
                    </div>
                  </div>
                  <div class="table-3">
                    <table id="datatable2" class="table">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Stock</th>
                          <th>Price</th>
                          <th>Discount</th>
                          <th>Discounted Price</th>
                          <th>Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        {this.state.productData.map((product) => (
                          <tr key={product.id}>
                            <td>
                              <img src={product.image} width="70px" />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.stock}</td>
                            <td>Rs. {product.price}</td>
                            <td>{product.discount_percent} %</td>
                            <td>Rs. {product.discounted_price}</td>

                            <td>
                              <div class="icon-pad">
                                <a
                                  href="/component/updateProduct"
                                  onClick={this.updateProduct.bind(
                                    this,
                                    product.id
                                  )}
                                >
                                  <i className="fas fa-pencil-alt"></i>
                                </a>
                                <i
                                  className="fas fa-trash-alt"
                                  onClick={this.deleteProductHandler.bind(
                                    this,
                                    product.id
                                  )}
                                ></i>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default GridProducts;
