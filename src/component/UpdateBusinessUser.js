import React, { Component } from "react";
import { Serverurl } from "../Common/ServerUrl";
import axios from "axios";
import $ from "jquery";
import swal from "sweetalert";

export class UpdateBusinessUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      userId: "",
      image: null,
      name: "",
      email: "",
      phone: "",
      user_type: "",

      errorText: "",
    };
  }

  componentDidMount() {
    // var categoryData;
    var id = localStorage.getItem("userId");
    console.log("userId is: ", id);
    this.setState({
      userId: id,
    });

    axios({
      method: "get",
      url: Serverurl + "user_show/",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      config: {
        headers: { "Content-Type": "application/json" },
      },
    })
      .then((res) => {
        console.log(
          "user_show in componentDidMount() of UpdateBusinessUser's res.data is: ",
          res.data
        );
        this.setState({
          userData: res.data,
        });
        console.log(
          "res.data from user_show api in then() of UpdateBusinessUser is: ",
          res.data
        );
      })
      .catch((err) => {
        console.log("user_show api error: ", err);
      });
  }

  handleChangeProduct = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: "",
    });
  };

  handleBtnUpdateClick() {
    var formData = new FormData();
    if (this.state.image) {
      formData.append("image", this.state.image);
    }
    formData.append(
      "name",
      this.state.name ? this.state.name : this.state.productData.name
    );
    formData.append(
      "description",
      this.state.description
        ? this.state.description
        : this.state.productData.description
    );
    formData.append(
      "stock",
      this.state.stock ? this.state.stock : this.state.productData.stock
    );
    formData.append(
      "price",
      this.state.price ? this.state.price : this.state.productData.price
    );
    formData.append(
      "category",
      this.state.category
        ? this.state.category
        : this.state.productData.category
    );

    console.log(this.state.token);
    console.log("product's Id is: ", this.state.productId);

    axios({
      method: "post",
      url: Serverurl + "products_edit/" + this.state.productId,
      data: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        swal("User is successfully updated!");

        console.log(
          "res.data from products_edit/id in handleBtnUpdateClick() is: ",
          res.data
        );

        setTimeout(() => {
          window.location.href = "/component/gridProducts";
        }, 2000);
      })
      .catch((err) => {
        console.log(err.res);

        this.setState({
          errorText: "Updating product Failed! Please try again",
        });
      });
  }

  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-11 col-md-12 card">
              <div class="parent">
                {/* <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Englsh</a>
                                    </li>
                                    {/* <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">اردو</a>
                                    </li> 
                                </ul> */}
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h4 class="mt-0 header-title">Update User</h4>

                    <div class="form-group row input-margin">
                      <label
                        for="example-search-input"
                        class="col-sm-2 col-form-label"
                      >
                        Profile Image
                      </label>
                      <div class="col-sm-12">
                        <input
                          type="file"
                          id="input-file-now"
                          name="image"
                          class="dropify"
                          // placeholder={this.state.userData.image}
                        />
                      </div>
                    </div>
                    <div class="form-group row input-margin">
                      <label
                        for="example-text-input"
                        class="col-sm-2 col-form-label"
                      >
                        Name
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="name"
                          type="text"
                          id="example-text-input"
                          disabled={true}
                          placeholder={this.state.userData.name}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label
                        for="example-email-input"
                        class="col-sm-2 col-form-label"
                      >
                        Email
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="email"
                          type="email"
                          id="example-email-input"
                          disabled={true}
                          placeholder={this.state.userData.email}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label
                        for="example-number-input"
                        class="col-sm-2 col-form-label"
                      >
                        Phone
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="phone"
                          type="number"
                          id="example-number-input"
                          disabled={true}
                          placeholder={this.state.userData.phone}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label
                        for="example-password-input"
                        class="col-sm-2 col-form-label"
                      >
                        User Type
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="user_type"
                          type="text"
                          id="example-password-input"
                          onChange={this.handleChangeProduct.bind(this)}
                          placeholder={this.state.userData.user_type}
                        />
                      </div>
                    </div>

                    {this.state.errorText ? (
                      <p style={{ color: "red" }}>{this.state.errorText}</p>
                    ) : null}
                    <div class="form-group row">
                      <div class="button-align">
                        <button
                          type="button"
                          class="btn btn-danger waves-effect waves-light submit-button"
                          onClick={this.handleBtnUpdateClick.bind(this)}
                        >
                          Update
                        </button>
                      </div>
                    </div>
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

export default UpdateBusinessUser;
