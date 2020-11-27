import React, { Component } from 'react';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import renderHTML from 'react-render-html';

export class ViewEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            title: "",
            address: "",
            event_date_time: "",
            event_type_id: "",
            country_id: "",
            state_id: "",
            city_id: "",
            area_id: "",
            imam_bargah_id: "",
            manqabat_khuwan_id: "",
            noha_khuwan_id: "",
            zakir_id: "",
            islamic_date: "",
            time: "",
            online_link: "",
            title_ur: "",
            address_ur: "",
            latitude: "",
            longitude: "",
            event_image: "",
        }
    }


    componentDidMount() {
        var data = {
            "id": localStorage.getItem("eventId")
        }
        axios({
            method: 'get',
            url: Serverurl + "event/view",
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(res => {
            console.log('res', res.data.data)
            console.log('hey', res.data)
            this.setState({
                title: res.data.title,
                address: res.data.address,
                event_date_time: res.data.event_date_time,
                event_type_id: res.data.event_type,
                country_id: res.data.country,
                state_id: res.data.state,
                city_id: res.data.city,
                area_id: res.data.area,
                imam_bargah_id: res.data.imam_bargah,
                manqabat_khuwan_id: res.data.manqabat_khuwan,
                noha_khuwan_id: res.data.noha_khuwan,
                zakir_id: res.data.zakir,
                islamic_date: res.data.islamic_date,
                time: res.data.time,
                online_link: res.data.online_link,
              
            })
            // $(document).ready(function () {
            //     $('#datatable2').DataTable();
            // });
            console.log('data', res.data.data)
        }).catch((err) => {
            console.log(err)
            if (err) {
                console.log('err', err.response)
                console.log({ err })
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div class="row justify-content-center">
                    <div class="col-lg-11 col-sm-11">
                        <div class="card">
                            <div class="card-body table-responsive">
                                <div className="head view-list-style">
                                    <h4>Events Details</h4>
                                    <ul>
                                        <div class="row">
                                            <li class="col-12"><h5>Event Title</h5>
                                                <div className="pf-img">
                                                    <h6>{this.state.title}</h6>
                                                </div>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12"><h5>Event Type</h5>
                                                <div className="pf-img">
                                                    <h6>{this.state.event_type_id}</h6>
                                                </div>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12"><h5>Imam Bargah</h5>
                                                <h6>{this.state.imam_bargah_id ? this.state.imam_bargah_id : "Not Updated Yet" }</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Zakir</h5>
                                                <h6>{this.state.zakir_id ? this.state.zakir_id : "Not Updated Yet"}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Noha Khuwan</h5>
                                                <h6>{this.state.noha_khuwan_id ? this.state.noha_khuwan_id : "Not Updated Yet" }</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Country</h5>
                                                <h6>{this.state.country_id ? this.state.country_id : "Not Updated Yet"}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>City</h5>
                                                <h6>{this.state.city_id ? this.state.city_id : "Not Updated Yet"}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>State</h5>
                                                <h6>{this.state.state_id ? this.state.state_id : "Not Updated Yet"}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Area</h5>
                                                <h6>{this.state.area_id ? this.state.area_id : "Not Updated Yet"}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Date and Time</h5>
                                                <h6>{this.state.event_date_time ? this.state.event_date_time : "Not Updated Yet"}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Islamic Date</h5>
                                                <h6>{this.state.islamic_date ? this.state.islamic_date : "Not Updated Yet"}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Online Link</h5>
                                                <h6>{this.state.online_link ? this.state.online_link : "Not Updated Yet"}</h6>
                                            </li>
                                        </div>
                                        {/* <div class="row">
                                            <li class="col-12">
                                                <h5>Status</h5>
                                                <h6>{this.state.status_view}</h6>
                                            </li>
                                        </div> */}
                                    </ul>

                                    {/* <h4 className="ar">واقعات کی تفصیلات</h4>
                                    <ul className="">
                                        <div class="row">
                                            <li class="col-12"><h5>واقعہ کی قسم</h5>
                                                <div className="pf-img">
                                                    <h6 className="ar">{this.state.first_name_view}{this.state.last_name_view}</h6>
                                                </div>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12"><h5>امام بارگاہ</h5>
                                                <h6 className="ar">{this.state.first_name_view}{this.state.last_name_view}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5 className="ar">ذاکر</h5>
                                                <h6 className="ar">{this.state.user_type_view == 1 ? "super admin" : "admin"}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5 className="ar">نوحہ خوان</h5>
                                                <h6 className="ar">{this.state.user_name_view}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5 className="ar">ملک</h5>
                                                <h6 className="ar">{this.state.contact_number_view}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5 className="ar">شہر</h5>
                                                <h6 className="ar">{this.state.status_view}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5 className="ar">حالت</h5>
                                                <h6 className="ar">{this.state.status_view}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5 className="ar">رقبہ</h5>
                                                <h6 className="ar">{this.state.status_view}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5 className="ar">تاریخ</h5>
                                                <h6 className="ar">{this.state.status_view}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5 className="ar">اسلامی تاریخ</h5>
                                                <h6 className="ar">{this.state.status_view}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5 className="ar">وقت</h5>
                                                <h6 className="ar">{this.state.status_view}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5 className="ar">آن لائن لنک</h5>
                                                <h6 className="ar">{this.state.status_view}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5 className="ar">حالت</h5>
                                                <h6 className="ar">{this.state.status_view}</h6>
                                            </li>
                                        </div>
                                    </ul> */}

                                    <div class="button-align">
                                        <a href="/component/gridEvents" type="button" class="btn btn-danger waves-effect waves-light submit-button">Back</a>
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

export default ViewEvents
