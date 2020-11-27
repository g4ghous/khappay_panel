import React, { Component } from 'react';
import axios, { post } from 'axios';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import swal from 'sweetalert';

export class UpdateEventType extends Component {
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
        var id = localStorage.getItem("eventId")

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
                headers: { 'Content-Type': 'application/json'}
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

    handleChangeAdventure(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onKeyDown = (event) => {
        // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.addAdventure();
        }
    }

    updateOffer(e) {

        var id = localStorage.getItem("eventId")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })


        let formData = new FormData();
        formData.append('title', this.state.title)
        formData.append('title_ur', this.state.title_ur)
        formData.append('id', Check)

        var validation = true;

        const emailsyntax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (this.state.logo == "") {
            validation = false;
            this.setState({
                errorText: "*Adventure Logo is required"
            })
        }

        if (this.state.banner == "") {
            validation = false;
            this.setState({
                errorText: "*Banner is required"
            })
        }

        if (this.state.name == "") {
            validation = false;
            this.setState({
                errorText: '* Name is required'
            })
        }

        if (this.state.editorState == "") {
            validation = false;
            this.setState({
                errorText: '* Description is required'
            })
        }



        this.setState({
            loading: true
        })

        var error = document.getElementById('err');
        if (
            this.state.name === "" 


        ) {
            this.setState({
                error: 'Please fill fields carefully'
            })
            error.classList.add('errorMsg');
            setTimeout(() => {
                error.classList.remove('errorMsg')
                this.setState({
                    error: ''
                })
            }, 3000)
        } else {
            axios({
                method: 'POST',
                url: Serverurl + 'event-type/update',
                data: formData,

                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                config: {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                }
            })
                .then((res) => {
                    console.log('Update here:', res.data.data)
                    if (res.status === "true") {
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                        this.setState({
                            loading: true
                        })
                    } else {
                        swal("Event Type Succesfully Updated")
                    }
                    setTimeout(() => {
                        window.location.href = "/component/GridEventType"
                    }, 3000)
                    console.log('data', formData)
                })
                .catch((err) => {
                    console.log({ err })

                    console.log("res", err.response)

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
                                    swal("Check Your Internet Connection!", {
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

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-lg-11 col-md-12 card">
                        <div class="parent">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Englsh</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">اردو</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <h4 class="mt-0 header-title">Update Event Type</h4>
                                    <div className="form-padding">
                                        <div id="err">{this.state.error}</div>

                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Name</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="title" value={this.state.title} onChange={this.handleChangeAdventure.bind(this)} type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin">
                                            <label for="example-search-input" class="col-sm-3 col-form-label">Image</label>
                                            <input type="file" id="input-file-now" class="dropify" />
                                        </div>
                                    </div>
                                </div>

                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <h4 class="mt-0 header-title ar">واقعہ کی قسم کو اپ ڈیٹ کریں</h4>
                                    <div className="form-padding">
                                        <div id="err">{this.state.error}</div>

                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">نام</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="name" value={this.state.title_ur} onChange={this.handleChangeAdventure.bind(this)} type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin urdu">
                                            <label for="example-search-input" class="col-sm-3 col-form-label">تصویر</label>
                                            <input type="file" id="input-file-now" class="dropify" />
                                        </div>
                                        <div class="form-group row">
                                            <div class="button-align">
                                                <button type="submit" class="btn btn-danger btn-margin waves-effect waves-light submit-button" onClick={this.updateOffer.bind(this)} >Update</button>
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

export default UpdateEventType
