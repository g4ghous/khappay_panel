import pro3 from '../component/assets/images/users/pro.png';
import React, { Component } from 'react';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import $ from 'jquery';
import swal from 'sweetalert';



export class GridTerms extends Component {
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
            url: Serverurl + 'term-and-condition/list',
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
        localStorage.setItem('deleteTerm', id)
        console.log("Termid", id)
    }

    deleteTerm() {
        var id = localStorage.getItem('deleteTerm')
        console.log(id)
        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'DELETE',
            url: Serverurl + 'term-and-condition/remove',
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


    viewTerm(id) {
        localStorage.setItem('viewId', id)
        console.log(id)
        window.location.href = "/component/ViewTerms"
    }

    editTerm(id) {
        localStorage.setItem('viewId', id)
        console.log(id)
        window.location.href = "/component/UpdateTerms"
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
                                            <h4>List Term & Condition</h4>
                                        </div>
                                        <div className="button-package">
                                            <div class="button-create-packae">
                                                <a href="/component/CreateTerms" type="button" class="btn btn-danger waves-effect waves-light submit-button">Create Term & Condition +</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-3">
                                        <table id="datatable2" class="table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                    <th>Actions</th>

                                                </tr>
                                            </thead>


                                            <tbody>
                                                {this.state.data.map((term) =>
                                                    <tr>
                                                        <td>{term.title}</td>
                                                        <td>{term.detail}</td>
                                                        <td>
                                                            <div class="icon-pad">
                                                                <a onClick={this.editTerm.bind(this, term.id)}><i className="fas fa-pencil-alt"></i></a>
                                                                <a onClick={this.viewTerm.bind(this, term.id)}><i className="fas fa-eye"></i></a>
                                                                <a onClick={this.delete.bind(this, term.id)} data-toggle="modal" data-target="#userEdit"><i className="fas fa-trash-alt"></i></a>
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
                                        <h5 className="modal-title" id="exampleModalLabel">Term & Condition Delete</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            <strong>
                                                You're about to delete a Term & Condition from this page. Are you sure?
                                            </strong>
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.deleteTerm.bind(this)}>Delete</button>
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

export default GridTerms
