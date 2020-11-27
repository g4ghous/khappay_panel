import React, { Component } from 'react';
import axios, { post } from 'axios';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import swal from 'sweetalert';

export class UpdateTerms extends Component {
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
        var id = localStorage.getItem("viewId")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }
        axios({
            method: 'get',
            url: Serverurl + 'term-and-condition/view',
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

    handleChangeAdven(e) {
        this.setState({
            package: e.target.value
        })
    }

    updateTerms(e) {

        var id = localStorage.getItem("bookid")

        const emailsyntax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        var validation = true;

        if (this.state.title == "") {
            validation = false;
            this.setState({
                errorText: "*Terms & Conditions title is required"
            })
        }

        if (this.state.detail == "") {
            validation = false;
            this.setState({
                errorText: "*Terms & Conditions detail is required"
            })
        }

        if (this.state.title_ur == "") {
            validation = false;
            this.setState({
                errorText: "*شرائط و ضوابط کا عنوان ضروری ہے"
            })
        }

        if (this.state.detail_ur == "") {
            validation = false;
            this.setState({
                errorText: "*شرائط و ضوابط کی تفصیل درکار ہے"
            })
        }

        var id = localStorage.getItem("viewId")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        if(validation == true){

        var data = {
            'title': this.state.title,
            'detail': this.state.detail,
            'title_ur': this.state.title_ur,
            'detail_ur': this.state.detail_ur,
            'id': Check
        }


        this.setState({
            loading: true
        })

        var error = document.getElementById('err');
        if (
            this.state.is_paid === ""
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
                url: Serverurl + 'term-and-condition/update',
                data: data,

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
                    console.log('Update here:', res.data)
                    if (res.status === "true") {
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                        this.setState({
                            loading: true
                        })
                    } else {
                        swal("Term & Condition Succesfully Updated!");
                    }
                    setTimeout(() => {
                        window.location.href = "/component/GridTerms"
                    }, 3000)
                    console.log('data', data)
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
    }

    handleChangeAdventure(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText:""
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





    render() {
        return (

            <div class="content">
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
                                    <h4 class="mt-0 header-title">Update Term & Condition</h4>
                                    <div class="form-group row input-margin">
                                        <label for="example-text-input" class="col-sm-2 col-form-label">Name</label>
                                        <div class="col-sm-10">
                                            <input class="form-control" name="title" value={this.state.title} onChange={this.handleChangeAdventure.bind(this)} type="text" id="example-text-input" />
                                        </div>
                                    </div>
                                    <div class="form-group row input-margin">
                                        <label for="example-text-input" class="col-sm-2 col-form-label">Description</label>
                                        <div class="col-sm-10">
                                            <textarea className="form-control" row="3" name="detail" value={this.state.detail} onChange={this.handleChangeAdventure.bind(this)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <h4 class="mt-0 header-title ar">تازہ کاری کی مدت اور حالت</h4>
                                    <div class="form-group row input-margin urdu">
                                        <label for="example-text-input" class="form-label ar">نام</label>
                                        <input class="form-control" name="title_ur" value={this.state.title_ur} onChange={this.handleChangeAdventure.bind(this)} type="text" id="example-text-input" />
                                    </div>
                                    <div class="form-group row input-margin urdu">
                                        <label for="example-text-input" class="col-sm-2 col-form-label">تفصیل</label>
                                        <div class="col-sm-10">
                                            <textarea className="form-control" row="3" name="detail_ur" value={this.state.detail_ur} onChange={this.handleChangeAdventure.bind(this)}></textarea>
                                        </div>
                                    </div>
                                    {this.state.errorText ?
                                        <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                        : null
                                    }
                                    <div class="form-group row">
                                        <div class="button-align">
                                            <button type="button" class="btn btn-danger waves-effect waves-light submit-button" onClick={this.updateTerms.bind(this)}>Update</button>
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

export default UpdateTerms
