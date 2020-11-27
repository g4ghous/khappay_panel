import React, { Component } from 'react';
import { ServerurllogRegister, Serverurl } from '../Common/ServerUrl';
import axios from 'axios';
import swal from 'sweetalert';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'

export class UploadEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file:"",
            file_zip: "",
            ExcelFile: "",
            ExcelFile2: "",
            loading: false,
            loading_image: false
        };
    }



    eventsImportImages(e) {

        



        // if (CheckSeen == true) {
        //     validation = false;
        //     this.setState({
        //         errorText: "*File must be of .csv format"
        //     })
        // }




        
    }


    eventsImport(e) {

        

        console.log("excel:", this.state.ExcelFile)

        console.log("excel:", this.state.ExcelFile.name)

        var Status = this.state.ExcelFile.name;

        var CheckSeen = Status.includes('.csv')

        console.log("Status:", CheckSeen)

        var validation = true;

        
        console.log("excel:", this.state.ExcelFile2)

        console.log("excel:", this.state.ExcelFile2.name)

        var Status = this.state.ExcelFile2.name;

        var CheckSeen = Status.includes('.csv')

        console.log("Status:", CheckSeen)

        var validation = true;

        if (validation == true) {

            let formData = new FormData();
            formData.append('file', this.state.ExcelFile2)



            this.setState({
                loading_image: true
            })

            // console.log('mydata', data)

            var error = document.getElementById('err');
            axios({
                method: 'post',
                url: Serverurl + 'event/image/bulkupload',
                data: formData,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                config: {
                    headers: { 'Content-Type': 'application/json' }
                }
            })
                .then((res) => {
                 
                    console.log('res', res.data)
                    if (res.status === "true") {
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                        this.setState({
                            loading: false
                        })
                    } else {
                        swal("Event Images & CSV Uploaded Successfully!");
                    }
                    // setTimeout(() => {
                    //     window.location.href = "/component/UploadEvents"
                    // }, 3000)
                    console.log('data', res.data)
                })
                .catch((err) => {
                    console.log({ err })

                    console.log("res", err.response)

                    var error_message = err.response.data.error.messages;

                    console.log("error_excel", error_message[0])

                    if (err) {
                        this.setState({
                            loading: false
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


        // if (CheckSeen == true) {
        //     validation = false;
        //     this.setState({
        //         errorText: "*File must be of .csv format"
        //     })
        // }


        if (this.state.file == "") {
            validation = false;
            this.setState({
                errorText: "*File Import is required"
            })
        }

        


        if (validation == true) {

            let formData = new FormData();
            formData.append('file', this.state.ExcelFile)



            this.setState({
                loading: true
            })

            // console.log('mydata', data)

            var error = document.getElementById('err');
            axios({
                method: 'post',
                url: Serverurl + 'event/import',
                data: formData,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                config: {
                    headers: { 'Content-Type': 'application/json' }
                }
            })
                .then((res) => {
                 
                    console.log('res', res.data)
                    if (res.status === "true") {
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                        this.setState({
                            loading: false
                        })
                    } else {
                        swal("Events Added Successfully!");
                    }
                    setTimeout(() => {
                        window.location.href = "/component/GridEvents"
                    }, 3000)
                    console.log('data', res.data)
                })
                .catch((err) => {
                    console.log({ err })

                    console.log("res", err.response)

                    var error_message = err.response.data.error.messages;

                    console.log("error_excel", error_message[0])

                    if (err) {
                        this.setState({
                            loading: false
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




    handleFileInput = (event) => {
        console.log(event.target.files, 'file')
        console.log(event.target.files[0], 'file 0')
        let file_1 = event.target.files[0]
        this.setState({
            file: file_1,
            errorText: ""
        })
        if (event.target.files) {
            this.setState({
                [event.target.name]: event.target.files[0],
                file: URL.createObjectURL(event.target.files[0]),
                ExcelFile: event.target.files[0]
            })
        }
      
        console.log("File:", event.target.files[0])
    }


    handleFileInputImages = (event) => {
        console.log(event.target.files, 'file')
        console.log(event.target.files[0], 'file 0')
        let file_2 = event.target.files[0]
        this.setState({
            file_zip: file_2,
            errorText: ""
        })
        if (event.target.files) {
            this.setState({
                [event.target.name]: event.target.files[0],
                file_zip: URL.createObjectURL(event.target.files[0]),
                ExcelFile2: event.target.files[0]
            })
        }
      
        console.log("File:", event.target.files[0])
    }

    render() {
        return (
            <div>
                
                <div class="container">
                    <div class="row">
                        <div class="col-lg-11 col-md-12 card">
                            <div class="parent">
                                <h4 class="mt-0 header-title">Upload Events</h4>
                                <div className="form-padding">
                                    <div class="form-group row input-margin">
                                        <label class="col-sm-2 col-form-label">ZIP File</label>
                                        <div class="col-sm-10">
                                            <input type="file" id="input-file-now" class="dropify" name="file" onChange={this.handleFileInputImages.bind(this)} />
                                        </div>
                                    </div>

                                    {this.state.errorText ?
                                        <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                        : null
                                    }


                                    {/* <div class="form-group row">
                                        <div class="button-align">
                                            <button type="button" class="btn btn-danger waves-effect waves-light submit-button" onClick={this.eventsImportImages.bind(this)}>
                                                {this.state.loading_image == true ? 
                                                <Loader
                                                type="Circles"
                                                color="#FFF"
                                                height={20}
                                                width={20}
                                                timeout={8000} 
                                        
                                             />
                                             :
                                                "Submit"
                                        }
                                                </button>
                                        </div>
                                    </div> */}
                                </div>

                                <div className="form-padding">
                                    <div class="form-group row input-margin">
                                        <label class="col-sm-2 col-form-label">CSV/Excel File</label>
                                        <div class="col-sm-10">
                                            <input type="file" id="input-file-now" class="dropify" name="file" onChange={this.handleFileInput.bind(this)} />
                                        </div>
                                    </div>

                                    {this.state.errorText ?
                                        <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                        : null
                                    }


                                    <div class="form-group row">
                                        <div class="button-align">
                                            <button type="button" class="btn btn-danger waves-effect waves-light submit-button" onClick={this.eventsImport.bind(this)}>
                                                {this.state.loading == true ? 
                                                <Loader
                                                type="Circles"
                                                color="#FFF"
                                                height={20}
                                                width={20}
                                                timeout={8000} 
                                        
                                             />
                                             :
                                                "Submit"
                                        }
                                                </button>
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

export default UploadEvents
