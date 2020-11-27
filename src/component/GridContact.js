import avatar2 from "../component/assets/images/users/avatar2.jpg";
import React, { Component } from "react";
import { Serverurl, Serverurlimg } from "../Common/ServerUrl";
import axios from "axios";
import $ from "jquery";

export class GridContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: [],
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: Serverurl + "contact_show",
      headers: {
        Authorization: "Bearer" + " " + localStorage.getItem("token"),
      },
      config: {
        headers: { "Content-Type": "application/json" },
      },
    })
      .then((res) => {
        console.log("contact_show api res.data is: ", res.data);

        this.setState({
          contactData: res.data,
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

  viewContact(id) {
    localStorage.setItem("contactId", id);
    console.log("contactId is: ", id);
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
                      <h4>Messages List</h4>
                    </div>
                  </div>
                  <div class="table-3">
                    <table id="datatable2" class="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Message</th>
                          {/* <th>Actions</th> */}
                        </tr>
                      </thead>

                      <tbody>
                        {this.state.contactData.map((user) => (
                          <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.message}</td>
                            {/* <td>
                              <div class="icon-pad">
                                <a href="/component/ViewSystemBusinessUser">
                                  <i className="fas fa-eye"></i>
                                </a>
                              </div>
                            </td> */}
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

export default GridContact;
