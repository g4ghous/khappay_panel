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
                                    <h4>Category Details</h4>
                                    <ul>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Image</h5>
                                                {/* <h6>{this.state.first_name_view}{this.state.last_name_view}</h6> */}
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Name</h5>
                                                {/* <h6>{this.state.first_name_view}{this.state.last_name_view}</h6> */}
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
                                                <h5>Slug</h5>
                                                {/* <h6>{this.state.user_type_view == 1 ? "super admin" : "admin"}</h6> */}
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Count</h5>
                                                {/* <h6>{this.state.user_type_view == 1 ? "super admin" : "admin"}</h6> */}
                                            </li>
                                        </div>
                                        
                                        
                                    </ul>
                                    <div class="button-align">
                                        <a href="/component/gridCategories" type="button" class="btn btn-danger waves-effect waves-light submit-button">Back</a>
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
