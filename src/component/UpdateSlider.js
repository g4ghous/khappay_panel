import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { ServerurllogRegister, Serverurl } from '../Common/ServerUrl';
import axios from 'axios';
import swal from 'sweetalert';
import DatePicker from "react-datepicker";
import DateTimePicker from 'react-datetime-picker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

export class UpdateSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            title: '',
            started_at: '',
            title_ur: '',
            description: '',
            ended_at: '',
            ddescription_ur: '',
            date: new Date(),
            id: '',
            GuideId: '',
        };
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

        }).then(nes => {
            console.log('nes', nes.data.data)
            // console.log('hey', nes.data)
            this.setState({
                title: nes.data.title,
                title_ur: nes.data.title_ur,
                description: nes.data.description,
                description_ur: nes.data.description_ur,
                started_at: nes.data.started_at,
                ended_at: nes.data.ended_at,
            })
            console.log('data', nes.data.data)
        }).catch((err) => {
            console.log(err)
            if (err) {
                console.log({ err })
            }
        })
    }


    // handleChangeStart = date => {
    //     this.setState({
    //         started_at: moment(date).format('YYYY-MM-DD HH:MM:SS')
    //     });
    //     console.log(moment(date).format('YYYY-MM-DD HH:MM:SS'))
    // };

    // OnChangeEnd = date => {
    //     this.setState({
    //         ended_at: moment(date).format('YYYY-MM-DD HH:MM:SS')
    //     });
    //     console.log(moment(date).format('YYYY-MM-DD HH:MM:SS'))
    // };



    handleChangeEvent(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }

    addMajlis(e) {

        var validation = true;


        if (this.state.started_at == "") {
            validation = false;
            this.setState({
                errorText: "*Slider start date is required"
            })
        }

        if (this.state.ended_at_at == "") {
            validation = false;
            this.setState({
                errorText: "*Slider end date is required"
            })
        }

        if (this.state.detail == "") {
            validation = false;
            this.setState({
                errorText: "*Slider detail is required"
            })
        }

        if (this.state.detail_ur == "") {
            validation = false;
            this.setState({
                errorText: "سلائیڈر تفصیل درکار ہے*"
            })
        }

        if (this.state.title == "") {
            validation = false;
            this.setState({
                errorText: "*Slider title is required"
            })
        }

        if (this.state.title_ur == "") {
            validation = false;
            this.setState({
                errorText: "سلائیڈر کا عنوان ضروری ہے"
            })
        }


        if (validation == true) {

            
            var id = localStorage.getItem("Privacy")

            var Check = parseInt(id)

            this.setState({
                GuideId: Check,
            })

            var data = {
                title: this.state.title,
                title_ur: this.state.title_ur,
                description: this.state.description,
                description_ur: this.state.description_ur,
                started_at: this.state.started_at,
                ended_at: this.state.ended_at,
                'id': Check,
            }


            this.setState({
                loading: true
            })

            console.log('mydata', data)

            var error = document.getElementById('err');
            axios({
                method: 'post',
                url: Serverurl + 'slider/update',
                data: data,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                config: {
                    headers: { 'Content-Type': 'application/json' }
                }
            })
                .then((res) => {
                    console.log('res', res.data)
                    if (res.status === "true") {
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                        this.setState({
                            loading: true
                        })
                    } else {
                        swal("Slider Updated Successfully!");
                    }
                    setTimeout(() => {
                        window.location.href = "/component/SLider"
                    }, 3000)
                    console.log('data', res.data)
                })
                .catch((err) => {
                    console.log({ err })

                console.log("res", err.response.data.error.message)

                var error_message = err.response.data.error.message;

                console.log("error", error_message[0])

                if (err) {
                    this.setState({
                        loading: true
                    })
                    setTimeout(() => {
                        this.setState({
                            loading: false
                        })
                        this.setState((willSuccess) => {
                            if (willSuccess) {
                                swal(error_message[0], {
                                    icon: "warning",
                                });
                            } else {
                                swal("Your imaginary file is safe!");
                            }
                        })
                    }, 3000)
                }
                })

        }
    }

    handleChangeIb(e) {
        this.setState({
            city_id: e.target.value,
            errorText: ""

        })
    }

    render() {
        const { country, region } = this.state;
        return (
            <div>

                <div class="container">
                    <div class="row">
                        <div class="col-lg-11 col-md-12 card">
                            <div class="parent">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">English</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">اردو</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <h4 class="mt-0 header-title">Create Slider</h4>
                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Name</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="title" value={this.state.title} onChange={this.handleChangeEvent.bind(this)} type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Description</label>
                                            <div class="col-sm-10">
                                                <textarea className="form-control" row="3" value={this.state.description} name="description" onChange={this.handleChangeEvent.bind(this)}></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Started At</label>
                                            <div class="col-sm-10">
                                                {/* <input class="form-control" name="started_at" onChange={this.handleChangeEvent.bind(this)} type="text" id="example-text-input" /> */}
                                                <input class="form-control" name="started_at" value={this.state.started_at} onChange={this.handleChangeEvent.bind(this)} type="text" id="example-text-input" placeholder="YYYY-MM-DD HH:MM:SS" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Ended At</label>
                                            <div class="col-sm-10">
                                                {/* <input class="form-control" name="ended_at" onChange={this.handleChangeEvent.bind(this)} type="text" id="example-text-input" /> */}
                                                <input class="form-control" name="ended_at" value={this.state.ended_at} onChange={this.handleChangeEvent.bind(this)} type="text" id="example-text-input" placeholder="YYYY-MM-DD HH:MM:SS" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <h4 class="mt-0 header-title ar">سلائیڈر بنائیں</h4>
                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">نام</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="title_ur" value={this.state.title_ur} onChange={this.handleChangeEvent.bind(this)} type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">تفصیل</label>
                                            <div class="col-sm-10">
                                                <textarea className="form-control" row="3" value={this.state.description_ur} name="description_ur" onChange={this.handleChangeEvent.bind(this)}></textarea>
                                            </div>
                                        </div>
                                        {this.state.errorText ?
                                            <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                            : null
                                        }
                                        <div class="form-group row">
                                            <div class="button-align">
                                                <button type="button" class="btn btn-danger waves-effect waves-light submit-button" onClick={this.addMajlis.bind(this)}>Submit</button>
                                            </div>
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

export default UpdateSlider
