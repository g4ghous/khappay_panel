// import avatar2 from "../component/assets/images/users/avatar2.jpg";
import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import { Serverurl } from "../Common/ServerUrl";
import swal from "sweetalert";

export class GridSubCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subCategoryData: [],
      categoryData: [],
      categoryName: "",
    };
  }

  componentDidMount() {
    console.log(
      "token on GridSubCategory screen : ",
      localStorage.getItem("token")
    );

    //category-show api
    axios({
      method: "get",
      url: Serverurl + "category_show",
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
      })
      .catch((err) => {
        console.log("category_show api error: ", err);
      });

    // sub-category show api
    axios({
      method: "get",
      url: Serverurl + "subcategory_show",
      //   data: data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      config: {
        headers: { "Content-Type": "application/json" },
      },
    })
      .then((res) => {
        console.log("subcategory_show api response.data is: ", res.data);

        this.setState({
          subCategoryData: res.data,
        });

        // var categoryArray = this.state.categoryData;
        // var subCategoryArray = this.state.subCategoryData;
        // categoryArray.find((obj) => {
        //   //find() in JavaScript is used to match particular object's attribute
        //   // 'obj' means object
        //   if (obj.id == subCategoryArray.category_id) {
        //     this.setState({
        //       categoryName: obj.name,
        //     });
        //     return true;
        //   }
        //   console.log("obj in find is: ", obj);
        //   console.log("category name is: ", obj.name);
        // });

        // var categoryArray = categoryArray.map(function (obj, i) {
        //   var subCategoryArray = this.state.subCategoryData.filter(function (
        //     x
        //   ) {
        //     return x.category_id == obj.id;
        //   })[0];

        //   console.log("obj in find is: ", obj);
        //   console.log("category name is: ", obj.name);

        //   return obj;
        // });

        $(document).ready(function () {
          $("#datatable2").DataTable();
        });
      })
      .catch((err) => {
        console.log("sub-category .catch error is: ", err);
      });
  }

  deleteSubCategoryHandler = (id) => {
    axios({
      method: "delete",
      url: Serverurl + "subcategory_delete/" + id,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        console.log(
          "subcategory_delete API response data is --> ",
          response.data
        );
        swal("Sub-Category is successfully deleted!");

        // after delete from cart, again fetching new data from cart_user api
        axios({
          method: "get",
          url: Serverurl + "subcategory_show",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((response) => {
            console.log(
              "subcategory_show API response data is --> ",
              response.data
            );

            this.setState({
              subCategoryData: response.data,
            });
          })
          .catch((error) => {
            console.log(
              "Error from subcategory_show API is --> ",
              error.response
            );
          });
      })
      .catch((error) => {
        console.log(
          "Error from subcategory_delete API is --> ",
          error.response
        );
      });
  };

  // getCategoryName = () => {
  //   var categoryArray = this.state.categoryData;
  //   var subCategoryArray = this.state.subCategoryData;

  //   categoryArray.find((obj) => {
  //     //find() in JavaScript is used to match particular object's attribute
  //     // 'obj' means object
  //     if (obj.id === subCategoryArray.category_id) {
  //       this.setState({
  //         categoryName: obj.name,
  //       });
  //       return true;
  //     }
  //   });
  // };

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
                      <h4>Sub-Categories List</h4>
                    </div>
                    <div class="button-align">
                      <a
                        href="/component/CreateSubCategory"
                        type="button"
                        class="btn btn-danger waves-effect waves-light submit-button"
                      >
                        Add Sub-Category
                      </a>
                    </div>
                  </div>
                  <div class="table-3">
                    <table id="datatable2" class="table">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Category</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {this.state.subCategoryData.map((subCategory) => (
                          <tr key={subCategory.id}>
                            <td>
                              <img
                                src={subCategory.image}
                                width="70px"
                                height="70px"
                              />
                            </td>
                            <td>{subCategory.name}</td>
                            <td>{subCategory.category_id}</td>
                            <td>
                              <div class="icon-pad">
                                {/* <a
                                  href="/component/updateCategory"
                                  onClick={this.updateCategory.bind(
                                    this,
                                    category.id
                                  )}
                                >
                                  <i className="fas fa-pencil-alt"></i>
                                </a> */}
                                <i
                                  className="fas fa-trash-alt"
                                  onClick={this.deleteSubCategoryHandler.bind(
                                    this,
                                    subCategory.id
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

export default GridSubCategories;
