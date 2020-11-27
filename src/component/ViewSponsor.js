import React, { Component } from 'react';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import renderHTML from 'react-render-html';


export class ViewSponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            name: "",
            sponsor_image: "",
            sponsor_logo: "",
            id: '',
            GuideId: '',
        }

    }

    componentDidMount() {
        var id = localStorage.getItem("sponsorId")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'get',
            url: Serverurl + 'sponsor/view',
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
                name: res.data.name,
                sponsor_image: res.data.image_path,
                sponsor_logo: res.data.logo_path,

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
                                    <h4>Details Sponsor</h4>
                                    <ul>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Name</h5>
                                                <h6>{this.state.name}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Logo</h5>
                                                <div className="pf-img1">
                                                    <img src={this.state.sponsor_logo} alt="logo" />
                                                </div>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Image</h5>
                                                <div className="pf-img1">
                                                    <img src={this.state.sponsor_image} alt="logo" />
                                                </div>
                                            </li>
                                        </div>
                                    </ul>

                                    <h4 class="form-label ar">تفصیلات کفیل</h4>
                                    <ul>
                                        {/* <div class="row">
                                            <li class="col-12">
                                                <h5 class="form-label ar">نام</h5>
                                                <h6 class="form-label ar">{this.state.name_ar_view}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5 class="form-label ar">لوگو</h5>
                                                <h6 class="form-label ar">{this.state.prize_title_ar_view}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5 class="form-label ar">تصویر</h5>
                                                <div className="pf-img1 form-label ar">
                                                    <img src={Serverurlimg + this.state.prize_image_ar_view} alt="logo" />
                                                </div>
                                            </li>
                                        </div> */}
                                    </ul>
                                    <div class="button-align">
                                        <a href="/component/GridSponsor" type="button" class="btn btn-danger waves-effect waves-light submit-button">Back</a>
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
