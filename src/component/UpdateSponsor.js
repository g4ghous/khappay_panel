import React, { Component } from 'react';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import $ from 'jquery';
import swal from 'sweetalert';



export class UpdateSponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            name: "",
            sponsor_image: "",
            sponsor_logo: "",
            id: '',
            GuideId: '',

            file: "",
            file_ar: ""
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

    handleChangeProduct(e) {
        this.setState({
            products: e.target.value
        })
    }

    handleChangeCampaign(e) {
        this.setState({
            campaign: e.target.value
        })
    }


    handleChangeAdventure = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    handleFileInput = (event) => {
        console.log(event.target.files, 'file')
        console.log(event.target.files[0], 'file 0')
        let file_ar = event.target.files[0]
        this.setState({ sponsor_image: file_ar })
        if (event.target.files) {
            this.setState({
                [event.target.name]: event.target.files[0],
                file_ar: URL.createObjectURL(event.target.files[0])
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


    onKeyDown = (event) => {
        // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.updateDeal();
        }
    }

    updateDeal(e) {

        var validation = true;

        const emailsyntax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        var id = localStorage.getItem("dealsI")


        if (this.state.prize_image == "") {
            validation = false;
            this.setState({
                errorText: "*Prize Image is required"
            })
        }

        if (this.state.prize_title == "") {
            validation = false;
            this.setState({
                errorText: "*Prize Title is required"
            })
        }

        if (this.state.drew_date == "") {
            validation = false;
            this.setState({
                errorText: '* Draw Date is required'
            })
        }


        if (validation == true) {

            var id = localStorage.getItem("sponsorId")

            var Check = parseInt(id)

            this.setState({
                GuideId: Check,
            })


            console.log("Check File Image:", this.state.Myfile)

            let formData = new FormData();
            formData.append('name', this.state.name)
            if (this.state.file) {
                formData.append("sponsor_logo", this.state.sponsor_logo)
            }
            if (this.state.file_ar) {
                formData.append('sponsor_image', this.state.sponsor_image)
            }
            formData.append('id', Check)

            this.setState({
                loading: true
            })


            var error = document.getElementById('err');
            if (this.state.name === ''
                // this.state.products === "" ||
                // this.state.campaign === ""
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
                    url: Serverurl + 'sponsor/update',
                    data: formData,
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                    config: {
                        headers: { 'Content-Type': 'multipart/form-data' }
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
                            swal("Sponsor  Succesfully Updated!");
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
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">عربى</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <h4 class="mt-0 header-title">Update Sponsor</h4>
                                    <div class="form-group row input-margin">
                                        <label for="example-text-input" class="col-sm-2 col-form-label">Name</label>
                                        <div class="col-sm-10">
                                            <input class="form-control" type="text" value={this.state.name} name="name" onChange={this.handleChangeAdventure.bind(this)} id="example-text-input" />
                                        </div>
                                    </div>
                                    <div class="form-group banner-position input-margin">
                                        <label for="example-search-input" class="col-form-label">Logo</label>
                                        <div>
                                            <input type="file" name="sponsor_logo" onChange={this.handleFileInputLogo.bind(this)} class="form-control-file" />
                                        </div>
                                        <div className="banner">
                                            {this.state.file ?
                                                <img src={this.state.file} />
                                                :
                                                <img src={this.state.sponsor_logo} />
                                            }
                                        </div>
                                    </div>
                                    <div class="form-group banner-position input-margin">
                                        <label for="example-search-input" class="col-form-label">Image</label>
                                        <div>
                                            <input type="file" name="sponsor_image" onChange={this.handleFileInput.bind(this)} class="form-control-file" />
                                        </div>
                                        <div className="banner">
                                            {this.state.file_ar ?
                                                <img src={this.state.file_ar} />
                                                :
                                                <img src={this.state.sponsor_image} />
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                    {/* <h4 class="mt-0 header-title ar">إنشاء صفقة جديدة</h4>

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


                                    <div className="banner">
                                        {/* {this.state.file_ar ?
                                            <img src={this.state.file_ar} />
                                            :
                                            <img src={Serverurlimg + this.state.prize_image_ar} />
                                        } */}
                                    </div>

                                    {this.state.errorText ?
                                        <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                        : null
                                    }

                                    <div class="form-group row">
                                        <div class="button-align">
                                            <button type="button" class="btn btn-danger waves-effect waves-light submit-button" onClick={this.updateDeal.bind(this)}>Update</button>
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

export default UpdateSponsor
