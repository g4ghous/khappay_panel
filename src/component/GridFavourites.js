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
            user_area: [],
            user_zakir: [],
            user_noha: [],
            user_manqabat: [],
            user_imam_bargah: [],
            name: '',
            name_ur: '',
            errorText: '',
            id: '',
            GuideId: '',
            imam_bargah_id: '',
            zakir_id: '',
            manqabat_khuwan_id: '',
            noha_khuwan_id: '',

            ibg: [],
            mb: [],
            zak: [],
            area_cont: [],
            noha: []
        }
    }

    componentDidMount() {
        var data, zakir, noha, munqabat;
        axios({
            method: 'get',
            url: Serverurl + 'user/favourites',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(res => {
            console.log('res', res.data.data)
            console.log('hey', res.data.user_favourite_imam_bargahs)
            this.setState({
                data: res.data,
                user_area: res.data.user_favourite_areas,
            })
            $(document).ready(function () {
                $('#datatable1').DataTable();
            });
            console.log('data', res.data.data)
        }).catch((err) => {
            console.log(err)
            if (err) {
                // console.log('err', err.response)
                console.log({ err })
            }
        })

        //zakir

        axios({
            method: 'get',
            url: Serverurl + 'user/favourites',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(res => {
            console.log('res', res.data.data)
            console.log('hey', res.data.user_favourite_imam_bargahs)
            this.setState({
                data: res.data,
                user_zakir: res.data.user_favourite_zakirs,
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
            url: Serverurl + 'user/favourites',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(res => {
            console.log('res', res.data.data)
            console.log('hey', res.data.user_favourite_imam_bargahs)
            this.setState({
                data: res.data,
                user_noha: res.data.user_favourite_noha_khuwans,
            })
            $(document).ready(function () {
                $('#datatable3').DataTable();
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
            url: Serverurl + 'user/favourites',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(res => {
            console.log('res', res.data.data)
            console.log('hey', res.data.user_favourite_imam_bargahs)
            this.setState({
                data: res.data,
                user_manqabat: res.data.user_favourite_manqabat_khuwans,
            })
            $(document).ready(function () {
                $('#datatable4').DataTable();
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
            url: Serverurl + 'user/favourites',
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(res => {
            console.log('res', res.data.data)
            console.log('hey', res.data.user_favourite_imam_bargahs)
            this.setState({
                data: res.data,
                user_imam_bargah: res.data.user_favourite_imam_bargahs
            })
            $(document).ready(function () {
                $('#datatable5').DataTable();
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
                console.log('res', res.data)
                    if (res.status === "true") {
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                        this.setState({
                            loading: true
                        })
                    } else {
                        swal("Favourite Added Successfully!");
                    }
                    setTimeout(() => {
                        window.location.href = "/component/GridFavourites"
                    }, 3000)
                    console.log('data', res.data)


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

    ImamFavoriteDelete(id) {

        localStorage.setItem("ifavdel", id)

        var id = localStorage.getItem("ifavdel")

        console.log("id", id)


        this.setState({
            heart_ib: false
        })

        var data = {
            'imam_bargah_id': id,
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
            console.log('res', res.data)
                if (res.status === "true") {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    this.setState({
                        loading: true
                    })
                } else {
                    swal("Favourite Removed Successfully!");
                }
                setTimeout(() => {
                    window.location.href = "/component/GridFavourites"
                }, 3000)
                console.log('data', res.data)


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

        }).then(res => {
            console.log('res', res.data)
                if (res.status === "true") {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    this.setState({
                        loading: true
                    })
                } else {
                    swal("Favourite Added Successfully!");
                }
                setTimeout(() => {
                    window.location.href = "/component/GridFavourites"
                }, 3000)
                console.log('data', res.data)


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

    ManqabatFavoriteDelete(id) {

        localStorage.setItem("ifavdel", id)

        var id = localStorage.getItem("ifavdel")

        console.log("id", id)

        console.log("Mai chala")

        // e.preventDefault();

        this.setState({
            heart_manqabat: false
        })

        var data = {
            'manqabat_khuwan_id': id,
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

        }).then(res => {
            console.log('res', res.data)
                if (res.status === "true") {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    this.setState({
                        loading: true
                    })
                } else {
                    swal("Favourite Removed Successfully!");
                }
                setTimeout(() => {
                    window.location.href = "/component/GridFavourites"
                }, 3000)
                console.log('data', res.data)


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

        }).then(res => {
            console.log('res', res.data)
                if (res.status === "true") {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    this.setState({
                        loading: true
                    })
                } else {
                    swal("Favourite Added Successfully!");
                }
                setTimeout(() => {
                    window.location.href = "/component/GridFavourites"
                }, 3000)
                console.log('data', res.data)


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

    NohaFavoriteDelete(id) {

        localStorage.setItem("ifavdel", id)

        var id = localStorage.getItem("ifavdel")

        console.log("id", id)


        console.log("Mai chala")

        // e.preventDefault();

        this.setState({
            heart_noha: false
        })

        var data = {
            'noha_khuwan_id': id,
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

        }).then(res => {
            console.log('res', res.data)
                if (res.status === "true") {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    this.setState({
                        loading: true
                    })
                } else {
                    swal("Favourite Removed Successfully!");
                }
                setTimeout(() => {
                    window.location.href = "/component/GridFavourites"
                }, 3000)
                console.log('data', res.data)


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

        }).then(res => {
            console.log('res', res.data)
                if (res.status === "true") {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    this.setState({
                        loading: true
                    })
                } else {
                    swal("Favourite Added Successfully!");
                }
                setTimeout(() => {
                    window.location.href = "/component/GridFavourites"
                }, 3000)
                console.log('data', res.data)


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

    ZakirFavoriteDelete(id) {

        localStorage.setItem("ifavdel", id)

        var id = localStorage.getItem("ifavdel")

        console.log("id", id)

        console.log("Mai chala")

        // e.preventDefault();

        this.setState({
            heart_zakir: false
        })

        var data = {
            'zakir_id': id,
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

        }).then(res => {
            console.log('res', res.data)
                if (res.status === "true") {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    this.setState({
                        loading: true
                    })
                } else {
                    swal("Favourite Removed Successfully!");
                }
                setTimeout(() => {
                    window.location.href = "/component/GridFavourites"
                }, 3000)
                console.log('data', res.data)


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

        }).then(res => {
            console.log('res', res.data)
                if (res.status === "true") {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    this.setState({
                        loading: true
                    })
                } else {
                    swal("Favourite Added Successfully!");
                }
                setTimeout(() => {
                    window.location.href = "/component/GridFavourites"
                }, 3000)
                console.log('data', res.data)


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

    AreaFavoriteDelete(id) {

        localStorage.setItem("ifavdel", id)

        var id = localStorage.getItem("ifavdel")

        console.log("id", id)

        console.log("Mai chala")

        // e.preventDefault();

        this.setState({
            heart_area: false
        })

        var data = {
            'area_id': id,
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

        }).then(res => {
            console.log('res', res.data)
                if (res.status === "true") {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    this.setState({
                        loading: true
                    })
                } else {
                    swal("Favourite Removed Successfully!");
                }
                setTimeout(() => {
                    window.location.href = "/component/GridFavourites"
                }, 3000)
                console.log('data', res.data)


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


    viewOffer(id) {
        localStorage.setItem('monthsId', id)
        console.log(id)
    }

    editOffer(id) {
        localStorage.setItem('monthseId', id)
        console.log(id)
        window.location.href = "/component/updateOffer"
    }

    handleChangeIb(e) {
        this.setState({
            imam_bargah_id: e.target.value,
            errorText: ""
        })
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
                                            <h4>All Favourite List</h4>
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
                                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseArea" aria-expanded="false" aria-controls="collapseOne">Click Here.</button>
                                                </h2>
                                            </div>

                                            <div id="collapseArea" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <div className="favorite-creat">
                                                        <button className="btn" data-toggle="modal" data-target="#area">Create +</button>
                                                    </div>
                                                    <div class="table-3">
                                                        <table id="datatable1" class="table">
                                                            <thead>
                                                                <tr>
                                                                    {/* <th>Image</th> */}
                                                                    <th>Name</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>


                                                            <tbody>
                                                                {this.state.user_area.map((bargah) =>
                                                                    <tr key={bargah.id}>
                                                                        {/* <td><center><img class="rounded-circle" src={avatar2} alt="user" width="30" height="30" /></center></td> */}
                                                                        <td>{bargah.name}</td>
                                                                        <td>
                                                                            <div class="icon-pad">
                                                                                {/* <a data-toggle="modal" data-target="#imambargahUpdate" onClick={this.updateImamBargahId.bind(this, bargah.id)}><i className="fas fa-pencil-alt"></i></a> */}
                                                                                {/* <a data-toggle="modal" data-target="#imambargahView" onClick={this.imamBargahView.bind(this, bargah.id)}><i className="fas fa-eye"></i></a> */}
                                                                                <a data-toggle="modal" data-target="#bargahDelete" onClick={this.AreaFavoriteDelete.bind(this, bargah.area_id)}><i className="fas fa-trash-alt"></i></a>
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
                                                        <table id="datatable5" class="table">
                                                            <thead>
                                                                <tr>
                                                                    {/* <th>Image</th> */}
                                                                    <th>Name</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>


                                                            <tbody>
                                                                {this.state.user_imam_bargah.map((bargah) =>
                                                                    <tr key={bargah.id}>
                                                                        {/* <td><center><img class="rounded-circle" src={avatar2} alt="user" width="30" height="30" /></center></td> */}
                                                                        <td>{bargah.name}</td>
                                                                        <td>
                                                                            <div class="icon-pad">
                                                                                {/* <a data-toggle="modal" data-target="#imambargahUpdate" onClick={this.updateImamBargahId.bind(this, bargah.id)}><i className="fas fa-pencil-alt"></i></a> */}
                                                                                {/* <a data-toggle="modal" data-target="#imambargahView" onClick={this.imamBargahView.bind(this, bargah.id)}><i className="fas fa-eye"></i></a> */}
                                                                                <a onClick={this.ImamFavoriteDelete.bind(this, bargah.imam_bargah_id)}><i className="fas fa-trash-alt"></i></a>
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
                                                        <button className="btn" data-toggle="modal" data-target="#zakir_fav">Create +</button>
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
                                                                {this.state.user_zakir.map((zakir) =>
                                                                    <tr>
                                                                        <td>{zakir.name}</td>
                                                                        <td>
                                                                            <div class="icon-pad">
                                                                                {/* <a data-toggle="modal" data-target="#zakirView" onClick={this.zakirView.bind(this, zakir.id)}><i className="fas fa-eye"></i></a> */}
                                                                                <a onClick={this.ZakirFavoriteDelete.bind(this, zakir.zakir_id)}><i className="fas fa-trash-alt"></i></a>
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
                                                        <button className="btn" data-toggle="modal" data-target="#noha_fav">Create +</button>
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
                                                                {this.state.user_noha.map((noha) =>
                                                                    <tr key={noha.id}>
                                                                        <td>{noha.name}</td>
                                                                        <td>
                                                                            <div class="icon-pad">
                                                                                {/* <a data-toggle="modal" data-target="#nohaView" onClick={this.NohaView.bind(this, noha.id)}><i className="fas fa-eye"></i></a> */}
                                                                                <a onClick={this.NohaFavoriteDelete.bind(this, noha.noha_khuwan_id)}><i className="fas fa-trash-alt"></i></a>
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
                                                        <button className="btn" data-toggle="modal" data-target="#man_fav">Create +</button>
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
                                                                {this.state.user_manqabat.map((munqabat) =>
                                                                    <tr key={munqabat.id}>
                                                                        <td>{munqabat.name}</td>
                                                                        <td>
                                                                            <div class="icon-pad">
                                                                                {/* <a data-toggle="modal" data-target="#manqabatView" onClick={this.manqabatView.bind(this, munqabat.id)}><i className="fas fa-eye"></i></a> */}
                                                                                <a onClick={this.ManqabatFavoriteDelete.bind(this, munqabat.manqabat_khuwan_id)}><i className="fas fa-trash-alt"></i></a>
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
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Imam Bargah Id</label>
                                                <div class="col-sm-12">
                                                <select name="imam_bargah_id" class="form-control" onChange={this.handleChangeIb.bind(this)}>
                                                        <option>Select Imam Bargah</option>
                                                        {this.state.ibg.map((ibg) => {
                                                            return (
                                                                <option key={ibg.id} value={ibg.id}>{ibg.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            {/* <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.ImamFavorite.bind(this)}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Area  */}

                    <div className="user-modal">
                        <div className="modal fade" id="area" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Area Favourite</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Area Id</label>
                                                <div class="col-sm-12">
                                                <select name="area_id" class="form-control" onChange={this.handleChangeArea.bind(this)}>
                                                        <option>Select Area</option>
                                                        {this.state.area_cont.map((ar) => {
                                                            return (
                                                                <option key={ar.id} value={ar.id}>{ar.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            {/* <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.AreaFavorite.bind(this)}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Zakir Add */}
                    <div className="user-modal">
                        <div className="modal fade" id="zakir_fav" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Zakir Favourite</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Zakir Id</label>
                                                <div class="col-sm-12">
                                                <select name="zakir_id" class="form-control" onChange={this.handleChangeZak.bind(this)}>
                                                        <option>Select Zakir</option>
                                                        {this.state.zak.map((zak) => {
                                                            return (
                                                                <option key={zak.id} value={zak.id}>{zak.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            {/* <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.ZakirFavorite.bind(this)}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Manqabat Add */}
                    <div className="user-modal">
                        <div className="modal fade" id="man_fav" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Manqabat Khuwan Favorite</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Manqabat Khuwan Id</label>
                                                <div class="col-sm-12">
                                                <select name="manqabat_khuwan_id" class="form-control" onChange={this.handleChangeMb.bind(this)}>
                                                        <option>Select Manqabat Khuwan</option>
                                                        {this.state.mb.map((m) => {
                                                            return (
                                                                <option key={m.id} value={m.id}>{m.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            {/* <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.ManqabatFavorite.bind(this)}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Noha Favourite */}

                    <div className="user-modal">
                        <div className="modal fade" id="noha_fav" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Noha Khuwan Favorite</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="favrite-form">
                                            <div class="form-group row input-margin">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">Noha Khuwan Id</label>
                                                <div class="col-sm-12">
                                                <select name="noha_khuwan_id" class="form-control" onChange={this.handleChangeNoha.bind(this)}>
                                                        <option>Select Noha Khuwan</option>
                                                        {this.state.noha.map((nh) => {
                                                            return (
                                                                <option key={nh.id} value={nh.id}>{nh.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            {/* <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={this.NohaFavorite.bind(this)}>Submit</button>
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
                                                    <input type="email" class="form-control" name="zakir_id" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            {/* <div class="form-group row input-margin urdu">
                                                <label for="example-search-input" class="col-sm-3 col-form-label">نام</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" name="name_ur" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary">Submit</button>
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
                                                    <input type="email" class="form-control" name="noha_khuwan_id" onChange={this.handleChange.bind(this)} id="exampleFormControlInput1" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">

                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary">Submit</button>
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
                                                    <input type="email" class="form-control" name="manqabat_khuwan_id" id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="favrite-form">
                                            {/* <div class="form-group row input-margin urdu">
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
                                            </div> */}
                                        </div>
                                        {this.state.errorText ?
                                            <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                            : null
                                        }
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary">Submit</button>
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
                                        <button type="button" className="btn btn-primary">Update</button>
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
                                        <button type="button" className="btn btn-primary">Update</button>
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
                                        <button type="button" className="btn btn-primary">Update</button>
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
                                        <button type="button" className="btn btn-primary">Update</button>
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
                                        <button type="button" className="btn btn-primary">Delete</button>
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
                                        <button type="button" className="btn btn-primary" >Delete</button>
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
                                        <button type="button" className="btn btn-primary">Delete</button>
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

