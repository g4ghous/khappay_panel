import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div className="container">
                <div class="row justify-content-center">
                    <div class="col-lg-11 col-sm-11">
                        <div class="card">
                            <div class="card-body table-responsive">
                                <div className="head view-list-style">
                                    <h4>Deals</h4>
                                    <ul>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Deal Name</h5>
                                                <h6>Hassam</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Deal Prize Title</h5>
                                                <h6>Hassam</h6>
                                            </li>
                                        </div>
                                            <div class="row">
                                            <li class="col-12">
                                                <h5>Deal Prize Image</h5>
                                                <div className="pf-img1">
                                                        <img src="../../images/logo.png" alt="logo" />
                                                </div>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-6">
                                                <h5>Deal Product</h5>
                                                <h6>Active</h6>
                                            </li>
                                            <li class="col-6">
                                                <h5>Deal Price</h5>
                                                <h6>Active</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                                <li class="col-12">
                                                <h5>Deal Description</h5>
                                                <h6>Active</h6>
                                                </li>
                                        </div>
                                        <div class="row">
                                                <li class="col-12">
                                                <h5>Deal Description</h5>
                                                <h6>Active</h6>
                                                </li>
                                        </div>
                                        <div class="row">
                                                <li class="col-6">
                                                <h5>Total Available Tickets</h5>
                                                <h6>Active</h6>
                                                </li>

                                                <li class="col-6">
                                                <h5>Deal Campaign</h5>
                                                <h6>Active</h6>
                                                </li>
                                        </div>
                                        <div class="row">
                                                <li class="col-6">
                                                <h5>Deal Status</h5>
                                                <h6>Active</h6>
                                                </li>
                                                </div>
                                    </ul>
                                        <div class="button-align">
                                            <button type="button" class="btn btn-danger waves-effect waves-light submit-button">Cancel</button>
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
