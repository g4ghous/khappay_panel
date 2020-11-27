import React, { Component } from "react";
import { Serverurl } from "../Common/ServerUrl";
import axios from "axios";
import $ from "jquery";
import swal from "sweetalert";

export class UpdateCoupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      couponData: {},
      couponId: "",
      code: "",
      discount: "",
      status: "",
      error1: "",
      //   error2: "",
      //   error3: "",
      errorText: "",
    };
  }

  componentDidMount() {
    // var categoryData;
    var id = localStorage.getItem("couponId");
    console.log("couponId is: ", id);
    this.setState({
      couponId: id,
    });

    axios({
      method: "get",
      url: Serverurl + "coupon_show/" + id, //coupon_edit for UPDATE
      // data: categoryData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      config: {
        headers: { "Content-Type": "application/json" },
      },
    })
      .then((res) => {
        console.log(
          "coupon_show in componentDidMount() of UpdateCoupon' res.data is: ",
          res.data
        );
        this.setState({
          couponData: res.data,
          code: res.data.code,
          discount: res.data.discount,
          status: res.data.status,
        });
        console.log(
          "res.data from coupon_show api in then() of UpdateCoupon is: ",
          res.data
        );
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          console.log(
            "err from coupon_show api in UpdateCoupon is: ",
            err.response
          );
          console.log({ err });
        }
      });
  }

  handleStatusInput(e) {
    this.setState({
      status: e.target.value,
      errorText: "",
    });
  }

  handleBtnUpdateClick() {
    var validation = true;

    if (this.state.status == "") {
      this.setState({
        errorText: "*Coupon status is required!",
      });
      validation = false;
    }

    if (validation == true) {
      var data = {
        code: this.state.code,
        discount: this.state.discount,
        status: this.state.status,
      };

      console.log(this.state.token);
      console.log("coupon's Id is: ", this.state.couponId);

      axios({
        method: "post",
        url: Serverurl + "coupon_edit/" + this.state.couponId,
        data: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          swal("Coupon is successfully updated!");

          console.log(
            "res.data from coupon_edit/id in handleBtnUpdateClick() is: ",
            res.data
          );

          setTimeout(() => {
            window.location.href = "/component/gridCoupon";
          }, 2000);
        })
        .catch((err) => {
          console.log(err.res);

          this.setState({
            errorText: "Updating coupon Failed! Please try again",
          });
        });
    }
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
                    <h4 class="mt-0 header-title">Update Coupon</h4>

                    <div class="form-group row input-margin">
                      <label
                        for="example-text-input"
                        class="col-sm-2 col-form-label"
                      >
                        Code
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="code"
                          type="text"
                          id="example-text-input"
                          disabled={true}
                          placeholder={this.state.code}
                        />
                      </div>
                    </div>

                    <div class="form-group row input-margin">
                      <label
                        for="example-text-input"
                        class="col-sm-2 col-form-label"
                      >
                        Discount
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="discount"
                          type="text"
                          id="example-text-input"
                          disabled={true}
                          placeholder={this.state.discount}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label
                        for="example-email-input"
                        class="col-sm-2 col-form-label"
                      >
                        Status
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="status"
                          type="text"
                          id="example-email-input"
                          onChange={this.handleStatusInput.bind(this)}
                          placeholder={this.state.status}
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

export default UpdateCoupon;
