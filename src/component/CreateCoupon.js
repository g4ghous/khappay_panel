import React, { Component } from "react";
import { Serverurl } from "../Common/ServerUrl";
import axios from "axios";
import $ from "jquery";
import swal from "sweetalert";

export class CreateCoupon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      code: "",
      discount: "",
      status: "",
      errorText: "",
    };
  }

  async componentDidMount() {
    var token = await localStorage.getItem("token");
    this.setState({
      token,
    });

    console.log("CreateCoupon's componentDidMount() token: ", this.state.token);
  }

  handleChangeCoupon = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: "",
    });
  };

  handleBtnSubmitClick() {
    var validation = true;

    if (this.state.code == "") {
      this.setState({
        errorText: "*Coupon code is required!",
      });
      validation = false;
    }

    if (this.state.discount == "") {
      this.setState({
        errorText: "*Coupon discount is required!",
      });
      validation = false;
    }

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

      this.setState({
        loading: true,
      });

      console.log("API Data of CreateCoupon is: ", data);

      axios({
        method: "post",
        url: Serverurl + "coupon_add",
        data: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        config: {
          headers: { "Content-Type": "application/json" },
        },
      })
        .then((res) => {
          console.log("res.data of coupon_add API is: ", res.data);

          swal("Coupon Succesfully Added!");

          setTimeout(() => {
            window.location.href = "/component/gridCoupon";
          }, 2000);
        })
        .catch((err) => {
          console.log("Error from coupon_add API is: ", err);
        });
    }
  }

  onKeyDown = (event) => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.handleBtnSubmitClick();
    }
  };

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
                    <h4 class="mt-0 header-title">Add Coupon</h4>

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
                          onChange={this.handleChangeCoupon.bind(this)}
                          placeholder="Enter Coupon Code"
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
                          onChange={this.handleChangeCoupon.bind(this)}
                          placeholder="Enter Coupon Discount"
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
                          onChange={this.handleChangeCoupon.bind(this)}
                          placeholder="Enter Coupon Status"
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
                          onClick={this.handleBtnSubmitClick.bind(this)}
                        >
                          Submit
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

export default CreateCoupon;
