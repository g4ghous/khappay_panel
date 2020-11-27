import avatar2 from '../component/assets/images/users/avatar2.jpg';
import pro3 from '../component/assets/images/users/pro.png';
import React, { Component } from 'react';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import $ from 'jquery';
import swal from 'sweetalert';
import user from '../component/assets/images/users/user.png'



export class GridSponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            status: '',
            campaign_name: '',
            GuideId: '',
            id: '',
        }
    }

    componentDidMount() {
        var data;
        axios({
            method: 'get',
            url: Serverurl + 'sponsor/list',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(res => {
            console.log('res', res.data.data)
            console.log('hey', res.data.data)
            this.setState({
                data: res.data.data,
            })
            $(document).ready(function () {
                $('#datatable2').DataTable();
            });
            // console.log('data', res.data.data)
        }).catch((err) => {
            console.log(err)
            if (err) {
                // console.log('err', err.response)
                console.log({ err })
            }
        })
    }

    delete(id) {
        localStorage.setItem('deleteSponsor', id)
        console.log("id", id)
    }

    deleteSponsor() {
        var id = localStorage.getItem('deleteSponsor')
        console.log("checkid", id)

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'DELETE',
            url: Serverurl + 'sponsor/remove',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        })

            .then((res) => {
                console.log('res', res.data)
                if (res.status === 'true') {
                    swal("Poof! Your imaginary Sponsor has been deleted!", {
                        icon: "success",
                    });
                    this.setState({
                        loading: true
                    })
                } else {
                    swal("Your Record Succesfully Deleted!");
                }
                setTimeout(() => {
                    window.location.reload()
                }, 2000)
            })

            .catch((err) => {
                console.log(err)
                if (err) {
                    setTimeout(() => {
                        this.setState({
                            loading: false
                        })
                        this.setState((willSuccess) => {
                            if (willSuccess) {
                                swal("Check Your Internet Connection", {
                                    icon: "warning",
                                });
                            } else {
                                swal("Your Record Succesfully Deleted!");
                            }
                        })
                    }, 5000)
                }
            })
    }



    viewDeal(id) {
        localStorage.setItem('sponsorId', id)
        console.log(id)
        window.location.href = "/component/ViewSponsor"
    }

    updateSponsor(id) {
        localStorage.setItem('sponsorId', id)
        console.log(id)
        window.location.href = "/component/UpdateSponsor"
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12 col-sm-12">
                            <div class="card">
                                <div class="card-body table-responsive">
                                    <div className="list-head-btn">
                                        <div className="head">
                                            <h4>List Sponsor</h4>
                                        </div>
                                        <div class="button-align">
                                            <a href="/component/CreateSponsor" type="button" class="btn btn-danger waves-effect waves-light submit-button">Create Sponsor +</a>
                                        </div>
                                    </div>
                                    <div class="table-3">
                                        <table id="datatable2" class="table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Logo</th>
                                                    <th>Image</th>
                                                    <th>Actions</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.data.map((sponsor) =>
                                                    <tr key={sponsor.id}>
                                                        <td>{sponsor.name}</td>
                                                        <td><center><img class="rounded-circle" src={sponsor.logo_path} alt="user" width="30" height="30" /></center></td>
                                                        <td><center><img class="rounded-circle" src={sponsor.image_path} alt="user" width="30" height="30" /></center></td>
                                                        <td>
                                                            <div class="icon-pad">
                                                                <a onClick={this.updateSponsor.bind(this, sponsor.id)}><i className="fas fa-pencil-alt"></i></a>
                                                                <a onClick={this.viewDeal.bind(this, sponsor.id)}><i className="fas fa-eye"></i></a>
                                                                <a data-toggle="modal" data-target="#userEdit" onClick={this.delete.bind(this, sponsor.id)}><i className="fas fa-trash-alt"></i></a>
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
                    <div className="user-modal">
                        <div className="modal fade" id="userEdit" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Sponsor Delete</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            <strong>
                                                You're about to delete a sponsor from this page. Are you sure?
                                            </strong>
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.deleteSponsor.bind(this)}>Delete</button>
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

export default GridSponsor
