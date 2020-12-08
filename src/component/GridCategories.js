// import avatar2 from "../component/assets/images/users/avatar2.jpg";
import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import { Serverurl } from "../Common/ServerUrl";
import swal from "sweetalert";

export class GridCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryData: [],
    };
  }

  componentDidMount() {
    console.log(
      "token on GridCategory screen : ",
      localStorage.getItem("token")
    );

    axios({
      method: "get",
      url: Serverurl + "category_show",
      //   data: data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      config: {
        headers: { "Content-Type": "application/json" },
      },
    })
      .then((res) => {
        console.log("category_show api response.data is: ", res.data);

        this.setState({
          categoryData: res.data,
        });

        $(document).ready(function () {
          $("#datatable2").DataTable();
        });
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          console.log({ err });
        }
      });
  }

  updateCategory = (id) => {
    localStorage.setItem("categoryId", id);
    console.log(id);
  };

  deleteCategoryHandler = (id) => {
    axios({
      method: "delete",
      url: Serverurl + "category_delete/" + id,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        console.log("category_delete API response data is --> ", response.data);
        swal("Category is successfully deleted!", {
          icon: "success",
        });

        // after delete from cart, again fetching new data from cart_user api
        axios({
          method: "get",
          url: Serverurl + "category_show",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((response) => {
            console.log(
              "category_show API response data is --> ",
              response.data
            );

            this.setState({
              categoryData: response.data,
            });
          })
          .catch((error) => {
            console.log("Error from category_show API is --> ", error.response);
          });
      })
      .catch((error) => {
        console.log("Error from category_delete API is --> ", error.response);
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
                      <h4>Categories List</h4>
                    </div>
                    <div class="button-align">
                      <a
                        href="/component/CreateCategory"
                        type="button"
                        class="btn btn-danger waves-effect waves-light submit-button"
                      >
                        Add Category
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
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {this.state.categoryData.map((category) => (
                          <tr key={category.id}>
                            <td>
                              <img src={category.image} width="70" />
                            </td>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td>
                              <div class="icon-pad">
                                <a
                                  href="/component/updateCategory"
                                  onClick={this.updateCategory.bind(
                                    this,
                                    category.id
                                  )}
                                >
                                  <i className="fas fa-pencil-alt"></i>
                                </a>
                                <i
                                  className="fas fa-trash-alt"
                                  onClick={this.deleteCategoryHandler.bind(
                                    this,
                                    category.id
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

export default GridCategories;
