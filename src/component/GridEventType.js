import React, { Component } from 'react';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import $ from 'jquery';
import datatable from 'datatables';
import '../component/assets/plugins/datatables/dataTables.bootstrap4.min.css';
import swal from 'sweetalert';
import avatar2 from '../component/assets/images/users/avatar2.jpg';



export class GridEventType extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            errorText: '',
            id: '',
            GuideId: '',
        }
    }

    componentDidMount() {
        var data;
        axios({
            method: 'get',
            url: Serverurl + 'event-type/list',
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
        localStorage.setItem('deleteDeal', id)
        console.log("id", id)
    }

    deleteManqabat() {

        var id = localStorage.getItem("deleteDeal")
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
            url: Serverurl + 'event-type/remove',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        })

            .then((res) => {
                console.log('res', res.data.data)
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

    viewEventType(id) {
        localStorage.setItem('viewEventId', id)
        console.log(id)
        window.location.href = "/component/ViewEventType"

    }

    editEventType(id) {
        localStorage.setItem('eventId', id)
        console.log(id)
        window.location.href = "/component/UpdateEventType"
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
                                            <h4>Add Event Type</h4>
                                        </div>
                                        <div class="button-align">
                                            <a href="/component/CreateEventType" type="button" class="btn btn-danger waves-effect waves-light submit-button">Create Event-Type +</a>
                                        </div>
                                    </div>
                                    <div class="table-3">
                                        <table id="datatable2" class="table">
                                            <thead>
                                                <tr>
                                                    <th>Name </th>
                                                    <th>Image</th>
                                                    <th>Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.data.map((events) =>
                                                    <tr key={events.id}>
                                                        <td>{events.title}</td>
                                                        <td><center><img class="rounded-circle" src={avatar2} alt="user" width="30" height="30" /></center></td>
                                                        <td>
                                                            <div class="icon-pad">
                                                                <a onClick={this.editEventType.bind(this, events.id)}><i className="fas fa-pencil-alt"></i></a>{}
                                                                <a onClick={this.viewEventType.bind(this, events.id)}><i className="fas fa-eye"></i></a>
                                                                <a data-toggle="modal" data-target="#userEdit" onClick={this.delete.bind(this, events.id)}><i className="fas fa-trash-alt"></i></a>
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
                                        <h5 className="modal-title" id="exampleModalLabel">Event-Type Delete</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            <strong>
                                                You're about to delete an Event-Type from this page. Are you sure?
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

export default GridEventType

