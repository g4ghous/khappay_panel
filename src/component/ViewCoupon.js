import React, { Component } from 'react'
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import renderHTML from 'react-render-html';


export class Home extends Component {
    
    render() {
        return (
            <div className="container">
                <div class="row justify-content-center">
                    <div class="col-lg-11 col-sm-11">
                        <div class="card">
                            <div class="card-body table-responsive">
                                <div className="head view-list-style">
                                    <h4>Coupon Details</h4>
                                    <ul>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Code</h5>
                                                {/* <h6>{this.state.first_name_view}{this.state.last_name_view}</h6> */}
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Coupon Type</h5>
                                                {/* <h6>{this.state.first_name_view}{this.state.last_name_view}</h6> */}
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Coupon Amount</h5>
                                                {/* <h6>{this.state.user_type_view == 1 ? "super admin" : "admin"}</h6> */}
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Discription</h5>
                                                {/* <h6>{this.state.user_type_view == 1 ? "super admin" : "admin"}</h6> */}
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Product IDs</h5>
                                                {/* <h6>{this.state.user_type_view == 1 ? "super admin" : "admin"}</h6> */}
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Usage / Limit</h5>
                                                {/* <h6>{this.state.user_type_view == 1 ? "super admin" : "admin"}</h6> */}
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Expiry Date</h5>
                                                {/* <h6>{this.state.user_type_view == 1 ? "super admin" : "admin"}</h6> */}
                                            </li>
                                        </div>
                                        
                                        
                                    </ul>
                                    <div class="button-align">
                                        <a href="/component/gridCoupon" type="button" class="btn btn-danger waves-effect waves-light submit-button">Back</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
