import React, { Component } from "react";
// import logo2 from "../component/assets/";
import { Serverurl } from "../Common/ServerUrl";
import axios from "axios";
import Button from "reactstrap-button-loader";
import swal from "sweetalert";
import logo3 from "../../src/component/assets/images/logo_khappay.png";

export class TravelLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      email: "",
      password: "",
      errorText: "",
      emailError: "",
      passwordError: "",
      errors: "",
      loading: false,
    };
  }

  emailInput(e) {
    this.setState({
      errorText: e.target.value,
    });
  }

  handleEmailChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      emailError: "",
    });
  };

  PasswordInput(e) {
    this.setState({
      password: e.target.value,
      errorText: "",
    });
  }

  Login(e) {
    var data;

    e.preventDefault();
    var validation = true;

    const emailsyntax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (this.state.password == "") {
      this.setState({
        errorText: "*Password is required",
      });
      validation = false;
    }

    if (!emailsyntax.test(this.state.email)) {
      validation = false;
      this.setState({
        errorText: "* Incorrect Email format.",
      });
    }

    if (this.state.email == "") {
      this.setState({
        errorText: "*Email is required",
      });
      validation = false;
    }

    if (validation == true) {
      var data = {
        email: this.state.email,
        password: this.state.password,
      };

      this.setState({
        loading: true,
      });

      var error = document.getElementById("err");
      if (this.state.email === "" || this.state.password === "") {
        this.setState({
          error: "Please fill fields carefully",
        });
        error.classList.add("errorMsg");
        setTimeout(() => {
          error.classList.remove("errorMsg");
          this.setState({
            error: "",
          });
        }, 3000);
      } else {
        var data;
        axios({
          method: "post",
          url: Serverurl + "login",
          data: data,
        })
          .then((res) => {
            var validation = false;
            console.log("user type: ", res.data.Data.user_type);
            if (res.data.Data.user_type == "admin") {
              validation = true;
              // this.setState({
              //   loading: true,
              // });
              // setTimeout(() => {
              //   this.setState({
              //     loading: false,
              //   });
              //   this.setState((willSuccess) => {
              //     if (willSuccess) {
              //       swal("error_message[0]", {
              //         icon: "warning",
              //       });
              //     } else {
              //       swal("Your imaginary file is safe!");
              //     }
              //   });
              //   window.location.href = "/";
              // }, 3000);

              console.log("res", res.data.success.token);
              console.log("Token", res.data.token);
              localStorage.setItem("token", res.data.success.token);
              window.location.href = "/component/Dashboard";
            }

            if (validation == false) {
              this.setState({
                errorText: "*Incorrect email or password",
              });
            }

            this.setState({
              data: res.data,
              loading: false,
            });
            if (res.data.status === true) {
              localStorage.setItem("userId", res.data.success.token);
              localStorage.setItem("email", res.data.Data.email);
              localStorage.setItem("data", res.data);
            }

            localStorage.setItem("userId", res.data.success.token);

            // axios({
            //     method: 'get',
            //     url: Serverurl + 'user',
            //     headers: {
            //         Authorization: 'Bearer' + ' ' + res.data.data.access_token
            //     }

            // })

            // .then((response) => {
            //     console.log('User', response.data.data)
            //     // console.log("Type:", response.data.data.user_type)
            //     console.log("userId:", response.data.data.id)

            //     this.setState((res) => {
            //         if (res.status == false) {
            //             this.setState({
            //                 errorText: data.message
            //             })
            //             if (data.errors) {
            //                 if (data.errors.email) {
            //                     if (data.errors.email.ERR_00001) {
            //                         this.setState({

            //                             emailError: '* Email is required'
            //                         })
            //                     }

            //                     if (data.errors.email.ERR_00005) {
            //                         this.setState({

            //                             emailError: '* Email is invalid'
            //                         })
            //                     }
            //                 }
            //                 if (data.errors.password) {
            //                     if (data.errors.password.ERR_00001) {
            //                         this.setState({

            //                             passwordError: '* Password is required'
            //                         })
            //                     }
            //                 }
            //             }
            //         }
            //     })

            // })
            // .catch((val) => {
            //     console.log("error:", val)
            // })
          })
          .catch((err) => {
            console.log({ err });
            if (err) {
              // error.classList.add('errorMsg');
              this.setState({
                error: "Login Failed! Please try again",
                loading: true,
              });
              // error.classList.add('errorMsg');
              setTimeout(() => {
                // error.classList.remove('errorMsg')
                this.setState({
                  error: "",
                  loading: false,
                });
              }, 3000);
            }
          });
      }
    }
  }

  onKeyDown = (event) => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.Login();
    }
  };

  render() {
    // var userId = localStorage.getItem('/');
    return (
      <div>
        <div>
          <div className="accountbg"></div>
          <div className="wrapper-page">
            <div className="card1">
              <div className="card-body">
                {/* <div id="err">{this.state.error}</div> */}
                <div className="text-center">
                  <a className="logo logo-admin">
                    <img src={logo3} height="70" alt="logo" />
                  </a>
                </div>

                <div className="px-3 pb-3">
                  <form className="form-horizontal m-t-20" action="index.html">
                    <div className="form-group row">
                      <div className="col-12">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          onChange={this.handleEmailChange.bind(this)}
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-12">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          onChange={this.PasswordInput.bind(this)}
                          placeholder="Password"
                          required
                        />
                      </div>
                    </div>

                    {this.state.errorText ? (
                      <p style={{ color: "red" }}>{this.state.errorText}</p>
                    ) : null}
                    <div className="form-group text-center row m-t-20">
                      <div className="col-12">
                        <button
                          className="btn btn-danger btn-block waves-effect waves-light"
                          type="submit"
                          onClick={this.Login.bind(this)}
                        >
                          Log In
                        </button>
                      </div>
                    </div>

                    {/* <div className="form-group m-t-10 mb-0 row">
                      <div className="col-sm-12 m-t-20 my-forgot">
                        <a href="/component/TravelForgot" className="text-muted"><i className="mdi mdi-lock"></i> <small>Forgot your password ?</small></a>
                      </div>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelLogin;
