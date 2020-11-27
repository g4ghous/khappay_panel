import avatar2 from '../component/assets/images/users/avatar2.jpg';
import React, { Component } from 'react';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import $ from 'jquery';
import swal from 'sweetalert';


export class GridFaourites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            zakir: [],
            noha: [],
            munqabat: [],
            name: '',
            name_ur: '',
            errorText: '',
            id: '',
            GuideId: '',
        }
    }

    
        

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ''
        })
    }

    

    ImamFavorite(e) {

        console.log("Mai chala")

        e.preventDefault();

        this.setState({
            heart_ib: true
        })

        var data = {
            'imam_bargah_id': this.state.imam_bargah_id,
        }

        this.setState({
            loading: true
        })

        axios({
            method: 'post',
            url: Serverurl + 'imam-bargah/favourite/create',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        })
            .then(res => {
                console.log('res', res)
                console.log('res', res.data)
                    if (res.status === "true") {
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                        this.setState({
                            loading: true
                        })
                    } else {
                        swal("Slider Added Successfully!");
                    }
                    setTimeout(() => {
                        window.location.href = "/component/SLider"
                    }, 3000)
                    console.log('data', res.data)


            }).catch((err) => {
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
                                    swal("Something went wrong!", {
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

    ImamFavoriteDelete(e) {

        console.log("Mai chala")

        e.preventDefault();

        this.setState({
            heart_ib: false
        })

        var data = {
            'imam_bargah_id': this.state.imam_bargah_id,
        }

        this.setState({
            loading: true
        })

        axios({
            method: 'delete',
            url: Serverurl + 'imam-bargah/favourite/remove',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        })
            .then(res => {
                console.log('res', res)
                this.setState({
                    data: res.data.data,
                })


            }).catch((err) => {
                console.log({ err })
            })

    }

    ManqabatFavorite(e) {

        console.log("Mai chala")

        e.preventDefault();

        this.setState({
            heart_manqabat: true
        })

        var data = {
            'manqabat_khuwan_id': this.state.manqabat_khuwan_id,
        }

        this.setState({
            loading: true
        })

        axios({
            method: 'post',
            url: Serverurl + 'manqabat-khuwan/favourite/create',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        })
            .then(res => {
                console.log('res', res)
                this.setState({
                    data: res.data.data,
                })


            }).catch((err) => {
                console.log({ err })
            })

    }

    ManqabatFavoriteDelete(e) {

        console.log("Mai chala")

        e.preventDefault();

        this.setState({
            heart_manqabat: false
        })

        var data = {
            'manqabat_khuwan_id': this.state.manqabat_khuwan_id,
        }

        this.setState({
            loading: true
        })

        axios({
            method: 'delete',
            url: Serverurl + 'manqabat-khuwan/favourite/remove',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        })
            .then(res => {
                console.log('res', res)
                this.setState({
                    data: res.data.data,
                })


            }).catch((err) => {
                console.log({ err })
            })

    }


    NohaFavorite(e) {

        console.log("Mai chala")

        e.preventDefault();

        this.setState({
            heart_noha: true
        })

        var data = {
            'noha_khuwan_id': this.state.noha_khuwan_id,
        }

        this.setState({
            loading: true
        })

        axios({
            method: 'post',
            url: Serverurl + 'noha-khuwan/favourite/create',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        })
            .then(res => {
                console.log('res', res)
                this.setState({
                    data: res.data.data,
                })


            }).catch((err) => {
                console.log({ err })
            })

    }

    NohaFavoriteDelete(e) {

        console.log("Mai chala")

        e.preventDefault();

        this.setState({
            heart_noha: false
        })

        var data = {
            'noha_khuwan_id': this.state.noha_khuwan_id,
        }

        this.setState({
            loading: true
        })

        axios({
            method: 'delete',
            url: Serverurl + 'noha-khuwan/favourite/remove',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        })
            .then(res => {
                console.log('res', res)
                this.setState({
                    data: res.data.data,
                })


            }).catch((err) => {
                console.log({ err })
            })

    }

    ZakirFavorite(e) {

        console.log("Mai chala")

        e.preventDefault();

        this.setState({
            heart_zakir: true
        })

        var data = {
            'zakir_id': this.state.zakir_id,
        }

        this.setState({
            loading: true
        })

        axios({
            method: 'post',
            url: Serverurl + 'zakir/favourite/create',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        })
            .then(res => {
                console.log('res', res)
                this.setState({
                    data: res.data.data,
                })


            }).catch((err) => {
                console.log({ err })
            })

    }

    ZakirFavoriteDelete(e) {

        console.log("Mai chala")

        e.preventDefault();

        this.setState({
            heart_zakir: false
        })

        var data = {
            'zakir_id': this.state.zakir_id,
        }

        this.setState({
            loading: true
        })

        axios({
            method: 'delete',
            url: Serverurl + 'zakir/favourite/remove',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        })
            .then(res => {
                console.log('res', res)
                this.setState({
                    data: res.data.data,
                })


            }).catch((err) => {
                console.log({ err })
            })

    }

    AreaFavorite(e) {

        console.log("Mai chala")

        e.preventDefault();

        this.setState({
            heart_area: true
        })

        var data = {
            'area_id': this.state.area_id,
        }

        this.setState({
            loading: true
        })

        axios({
            method: 'post',
            url: Serverurl + 'area/favourite/create',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        })
            .then(res => {
                console.log('res', res)
                this.setState({
                    data: res.data.data,
                })


            }).catch((err) => {
                console.log({ err })
            })

    }

    AreaFavoriteDelete(e) {

        console.log("Mai chala")

        e.preventDefault();

        this.setState({
            heart_area: false
        })

        var data = {
            'area_id': this.state.area_id,
        }

        this.setState({
            loading: true
        })

        axios({
            method: 'delete',
            url: Serverurl + 'area/favourite/remove',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        })
            .then(res => {
                console.log('res', res)
                this.setState({
                    data: res.data.data,
                })


            }).catch((err) => {
                console.log({ err })
            })

    }








    viewOffer(id) {
        localStorage.setItem('monthsId', id)
        console.log(id)
    }

    editOffer(id) {
        localStorage.setItem('monthseId', id)
        console.log(id)
        window.location.href = "/component/updateOffer"
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-11 col-sm-11">
                            <div class="card">
                                <div class="card-body table-responsive">
                                    <div className="list-head-btn">
                                        <div className="head">
                                            <h4>All Favoutite List</h4>
                                        </div>
                                        {/* <div class="button-align">
                                            <a href="/component/createOffer" type="button" class="btn btn-danger waves-effect waves-light submit-button">Create Offers +</a>
                                        </div> */}
                                    </div>

                                    <div class="accordion" id="accordionExample">
                                        <div class="card">
                                            <div class="card-header" id="headingOne">
                                                <h2 class="mb-0">
                                                    <p>Imam Bargah</p>
                                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Click Here.</button>
                                                </h2>
                                            </div>

                                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <div className="favorite-creat">
                                                        <button className="btn" data-toggle="modal" data-target="#imambargah">Create +</button>
                                                    </div>
                                                    <div class="table-3">
                                                        <table id="datatable2" class="table">
                                                            <thead>
                                                                <tr>
                                                                    {/* <th>Image</th> */}
                                                                    <th>Name</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>


                                                            <tbody>
                                                                {this.state.data.map((bargah) =>
                                                                    <tr key={bargah.id}>
                                                                        {/* <td><center><img class="rounded-circle" src={avatar2} alt="user" width="30" height="30" /></center></td> */}
                                                                        <td>{bargah.name}</td>
                                                                        <td>
                                                                            <div class="icon-pad">
                                                                                {/* <a data-toggle="modal" data-target="#imambargahUpdate" onClick={this.updateImamBargahId.bind(this, bargah.id)}><i className="fas fa-pencil-alt"></i></a> */}
                                                                                <a data-toggle="modal" data-target="#imambargahView" onClick={this.imamBargahView.bind(this, bargah.id)}><i className="fas fa-eye"></i></a>
                                                                                <a data-toggle="modal" data-target="#bargahDelete" onClick={this.deleteBargahId.bind(this, bargah.id)}><i className="fas fa-trash-alt"></i></a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingTwo">
                                                <h2 class="mb-0">
                                                    <p>Zakir</p>
                                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Click Here.</button>
                                                </h2>
                                            </div>
                                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <div className="favorite-creat">
                                                        <button className="btn" data-toggle="modal" data-target="#zakir">Create +</button>
                                                    </div>
                                                    <div class="table-3">
                                                        <table id="datatable2" class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>


                                                            <tbody>
                                                                {this.state.zakir.map((zakir) =>
                                                                    <tr>
                                                                        <td>{zakir.name}</td>
                                                                        <td>
                                                                            <div class="icon-pad">
                                                                                <a data-toggle="modal" data-target="#zakirView" onClick={this.zakirView.bind(this, zakir.id)}><i className="fas fa-eye"></i></a>
                                                                                <a data-toggle="modal" data-target="#zakirDelete" onClick={this.deleteZakirId.bind(this, zakir.id)}><i className="fas fa-trash-alt"></i></a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingThree">
                                                <h2 class="mb-0">
                                                    <p>Noha Khuwan</p>
                                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Click Here.</button>
                                                </h2>
                                            </div>
                                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <div className="favorite-creat">
                                                        <button className="btn" data-toggle="modal" data-target="#noha">Create +</button>
                                                    </div>
                                                    <div class="table-3">
                                                        <table id="datatable2" class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>


                                                            <tbody>
                                                                {this.state.noha.map((noha) =>
                                                                    <tr key={noha.id}>
                                                                        <td>{noha.name}</td>
                                                                        <td>
                                                                            <div class="icon-pad">
                                                                                <a data-toggle="modal" data-target="#nohaView" onClick={this.NohaView.bind(this, noha.id)}><i className="fas fa-eye"></i></a>
                                                                                <a data-toggle="modal" data-target="#nohaDelete" onClick={this.deleteNohaId.bind(this, noha.id)}><i className="fas fa-trash-alt"></i></a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingFour">
                                                <h2 class="mb-0">
                                                    <p>Munqabat Khuwan</p>
                                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Click Here.</button>
                                                </h2>
                                            </div>
                                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <div className="favorite-creat">
                                                        <button className="btn" data-toggle="modal" data-target="#manqabat">Create +</button>
                                                    </div>
                                                    <div class="table-3">
                                                        <table id="datatable2" class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                {this.state.munqabat.map((munqabat) =>
                                                                    <tr key={munqabat.id}>
                                                                        <td>{munqabat.name}</td>
                                                                        <td>
                                                                            <div class="icon-pad">
                                                                                <a data-toggle="modal" data-target="#manqabatView" onClick={this.manqabatView.bind(this, munqabat.id)}><i className="fas fa-eye"></i></a>
                                                                                <a data-toggle="modal" data-target="#manqabatDelete" onClick={this.deleteManqabatId.bind(this, munqabat.id)}><i className="fas fa-trash-alt"></i></a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-modal">
                        <div className="modal fade" id="imambargah" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Imam Bargah</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Name</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Image</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">تصویر</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.imamBargah.bind(this)}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-modal">
                        <div className="modal fade" id="zakir" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Zakir</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Name</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Image</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">تصویر</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.zakir.bind(this)}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-modal">
                        <div className="modal fade" id="noha" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Noha Khuwan</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Name</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Image</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">تصویر</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.noha.bind(this)}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-modal">
                        <div className="modal fade" id="manqabat" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Manqabat Khuwaan</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Name</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Image</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">تصویر</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" />
                                                </div>
                                            </div>
                                        </div>
                                        {this.state.errorText ?
                                            <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                            : null
                                        }
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.munqabat.bind(this)}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-modal">
                        <div className="modal fade" id="imambargahUpdate" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Update Imam Bargah</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Name</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Image</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" value={this.state.name_ur} onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">تصویر</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.updateImamBargah.bind(this)}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-modal">
                        <div className="modal fade" id="zakirUpdate" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Update Zakir</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Name</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Image</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" value={this.state.name_ur} onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">تصویر</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.updateZakir.bind(this)}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-modal">
                        <div className="modal fade" id="nohaUpdate" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Update Noha Khuwan</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Name</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Image</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" value={this.state.name_ur} onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">تصویر</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.updateNoha.bind(this)}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-modal">
                        <div className="modal fade" id="manqabatUpdate" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Update Manqabat Khuwaan</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Name</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Image</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" value={this.state.name_ur} onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">تصویر</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.updateManqabat.bind(this)}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-modal">
                        <div className="modal fade" id="imambargahView" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Imam Bargah Detail</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Name</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" value={this.state.name} id="exampleFormControlInput1" placeholder="name@example.com" readOnly />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Image</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" readOnly />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" value={this.state.name_ur} id="exampleFormControlInput1" placeholder="name@example.com" readOnly />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">تصویر</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" readOnly />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-modal">
                        <div className="modal fade" id="zakirView" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Zakir Detail</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Name</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" value={this.state.name} id="exampleFormControlInput1" placeholder="name@example.com" readOnly />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Image</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" readOnly />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" value={this.state.name_ur} id="exampleFormControlInput1" placeholder="name@example.com" readOnly />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">تصویر</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" readOnly />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-modal">
                        <div className="modal fade" id="nohaView" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Noha Khuwan Detail</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Name</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" value={this.state.name} id="exampleFormControlInput1" placeholder="name@example.com" readOnly />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Image</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" readOnly />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" value={this.state.name_ur} id="exampleFormControlInput1" placeholder="name@example.com" readOnly />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">تصویر</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" readOnly />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-modal">
                        <div className="modal fade" id="manqabatView" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Manqabat Khuwaan Detail</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Name</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" value={this.state.name} id="exampleFormControlInput1" placeholder="name@example.com" readOnly />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Image</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" readOnly />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" value={this.state.name_ur} id="exampleFormControlInput1" placeholder="name@example.com" readOnly />
                                                </div>
                                            </div>
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">تصویر</label>
                                                <div class="col-sm-12">
                                                    <input type="file" id="input-file-now" class="dropify" name="prize_image" readOnly />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-modal">
                        <div className="modal fade" id="bargahDelete" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Imam Bargah Delete</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            <strong>
                                                You're about to delete a Imam Bargah from this page. Are you sure?
                                            </strong>
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.deleteBargah.bind(this)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-modal">
                        <div className="modal fade" id="zakirDelete" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Zakir Delete</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            <strong>
                                                You're about to delete a Zakir from this page. Are you sure?
                                            </strong>
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.deleteZakir.bind(this)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-modal">
                        <div className="modal fade" id="nohaDelete" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Noha Khuwaan Delete</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            <strong>
                                                You're about to delete a Noha Khuwaan from this page. Are you sure?
                                            </strong>
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.deleteNoha.bind(this)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-modal">
                        <div className="modal fade" id="manqabatDelete" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Manqabat Khuwaan Delete</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            <strong>
                                                You're about to delete a Manqabat Khuwaan from this page. Are you sure?
                                            </strong>
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.deleteManqabat.bind(this)}>Delete</button>
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

export default GridFaourites

