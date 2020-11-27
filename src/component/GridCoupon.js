import avatar2 from "../component/assets/images/users/avatar2.jpg";
import React, { Component } from "react";
import { Serverurl, Serverurlimg } from "../Common/ServerUrl";
import axios from "axios";
import $ from "jquery";

export class GridCoupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      couponData: [],
    };
  }

  componentDidMount() {
    var token = `Bearer ${localStorage.getItem("token")}`;
    console.log("token in gridCoupon is: ", token);

    axios({
      method: "get",
      url: Serverurl + "coupon_show",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      config: {
        headers: { "Content-Type": "application/json" },
      },
    })
      .then((res) => {
        console.log("coupon_show api response.data is: ", res.data);

        this.setState({
          couponData: res.data,
        });

        $(document).ready(function () {
          $("#datatable2").DataTable();
        });
      })
      .catch((err) => {
        console.log("Error from coupon_show api is: ", err);
      });
  }

  updateCoupon(id) {
    localStorage.setItem("couponId", id);
    console.log("couponId is: ", id);
  }

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
                      <h4>Coupons List</h4>
                    </div>
                    <div class="button-align">
                      <a
                        href="/component/CreateCoupon"
                        type="button"
                        class="btn btn-danger waves-effect waves-light submit-button"
                      >
                        Add Coupon
                      </a>
                    </div>
                  </div>
                  <div class="table-3">
                    <table id="datatable2" class="table">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Code</th>
                          <th>Discount</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        {this.state.couponData.map((coupon) => (
                          <tr key={coupon.id}>
                            <td>{coupon.id}</td>
                            <td>{coupon.code}</td>
                            <td>{coupon.discount} %</td>
                            <td>{coupon.status}</td>

                            <td>
                              <div class="icon-pad">
                                <a
                                  href="/component/updateCoupon"
                                  onClick={this.updateCoupon.bind(
                                    this,
                                    coupon.id
                                  )}
                                >
                                  <i className="fas fa-pencil-alt"></i>
                                </a>
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

export default GridCoupon;
