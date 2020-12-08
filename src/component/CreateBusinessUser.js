import React, { Component } from "react";
import { Serverurl } from "../Common/ServerUrl";
import axios from "axios";
import $ from "jquery";
import swal from "sweetalert";

export class CreateBusinessUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      image: "",
      name: "",
      email: "",
      phone: "",
      password: "",
      c_password: "",
      user_type: "",
      errorText: "",
    };
  }

  async componentDidMount() {
    var token = await localStorage.getItem("token");
    this.setState({
      token,
    });

    console.log(
      "CreateBusinessUser's componentDidMount() token: ",
      this.state.token
    );
  }

  handleImageInput(e) {
    console.log(e.target.files, "file");
    console.log(e.target.files[0], "file 0");

    let file = e.target.files[0];
    this.setState({
      image: file,
      errorText: "",
    });

    if (e.target.files) {
      this.setState({
        [e.target.name]: e.target.files[0],
        file: URL.createObjectURL(e.target.files[0]),
      });
    }
    console.log(e.target.files[0]);
  }

  handleAddUser = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: "",
    });
  };

  btnAddUserClick() {
    var validation = true;

    if (this.state.image == "") {
      this.setState({
        errorText: "*User image is required!",
      });
      validation = false;
    }

    if (this.state.name == "") {
      this.setState({
        errorText: "*User name is required!",
      });
      validation = false;
    }

    if (this.state.email == "") {
      this.setState({
        errorText: "*User email is required!",
      });
      validation = false;
    }

    if (this.state.phone == "") {
      this.setState({
        errorText: "*User Phone Number is required!",
      });
      validation = false;
    }

    if (this.state.password == "") {
      this.setState({
        errorText: "*User password is required!",
      });
      validation = false;
    }

    if (this.state.c_password == "") {
      this.setState({
        errorText: "*User c_password is required!",
      });
      validation = false;
    }

    if (validation == true) {
      var formData = new FormData();
      formData.append("image", this.state.image);
      formData.append("name", this.state.name);
      formData.append("email", this.state.email);
      formData.append("phone", this.state.phone);
      formData.append("password", this.state.password);
      formData.append("c_password", this.state.c_password);
      formData.append("user_type", this.state.user_type);

      console.log("consoling token inside btnAddUserClick()", this.state.token);

      axios({
        method: "post",
        url: Serverurl + "register",
        data: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          console.log("in btnAddUserClick's then(): ", res.data);

          swal("User is successfully added!", {
            icon: "success",
          });

          setTimeout(() => {
            window.location.href = "/component/gridBusinessUsers";
          }, 3000);
        })
        .catch((err) => {
          this.setState({
            errorText: "Adding user Failed! Please try again",
            loading: true,
          });
        });
    }
  }

  onKeyDown = (event) => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.btnAddUserClick();
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
                    <h4 class="mt-0 header-title">Create User</h4>

                    <div class="form-group row input-margin">
                      <label
                        for="example-search-input"
                        class="col-sm-2 col-form-label"
                      >
                        Upload Image
                      </label>
                      <div class="col-sm-12">
                        <input
                          type="file"
                          id="input-file-now"
                          name="image"
                          class="dropify"
                          onChange={this.handleImageInput.bind(this)}
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
                          onChange={this.handleAddUser.bind(this)}
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
                          onChange={this.handleAddUser.bind(this)}
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
                          id="example-number-input"
                          onChange={this.handleAddUser.bind(this)}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label
                        for="example-number-input"
                        class="col-sm-2 col-form-label"
                      >
                        Password
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="password"
                          type="text"
                          id="example-text-input"
                          onChange={this.handleAddUser.bind(this)}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label
                        for="example-number-input"
                        class="col-sm-2 col-form-label"
                      >
                        Confirm Password
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="c_password"
                          type="text"
                          id="example-text-input"
                          onChange={this.handleAddUser.bind(this)}
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
                        <select
                          name="user_type"
                          class="form-control"
                          onChange={this.handleAddUser.bind(this)}
                        >
                          <option value="">Select Type</option>
                          <option value="admin">admin</option>
                          <option value="customer">customer</option>
                        </select>
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
                          onClick={this.btnAddUserClick.bind(this)}
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

export default CreateBusinessUser;
