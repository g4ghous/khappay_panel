import avatar2 from '../component/assets/images/users/avatar2.jpg';
import React, { Component } from 'react';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import $ from 'jquery';

export class GridReports extends Component {
    
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
                                            <h4>List Reports</h4>
                                        </div>
                                    </div>
                                    {/* <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link active" id="order-tab" data-toggle="tab" href="#order" role="tab" aria-controls="order" aria-selected="true">Orders</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="customer-tab" data-toggle="tab" href="#customer" role="tab" aria-controls="customer" aria-selected="false">Customers</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="stock-tab" data-toggle="tab" href="#stock" role="tab" aria-controls="stock" aria-selected="false">Stock</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link " id="shipping-tab" data-toggle="tab" href="#shipping" role="tab" aria-controls="shipping" aria-selected="true">Shipping Labels</a>
                                        </li>
                                    </ul>

                                    <div class="tab-content">
                                        <div class="tab-pane fade show active" id="order" role="tabpanel" aria-labelledby="order-tab">


                                            <div class="table-3">
                                                <table id="datatable1" class="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Order</th>
                                                            <th>Date</th>
                                                            <th>Status</th>
                                                            <th>Total</th>

                                                        </tr>
                                                    </thead>



                                                </table>
                                            </div>


                                        </div>
                                        
                                    </div> */}

                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link active" id="order-tab" data-toggle="tab" href="#order" role="tab" aria-controls="order" aria-selected="true">Orders</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="customer-tab" data-toggle="tab" href="#customer" role="tab" aria-controls="customer" aria-selected="false">Customer</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="stock-tab" data-toggle="tab" href="#stock" role="tab" aria-controls="stock" aria-selected="false">Stock</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link " id="shipping-tab" data-toggle="tab" href="#shipping" role="tab" aria-controls="shipping" aria-selected="true">Shipping Info</a>
                                        </li>

                                    </ul>


                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="order" role="tabpanel" aria-labelledby="order-tab">
                                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active" id="year1-tab" data-toggle="tab" href="#year1" role="tab" aria-controls="year1" aria-selected="true">Year</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="l-month1-tab" data-toggle="tab" href="#l-month1" role="tab" aria-controls="l-month1" aria-selected="false">Last Month</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="t-month1-tab" data-toggle="tab" href="#t-month1" role="tab" aria-controls="t-month1" aria-selected="false">This Month</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link " id="week1-tab" data-toggle="tab" href="#week1" role="tab" aria-controls="week1" aria-selected="true">Last 7 Days</a>
                                                </li>

                                            </ul>

                                            <div class="tab-pane fade " id="year1" role="tabpanel" aria-labelledby="year1-tab"></div>
                                            <div class="tab-pane fade " id="l-month1" role="tabpanel" aria-labelledby="l-month1-tab"></div>
                                            <div class="tab-pane fade " id="t-month1" role="tabpanel" aria-labelledby="t-month1-tab"></div>
                                            <div class="tab-pane fade " id="week1" role="tabpanel" aria-labelledby="week1-tab"></div>

                                            < div class="table-3" >
                                                <table id="datatable1" class="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Order</th>
                                                            <th>Date</th>
                                                            <th>Status</th>
                                                            <th>Total</th>

                                                        </tr>
                                                    </thead>



                                                </table>
                                            </div >

                                        </div>
                                        <div class="tab-pane fade " id="customer" role="tabpanel" aria-labelledby="customer-tab">


                                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active" id="year2-tab" data-toggle="tab" href="#year2" role="tab" aria-controls="year2" aria-selected="true">Year</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="l-month2-tab" data-toggle="tab" href="#l-month2" role="tab" aria-controls="l-month2" aria-selected="false">Last Month</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="t-month2-tab" data-toggle="tab" href="#t-month2" role="tab" aria-controls="t-month2" aria-selected="false">This Month</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link " id="week2-tab" data-toggle="tab" href="#week2" role="tab" aria-controls="week2" aria-selected="true">Last 7 Days</a>
                                                </li>

                                            </ul>

                                            <div class="tab-pane fade " id="year2" role="tabpanel" aria-labelledby="year2-tab">

                                            </div>
                                            <div class="tab-pane fade " id="l-month2" role="tabpanel" aria-labelledby="l-month2-tab">

                                            </div>
                                            <div class="tab-pane fade " id="t-month2" role="tabpanel" aria-labelledby="t-month2-tab">

                                            </div>
                                            <div class="tab-pane fade " id="week2" role="tabpanel" aria-labelledby="week2-tab">

                                            </div>

                                            < div class="table-3" >
                                                <table id="datatable1" class="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>User Name</th>
                                                            <th>Last Active</th>
                                                            <th>Sign Up</th>
                                                            <th>Email</th>
                                                            <th>Orders</th>
                                                            <th>Total Spend</th>
                                                            <th>AOV</th>
                                                            <th>Country/Region</th>
                                                            <th>City</th>
                                                            <th>Region</th>
                                                            <th>Postal Code</th>

                                                        </tr>
                                                    </thead>



                                                </table>
                                            </div >
                                        </div>
                                        <div class="tab-pane fade " id="stock" role="tabpanel" aria-labelledby="stock-tab">

                                            < div class="table-3" >
                                                <table id="datatable1" class="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Parent</th>
                                                            <th>Units in Stock</th>
                                                            <th>Stock Status</th>
                                                            <th>Action</th>

                                                        </tr>
                                                    </thead>



                                                </table>
                                            </div >
                                        </div>
                                        <div class="tab-pane fade " id="shipping" role="tabpanel" aria-labelledby="shipping-tab">
                                            < div class="table-3" >
                                                <table id="datatable1" class="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Time</th>
                                                            <th>Order</th>
                                                            <th>Price</th>
                                                            <th>Service</th>
                                                            <th>Refund</th>

                                                        </tr>
                                                    </thead>



                                                </table>
                                            </div >
                                        </div>

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


export default GridReports
