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
            area:[],
            name: '',
            name_ur: '',
            errorText: '',
            id: '',
            GuideId: '',
        }
    }

    componentDidMount() {
        var data, zakir, noha, munqabat;
        axios({
            method: 'get',
            url: Serverurl + 'imam-bargah/list',
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
                // console.log('err', err.response)
                console.log({ err })
            }
        })

        axios({
            method: 'get',
            url: Serverurl + 'zakir/list',
            data: zakir,
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
                zakir: res.data.data,
            })
            $(document).ready(function () {
                $('#datatable3').DataTable();
            });
            // console.log('data', res.data.data)
        }).catch((err) => {
            console.log(err)
            if (err) {
                // console.log('err', err.response)
                console.log({ err })
            }
        })

        axios({
            method: 'get',
            url: Serverurl + 'noha-khuwan/list',
            data: noha,
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
                noha: res.data.data,
            })
            $(document).ready(function () {
                $('#datatable4').DataTable();
            });
            // console.log('data', res.data.data)
        }).catch((err) => {
            console.log(err)
            if (err) {
                // console.log('err', err.response)
                console.log({ err })
            }
        })

        axios({
            method: 'get',
            url: Serverurl + 'manqabat-khuwan/list',
            data: munqabat,
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
                munqabat: res.data.data,
            })
            $(document).ready(function () {
                $('#datatable5').DataTable();
            });
            // console.log('data', res.data.data)
        }).catch((err) => {
            console.log(err)
            if (err) {
                // console.log('err', err.response)
                console.log({ err })
            }
        })

        var area;
        axios({
            method: 'get',
            url: Serverurl + 'area/list',
            data: area,
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
                area: res.data.data,
            })
            $(document).ready(function () {
                $('#datatable6').DataTable();
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

    

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ''
        })
    }

    imamBargah(e) {
        e.preventDefault();


        var validation = true;

        if (this.state.name == "") {
            validation = false;
            this.setState({
                errorText: "*Imam Bargah Name is required"
            })
        }

        // if (this.state.detail == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*اسم الحملة مطلوب"
        //     })
        // }

        if (this.state.name_ur == "") {
            validation = false;
            this.setState({
                errorText: "*امام بارگاہ نام ضروری ہے"
            })
        }

        // if (this.state.detail_ur == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*Campaign Status is required"
        //     })
        // }

        if (validation == true) {

            let formData = new FormData();
            formData.append('name', this.state.name)
            formData.append('name_ur', this.state.name_ur)
            // formData.append('banner_thumbnail', this.state.banner_thumbnail)

            // var data = {
            //     title: this.state.title,
            //     detail: this.state.detail,
            //     title_ur: this.state.title_ur,
            //     detail_ur: this.state.detail_ur
            // }
            this.setState({
                loading: true
            })

            // console.log('mydata', data)

            var error = document.getElementById('err');
            if (this.state.name === "" ||
                this.state.status === ""
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
                    url: Serverurl + 'imam-bargah/create',
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
                                loading: true
                            })
                        } else {
                            swal("Imam Bargah Succesfully Created!");
                        }
                        setTimeout(() => {
                            window.location.href = "/component/GridEventList"
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
        }
    }

    area(e) {
        e.preventDefault();


        var validation = true;

        if (this.state.name == "") {
            validation = false;
            this.setState({
                errorText: "*Area Name is required"
            })
        }

        // if (this.state.detail == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*اسم الحملة مطلوب"
        //     })
        // }

        if (this.state.name_ur == "") {
            validation = false;
            this.setState({
                errorText: "*علاقے کا نام ضروری ہے"
            })
        }

        // if (this.state.detail_ur == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*Campaign Status is required"
        //     })
        // }

        if (validation == true) {

            let formData = new FormData();
            formData.append('name', this.state.name)
            formData.append('name_ur', this.state.name_ur)
            // formData.append('banner_thumbnail', this.state.banner_thumbnail)

            // var data = {
            //     title: this.state.title,
            //     detail: this.state.detail,
            //     title_ur: this.state.title_ur,
            //     detail_ur: this.state.detail_ur
            // }
            this.setState({
                loading: true
            })

            // console.log('mydata', data)

            var error = document.getElementById('err');
            if (this.state.name === "" ||
                this.state.status === ""
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
                    url: Serverurl + 'area/create',
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
                                loading: true
                            })
                        } else {
                            swal("Area Succesfully Updated!");
                        }
                        setTimeout(() => {
                            window.location.href = "/component/GridEventList"
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
        }
    }

    zakir(e) {
        e.preventDefault();


        var validation = true;

        if (this.state.name == "") {
            validation = false;
            this.setState({
                errorText: "*Zakir Name is required"
            })
        }

        // if (this.state.detail == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*اسم الحملة مطلوب"
        //     })
        // }

        if (this.state.name_ur == "") {
            validation = false;
            this.setState({
                errorText: "*ذاکر نام ضروری ہے"
            })
        }

        // if (this.state.detail_ur == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*Campaign Status is required"
        //     })
        // }

        if (validation == true) {

            let formData = new FormData();
            formData.append('name', this.state.name)
            formData.append('name_ur', this.state.name_ur)
            // formData.append('banner_thumbnail', this.state.banner_thumbnail)

            // var data = {
            //     title: this.state.title,
            //     detail: this.state.detail,
            //     title_ur: this.state.title_ur,
            //     detail_ur: this.state.detail_ur
            // }
            this.setState({
                loading: true
            })

            // console.log('mydata', data)

            var error = document.getElementById('err');
            if (this.state.name === "" ||
                this.state.status === ""
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
                    url: Serverurl + 'zakir/create',
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
                                loading: true
                            })
                        } else {
                            swal("Zakir Succesfully Created!");
                        }
                        setTimeout(() => {
                            window.location.href = "/component/GridEventList"
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
        }
    }

    noha(e) {
        e.preventDefault();


        var validation = true;

        if (this.state.name == "") {
            validation = false;
            this.setState({
                errorText: "*Noha Khuwan Name is required"
            })
        }

        // if (this.state.detail == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*اسم الحملة مطلوب"
        //     })
        // }

        if (this.state.name_ur == "") {
            validation = false;
            this.setState({
                errorText: "*نوحہ خوان نام کی ضرورت ہے"
            })
        }

        // if (this.state.detail_ur == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*Campaign Status is required"
        //     })
        // }

        if (validation == true) {

            let formData = new FormData();
            formData.append('name', this.state.name)
            formData.append('name_ur', this.state.name_ur)
            // formData.append('banner_thumbnail', this.state.banner_thumbnail)

            // var data = {
            //     title: this.state.title,
            //     detail: this.state.detail,
            //     title_ur: this.state.title_ur,
            //     detail_ur: this.state.detail_ur
            // }
            this.setState({
                loading: true
            })

            // console.log('mydata', data)

            var error = document.getElementById('err');
            if (this.state.name === "" ||
                this.state.status === ""
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
                    url: Serverurl + 'noha-khuwan/create',
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
                                loading: true
                            })
                        } else {
                            swal("Noha Khuwan Succesfully Created!");
                        }
                        setTimeout(() => {
                            window.location.href = "/component/GridEventList"
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
        }
    }

    munqabat(e) {
        e.preventDefault();


        var validation = true;

        if (this.state.name == "") {
            validation = false;
            this.setState({
                errorText: "*Manqabat Khuwan Name is required"
            })
        }

        // if (this.state.detail == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*اسم الحملة مطلوب"
        //     })
        // }

        if (this.state.name_ur == "") {
            validation = false;
            this.setState({
                errorText: "*منقبت خوان نام کی ضرورت ہے"
            })
        }

        // if (this.state.detail_ur == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*Campaign Status is required"
        //     })
        // }

        if (validation == true) {

            let formData = new FormData();
            formData.append('name', this.state.name)
            formData.append('name_ur', this.state.name_ur)
            // formData.append('banner_thumbnail', this.state.banner_thumbnail)

            // var data = {
            //     title: this.state.title,
            //     detail: this.state.detail,
            //     title_ur: this.state.title_ur,
            //     detail_ur: this.state.detail_ur
            // }
            this.setState({
                loading: true
            })

            // console.log('mydata', data)

            var error = document.getElementById('err');
            if (this.state.name === "" ||
                this.state.status === ""
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
                    url: Serverurl + 'manqabat-khuwan/create',
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
                                loading: true
                            })
                        } else {
                            swal("Munqabat Khuwan Succesfully Created!");
                        }
                        setTimeout(() => {
                            window.location.href = "/component/GridEventList"
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
        }
    }

    updateAreaId(id) {
        localStorage.setItem("arId", id)
        console.log("bargah", id)

        var id = localStorage.getItem("arId")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'get',
            url: Serverurl + 'area/view',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }
        })

            .then((res) => {
                console.log('res', res)
                console.log('res2', res.data)
                if (res.status === 'true') {
                    console.log(data)
                }
                this.setState({
                    name: res.data.name,
                    name_ur: res.data.name_ur,
                })
                console.log('data', data)
            })
    }

    updateArea(e) {
        e.preventDefault();


        var validation = true;

        if (this.state.name == "") {
            validation = false;
            this.setState({
                errorText: "*Campaign Name is required"
            })
        }

        // if (this.state.detail == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*اسم الحملة مطلوب"
        //     })
        // }

        if (this.state.name_ur == "") {
            validation = false;
            this.setState({
                errorText: "*Campaign Status is required"
            })
        }

        // if (this.state.detail_ur == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*Campaign Status is required"
        //     })
        // }

        if (validation == true) {

            var id = localStorage.getItem("arId")

            var Check = parseInt(id)

            this.setState({
                GuideId: Check,
            })

            let formData = new FormData();
            formData.append('name', this.state.name)
            formData.append('name_ur', this.state.name_ur)
            formData.append('id', Check)
            // formData.append('banner_thumbnail', this.state.banner_thumbnail)

            // var data = {
            //     title: this.state.title,
            //     detail: this.state.detail,
            //     title_ur: this.state.title_ur,
            //     detail_ur: this.state.detail_ur
            // }
            this.setState({
                loading: true
            })

            // console.log('mydata', data)

            var error = document.getElementById('err');
            if (this.state.name === "" ||
                this.state.status === ""
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
                    url: Serverurl + 'area/update',
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
                                loading: true
                            })
                        } else {
                            swal("Area Updated Succesfully!");
                        }
                        setTimeout(() => {
                            window.location.href = "/component/GridEventList"
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
        }
    }

    updateImamBargahId(id) {
        localStorage.setItem("BargahId", id)
        console.log("bargah", id)

        var id = localStorage.getItem("BargahId")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'get',
            url: Serverurl + 'imam-bargah/view',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }
        })

            .then((res) => {
                console.log('res', res)
                console.log('res2', res.data)
                if (res.status === 'true') {
                    console.log(data)
                }
                this.setState({
                    name: res.data.name,
                    name_ur: res.data.name_ur,
                })
                console.log('data', data)
            })
    }

    updateImamBargah(e) {
        e.preventDefault();


        var validation = true;

        if (this.state.name == "") {
            validation = false;
            this.setState({
                errorText: "*Campaign Name is required"
            })
        }

        // if (this.state.detail == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*اسم الحملة مطلوب"
        //     })
        // }

        if (this.state.name_ur == "") {
            validation = false;
            this.setState({
                errorText: "*Campaign Status is required"
            })
        }

        // if (this.state.detail_ur == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*Campaign Status is required"
        //     })
        // }

        if (validation == true) {

            var id = localStorage.getItem("Privacy")

            var Check = parseInt(id)

            this.setState({
                GuideId: Check,
            })

            let formData = new FormData();
            formData.append('name', this.state.name)
            formData.append('name_ur', this.state.name_ur)
            formData.append('id', Check)
            // formData.append('banner_thumbnail', this.state.banner_thumbnail)

            // var data = {
            //     title: this.state.title,
            //     detail: this.state.detail,
            //     title_ur: this.state.title_ur,
            //     detail_ur: this.state.detail_ur
            // }
            this.setState({
                loading: true
            })

            // console.log('mydata', data)

            var error = document.getElementById('err');
            if (this.state.name === "" ||
                this.state.status === ""
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
                    url: Serverurl + 'imam-bargah/update',
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
                                loading: true
                            })
                        } else {
                            swal("Imam Bargah Updated Succesfully!");
                        }
                        setTimeout(() => {
                            window.location.href = "/component/GridEventList"
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
        }
    }

    zakirId(id) {
        localStorage.setItem("zak", id)
        console.log("zak", id)

        var id = localStorage.getItem("zak")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'get',
            url: Serverurl + 'zakir/view',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }
        })

            .then((res) => {
                console.log('res', res)
                console.log('res2', res.data)
                if (res.status === 'true') {
                    console.log(data)
                }
                this.setState({
                    name: res.data.name,
                    name_ur: res.data.name_ur,
                })
                console.log('data', data)
            })
    }

    updateZakir(e) {
        e.preventDefault();


        var validation = true;

        if (this.state.name == "") {
            validation = false;
            this.setState({
                errorText: "*Campaign Name is required"
            })
        }

        // if (this.state.detail == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*اسم الحملة مطلوب"
        //     })
        // }

        if (this.state.name_ur == "") {
            validation = false;
            this.setState({
                errorText: "*Campaign Status is required"
            })
        }

        // if (this.state.detail_ur == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*Campaign Status is required"
        //     })
        // }

        if (validation == true) {

            var id = localStorage.getItem("zak")

            var Check = parseInt(id)

            this.setState({
                GuideId: Check,
            })

            let formData = new FormData();
            formData.append('name', this.state.name)
            formData.append('name_ur', this.state.name_ur)
            formData.append('id', Check)
            // formData.append('banner_thumbnail', this.state.banner_thumbnail)

            // var data = {
            //     title: this.state.title,
            //     detail: this.state.detail,
            //     title_ur: this.state.title_ur,
            //     detail_ur: this.state.detail_ur
            // }
            this.setState({
                loading: true
            })

            // console.log('mydata', data)

            var error = document.getElementById('err');
            if (this.state.name === "" ||
                this.state.status === ""
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
                    url: Serverurl + 'zakir/update',
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
                                loading: true
                            })
                        } else {
                            swal("Zakir Succesfully Created!");
                        }
                        setTimeout(() => {
                            window.location.href = "/component/GridEventList"
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
        }
    }

    NohaId(id) {
        localStorage.setItem("noha", id)
        console.log("noha", id)

        var id = localStorage.getItem("noha")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'get',
            url: Serverurl + 'noha-khuwan/view',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }
        })

            .then((res) => {
                console.log('res', res)
                console.log('res2', res.data)
                if (res.status === 'true') {
                    console.log(data)
                }
                this.setState({
                    name: res.data.name,
                    name_ur: res.data.name_ur,
                })
                console.log('data', data)
            })
    }

    updateNoha(e) {
        e.preventDefault();


        var validation = true;

        if (this.state.name == "") {
            validation = false;
            this.setState({
                errorText: "*Campaign Name is required"
            })
        }

        // if (this.state.detail == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*اسم الحملة مطلوب"
        //     })
        // }

        if (this.state.name_ur == "") {
            validation = false;
            this.setState({
                errorText: "*Campaign Status is required"
            })
        }

        // if (this.state.detail_ur == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*Campaign Status is required"
        //     })
        // }

        if (validation == true) {

            var id = localStorage.getItem("noha")

            var Check = parseInt(id)

            this.setState({
                GuideId: Check,
            })

            let formData = new FormData();
            formData.append('name', this.state.name)
            formData.append('name_ur', this.state.name_ur)
            formData.append('id', Check)
            // formData.append('banner_thumbnail', this.state.banner_thumbnail)

            // var data = {
            //     title: this.state.title,
            //     detail: this.state.detail,
            //     title_ur: this.state.title_ur,
            //     detail_ur: this.state.detail_ur
            // }
            this.setState({
                loading: true
            })

            // console.log('mydata', data)

            var error = document.getElementById('err');
            if (this.state.name === "" ||
                this.state.status === ""
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
                    url: Serverurl + 'noha-khuwan/update',
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
                                loading: true
                            })
                        } else {
                            swal("Noha Khuwan Succesfully Created!");
                        }
                        setTimeout(() => {
                            window.location.href = "/component/GridEventList"
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
        }
    }

    manqabatId(id) {
        localStorage.setItem("man", id)
        console.log("man", id)

        var id = localStorage.getItem("man")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'get',
            url: Serverurl + 'manqabat-khuwan/view',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }
        })

            .then((res) => {
                console.log('res', res)
                console.log('res2', res.data)
                if (res.status === 'true') {
                    console.log(data)
                }
                this.setState({
                    name: res.data.name,
                    name_ur: res.data.name_ur,
                })
                console.log('data', data)
            })
    }

    updateManqabat(e) {
        e.preventDefault();


        var validation = true;

        if (this.state.name == "") {
            validation = false;
            this.setState({
                errorText: "*Campaign Name is required"
            })
        }

        // if (this.state.detail == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*اسم الحملة مطلوب"
        //     })
        // }

        if (this.state.name_ur == "") {
            validation = false;
            this.setState({
                errorText: "*Campaign Status is required"
            })
        }

        // if (this.state.detail_ur == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*Campaign Status is required"
        //     })
        // }

        if (validation == true) {

            var id = localStorage.getItem("man")

            var Check = parseInt(id)

            this.setState({
                GuideId: Check,
            })

            let formData = new FormData();
            formData.append('name', this.state.name)
            formData.append('name_ur', this.state.name_ur)
            formData.append('id', Check)
            // formData.append('banner_thumbnail', this.state.banner_thumbnail)

            // var data = {
            //     title: this.state.title,
            //     detail: this.state.detail,
            //     title_ur: this.state.title_ur,
            //     detail_ur: this.state.detail_ur
            // }
            this.setState({
                loading: true
            })

            // console.log('mydata', data)

            var error = document.getElementById('err');
            if (this.state.name === "" ||
                this.state.status === ""
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
                    url: Serverurl + 'manqabat-khuwan/update',
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
                                loading: true
                            })
                        } else {
                            swal("Munqabat Khuwan Succesfully Created!");
                        }
                        setTimeout(() => {
                            window.location.href = "/component/GridEventList"
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
        }
    }

    AreaView(id) {
        localStorage.setItem("BargahId", id)
        console.log("bargah", id)

        var id = localStorage.getItem("BargahId")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'get',
            url: Serverurl + 'area/view',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }
        })

            .then((res) => {
                console.log('res', res)
                console.log('res2', res.data)
                if (res.status === 'true') {
                    console.log(data)
                }
                this.setState({
                    name: res.data.name,
                    name_ur: res.data.name_ur,
                })
                console.log('data', data)
            })
    }


    imamBargahView(id) {
        localStorage.setItem("BargahId", id)
        console.log("bargah", id)

        var id = localStorage.getItem("BargahId")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'get',
            url: Serverurl + 'imam-bargah/view',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }
        })

            .then((res) => {
                console.log('res', res)
                console.log('res2', res.data)
                if (res.status === 'true') {
                    console.log(data)
                }
                this.setState({
                    name: res.data.name,
                    name_ur: res.data.name_ur,
                })
                console.log('data', data)
            })
    }

    zakirView(id) {
        localStorage.setItem("BargahId", id)
        console.log("bargah", id)

        var id = localStorage.getItem("BargahId")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'get',
            url: Serverurl + 'zakir/view',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }
        })

            .then((res) => {
                console.log('res', res)
                console.log('res2', res.data)
                if (res.status === 'true') {
                    console.log(data)
                }
                this.setState({
                    name: res.data.name,
                    name_ur: res.data.name_ur,
                })
                console.log('data', data)
            })
    }

    NohaView(id) {
        localStorage.setItem("BargahId", id)
        console.log("bargah", id)

        var id = localStorage.getItem("BargahId")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'get',
            url: Serverurl + 'noha-khuwan/view',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }
        })

            .then((res) => {
                console.log('res', res)
                console.log('res2', res.data)
                if (res.status === 'true') {
                    console.log(data)
                }
                this.setState({
                    name: res.data.name,
                    name_ur: res.data.name_ur,
                })
                console.log('data', data)
            })
    }

    manqabatView(id) {
        localStorage.setItem("BargahId", id)
        console.log("bargah", id)

        var id = localStorage.getItem("BargahId")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'get',
            url: Serverurl + 'manqabat-khuwan/view',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }
        })

            .then((res) => {
                console.log('res', res)
                console.log('res2', res.data)
                if (res.status === 'true') {
                    console.log(data)
                }
                this.setState({
                    name: res.data.name,
                    name_ur: res.data.name_ur,
                })
                console.log('data', data)
            })
    }

    deleteBargahId(id) {
        localStorage.setItem('deleteBargah', id)
        console.log("bargah", id)
    }

    deleteAreaId(id) {
        localStorage.setItem('deleteArea', id)
        console.log("bargah", id)
    }

    deleteBargah() {

        var id = localStorage.getItem("deleteBargah")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'DELETE',
            url: Serverurl + 'imam-bargah/remove',
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
            }).catch((err) => {
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

    deleteArea() {

        var id = localStorage.getItem("deleteArea")

        var data = {
            id: id
        }

        axios({
            method: 'DELETE',
            url: Serverurl + 'area/remove',
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

    deleteZakirId(id) {
        localStorage.setItem('zak', id)
        console.log("zak", id)
    }

    deleteZakir() {

        var id = localStorage.getItem("zak")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'DELETE',
            url: Serverurl + 'zakir/remove',
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

    deleteNohaId(id) {
        localStorage.setItem('deleteBargah', id)
        console.log("bargah", id)
    }

    deleteNoha() {

        var id = localStorage.getItem("deleteBargah")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'DELETE',
            url: Serverurl + 'noha-khuwan/remove',
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

    deleteManqabatId(id) {
        localStorage.setItem('deleteBargah', id)
        console.log("bargah", id)
    }

    deleteManqabat() {

        var id = localStorage.getItem("deleteBargah")

        var Check = parseInt(id)

        this.setState({
            GuideId: Check,
        })

        var data = {
            id: Check
        }

        axios({
            method: 'DELETE',
            url: Serverurl + 'manqabat-khuwan/remove',
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
                                            <h4>Event Objectives</h4>
                                        </div>
                                        {/* <div class="button-align">
                                            <a href="/component/createOffer" type="button" class="btn btn-danger waves-effect waves-light submit-button">Create Offers +</a>
                                        </div> */}
                                    </div>

                                    <div class="accordion" id="accordionExample">
                                    <div class="card">
                                            <div class="card-header" id="headingOne">
                                                <h2 class="mb-0">
                                                    <p>Area</p>
                                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOnee" aria-expanded="false" aria-controls="collapseOne">Click Here.</button>
                                                </h2>
                                            </div>

                                            <div id="collapseOnee" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <div className="favorite-creat">
                                                        <button className="btn" data-toggle="modal" data-target="#area">Create +</button>
                                                    </div>
                                                    <div class="table-3">
                                                        <table id="datatable6" class="table">
                                                            <thead>
                                                                <tr>
                                                                    {/* <th>Image</th> */}
                                                                    <th>Name</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>


                                                            <tbody>
                                                                {this.state.area.map((area) =>
                                                                    <tr key={area.id}>
                                                                        {/* <td><center><img class="rounded-circle" src={avatar2} alt="user" width="30" height="30" /></center></td> */}
                                                                        <td>{area.name}</td>
                                                                        <td>
                                                                            <div class="icon-pad">
                                                                                <a data-toggle="modal" data-target="#areaUpdate" onClick={this.updateAreaId.bind(this,area.id)}><i className="fas fa-pencil-alt"></i></a>
                                                                                <a data-toggle="modal" data-target="#areaView" onClick={this.AreaView.bind(this,area.id)}><i className="fas fa-eye"></i></a>
                                                                                <a data-toggle="modal" data-target="#areaDelete" onClick={this.deleteAreaId.bind(this,area.id)}><i className="fas fa-trash-alt"></i></a>
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
                                                                    <th>Name</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>


                                                            <tbody>
                                                                {this.state.data.map((bargah) =>
                                                                    <tr key={bargah.id}>
                                                                        <td>{bargah.name}</td>
                                                                        <td>
                                                                            <div class="icon-pad">
                                                                                <a data-toggle="modal" data-target="#imambargahUpdate" onClick={this.updateImamBargahId.bind(this, bargah.id)}><i className="fas fa-pencil-alt"></i></a>
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
                                                        <table id="datatable3" class="table">
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
                                                                                <a data-toggle="modal" data-target="#zakirUpdate" onClick={this.zakirId.bind(this, zakir.id)}><i className="fas fa-pencil-alt"></i></a>
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
                                                        <table id="datatable4" class="table">
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
                                                                                <a data-toggle="modal" data-target="#nohaUpdate" onClick={this.NohaId.bind(this, noha.id)}><i className="fas fa-pencil-alt"></i></a>
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
                                                        <table id="datatable5" class="table">
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
                                                                                <a data-toggle="modal" data-target="#manqabatUpdate" onClick={this.manqabatId.bind(this, munqabat.id)}><i className="fas fa-pencil-alt"></i></a>
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
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.errorText ?
                                            <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                            : null
                                        }
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.imamBargah.bind(this)}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-modal">
                        <div className="modal fade" id="area" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Area</h5>
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
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.errorText ?
                                            <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                            : null
                                        }
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.area.bind(this)}>Submit</button>
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
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.errorText ?
                                            <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                            : null
                                        }
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
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.errorText ?
                                            <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                            : null
                                        }
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
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" placeholder="name@example.com" />
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
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" value={this.state.name_ur} onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" placeholder="name@example.com" />
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
                        <div className="modal fade" id="areaUpdate" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Update Area</h5>
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
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" value={this.state.name_ur} onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.updateArea.bind(this)}>Update</button>
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
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" value={this.state.name_ur} onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" placeholder="name@example.com" />
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
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" value={this.state.name_ur} onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" placeholder="name@example.com" />
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
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" value={this.state.name_ur} onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" placeholder="name@example.com" />
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
                        <div className="modal fade" id="areaView" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Area Detail</h5>
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
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" value={this.state.name_ur} id="exampleFormControlInput1" placeholder="name@example.com" readOnly />
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
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" value={this.state.name_ur} id="exampleFormControlInput1" placeholder="name@example.com" readOnly />
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
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" value={this.state.name_ur} id="exampleFormControlInput1" placeholder="name@example.com" readOnly />
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
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" value={this.state.name_ur} id="exampleFormControlInput1" placeholder="name@example.com" readOnly />
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
                                        </div>
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" value={this.state.name_ur} id="exampleFormControlInput1" placeholder="name@example.com" readOnly />
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
                        <div className="modal fade" id="areaDelete" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Area Delete</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            <strong>
                                                You're about to delete a Area from this page. Are you sure?
                                            </strong>
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.deleteArea.bind(this)}>Delete</button>
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

