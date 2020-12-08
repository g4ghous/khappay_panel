import React, { Component } from "react";
import logo3 from "../../src/component/assets/images/logo_khappay.png";
import us_flag from "../../src/component/assets/images/flags/us_flag.jpg";
import italy_flag from "../../src/component/assets/images/flags/italy_flag.jpg";
import lady from "../component/assets/images/users/lady.jpg";
import Home from "./Home";
import axios from "axios";
import swal from "sweetalert";
import { Serverurl, Serverurlimg } from "../Common/ServerUrl";

// var id = 1
export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
  }

  value() {
    this.setState({
      active: 1,
    });
    window.location.href = "";
    console.log("chala", this.state.active);
    localStorage.setItem("customer", this.state.active);
  }
  // componentDidMount() {
  //     var data;
  //     axios({
  //         method: 'get',
  //         url: Serverurl + 'notifications',
  //         data: data,
  //         headers: {
  //             'Authorization': `bearer ${localStorage.getItem('token')}`,
  //         },
  //         config: {
  //             headers: { 'Content-Type': 'application/json' }
  //         }

  //     }).then(res => {
  //         console.log('res', res.data.data)
  //         console.log('hey', res.data)
  //         this.setState({
  //             data: res.data.data,
  //         })
  //         // console.log('data', res.data.data)
  //     }).catch((err) => {
  //         console.log(err)
  //         if (err) {
  //             // console.log('err', err.response)
  //             console.log({ err })
  //         }
  //     })
  // }

  // CheckFunction (noti){
  //     console.log(noti)

  //         if(noti == "App\\Notifications\\UserBooking"){
  //             window.location.href="/component/GridBooking"
  //         }

  //         if(noti == "App\\Notifications\\NewFeedback"){
  //             window.location.href="/component/gridContactUs"
  //         }

  //         if(noti == "App\\Notifications\\NewUser"){
  //             window.location.href="/component/gridUsers"
  //         }
  // }

  logout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    window.location.reload();
    window.location.href = "/";
  }

  render() {
    var userId = localStorage.getItem("userId");
    if (window.location.pathname === "/" || !localStorage.getItem("userId"))
      return null;
    if (
      window.location.pathname === "/component/TravelForgot" ||
      !localStorage.getItem("userId")
    )
      return null;
    return (
      <div>
        <div id="preloader">
          <div id="status">
            <div className="spinner"></div>
          </div>
        </div>
        <div id="wrapper">
          {userId ? (
            <div className="left side-menu">
              <button
                type="button"
                className="button-menu-mobile button-menu-mobile-topbar open-left waves-effect"
              >
                <i className="ion-close"></i>
              </button>

              <div className="topbar-left">
                <div className="text-center">
                  {/* <!--<a href="index.html" className="logo"><i className="mdi mdi-assistant"></i>Zoter</a>--> */}
                  <a href="/component/Dashboard" className="logo">
                    <img src={logo3} alt="" className="logo-large" />
                  </a>
                </div>
              </div>

              <div className="sidebar-inner niceScrollleft">
                <div id="sidebar-menu">
                  <ul>
                    <li>
                      <a href="/component/Dashboard" className="waves-effect">
                        <i className="fas fa-tv"></i>
                        <span> Dashboard </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="/component/gridBusinessUsers"
                        className="waves-effect"
                      >
                        <i className="fas fa-user-secret"></i>
                        <span style={{ fontSize: "10.7px" }}>Customers</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="/component/gridProducts"
                        className="waves-effect"
                      >
                        <i className="fab fa-product-hunt"></i>
                        <span style={{ fontSize: "10.7px" }}>Products</span>
                      </a>
                    </li>

                    <li>
                      <a href="/component/gridOrders" className="waves-effect">
                        <i className="fab fa-first-order"></i>
                        <span style={{ fontSize: "10.7px" }}>Orders</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="/component/gridCategories"
                        className="waves-effect"
                      >
                        <i className="fa fa-list-alt"></i>
                        <span style={{ fontSize: "10.7px" }}>Categories</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="/component/gridSubCategories"
                        className="waves-effect"
                      >
                        <i className="fa fa-list-alt"></i>
                        <span style={{ fontSize: "10.7px" }}>
                          Sub Categories
                        </span>
                      </a>
                    </li>

                    <li>
                      <a href="/component/gridBrands" className="waves-effect">
                        <i className="fa fa-list-alt"></i>
                        <span style={{ fontSize: "10.7px" }}>Brands</span>
                      </a>
                    </li>

                    <li>
                      <a href="/component/gridCoupon" className="waves-effect">
                        <i className="fa fa-tag fa-lg"></i>
                        <span style={{ fontSize: "10.7px" }}>Coupons</span>
                      </a>
                    </li>
                    {/* <li>
                                                <a href="/component/gridReports" className="waves-effect">
                                                    <i className="fa fa-file"></i>
                                                    <span style={{ fontSize: "10.7px" }}>Reports</span>
                                                </a>
                                            </li> */}

                    {/* <li className="has_sub">
                                                    <a href="/component/gridUsers" className="waves-effect"><i className="fas fa-user-alt"></i>
                                                        <span>  </span>
                                                    </a>
                                                </li> */}
                    {/* <li>
                                                <a href="/component/GridEvents" className="waves-effect"><i className="fas fa-subway"></i><span> Events </span></a>
                                            </li>
                                            <li>
                                                <a href="/component/GridEventType" className="waves-effect"><i className="fas fa-subway"></i><span>Event Type</span></a>
                                            </li>

                                            <li>
                                                <a href="/component/GridSponsor" className="waves-effect"><i className="fas fa-road"></i><span>Sponsor</span></a>
                                            </li>

                                            <li>
                                                <a href="/component/GridEventList" className="waves-effect"><i className="fas fa-road"></i><span>Event Objectives </span></a>
                                            </li>

                                            <li>
                                                <a href="/component/GridFavourites" className="waves-effect"><i className="fas fa-road"></i><span>Favourite </span></a>
                                            </li>

                                            <li>
                                                <a href="/component/Slider"><i className="fas fa-road"></i><span>Slider</span></a>
                                            </li>

                                            <li>
                                                <a href="/component/GridGuidelines" className="waves-effect"><i className="fas fa-sign-language"></i><span>Guidlines </span></a>
                                            </li>

                                            <li>
                                                <a href="/component/GridPolicy" className="waves-effect"><i className="fas fa-user-lock"></i><span>Privacy & Policy</span></a>
                                            </li>

                                            <li>
                                                <a href="/component/GridTerms" className="waves-effect"><i className="fas fa-asterisk"></i><span>Terms & Conditions</span></a>
                                            </li> */}

                    <li>
                      <a href="/component/gridContact" className="waves-effect">
                        <i className="fas fa-comment-dots"></i>
                        <span>Contact Us / Feedback</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="clearfix"></div>
              </div>
            </div>
          ) : (
            <div></div>
          )}

          <div className="content-page">
            <div className="content">
              <div className="topbar ">
                <nav className="navbar-custom fixed-top">
                  <ul className="list-inline float-right mb-0">
                    <li className="list-inline-item dropdown notification-list">
                      <a
                        className="nav-link dropdown-toggle arrow-none waves-effect"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="false"
                        aria-expanded="false"
                      >
                        <i className="ti-bell noti-icon"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg">
                        <div className="dropdown-item noti-title">
                          <h5>Notifications</h5>
                        </div>

                        {/* {this.state.data.map((noti, index) => {

                                                    return (
                                                        <a onClick={this.CheckFunction.bind(this, noti.type)} key={index} className="dropdown-item notify-item">
                                                            <div className="notify-icon bg-primary"><i className="mdi mdi-cart-outline"></i></div>
                                                            <p className="notify-details"><b>{noti.data.message}</b></p>
                                                        </a>
                                                    );

                                                })} */}
                      </div>
                    </li>

                    <li className="list-inline-item dropdown notification-list">
                      <a
                        className="nav-link dropdown-toggle arrow-none waves-effect nav-user"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="false"
                        aria-expanded="false"
                      >
                        <img src={lady} alt="user" className="rounded-circle" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                        <div className="dropdown-item noti-title">
                          <h5>Welcome</h5>
                        </div>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-account-circle m-r-5 text-muted"></i>{" "}
                          Profile
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-wallet m-r-5 text-muted"></i> My
                          Wallet
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="badge badge-success float-right">
                            5
                          </span>
                          <i className="mdi mdi-settings m-r-5 text-muted"></i>{" "}
                          Settings
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="mdi mdi-lock-open-outline m-r-5 text-muted"></i>{" "}
                          Lock screen
                        </a>
                        {/* {/* <div className="dropdown-divider"></div> */}
                        <a
                          className="dropdown-item"
                          onClick={this.logout.bind(this)}
                        >
                          <i className="mdi mdi-logout m-r-5 text-muted"></i>{" "}
                          Logout
                        </a>
                      </div>
                    </li>
                  </ul>

                  <ul className="list-inline menu-left mb-0">
                    <li className="float-left">
                      <button className="button-menu-mobile open-left waves-light waves-effect">
                        <i className="mdi mdi-menu"></i>
                      </button>
                    </li>
                  </ul>

                  <div className="clearfix"></div>
                </nav>
              </div>
              {/* <Home /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
