import React, { Component } from 'react';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import swal from 'sweetalert';
import DatePicker from "react-datepicker";
import DateTimePicker from 'react-datetime-picker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';


export class ViewSponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            title: '',
            started_at: new Date(),
            title_ur: '',
            description: '',
            ended_at: new Date(),
            ddescription_ur: '',
            date: new Date(),
            id: '',
            GuideId: '',
        }

    }

    componentDidMount() {
        var id = localStorage.getItem("Privacy")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'get',
            url: Serverurl + 'slider/view',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }
        }).then((res) => {
            console.log('deals', res.data)

            this.setState({
                title: res.data.title,
                title_ur: res.data.title_ur,
                description: res.data.description,
                description_ur: res.data.description_ur,
                started_at: res.data.started_at,
                ended_at: res.data.ended_at,

            })
            // console.log('data', data)
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
                                    <h4>Details Slider</h4>
                                    <ul>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Title</h5>
                                                <h6>{this.state.title}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Description</h5>
                                                <h6>{this.state.description}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Started At</h5>
                                                <h6>{moment(this.state.started_at).format('YYYY-MM-DD HH:MM:SS')}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Ended At</h5>
                                                <h6>{moment(this.state.ended_at).format('YYYY-MM-DD HH:MM:SS')}</h6>
                                            </li>
                                        </div>
                                    </ul>

                                    <h4 class="form-label ar">تفصیلات سلائیڈر</h4>
                                    <ul>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5 class="form-label ar">عنوان</h5>
                                                <h6 class="form-label ar">{this.state.title_ur}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5 class="form-label ar">تفصیل</h5>
                                                <h6 class="form-label ar">{this.state.description_ur}</h6>
                                            </li>
                                        </div>
                                    </ul>
                                    <div class="button-align">
                                        <a href="/component/Slider" type="button" class="btn btn-danger waves-effect waves-light submit-button">Back</a>
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

export default ViewSponsor
