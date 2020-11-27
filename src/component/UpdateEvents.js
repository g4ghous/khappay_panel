import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { ServerurllogRegister, Serverurl } from '../Common/ServerUrl';
import axios from 'axios';
import swal from 'sweetalert';

export class UpdateEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
            time: "",
            online_link: "",
            title_ur: "",
            address_ur: "",
            latitude: "",
            longitude: "",
            event_image: "",
            status: "",
            file:"",
            time_zone_name_id:"",
            test:false,


            ibg: [],
            mb: [],
            zak: [],
            area_cont: [],
            CountryData: [],
            stateData: [],
            city_data: [],
            noha: [],
            tz:[]
        };
    }


    componentDidMount() {
        var data = {
            "id": localStorage.getItem('updateId')
        }
        axios({
            method: 'get',
            url: Serverurl + "event/view",
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(res => {
            console.log('res', res.data.data)
            console.log('hey', res.data)

            console.log('Time Zone:', res.data.time_zone_name_id)

            this.setState({
                title: res.data.title,
                address: res.data.address,
                event_date_time: res.data.event_date_time,
                event_type_id: res.data.event_type_id,
                country_id: res.data.country_id,
                state_id: res.data.state_id,
                city_id: res.data.city_id,
                area_id: res.data.area_id,
                imam_bargah_id: res.data.imam_bargah_id,
                manqabat_khuwan_id: res.data.manqabat_khuwan_id,
                noha_khuwan_id: res.data.noha_khuwan_id,
                zakir_id: res.data.zakir_id,
                islamic_date: res.data.islamic_date,
                time: res.data.time,
                online_link: res.data.online_link,
                title_ur: res.data.title_ur,
                address_ur: res.data.address_ur,
                latitude: res.data.latitude,
                longitude: res.data.longitude,
                status: res.data.status,
                time_zone_name_id: res.data.time_zone_name_id,
                event_image: res.data.image_path


            })
            // $(document).ready(function () {
            //     $('#datatable2').DataTable();
            // });
            console.log('data', res.data.data)
        }).catch((err) => {
            console.log(err)
            if (err) {
                console.log('err', err.response)
                console.log({ err })
            }
        })

        var data;
        axios({
            method: 'get',
            url: Serverurl + 'time-zone/list',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(ues => {
            console.log('nes', ues.data.data)
            // console.log('hey', ues.data)
            this.setState({
                tz: ues.data.data,
            })
            console.log('data', ues.data.data)
        }).catch((err) => {
            console.log(err)
            if (err) {
                console.log({ err })
            }
        })

        var data;
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

        }).then(nes => {
            console.log('nes', nes.data.data)
            // console.log('hey', nes.data)
            this.setState({
                ibg: nes.data.data,
            })
            console.log('data', nes.data.data)
        }).catch((err) => {
            console.log(err)
            if (err) {
                console.log({ err })
            }
        })

        axios({
            method: 'get',
            url: Serverurl + 'manqabat-khuwan/list',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(mes => {
            console.log('mes', mes.data.data)
            // console.log('hey', mes.data)
            this.setState({
                mb: mes.data.data,
            })
            console.log('data', mes.data.data)
        }).catch((err) => {
            console.log(err)
            if (err) {
                console.log({ err })
            }
        })

        axios({
            method: 'get',
            url: Serverurl + 'zakir/list',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(wes => {
            console.log('wes', wes.data.data)
            this.setState({
                zak: wes.data.data,
            })
            console.log('data', wes.data.data)
        }).catch((err) => {
            console.log(err)
            if (err) {
                console.log({ err })
            }
        })

        axios({
            method: 'get',
            url: Serverurl + 'area/list',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(bes => {
            console.log('bes', bes.data.data)
            this.setState({
                area_cont: bes.data.data,
            })
            console.log('data', bes.data.data)
        }).catch((err) => {
            console.log(err)
            if (err) {
                console.log({ err })
            }
        })

        //  GET COUNTRY

        axios({
            method: 'get',
            url: Serverurl + 'country/list',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(des => {
            console.log('des', des.data.data)
            this.setState({
                CountryData: des.data.data,
            })
            console.log('c-data', des.data.data)
            console.log('data-id', des.data.data.id)

        }).catch((err) => {
            console.log(err)
            if (err) {
                console.log({ err })
            }
        })


        //GET STATE

        var Data = {
            "keyword": "sind"
        }
        axios({
            method: 'get',
            url: Serverurl + 'state/list',
            params: Data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(des => {
            console.log('stststst', des.data.data)
            this.setState({
                stateData: des.data.data,
            })
            console.log('state-data', des.data.data)

        }).catch((err) => {
            console.log(err)
            if (err) {
                console.log({ err })
            }
        })



        //GET CITY
        var data = {
            "keyword": "karachi"
        }
        axios({
            method: 'get',
            url: Serverurl + 'city/list',
            params: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(tes => {
            console.log('des', tes.data.data)
            this.setState({
                city_data: tes.data.data,
            })
            console.log('data', tes.data.data)

        }).catch((err) => {
            console.log(err)
            if (err) {
                console.log({ err })
            }
        })

        axios({
            method: 'get',
            url: Serverurl + 'noha-khuwan/list',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(yes => {
            console.log('des', yes.data.data)
            this.setState({
                noha: yes.data.data,
            })
            console.log('data', yes.data.data)
        }).catch((err) => {
            console.log(err)
            if (err) {
                console.log({ err })
            }
        })

    }


    selectCountry(val) {
        this.setState({ country: val });
    }


    handleChangeTz(e) {
        this.setState({
            time_zone_name_id: e.target.value,
            errorText: ""

        })
    }


    handleChangeIb(e) {
        this.setState({
            imam_bargah_id: e.target.value,
            errorText: ""
        })
    }


    handleChangeEventType(e) {
        this.setState({
            event_type_id: e.target.value,
            errorText: ""
        })
        console.log("value", e.target.value)
    }

    handleChangeStatus(e) {
        this.setState({
            status: e.target.value,
            errorText: ""
        })
        console.log("value", e.target.value)
    }

    handleChangeMb(e) {
        this.setState({
            manqabat_khuwan_id: e.target.value,
            errorText: ""
        })
    }

    handleChangeZak(e) {
        this.setState({
            zakir_id: e.target.value,
            errorText: ""

        })
    }

    handleChangeNoha(e) {
        this.setState({
            noha_khuwan_id: e.target.value,
            errorText: ""

        })
    }

    handleChangeArea(e) {
        this.setState({
            area_id: e.target.value,
            errorText: ""

        })
    }

    handleChangeCity(e) {
        this.setState({
            city_id: e.target.value,
            errorText: ""

        })
    }


    handleChangeCountry(e) {
        this.setState({
            country_id: e.target.value,
            errorText: ""

        })

        var Data = {
            "country_id": e.target.value
        }
        axios({
            method: 'get',
            url: Serverurl + 'state/list',
            params: Data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(des => {
            console.log('stststst', des.data.data)
            // console.log('hey', des.data)
            this.setState({
                stateData: des.data.data,
                // type: des.data.data.event_type
            })
            // $(document).ready(function () {
            //     $('#datatable2').DataTable();
            // });
            console.log('state-data', des.data.data)
            // console.log('data-id', des.data.data.id)

        }).catch((err) => {
            console.log(err)
            if (err) {
                // console.log('err', err.response)
                console.log({ err })
            }
        })
    }

    handleChangeState(e) {
        this.setState({
            state_id: e.target.value,
            errorText: ""

        })


        var Data = {
            "state_id": e.target.value
        }
        //GET CITY

        axios({
            method: 'get',
            url: Serverurl + 'city/list',
            params: Data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(tes => {
            console.log('des', tes.data.data)
            // console.log('hey', tes.data)
            this.setState({
                city_data: tes.data.data,
                // type: tes.data.data.event_type
            })
            // $(document).ready(function () {
            //     $('#datatable2').DataTable();
            // });
            console.log('data', tes.data.data)

        }).catch((err) => {
            console.log(err)
            if (err) {
                // console.log('err', err.response)
                console.log({ err })
            }
        })

    }

    handleChangeEvent(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }

    // handleFileInput = (event) => {
    //     console.log(event.target.files, 'file')
    //     console.log(event.target.files[0], 'file 0')
    //     let file = event.target.files[0]
    //     this.setState({
    //         event_image: file,
    //         errorText: ""
    //     })
    //     if (event.target.files) {
    //         this.setState({
    //             [event.target.name]: event.target.files[0],
    //             file: URL.createObjectURL(event.target.files[0])
    //         })
    //     }
    //     console.log(event.target.files[0])
    // }

    handleFileInputLogo = (event) => {
        console.log(event.target.files, 'file')
        console.log(event.target.files[0], 'file 0')
        let file = event.target.files[0]
        this.setState({ event_image: file, test:true , errorText:"" })
        if (event.target.files) {
            this.setState({
                [event.target.name]: event.target.files[0],
                file: URL.createObjectURL(event.target.files[0])
            })
        }
        console.log(event.target.files[0])
    }


    EditEvents(e) {

        var id = localStorage.getItem('updateId');

        console.log("Time zone in function:", this.state.time_zone_name_id)
        console.log("Image in function:", this.state.event_image)


        var validation = true;

        if (this.state.event_type_id == "") {
            validation = false;
            this.setState({
                errorText: "*Event Type is required"
            })
        }

        if (this.state.event_type_id == "1") {
            if (this.state.event_image == "") {
                validation = false;
                this.setState({
                    errorText: "*Event Image is required"
                })
            }

            if (this.state.imam_bargah_id == "") {
                validation = false;
                this.setState({
                    errorText: "*Imam Bargah is required"
                })
            }

            if (this.state.zakir_id == "") {
                validation = false;
                this.setState({
                    errorText: "*Zakir is required"
                })
            }

            if (this.state.noha_khuwan_id == "") {
                validation = false;
                this.setState({
                    errorText: "*Noha Khuwan is required"
                })
            }

            if (this.state.title == "") {
                validation = false;
                this.setState({
                    errorText: "*Title is required"
                })
            }

            if (this.state.country_id == "") {
                validation = false;
                this.setState({
                    errorText: "*Country is required"
                })
            }

            if (this.state.state_id == "") {
                validation = false;
                this.setState({
                    errorText: "*State is required"
                })
            }

            if (this.state.city_id == "") {
                validation = false;
                this.setState({
                    errorText: "*City is required"
                })
            }

            if (this.state.area_id == "") {
                validation = false;
                this.setState({
                    errorText: "*Area is required"
                })
            }

            if (this.state.event_date_time == "") {
                validation = false;
                this.setState({
                    errorText: "*Date is required"
                })
            }

            if (this.state.address == "") {
                validation = false;
                this.setState({
                    errorText: "*Address is required"
                })
            }

            if (this.state.islamic_date == "") {
                validation = false;
                this.setState({
                    errorText: "*Islamic Date is required"
                })
            }

            if (this.state.time == "") {
                validation = false;
                this.setState({
                    errorText: "*Time is required"
                })
            }

            if (this.state.latitude == "") {
                validation = false;
                this.setState({
                    errorText: "*Latitude is required"
                })
            }

            if (this.state.longitude == "") {
                validation = false;
                this.setState({
                    errorText: "*Longitude is required"
                })
            }

            if (this.state.online_link == "") {
                validation = false;
                this.setState({
                    errorText: "*Online Link is required"
                })
            }

            if (this.state.title_ur == "") {
                validation = false;
                this.setState({
                    errorText: "*Title Urdu is required"
                })
            }

            if (this.state.address_ur == "") {
                validation = false;
                this.setState({
                    errorText: "*Address Urdu is required"
                })
            }

            if (this.state.time_zone_name_id == "") {
                validation = false;
                this.setState({
                    errorText: "*Time Zone is required"
                })
            }

            if (validation == true) {

                let formData = new FormData();
                formData.append("id", id)
                if(this.state.test == true){
                formData.append('event_image', this.state.event_image)
                }
                formData.append('event_type_id', this.state.event_type_id)
                formData.append('name', this.state.name)
                formData.append('email', this.state.email)
                formData.append('detail', this.state.detail)
                formData.append('imam_bargah_id', this.state.imam_bargah_id)
                formData.append('zakir_id', this.state.zakir_id)
                formData.append('noha_khuwan_id', this.state.noha_khuwan_id)
                formData.append('1', this.state.manqabat_khuwan_id)
                formData.append('title', this.state.title)
                formData.append('country_id', this.state.country_id)
                formData.append('state_id', this.state.state_id)
                formData.append('city_id', this.state.city_id)
                formData.append('area_id', this.state.area_id)

                formData.append('event_date_time', this.state.event_date_time)
                formData.append('address', this.state.address)
                formData.append('time', this.state.time)

                formData.append('latitude', this.state.latitude)
                formData.append('longitude', this.state.longitude)
                formData.append('islamic_date', this.state.islamic_date)
                formData.append('online_link', this.state.online_link)
                formData.append('title_ur', this.state.title_ur)
                formData.append('address_ur', this.state.address_ur)
                formData.append('time_zone_name_id', this.state.time_zone_name_id)



                // var data = {
                //     event_image: formData,
                //     event_type_id: "1",
                //     event_type: "Majlis",
                //     name: this.state.name,
                //     email: this.state.email,
                //     detail: this.state.detail,
                //     imam_bargah_id: this.state.imam_bargah_id,
                //     zakir_id: this.state.zakir_id,
                //     noha_khuwan_id: this.state.noha_khuwan_id,
                //     title: this.state.title,
                //     country_id: this.state.country_id,
                //     state_id: this.state.state_id,
                //     city_id: this.state.city_id,
                //     area_id: this.state.area_id,
                //     event_date_time: this.state.event_date_time,
                //     address: this.state.address,
                //     islamic_date: this.state.islamic_date,
                //     time: this.state.time,
                //     latitude: this.state.latitude,
                //     longitude: this.state.longitude,
                //     online_link: this.state.online_link,
                //     title_ur: this.state.title_ur,
                //     address_ur: this.state.address_ur

                // }


                this.setState({
                    loading: true
                })

                // console.log('mydata', data)

                var error = document.getElementById('err');
                axios({
                    method: 'post',
                    url: Serverurl + 'event/update',
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
                            swal("Event (Majlis) Updated Successfully!");
                        }
                        setTimeout(() => {
                            window.location.href = "/component/GridEvents"
                        }, 3000)
                        console.log('data', res.data)
                    })
                    .catch((err) => {
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

        if (this.state.event_type_id == "2") {
            if (this.state.event_image == "") {
                validation = false;
                this.setState({
                    errorText: "*Event Image is required"
                })
            }

            if (this.state.imam_bargah_id == "") {
                validation = false;
                this.setState({
                    errorText: "*Imam Bargah is required"
                })
            }

            if (this.state.zakir_id == "") {
                validation = false;
                this.setState({
                    errorText: "*Zakir is required"
                })
            }

            // if (this.state.noha_khuwan_id == "") {
            //     validation = false;
            //     this.setState({
            //         errorText: "*Noha Khuwan is required"
            //     })
            // }

            if (this.state.title == "") {
                validation = false;
                this.setState({
                    errorText: "*Title is required"
                })
            }

            if (this.state.country_id == "") {
                validation = false;
                this.setState({
                    errorText: "*Country is required"
                })
            }

            if (this.state.state_id == "") {
                validation = false;
                this.setState({
                    errorText: "*State is required"
                })
            }

            if (this.state.city_id == "") {
                validation = false;
                this.setState({
                    errorText: "*City is required"
                })
            }

            if (this.state.area_id == "") {
                validation = false;
                this.setState({
                    errorText: "*Area is required"
                })
            }

            if (this.state.event_date_time == "") {
                validation = false;
                this.setState({
                    errorText: "*Date is required"
                })
            }

            if (this.state.address == "") {
                validation = false;
                this.setState({
                    errorText: "*Address is required"
                })
            }

            if (this.state.islamic_date == "") {
                validation = false;
                this.setState({
                    errorText: "*Islamic Date is required"
                })
            }

            if (this.state.time == "") {
                validation = false;
                this.setState({
                    errorText: "*Time is required"
                })
            }

            if (this.state.latitude == "") {
                validation = false;
                this.setState({
                    errorText: "*Latitude is required"
                })
            }

            if (this.state.longitude == "") {
                validation = false;
                this.setState({
                    errorText: "*Longitude is required"
                })
            }

            if (this.state.online_link == "") {
                validation = false;
                this.setState({
                    errorText: "*Online Link is required"
                })
            }

            if (this.state.title_ur == "") {
                validation = false;
                this.setState({
                    errorText: "*Title Urdu is required"
                })
            }

            if (this.state.address_ur == "") {
                validation = false;
                this.setState({
                    errorText: "*Address Urdu is required"
                })
            }
            
            if (this.state.time_zone_name_id == "") {
                validation = false;
                this.setState({
                    errorText: "*Time Zone is required"
                })
            }


            
            if (validation == true) {

                let formData = new FormData();
                formData.append("id", id)

                if(this.state.test == true){
                    formData.append('event_image', this.state.event_image)
                    }
                formData.append("event_type_id", this.state.event_type_id)
                formData.append('name', this.state.name)
                formData.append('email', this.state.email)
                formData.append('detail', this.state.detail)
                formData.append('imam_bargah_id', this.state.imam_bargah_id)
                formData.append('zakir_id', this.state.zakir_id)
                formData.append('1', this.state.noha_khuwan_id)
                formData.append('1', this.state.manqabat_khuwan_id)

                formData.append('title', this.state.title)
                formData.append('country_id', this.state.country_id)
                formData.append('state_id', this.state.state_id)
                formData.append('city_id', this.state.city_id)
                formData.append('area_id', this.state.area_id)

                formData.append('event_date_time', this.state.event_date_time)
                formData.append('address', this.state.address)
                formData.append('time', this.state.time)

                formData.append('latitude', this.state.latitude)
                formData.append('longitude', this.state.longitude)
                formData.append('islamic_date', this.state.islamic_date)
                formData.append('online_link', this.state.online_link)
                formData.append('title_ur', this.state.title_ur)
                formData.append('address_ur', this.state.address_ur)
                formData.append('time_zone_name_id', this.state.time_zone_name_id)


                // var data = {
                //     event_type_id: "2",
                //     event_type: "Juloos",
                //     name: this.state.name,
                //     email: this.state.email,
                //     detail: this.state.detail,
                //     imam_bargah_id: this.state.imam_bargah_id,
                //     zakir_id: this.state.zakir_id,
                //     // noha_khuwan_id: this.state.noha_khuwan_id,
                //     title: this.state.title,
                //     country_id: this.state.country_id,
                //     state_id: this.state.state_id,
                //     city_id: this.state.city_id,
                //     area_id: this.state.area_id,
                //     event_date_time: this.state.event_date_time,
                //     address: this.state.address,
                //     islamic_date: this.state.islamic_date,
                //     time: this.state.time,
                //     latitude: this.state.latitude,
                //     longitude: this.state.longitude,
                //     online_link: this.state.online_link,
                //     title_ur: this.state.title_ur,
                //     address_ur: this.state.address_ur

                // }


                this.setState({
                    loading: true
                })

                // console.log('mydata', data)

                var error = document.getElementById('err');
                axios({
                    method: 'post',
                    url: Serverurl + 'event/update',
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
                            swal("Event (Juloos) Updated Successfully!");
                        }
                        setTimeout(() => {
                            window.location.href = "/component/GridEvents"
                        }, 3000)
                        console.log('data', res.data)


                    })
                    .catch((err) => {
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

        if (this.state.event_type_id == "3") {
            if (this.state.event_image == "") {
                validation = false;
                this.setState({
                    errorText: "*Event Image is required"
                })
            }

            if (this.state.imam_bargah_id == "") {
                validation = false;
                this.setState({
                    errorText: "*Imam Bargah is required"
                })
            }

            if (this.state.manqabat_khuwan_id == "") {
                validation = false;
                this.setState({
                    errorText: "*Manqabat Khuwan is required"
                })
            }

            // if (this.state.noha_khuwan_id == "") {
            //     validation = false;
            //     this.setState({
            //         errorText: "*Noha Khuwan is required"
            //     })
            // }

            if (this.state.title == "") {
                validation = false;
                this.setState({
                    errorText: "*Title is required"
                })
            }

            if (this.state.country_id == "") {
                validation = false;
                this.setState({
                    errorText: "*Country is required"
                })
            }

            if (this.state.state_id == "") {
                validation = false;
                this.setState({
                    errorText: "*State is required"
                })
            }

            if (this.state.city_id == "") {
                validation = false;
                this.setState({
                    errorText: "*City is required"
                })
            }

            if (this.state.area_id == "") {
                validation = false;
                this.setState({
                    errorText: "*Area is required"
                })
            }

            if (this.state.event_date_time == "") {
                validation = false;
                this.setState({
                    errorText: "*Date is required"
                })
            }

            if (this.state.address == "") {
                validation = false;
                this.setState({
                    errorText: "*Address is required"
                })
            }

            if (this.state.islamic_date == "") {
                validation = false;
                this.setState({
                    errorText: "*Islamic Date is required"
                })
            }

            if (this.state.time == "") {
                validation = false;
                this.setState({
                    errorText: "*Time is required"
                })
            }

            if (this.state.latitude == "") {
                validation = false;
                this.setState({
                    errorText: "*Latitude is required"
                })
            }

            if (this.state.longitude == "") {
                validation = false;
                this.setState({
                    errorText: "*Longitude is required"
                })
            }

            if (this.state.online_link == "") {
                validation = false;
                this.setState({
                    errorText: "*Online Link is required"
                })
            }

            if (this.state.title_ur == "") {
                validation = false;
                this.setState({
                    errorText: "*Title Urdu is required"
                })
            }

            if (this.state.address_ur == "") {
                validation = false;
                this.setState({
                    errorText: "*Address Urdu is required"
                })
            }


            if (this.state.time_zone_name_id == "") {
                validation = false;
                this.setState({
                    errorText: "*Time Zone is required"
                })
            }

            if (validation == true) {

                let formData = new FormData();
                formData.append("id", id)
                if(this.state.test == true){
                    formData.append('event_image', this.state.event_image)
                    }
                formData.append("event_type_id", this.state.event_type_id)
                formData.append('name', this.state.name)
                formData.append('email', this.state.email)
                formData.append('detail', this.state.detail)
                formData.append('imam_bargah_id', this.state.imam_bargah_id)
                formData.append('manqabat_khuwan_id', this.state.manqabat_khuwan_id)
                formData.append('1', this.state.noha_khuwan_id)
                formData.append('1', this.state.zakir_id)
                formData.append('title', this.state.title)
                formData.append('country_id', this.state.country_id)
                formData.append('state_id', this.state.state_id)
                formData.append('city_id', this.state.city_id)
                formData.append('area_id', this.state.area_id)

                formData.append('event_date_time', this.state.event_date_time)
                formData.append('address', this.state.address)
                formData.append('time', this.state.time)

                formData.append('latitude', this.state.latitude)
                formData.append('longitude', this.state.longitude)
                formData.append('islamic_date', this.state.islamic_date)
                formData.append('online_link', this.state.online_link)
                formData.append('title_ur', this.state.title_ur)
                formData.append('address_ur', this.state.address_ur)
                formData.append('time_zone_name_id', this.state.time_zone_name_id)


                this.setState({
                    loading: true
                })

                // console.log('mydata', data)

                var error = document.getElementById('err');
                axios({
                    method: 'post',
                    url: Serverurl + 'event/update',
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
                            swal("Event (Milad) Updated Successfully!");
                        }
                        setTimeout(() => {
                            window.location.href = "/component/GridEvents"
                        }, 3000)
                        console.log('data', res.data)
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



        // if (this.state.title == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*Event Title is required"
        //     })
        // }


        // if (this.state.event_date_time == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*Date is required"
        //     })
        // }


        // if (this.state.address == "") {
        //     validation = false;
        //     this.setState({
        //         errorText: "*Address is required"
        //     })
        // }



        // if (validation == true) {

        // let formData = new FormData();
        //     formData.append('id', id)
        //     formData.append('event_image', this.state.event_image)
        //     formData.append('event_type_id', this.state.event_type_id)
        //     formData.append('name', this.state.name)
        //     formData.append('email', this.state.email)
        //     formData.append('detail', this.state.detail)
        //     formData.append('imam_bargah_id', this.state.imam_bargah_id)
        //     formData.append('manqabat_khuwan_id', this.state.manqabat_khuwan_id)
        //     formData.append('noha_khuwan_id', this.state.noha_khuwan_id)
        //     formData.append('title', this.state.title)
        //     formData.append('country_id', this.state.country_id)
        //     formData.append('state_id', this.state.state_id)
        //     formData.append('city_id', this.state.city_id)
        //     formData.append('area_id', this.state.area_id)

        //     formData.append('event_date_time', this.state.event_date_time)
        //     formData.append('address', this.state.address)
        //     formData.append('time', this.state.time)

        //     formData.append('latitude', this.state.latitude)
        //     formData.append('longitude', this.state.longitude)
        //     formData.append('islamic_date', this.state.islamic_date)
        //     formData.append('online_link', this.state.online_link)
        //     formData.append('title_ur', this.state.title_ur)
        //     formData.append('address_ur', this.state.address_ur)
        //     formData.append('status', this.state.status)



        //     this.setState({
        //         loading: true
        //     })

        //     // console.log('mydata', data)

        //     var error = document.getElementById('err');
        //     axios({
        //         method: 'post',
        //         url: Serverurl + 'event/update',
        //         data: formData,
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
        //                 swal("Event Updated Successfully!");
        //             }
        //             setTimeout(() => {
        //                 window.location.href = "/component/GridEvents"
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

        //     }
    }

    render() {
        const { country, region } = this.state;
        return (
            <div class="content">
                <div class="row">
                    <div class="col-lg-11 col-md-12 card">
                        <div class="parent">
                            {/* <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Englsh</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">اردو</a>
                                </li>
                            </ul> */}

                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <h4 class="mt-0 header-title">Update Event </h4>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Event Type</label>
                                        <div class="col-sm-10">
                                            <select name="event_type_id" class="form-control" value={this.state.event_type_id} onChange={this.handleChangeEventType.bind(this)}>
                                                <option>Select Event Type</option>
                                                <option value="1">Majlis</option>
                                                <option value="2">Juloos</option>
                                                <option value="3">Milad</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-padding">
                                    <div class="form-group banner-position input-margin">
                                        <label for="example-search-input" class="col-form-label">Event Image</label>
                                        <div>
                                            <input type="file" name="event_image" onChange={this.handleFileInputLogo.bind(this)} class="form-control-file" />
                                        </div>
                                        <div className="banner">
                                            {this.state.file ?
                                                <img src={this.state.file} />
                                                :
                                                <img src={this.state.event_image} />
                                            }
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">Imam Bargah</label>
                                            <div class="col-sm-10">
                                                <select name="imam_bargah_id" class="form-control" value={this.state.imam_bargah_id} onChange={this.handleChangeIb.bind(this)}>
                                                    <option value="">Select Imam Bargah</option>
                                                    {this.state.ibg.map((ibg) => {
                                                        return (
                                                            <option key={ibg.id} value={ibg.id}>{ibg.name}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        {this.state.event_type_id == "1" || this.state.event_type_id == "2" ?
                                            <div class="form-group row">
                                                <label class="col-sm-2 col-form-label">Zakir</label>
                                                <div class="col-sm-10">
                                                    <select name="zakir_id" class="form-control" value={this.state.zakir_id} onChange={this.handleChangeZak.bind(this)}>
                                                        <option value="null">Select Zakir</option>
                                                        {this.state.zak.map((zak) => {
                                                            return (
                                                                <option key={zak.id} value={zak.id}>{zak.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            : null}
                                        {this.state.event_type_id == "1" ?
                                            <div class="form-group row">
                                                <label class="col-sm-2 col-form-label">Noha Khuwan</label>
                                                <div class="col-sm-10">
                                                    <select name="noha_khuwan_id" class="form-control" value={this.state.noha_khuwan_id} onChange={this.handleChangeNoha.bind(this)}>
                                                        <option value="null">Select Noha Khuwan</option>
                                                        {this.state.noha.map((nh) => {
                                                            return (
                                                                <option key={nh.id} value={nh.id}>{nh.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            : null}

                                        {this.state.event_type_id == "3" ?
                                            <div class="form-group row country">
                                                <label class="col-sm-2 col-form-label">Manqabat Khuwan</label>
                                                <div class="col-sm-10">
                                                    <select name="manqabat_khuwan_id" class="form-control" value={this.state.manqabat_khuwan_id} onChange={this.handleChangeMb.bind(this)}>
                                                        <option value="null">Select Manqabat Khuwan</option>
                                                        {this.state.mb.map((m) => {
                                                            return (
                                                                <option key={m.id} value={m.id}>{m.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            : null}

                                        <div class="form-group row country">
                                            <label class="col-sm-2 col-form-label">Title</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="title" value={this.state.title} onChange={this.handleChangeEvent.bind(this)} type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin">
                                            <label class="col-sm-2 col-form-label">Country</label>
                                            <div class="col-sm-10">
                                                <select name="country_id" class="form-control" value={this.state.country_id} onChange={this.handleChangeCountry.bind(this)}>
                                                    <option value="null">Select Country</option>
                                                    {this.state.CountryData.map((cd) => {
                                                        return (
                                                            <option key={cd.id} value={cd.id}>{cd.name}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">State</label>
                                            <div class="col-sm-10">
                                                <select name="state_id" class="form-control" value={this.state.state_id} onChange={this.handleChangeState.bind(this)}>
                                                    <option value="null">Select State</option>
                                                    {this.state.stateData.map((st) => {
                                                        return (
                                                            <option key={st.id} value={st.id}>{st.name}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">City</label>
                                            <div class="col-sm-10">
                                                <select name="city_id" class="form-control" value={this.state.city_id} onChange={this.handleChangeCity.bind(this)}>
                                                    <option value="null">Select City</option>
                                                    {this.state.city_data.map((ct) => {
                                                        return (
                                                            <option key={ct.id} value={ct.id}>{ct.name}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Area</label>
                                            <div class="col-sm-10">
                                                <select name="area_id" class="form-control" value={this.state.area_id} onChange={this.handleChangeArea.bind(this)}>
                                                    <option value="null">Select Area</option>
                                                    {this.state.area_cont.map((ar) => {
                                                        return (
                                                            <option key={ar.id} value={ar.id}>{ar.name}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin">
                                                <label for="example-text-input" class="col-sm-2 col-form-label">Time Zone</label>
                                                <div class="col-sm-10">
                                                    <select name="time_zone_name_id" value={this.state.time_zone_name_id} class="form-control" onChange={this.handleChangeTz.bind(this)}>
                                                        <option>Select Time Zone</option>
                                                        {this.state.tz.map((tz) => {
                                                            return (
                                                                <option key={tz.id} value={tz.id}>{tz.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Date and Time</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="event_date_time" value={this.state.event_date_time} onChange={this.handleChangeEvent.bind(this)} type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Address</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="address" value={this.state.address} onChange={this.handleChangeEvent.bind(this)} type="text" id="example-text-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Islamic Date</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="islamic_date" value={this.state.islamic_date} onChange={this.handleChangeEvent.bind(this)} type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Time</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="time" value={this.state.time} onChange={this.handleChangeEvent.bind(this)} type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Latitude</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="latitude" value={this.state.latitude} onChange={this.handleChangeEvent.bind(this)} type="number" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Longitude</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="longitude" value={this.state.longitude} onChange={this.handleChangeEvent.bind(this)} type="number" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Online Link</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="online_link" value={this.state.online_link} onChange={this.handleChangeEvent.bind(this)} type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Event Type</label>
                                        <div class="col-sm-10">
                                            <select name="status" class="form-control" value={this.state.status} onChange={this.handleChangeStatus.bind(this)}>
                                                <option>Event Status</option>
                                                <option value="active">Active</option>
                                                <option value="inactive">In-Active</option>
                                            </select>
                                        </div>
                                    </div>
                                    <h4 class="mt-0 header-title ar">واقعات بنائیں</h4>
                                    <div class="form-group row input-margin urdu">
                                        <label for="example-text-input" class="col-sm-2 col-form-label">عنوان</label>
                                        <div class="col-sm-10">
                                            <input class="form-control" name="title_ur" value={this.state.title_ur} onChange={this.handleChangeEvent.bind(this)} type="text" id="example-text-input" />
                                        </div>
                                    </div>
                                    <div class="form-group row input-margin urdu">
                                        <label for="example-text-input" class="col-sm-2 col-form-label">پتہ</label>
                                        <div class="col-sm-10">
                                            <input class="form-control" name="address_ur" value={this.state.address_ur} onChange={this.handleChangeEvent.bind(this)} type="text" id="example-text-input" />
                                        </div>
                                    </div>
                                    {this.state.errorText ?
                                        <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                        : null
                                    }
                                    <div class="form-group row">
                                        <div class="button-align">
                                            <button type="button" class="btn btn-danger waves-effect waves-light submit-button" onClick={this.EditEvents.bind(this)}>Update Event</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <h4 class="mt-0 header-title ar">تازہ ترین واقعات</h4>
                                    <div className="form-padding">
                                        <div class="form-group row urdu">
                                            <label class="col-sm-2 col-form-label">امام بارگاہ</label>
                                            <div class="col-sm-10">
                                                <select name="status" class="form-control">
                                                    <option>Select Status</option>
                                                    <option value="active">Active</option>
                                                    <option value="inactive">In Active</option>
                                                    <option value="block"> Block</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row urdu">
                                            <label class="col-sm-2 col-form-label">ذاکر</label>
                                            <div class="col-sm-10">
                                                <select name="status" class="form-control">
                                                    <option>Select Status</option>
                                                    <option value="active">Active</option>
                                                    <option value="inactive">In Active</option>
                                                    <option value="block"> Block</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row urdu">
                                            <label class="col-sm-2 col-form-label">نوحہ خوان</label>
                                            <div class="col-sm-10">
                                                <select name="status" class="form-control">
                                                    <option>Select Status</option>
                                                    <option value="active">Active</option>
                                                    <option value="inactive">In Active</option>
                                                    <option value="block"> Block</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row urdu">
                                            <label class="col-sm-2 col-form-label">واقعہ کی قسم</label>
                                            <div class="col-sm-10">
                                                <select name="status" class="form-control">
                                                    <option>Select Status</option>
                                                    <option value="active">Active</option>
                                                    <option value="inactive">In Active</option>
                                                    <option value="block"> Block</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row country urdu">
                                            <label class="col-sm-2 col-form-label">ملک</label>
                                            <div class="col-sm-10">
                                                <CountryDropdown
                                                    value={country}
                                                    onChange={(val) => this.selectCountry(val)} />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">شہر</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="username" type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">حالت</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="username" type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">رقبہ</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="username" type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">تاریخ</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="username" type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">اسلامی تاریخ</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="username" type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">وقت</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="username" type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">آن لائن لنک</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="username" type="text" id="example-text-input" />
                                            </div>
                                        </div>
                                        </div>
                                    </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateEvents