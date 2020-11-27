import React, { Component } from 'react';
import { Serverurl } from '../Common/ServerUrl';
import axios from 'axios';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import swal from 'sweetalert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';


export class CreateSponsor extends Component {
    constructor(props) {
        super(props); {
            this.state = {
                data: [],
                name: "",
                sponsor_image: "",
                sponsor_logo: "",
            }
        }
    }

    addDeal(e) {


        var validation = true;

        const emailsyntax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


        if (this.state.prize_image == "") {
            validation = false;
            this.setState({
                errorText: "*Sponsor Image is required"
            })
        }

        if (this.state.prize_title == "") {
            validation = false;
            this.setState({
                errorText: "*Sponsor Logo is required"
            })
        }

        if (this.state.name == "") {
            validation = false;
            this.setState({
                errorText: '* Name is required'
            })
        }


        if (validation == true) {

            let formData = new FormData();
            formData.append('name', this.state.name)
            formData.append('sponsor_logo', this.state.sponsor_logo)
            formData.append('sponsor_image', this.state.sponsor_image)

            this.setState({
                loading: true
            })

            console.log('mydata', formData)

            var error = document.getElementById('err');
            if (this.state.name === ''
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
                    method: 'post',
                    url: Serverurl + 'sponsor/create',
                    data: formData,
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                    config: {
                        headers: { 'Content-Type': 'application/json' }
                    }
                })
                    .then((res) => {
                        console.log('res', res.data.data)
                        if (res.status === "true") {
                            swal("Poof! Your imaginary file has been deleted!", {
                                icon: "success",
                            });
                            this.setState({
                                loading: true
                            })
                        } else {
                            swal("Sponsor Succesfully Created!");
                        }
                        setTimeout(() => {
                            window.location.href = "/component/GridSponsor"
                        }, 3000)
                        console.log('data', res.formData)
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
    }



    onKeyDown = (event) => {
        // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.addAdventure();
        }
    }



    handleChangeAdventure = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    handleFileInput = (event) => {
        console.log(event.target.files, 'file')
        console.log(event.target.files[0], 'file 0')
        let file = event.target.files[0]
        this.setState({ sponsor_image: file })
        if (event.target.files) {
            this.setState({
                [event.target.name]: event.target.files[0],
                file: URL.createObjectURL(event.target.files[0])
            })
        }

        console.log(event.target.files[0])
    }

    handleFileInputLogo = (event) => {
        console.log(event.target.files, 'file')
        console.log(event.target.files[0], 'file 0')
        let file = event.target.files[0]
        this.setState({ sponsor_logo: file })
        if (event.target.files) {
            this.setState({
                [event.target.name]: event.target.files[0],
                file: URL.createObjectURL(event.target.files[0])
            })
        }

        console.log(event.target.files[0])
    }

    render() {
        return (
            <div>
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
                                        <h4 class="mt-0 header-title">Create Sponsor</h4>
                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Name</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" type="text" id="example-text-input" name="name" onChange={this.handleChangeAdventure.bind(this)} />
                                            </div>
                                        </div>

                                        <div class="form-group row input-margin">
                                            <label for="example-search-input" class="col-sm-3 col-form-label">Logo</label>
                                            <div class="col-sm-12">
                                                <input type="file" id="input-file-now" class="dropify" name="sponsor_image" onChange={this.handleFileInput.bind(this)} />
                                            </div>
                                        </div>

                                        <div class="form-group row input-margin">
                                            <label for="example-search-input" class="col-sm-3 col-form-label">Image</label>
                                            <div class="col-sm-12">
                                                <input type="file" id="input-file-now" class="dropify" name="sponsor_logo" onChange={this.handleFileInputLogo.bind(this)} />
                                            </div>
                                        </div>
                                    </div>
                                        {this.state.errorText ?
                                            <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                            : null
                                        }
                                        <div class="form-group row">
                                            <div class="button-align">
                                                <button type="button" class="btn btn-danger waves-effect waves-light submit-button" onClick={this.addDeal.bind(this)}>Submit</button>
                                            </div>
                                        </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                        {/* <h4 class="mt-0 header-title ar">کفیل بنائیں</h4>

                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">نام</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" type="text" id="example-text-input" name="name" onChange={this.handleChangeAdventure.bind(this)} />
                                            </div>
                                        </div>

                                        <div class="form-group row input-margin urdu">
                                            <label for="example-search-input" class="col-sm-3 col-form-label">لوگو</label>
                                            <div class="col-sm-12">
                                                <input type="file" id="input-file-now" class="dropify" name="prize_image" onChange={this.handleFileInput.bind(this)} />
                                            </div>
                                        </div>

                                        <div class="form-group row input-margin urdu">
                                            <label for="example-search-input" class="col-sm-3 col-form-label">تصویر</label>
                                            <div class="col-sm-12">
                                                <input type="file" id="input-file-now" class="dropify" name="prize_image" onChange={this.handleFileInput.bind(this)} />
                                            </div>
                                        </div> */}

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

export default CreateSponsor
