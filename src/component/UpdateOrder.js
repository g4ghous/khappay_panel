import React, { Component } from "react";
import { Serverurl } from "../Common/ServerUrl";
import axios from "axios";
import $ from "jquery";
import swal from "sweetalert";

export class UpdateOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderData: {},

      orderId: "",

      name: "",
      email: "",
      address: "",
      country: "",
      city: "",
      phone: "",
      postal_code: "",
      date: "",
      status: "",
      total: "",

      errorText: "",
    };
  }

  componentDidMount() {
    var id = localStorage.getItem("orderId");
    console.log("orderId is: ", id);
    this.setState({
      orderId: id,
    });

    axios({
      method: "get",
      url: Serverurl + "orders_show/" + id,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      config: {
        headers: { "Content-Type": "application/json" },
      },
    })
      .then((res) => {
        console.log(
          "orders_show in componentDidMount() of UpdateOrder's res.data is: ",
          res.data
        );
        this.setState({
          orderData: res.data,
        });

        console.log(
          "res.data from orders_show api in then() of UpdateOrder is: ",
          res.data
        );
      })
      .catch((err) => {
        this.setState({
          errorText: err.response,
        });
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

    formData.append(
      "name",
      this.state.name ? this.state.name : this.state.orderData.name
    );
    formData.append(
      "email",
      this.state.email ? this.state.email : this.state.orderData.email
    );
    formData.append(
      "address",
      this.state.address ? this.state.address : this.state.orderData.address
    );
    formData.append(
      "country",
      this.state.country ? this.state.country : this.state.orderData.country
    );
    formData.append(
      "city",
      this.state.city ? this.state.city : this.state.orderData.city
    );
    formData.append(
      "postal_code",
      this.state.postal_code
        ? this.state.postal_code
        : this.state.orderData.postal_code
    );
    formData.append(
      "phone",
      this.state.phone ? this.state.phone : this.state.orderData.phone
    );
    formData.append(
      "date",
      this.state.date ? this.state.date : this.state.orderData.date
    );
    formData.append(
      "status",
      this.state.status ? this.state.status : this.state.orderData.status
    );

    formData.append(
      "total",
      this.state.total ? this.state.total : this.state.orderData.total
    );

    console.log(this.state.token);
    console.log("order's Id is: ", this.state.orderId);

    axios({
      method: "post",
      url: Serverurl + "orders_edit/" + this.state.orderId,
      data: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        swal("Order is successfully updated!", {
          icon: "success",
        });

        console.log(
          "res.data from orders_edit/id in handleBtnUpdateClick() is: ",
          res.data
        );

        setTimeout(() => {
          window.location.href = "/component/gridOrders";
        }, 2000);
      })
      .catch((err) => {
        console.log(err.res);

        this.setState({
          errorText: "Updating order Failed! Please try again",
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
                    <h4 class="mt-0 header-title">Update Order Status</h4>

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
                          // onChange={this.handleChangeProduct.bind(this)}
                          placeholder={this.state.orderData.name}
                          disabled="true"
                        />
                      </div>
                    </div>

                    <div class="form-group row input-margin">
                      <label
                        for="example-text-input"
                        class="col-sm-2 col-form-label"
                      >
                        Email
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="email"
                          type="email"
                          id="example-text-input"
                          // onChange={this.handleChangeProduct.bind(this)}
                          placeholder={this.state.orderData.email}
                          disabled="true"
                        />
                      </div>
                    </div>

                    <div class="form-group row input-margin">
                      <label
                        for="example-text-input"
                        class="col-sm-2 col-form-label"
                      >
                        Address
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="address"
                          type="text"
                          id="example-text-input"
                          // onChange={this.handleChangeProduct.bind(this)}
                          placeholder={this.state.orderData.address}
                          disabled="true"
                        />
                      </div>
                    </div>

                    <div class="form-group row input-margin">
                      <label
                        for="example-text-input"
                        class="col-sm-2 col-form-label"
                      >
                        Country
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="country"
                          type="text"
                          id="example-text-input"
                          // onChange={this.handleChangeProduct.bind(this)}
                          placeholder={this.state.orderData.country}
                          disabled="true"
                        />
                      </div>
                    </div>

                    <div class="form-group row input-margin">
                      <label
                        for="example-text-input"
                        class="col-sm-2 col-form-label"
                      >
                        City
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="city"
                          type="text"
                          id="example-text-input"
                          // onChange={this.handleChangeProduct.bind(this)}
                          placeholder={this.state.orderData.city}
                          disabled="true"
                        />
                      </div>
                    </div>

                    <div class="form-group row input-margin">
                      <label
                        for="example-text-input"
                        class="col-sm-2 col-form-label"
                      >
                        Phone
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="phone"
                          type="number"
                          id="example-text-input"
                          // onChange={this.handleChangeProduct.bind(this)}
                          placeholder={this.state.orderData.phone}
                          disabled="true"
                        />
                      </div>
                    </div>

                    <div class="form-group row input-margin">
                      <label
                        for="example-text-input"
                        class="col-sm-2 col-form-label"
                      >
                        Postal Code
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="postal_code"
                          type="number"
                          id="example-text-input"
                          // onChange={this.handleChangeProduct.bind(this)}
                          placeholder={this.state.orderData.postal_code}
                          disabled="true"
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label
                        for="example-date-input"
                        class="col-sm-2 col-form-label"
                      >
                        Date
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="date"
                          type="date"
                          id="example-date-input"
                          // onChange={this.handleChangeProduct.bind(this)}
                          value={this.state.orderData.date}
                          disabled="true"
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-sm-2 col-form-label">Status</label>
                      <div class="col-sm-10">
                        <select
                          name="status"
                          onChange={this.handleChangeProduct.bind(this)}
                          class="form-control"
                        >
                          <option>Select Status</option>
                          <option value="in process">in process</option>
                          <option value="delivered">delivered</option>
                          <option value="cancelled">cancelled</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label
                        for="example-email-input"
                        class="col-sm-2 col-form-label"
                      >
                        Total
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="total"
                          type="number"
                          id="example-email-input"
                          // onChange={this.handleChangeProduct.bind(this)}
                          placeholder={this.state.orderData.total}
                          disabled="true"
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

                  {/* <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <h4 class="mt-0 header-title ar">صارف بنائیں</h4>

                                        <div class="form-group row input-margin urdu">
                                            <label for="example-search-input" class="col-sm-2 col-form-label">پروفائل تصویری اپ لوڈ</label>
                                            <div class="col-sm-12">
                                                <input type="file" id="input-file-now" name="avatar" onChange={this.handleFileInput.bind(this)} class="dropify" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">پہلا نام</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="first_name" onChange={this.handleChangeAdventure.bind(this)} type="text" id="example-text-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">آخری نام</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="last_name" onChange={this.handleChangeAdventure.bind(this)} type="text" id="example-text-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row urdu">
                                            <label for="example-email-input" class="col-sm-2 col-form-label">ای میل</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="email" onChange={this.handleChangeAdventure.bind(this)} type="email" id="example-email-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">صارف کا نام</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="username" onChange={this.handleChangeAdventure.bind(this)} type="text" id="example-text-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row urdu">
                                            <label for="example-number-input" class="col-sm-2 col-form-label">رابطہ نمبر</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="contact_number" onChange={this.handleChangeAdventure.bind(this)} type="number" id="example-number-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row urdu">
                                            <label for="example-password-input" class="col-sm-2 col-form-label">پاس ورڈ</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="password" onChange={this.handleChangeAdventure.bind(this)} type="password" id="example-password-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row urdu">
                                            <label class="col-sm-2 col-form-label">حالت</label>
                                            <div class="col-sm-10">
                                                <select name="status" onChange={this.handleChangeAdventure.bind(this)} class="form-control">
                                                    <option>حیثیت منتخب کریں</option>
                                                    <option value="active">فعال</option>
                                                    <option value="inactive">غیر فعال</option>
                                                    <option value="block"> بلاک کریں</option>
                                                </select>
                                            </div>
                                        </div>
                                        {this.state.errorText ?
                                            <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                            : null
                                        }
                                        <div id="err">{this.state.error}</div>
                                       

                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateOrder;
