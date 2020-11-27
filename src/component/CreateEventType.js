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



export class CreateEventType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            title: '',
            title_ur: ''
        }

    }


    handleChangeAdventure = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }



    handleFileInput = (event) => {
        console.log(event.target.files, 'file')
        console.log(event.target.files[0], 'file 0')
        let file = event.target.files[0]
        this.setState({ banner: file })
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
        this.setState({ logo: file })
        if (event.target.files) {
            this.setState({
                [event.target.name]: event.target.files[0],
                file: URL.createObjectURL(event.target.files[0])
            })
        }

        console.log(event.target.files[0])
    }

    addAdventure(e) {


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


        if (validation == true) {

            let formData = new FormData();
            formData.append('title', this.state.title)
            formData.append('title_ur', this.state.title_ur)
            formData.append('banner', this.state.banner)


            this.setState({
                loading: true
            })

            console.log('mydata', formData)

            var error = document.getElementById('err');
            if (this.state.title === ''

            ) {
                this.setState({
                    error: 'يرجى ملء الحقول بعناية'
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
                    url: Serverurl + 'event-type/create',
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
                            swal("Event-Type Created Successfully");
                        }
                        setTimeout(() => {
                            window.location.href = "/component/GridEventType"
                        }, 3000)
                        console.log('data', res.formData)
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
                                        swal(" هناك خطأ ما! (تحقق من كل الحقول/Something went wrong! (Check all fields)", {
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


    handleFileInputArabic = (event) => {
        console.log(event.target.files, 'file')
        console.log(event.target.files[0], 'file 0')
        let file = event.target.files[0]
        this.setState({ banner_ar: file })
        if (event.target.files) {
            this.setState({
                [event.target.name]: event.target.files[0],
                file: URL.createObjectURL(event.target.files[0])
            })
        }

        console.log(event.target.files[0])
    }

    handleFileInputLogoArabic = (event) => {
        console.log(event.target.files, 'file')
        console.log(event.target.files[0], 'file 0')
        let file = event.target.files[0]
        this.setState({ logo_ar: file })
        if (event.target.files) {
            this.setState({
                [event.target.name]: event.target.files[0],
                file: URL.createObjectURL(event.target.files[0])
            })
        }

        console.log(event.target.files[0])
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
                                        <h4 class="mt-0 header-title">Create Event Type</h4>
                                        <div className="form-padding">
                                            <div id="err">{this.state.error}</div>

                                            <div class="form-group row input-margin">
                                                <label for="example-text-input" class="col-sm-2 col-form-label">Name</label>
                                                <div class="col-sm-10">
                                                    <input class="form-control" name="title" onChange={this.handleChangeAdventure.bind(this)} type="text" id="example-text-input" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Image</label>
                                                <input type="file" name="banner" id="input-file-now" class="dropify" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <h4 class="mt-0 header-title ar">واقعہ کی قسم بنائیں</h4>
                                        <div className="form-padding">
                                            <div id="err">{this.state.error}</div>

                                            <div class="form-group row input-margin urdu">
                                                <label for="example-text-input" class="col-sm-2 col-form-label">نام</label>
                                                <div class="col-sm-10">
                                                    <input class="form-control" name="title_ur" onChange={this.handleChangeAdventure.bind(this)} type="text" id="example-text-input" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">تصویر</label>
                                                <input type="file" name="banner" id="input-file-now" class="dropify" />
                                            </div>
                                            <div class="form-group row">
                                                <div class="button-align">
                                                    <button type="submit" class="btn btn-danger btn-margin waves-effect waves-light submit-button" onClick={this.addAdventure.bind(this)}>Submit</button>
                                                </div>
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

export default CreateEventType
