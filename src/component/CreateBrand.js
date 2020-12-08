import React, { Component } from "react";
import { Serverurl } from "../Common/ServerUrl";
import axios from "axios";
import $ from "jquery";
import swal from "sweetalert";

export class CreateBrand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      image: null,
      name: "",
      errorText: "",
    };
  }

  async componentDidMount() {
    var token = await localStorage.getItem("token");
    this.setState({
      token,
    });

    console.log("CreateBrand's componentDidMount() token: ", this.state.token);
  }

  handleImageInput(e) {
    console.log(e.target.files, "file");
    console.log(e.target.files[0], "file 0");
    let file = e.target.files[0];

    this.setState({
      image: file,
      errorText: "",
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
      errorText: "",
    });
  }

  btnAddBrandClick() {
    var validation = true;

    if (this.state.image == null) {
      this.setState({
        errorText: "*Brand image is required!",
      });
      validation = false;
    }

    if (this.state.name == "") {
      this.setState({
        errorText: "*Brand name is required!",
      });
      validation = false;
    }

    if (validation == true) {
      var formData = new FormData();
      formData.append("image", this.state.image);
      formData.append("name", this.state.name);

      console.log("consoling token inside btnAddBrand()", this.state.token);

      axios({
        method: "post",
        url: Serverurl + "brand_add",
        data: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          console.log("in btnAddBrand's then(): ", res.data);

          swal("Brand is successfully added!", {
            icon: "success",
          });

          setTimeout(() => {
            window.location.href = "/component/gridBrands";
          }, 3000);
        })
        .catch((err) => {
          console.log({ err });

          this.setState({
            errorText: "Adding category Failed! Please try again",
          });
        });
      // }
    }
  }

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
                    <h4 class="mt-0 header-title">Add Brand</h4>

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
                          placeholder="Brand name"
                        />
                      </div>
                    </div>
                    {this.state.errorText ? (
                      <p style={{ color: "red" }}>{this.state.errorText}</p>
                    ) : null}

                    <div class="form-group row">
                      <div class="button-align">
                        <button
                          type="button"
                          class="btn btn-danger waves-effect waves-light submit-button"
                          onClick={this.btnAddBrandClick.bind(this)}
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

export default CreateBrand;
