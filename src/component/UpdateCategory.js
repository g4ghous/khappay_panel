import React, { Component } from "react";
import { Serverurl } from "../Common/ServerUrl";
import axios from "axios";
import $ from "jquery";
import swal from "sweetalert";

export class UpdateCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: {},
      categoryId: "",
      image: null,
      name: "",
      description: "",
      error1: "",
      error2: "",
      error3: "",
      errorText: "",
    };
  }

  componentDidMount() {
    // var categoryData;
    var id = localStorage.getItem("categoryId");
    console.log("categoryId is: ", id);
    this.setState({
      categoryId: id,
    });

    axios({
      method: "get",
      url: Serverurl + "category_show/" + id,
      // data: categoryData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      config: {
        headers: { "Content-Type": "application/json" },
      },
    })
      .then((res) => {
        console.log(
          "category_show in componentDidMount() of UpdateCategory' res.data is: ",
          res.data
        );
        this.setState({
          categoryData: res.data,
          image: res.data.image,
          name: res.data.name,
          description: res.data.description,
        });
        // $(document).ready(function () {
        //     $('#datatable3').DataTable();
        // });
        console.log(
          "res.data from category_show api in then() of UpdateCategory is: ",
          res.data
        );
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          console.log(
            "err from category_show api in UpdateCategory is: ",
            err.response
          );
          console.log({ err });
        }
      });
  }

  HandleImageInput(e) {
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

  HandleNameInput(e) {
    this.setState({
      name: e.target.value,
      error2: "",
    });
  }

  HandleDescriptionInput(e) {
    this.setState({
      description: e.target.value,
      error3: "",
    });
  }

  HandleBtnUpdateClick() {
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

      console.log(this.state.token);
      console.log("category id is: ", this.state.categoryId);

      axios({
        method: "post",
        url: Serverurl + "category_edit/" + this.state.categoryId,
        data: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          swal("Category is successfully updated!");
          console.log(
            "res.data from category_edit/id in HandleBtnUpdateClick() is: ",
            res.data
          );
          window.location.href = "/component/gridCategories";
        })
        .catch((err) => {
          console.log({ err });
          if (err) {
            // error.classList.add('errorMsg');
            console.log(err.res);
            this.setState({
              errorText: "Updating category Failed! Please try again",
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
                    <h4 class="mt-0 header-title">Update Category</h4>

                    <div class="form-group banner-position input-margin">
                      <label for="example-search-input" class="col-form-label">
                        Category Image
                      </label>
                      <div>
                        <input
                          type="file"
                          name="image"
                          onChange={this.HandleImageInput.bind(this)}
                          class="form-control-file"
                        />
                      </div>
                      <div className="banner">
                        {this.state.file ? (
                          <img src={this.state.file} />
                        ) : (
                          <img src={this.state.categoryData.image} />
                        )}
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
                          onChange={this.HandleNameInput.bind(this)}
                          placeholder={this.state.name}
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
                          onChange={this.HandleDescriptionInput.bind(this)}
                          placeholder={this.state.description}
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
                          onClick={this.HandleBtnUpdateClick.bind(this)}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                    {/* {this.state.errorText ? (
                      <p style={{ color: "red" }}>{this.state.errorText}</p>
                    ) : null}
                    <div id="err">{this.state.error}</div> */}
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

export default UpdateCategory;
