import avatar2 from "../component/assets/images/users/avatar2.jpg";
import React, { Component } from "react";
import { Serverurl, Serverurlimg } from "../Common/ServerUrl";
import axios from "axios";
import $ from "jquery";

export class GridBusinessUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  componentDidMount() {
    var token = `Bearer ${localStorage.getItem("token")}`;
    console.log("token in gridBusinessUsers is: ", token);

    axios({
      method: "get",
      url: Serverurl + "user_show",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      config: {
        headers: { "Content-Type": "application/json" },
      },
    })
      .then((res) => {
        console.log("user_show api response.data is: ", res.data);

        this.setState({
          userData: res.data,
        });

        $(document).ready(function () {
          $("#datatable2").DataTable();
        });
      })
      .catch((err) => {
        console.log("Error from user_show api is: ", err);
      });
  }

  updateBusinessUser(id) {
    localStorage.setItem("userId", id);
    console.log("userId is: ", id);
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
                      <h4>Customers List</h4>
                    </div>
                    <div class="button-align">
                      <a
                        href="/component/createBusinessUser"
                        type="button"
                        class="btn btn-danger waves-effect waves-light submit-button"
                      >
                        Add Customer
                      </a>
                    </div>
                  </div>
                  <div class="table-3">
                    <table id="datatable2" class="table">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>User Type</th>
                          <th>Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        {this.state.userData.map((user) => (
                          <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>
                              <img src={user.image} width="70" height="70" />
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.user_type}</td>
                            <td>
                              <div class="icon-pad">
                                <a
                                  href="/component/updateBusinessUser"
                                  onClick={this.updateBusinessUser.bind(
                                    this,
                                    user.id
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

export default GridBusinessUsers;
