import React, { Component } from 'react';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import $ from 'jquery';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import swal from 'sweetalert';

var DataRows;

export class GridEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            title: "",
            address: "",
            event_date_time: "",
            event_type_id: "",
            country_id: "",
            state_id: "",
            city_id: "",
            area_id: "",
            imam_bargah_id: "",
            manqabat_khuwan_id: "",
            noha_khuwan_id: "",
            zakir_id: "",
            islamic_date: "",
            FileStatus: false
        }
    }

    componentDidMount() {
        var data;
        axios({
            method: 'get',
            url: Serverurl + "event/all",
            data: data,
            headers: {
                'Authorization':  `Bearer ${localStorage.getItem('token')}`,
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

    // fileHandler = (event) => {
    //     let fileObj = event.target.files[0];
    
    //     if(fileObj){
    //         this.setState({
    //             FileStatus: true
    //         })
    //     }

    //     //just pass the fileObj as parameter
    //     ExcelRenderer(fileObj, (err, resp) => {
    //       if(err){
    //         console.log(err);            
    //       }


    //       var row_title = resp.rows[1][0]
    //       var row_address = resp.rows[1][1]
    //       var row_date = JSON.parse(resp.rows[1][2])
    //       var row_id = resp.rows[1][3]

    //       DataRows = resp.rows;

    //       for(var i = 1; i < DataRows.length; i++){
    //         console.log("For Loop", DataRows[i][0])
    //     }

    //     console.log("response", resp)
    //     console.log("response-col", resp.cols)
    //     console.log("response-rows", resp.rows)
    //     console.log("response-title", row_title)
    //     console.log("response-address", row_address)
    //     console.log("response-date", row_date)
    //     console.log("response-id", row_id)

    //     console.log("Data:", DataRows)

    //     this.setState({
    //         title : row_title,
    //         address : row_address,
    //         event_date_time : row_date,
    //         event_type_id : row_id
    //     })

    //     });     
    // }
    
    // SubmitExcelData(){

    //     var Status = false;

    //     for(var i = 1; i < DataRows.length; i++){
    //         console.log("For Loop", DataRows[i][0])

    //         for(var j = 0; j < this.state.data.length; j++){

    //             if(this.state.data[j].title == DataRows[i][0]){
    //                 console.log("Status")
    //                 Status = true;
    //             }
    //         }
        
    //         if(Status == false){
    //     var data = {
    //         title: DataRows[i][0],
    //         address: DataRows[i][1],
    //         event_date_time: JSON.parse(DataRows[i][2]),
    //         event_type_id: DataRows[i][3],
    //         country_id: DataRows[i][4],
    //         state_id: DataRows[i][5],
    //         city_id: DataRows[i][6],
    //         area_id: DataRows[i][7],
    //         imam_bargah_id: DataRows[i][8],
    //         manqabat_khuwan_id: DataRows[i][9],
    //         noha_khuwan_id: DataRows[i][10],
    //         zakir_id: DataRows[i][11],
    //         islamic_date: JSON.parse(DataRows[i][12]),
    //     }

    //     console.log("Api Data:", data)

    //     axios({
    //         method: 'post',
    //         url: Serverurl + 'event/create',
    //         data: data,
    //         headers: {
    //             'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //         },
    //         config: {
    //             headers: { 'Content-Type': 'application/json' }
    //         }
    //     })
    //         .then((res) => {
    //             console.log('res', res.data)
    //             if (res.status === "true") {
    //                 swal("Poof! Your imaginary file has been deleted!", {
    //                     icon: "success",
    //                 });
    //                 this.setState({
    //                     loading: true
    //                 })
    //             } else {
    //                 swal("Events Added Successfully!");
    //             }
    //             setTimeout(() => {
    //                 // window.location.href = "/component/GridEvents"
    //             }, 3000)
    //             console.log('data', res.data)
    //         })
    //         .catch((err) => {
    //             console.log({ err })

    //             console.log("res", err.response)

    //             if (err) {
    //                 this.setState({
    //                     loading: true
    //                 })
    //                 setTimeout(() => {
    //                     this.setState({
    //                         loading: false
    //                     })
    //                     this.setState((willSuccess) => {
    //                         if (willSuccess) {
    //                             swal("Something went wrong!", {
    //                                 icon: "warning",
    //                             });
    //                         } else {
    //                             swal("Your imaginary file is safe!");
    //                         }
    //                     })
    //                 }, 3000)
    //             }
    //         })
    // }
    // else{
    //     this.setState((willSuccess) => {
    //                             if (willSuccess) {
    //                                 swal("Already Added Events in Uploaded File!", {
    //                                     icon: "warning",
    //                                 });
    //                             } else {
    //                                 swal("Your imaginary file is safe!");
    //                             }
    //                         })
    // }

    //     }
    // }
    

    viewEvent(id) {
        localStorage.setItem('eventId', id)
        console.log(id)
        window.location.href = "/component/ViewEvents"

    }


    delete(id) {
        localStorage.setItem('deleteEvent', id)
        // console.log("idp", id)
    }

    deleteBooking() {
        // var id = localStorage.getItem("deleteEvent")

        // var Check = parseInt(id)

        // this.setState({
        //     GuideId: Check,
        // })

        var data = {
            'id': localStorage.getItem("deleteEvent")
        }

        axios({
            method: 'DELETE',
            url: Serverurl + 'event/remove',
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

    editEvent(id) {
        localStorage.setItem('updateId', id)
        console.log(id)
        window.location.href = "/component/UpdateEvents"
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
                                            <h4>List Events</h4>
                                        </div>
                                        <div class="button-align">
                                            <a href="/component/CreateEvents" type="button" class="btn btn-danger waves-effect waves-light submit-button">Create Events +</a>
                                        </div>
                                    </div>
                                    <div className="event-import">
                                    {/* <input type="file" onChange={this.fileHandler.bind(this)} style={{"padding":"10px"}} />
                                   {this.state.FileStatus ? */}
                                    <div class="button-align">
                                            <a type="button" href="/component/UploadEvents" class="btn btn-danger waves-effect waves-light submit-button">Import Events</a>
                                        </div>
                                        {/* : null } */}
                                    </div>
                                    <div class="table-3">
                                        <table id="datatable2" class="table">
                                            <thead>
                                                <tr>
                                                    <th>Event Name</th>
                                                    <th>Imam Bargah</th>
                                                    <th>Event Type</th>
                                                    <th>Country</th>
                                                    <th>Address</th>
                                                    <th>Date and Time</th>
                                                    <th>Status</th>
                                                    <th>Online Link</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.data.map((event) =>
                                                    <tr key={event.id}>
                                                        <td>{event.title}</td>
                                                        <td>{event.imam_bargah}</td>
                                                        <td>{event.event_type}</td>
                                                        <td>{event.country}</td>
                                                        <td>{event.address}</td>
                                                        <td>{event ? event.event_date_time : ''}</td>
                                                <td>{event.status}</td>
                                                        <td>{event.online_link}</td>
                                                        <td>
                                                            <div class="icon-pad">
                                                                <a onClick={this.editEvent.bind(this, event.id)}><i className="fas fa-pencil-alt"></i></a>
                                                                <a onClick={this.viewEvent.bind(this, event.id)}><i className="fas fa-eye"></i></a>
                                                                <a data-toggle="modal" data-target="#userEdit" onClick={this.delete.bind(this, event.id)}><i className="fas fa-trash-alt"></i></a>
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
                                        <h5 className="modal-title" id="exampleModalLabel">Event Delete</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            <strong>
                                                You're about to delete an Event from this page. Are you sure?
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

export default GridEvents
