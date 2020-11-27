import React, { Component } from 'react';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import $ from 'jquery';
import swal from 'sweetalert';
// import Moment from 'react-moment';


export class GridGuidelines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        var data;
        axios({
            method: 'get',
            url: Serverurl + 'guideline/list',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(res => {
            console.log('res', res.data.data)
            console.log('hey', res.data)
            this.setState({
                data: res.data.data,
            })
            $(document).ready(function () {
                $('#datatable2').DataTable();
            });
            console.log('data', res.data.data)
        }).catch((err) => {
            console.log(err)
            if (err) {
                console.log('err', err.response)
                console.log({ err })
            }
        })
    }

    delete(id) {
        localStorage.setItem('deleteGuide', id)
        console.log("guideId", id)
    }

    deleteBooking() {
        var id = localStorage.getItem("deleteGuide")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }
        axios({
            method: 'DELETE',
            url: Serverurl + 'guideline/remove',
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
                    swal("Poof! Your imaginary file has been deleted!", {
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

    viewGuide(id) {
        localStorage.setItem("guide", id)
        console.log(id)
        window.location.href = "/component/ViewGuidelines"
    }

    editGuide(id) {
        localStorage.setItem('Guideid', id)
        console.log(id)
        window.location.href = "/component/UpdateGuidelines"
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
                                            <h4>List Guidelines</h4>
                                        </div>
                                        <div class="button-align">
                                            <a href="/component/CreateGuidelines" type="button" class="btn btn-danger waves-effect waves-light submit-button">Create Guidelines +</a>
                                        </div>
                                    </div>
                                    <div class="">
                                        <table id="datatable2" class="table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.data.map((guide) =>
                                                    <tr key={guide.id}>
                                                        <td>{guide.title}</td>
                                                        <td>{guide.detail}</td>
                                                        <td>
                                                            <div class="icon-pad">
                                                                <a href="/component/UpdateGuidelines" onClick={this.editGuide.bind(this, guide.id)}><i className="fas fa-pencil-alt"></i></a>
                                                                <a href="/component/ViewGuidelines" onClick={this.viewGuide.bind(this, guide.id)}><i className="fas fa-eye"></i></a>
                                                                <a data-toggle="modal" data-target="#userEdit" onClick={this.delete.bind(this, guide.id)}><i className="fas fa-trash-alt"></i></a>
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
                                        <h5 className="modal-title" id="exampleModalLabel">Guidelines Delete</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            <strong>
                                                You're about to delete a Guideline from this page. Are you sure?
                                            </strong>
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.deleteBooking.bind(this)}>Delete</button>
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


export default GridGuidelines
