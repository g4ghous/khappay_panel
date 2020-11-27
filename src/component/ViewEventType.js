import React, { Component } from 'react'
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import renderHTML from 'react-render-html';



export class ViewEventType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            title: "",
            detail: "",
            title_ur: "",
            detail_ur: '',
            id: '',
            GuideId: '',
        }
    }

    componentDidMount() {
        var id = localStorage.getItem("viewEventId")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'get',
            url: Serverurl + 'event-type/view',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }
        })

            .then((res) => {
                console.log('res', res)
                console.log('res2', res.data.data)
                if (res.status === 'true') {
                    console.log(data)
                }
                this.setState({
                    title: res.data.title,
                    detail: res.data.detail,
                    title_ur: res.data.title_ur,
                    detail_ur: res.data.detail_ur
                })
                console.log('data', data)
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
                                    <h4>Details Event Type</h4>
                                    <ul>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Name</h5>
                                                <h6>{this.state.title}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-6">
                                                <h5>Image</h5>
                                                <div className="pf-img1">
                                                    {/* <img src={Serverurlimg + this.state.image_view} alt="logo" /> */}
                                                </div>
                                            </li>
                                        </div>
                                    </ul>
                                    <h4 class="form-label ar">واقعہ کی قسم</h4>
                                    <ul>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5 class="form-label ar">نام</h5>
                                                <h6 class="form-label ar">{this.state.title_ur}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5 class="form-label ar">تصویر</h5>
                                                <div className="pf-img1 form-label ar">
                                                    {/* <img src={Serverurlimg + this.state.prize_image_ar_view} alt="logo" /> */}
                                                </div>
                                            </li>
                                        </div>
                                    </ul>
                                    <div class="button-align">
                                        <a href="/component/gridDealProducts" type="button" class="btn btn-danger waves-effect waves-light submit-button">Back</a>
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

export default ViewEventType
