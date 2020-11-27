import React, { Component } from "react";
import { Serverurl } from "../Common/ServerUrl";
import axios from "axios";
import $ from "jquery";
import swal from "sweetalert";

export class CreateCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      image: null,
      name: "",
      description: "",
      error1: "",
      error2: "",
      error3: "",
    };
  }

  async componentDidMount() {
    var token = await localStorage.getItem("token");
    this.setState({
      token,
    });

    console.log(
      "CreateCategory's componentDidMount() token: ",
      this.state.token
    );
  }

  handleImageInput(e) {
    console.log(e.target.files, "file");
    console.log(e.target.files[0], "file 0");
    let file = e.target.files[0];

    this.setState({
      image: file,
      error1: "",
    });

    if (e.target.files) {
      this.setState({
        [e.target.image]: e.target.files[0],
        file: URL.createObjectURL(e.target.files[0]),
      });
    }
    console.log(e.target.files[0]);
  }

  handleNameInput(e) {
    this.setState({
      name: e.target.value,
      error2: "",
    });
  }

  handleDescriptionInput(e) {
    this.setState({
      description: e.target.value,
      error3: "",
    });
  }

  btnAddCategoryClick() {
    var validation = true;

    if (this.state.image == null) {
      this.setState({
        error1: "*Category image is required!",
      });
      validation = false;
    }

    if (this.state.name == "") {
      this.setState({
        error2: "*Category name is required!",
      });
      validation = false;
    }

    if (this.state.description == "") {
      this.setState({
        error3: "*Category description is required!",
      });
      validation = false;
    }

    if (validation == true) {
      var formData = new FormData();
      formData.append("image", this.state.image);
      formData.append("name", this.state.name);
      formData.append("description", this.state.description);

      console.log("consoling token inside btnAddCategory()", this.state.token);

      axios({
        method: "post",
        url: Serverurl + "category_add",
        data: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          console.log("in btnAddCategory's then(): ", res.data);

          swal("Category is successfully added!", {
            icon: "success",
          });

          setTimeout(() => {
            window.location.href = "/component/gridCategories";
          }, 3000);
        })
        .catch((err) => {
          console.log({ err });
          if (err) {
            // error.classList.add('errorMsg');
            console.log(err.res);
            this.setState({
              errorText: "Adding category Failed! Please try again",
              //   loading: true,
            });
            // error.classList.add('errorMsg');
            // setTimeout(() => {
            //     error.classList.remove('errorMsg')
            //     this.setState({
            //         error: '',
            //         loading: false
            //     })
            // }, 3000)
          }
        });
      // }
    }
  }

  //           .catch((err) => {
  //             if (err) {
  //               this.setState({
  //                 loading: true,
  //               });
  //               setTimeout(() => {
  //                 this.setState({
  //                   loading: false,
  //                 });
  //                 this.setState((willSuccess) => {
  //                   if (willSuccess) {
  //                     swal(error_message[0], {
  //                       icon: "warning",
  //                     });
  //                   } else {
  //                     swal("Your imaginary file is safe!");
  //                   }
  //                 });
  //               }, 3000);
  //             }
  //           });
  //       }
  //     }
  //   }

  // handleChangeCategory = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //     errorText: "",
  //   });
  // };

  onKeyDown = (event) => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.btnAddCategoryClick();
    }
  };

  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-11 col-md-12 card">
              <div class="parent">
                {/* <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Englsh</a>
                                    </li>
                                    {/* <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">اردو</a>
                                    </li> 
                                </ul> */}
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h4 class="mt-0 header-title">Add Category</h4>

                    <div class="form-group row input-margin">
                      <label
                        for="example-search-input"
                        class="col-sm-2 col-form-label"
                      >
                        Upload Image
                      </label>
                      <div class="col-sm-12">
                        <input
                          type="file"
                          id="input-file-now"
                          name="image"
                          class="dropify"
                          onChange={this.handleImageInput.bind(this)}
                        />
                      </div>
                    </div>
                    {this.state.error1 ? (
                      <p style={{ color: "red" }}>{this.state.error1}</p>
                    ) : null}

                    <div class="form-group row input-margin">
                      <label
                        for="example-text-input"
                        class="col-sm-2 col-form-label"
                      >
                        Name
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="name"
                          type="text"
                          id="example-text-input"
                          //   onChange={this.handleChangeCategory.bind(this)}
                          onChange={this.handleNameInput.bind(this)}
                          placeholder="Category name"
                        />
                      </div>
                    </div>
                    {this.state.error2 ? (
                      <p style={{ color: "red" }}>{this.state.error2}</p>
                    ) : null}

                    <div class="form-group row input-margin">
                      <label
                        for="example-text-input"
                        class="col-sm-2 col-form-label"
                      >
                        Description
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="description"
                          type="text"
                          id="example-text-input"
                          //   onChange={this.handleChangeCategory.bind(this)}
                          onChange={this.handleDescriptionInput.bind(this)}
                          placeholder="Categor description"
                        />
                      </div>
                    </div>
                    {this.state.error3 ? (
                      <p style={{ color: "red" }}>{this.state.error3}</p>
                    ) : null}

                    <div class="form-group row">
                      <div class="button-align">
                        <button
                          type="button"
                          class="btn btn-danger waves-effect waves-light submit-button"
                          onClick={this.btnAddCategoryClick.bind(this)}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCategory;
