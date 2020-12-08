import React, { Component } from "react";
import { Serverurl } from "../Common/ServerUrl";
import axios from "axios";
import $ from "jquery";
import swal from "sweetalert";

export class CreateProduct extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        categoryData: [],
        subCategoryData: [],
        brandData: [],
        token: "",
        image: null,
        name: "",
        description: "",
        stock: "",
        price: "",
        category_id: "",
        subcategory_id: "",
        brand_id: "",
        discount_percent: "",
        discounted_price: "",

        errorText: "",
      };
    }
  }

  async componentDidMount() {
    var token = await localStorage.getItem("token");
    this.setState({
      token,
    });

    console.log("componentDidMount() token: ", this.state.token);

    //category_show api
    axios({
      method: "get",
      url: Serverurl + "category_show",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      config: {
        headers: { "Content-Type": "application/json" },
      },
    })
      .then((res) => {
        console.log("res.data of category_show api is: ", res.data);
        this.setState({
          categoryData: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    // sub-category show api
    axios({
      method: "get",
      url: Serverurl + "subcategory_show",
      //   data: data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      config: {
        headers: { "Content-Type": "application/json" },
      },
    })
      .then((res) => {
        console.log("subcategory_show api response.data is: ", res.data);

        this.setState({
          subCategoryData: res.data,
        });
      })
      .catch((err) => {
        console.log("sub-category .catch error is: ", err);
      });

    //brand api
    axios({
      method: "get",
      url: Serverurl + "brand_show",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      config: {
        headers: { "Content-Type": "application/json" },
      },
    })
      .then((res) => {
        console.log("res.data of brand_show api is: ", res.data);
        this.setState({
          brandData: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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

  handleBtnSubmitClick() {
    var validation = true;

    if (this.state.image == null) {
      this.setState({
        errorText: "*Product image is required!",
      });
      validation = false;
    }

    if (this.state.name == "") {
      this.setState({
        errorText: "*Product name is required!",
      });
      validation = false;
    }

    if (this.state.description == "") {
      this.setState({
        errorText: "*Product description is required!",
      });
      validation = false;
    }

    if (this.state.stock == "") {
      this.setState({
        errorText: "*Product stock is required!",
      });
      validation = false;
    }

    if (this.state.category_id == "") {
      this.setState({
        errorText: "*Product category_id is required!",
      });
      validation = false;
    }

    if (this.state.subcategory_id == "") {
      this.setState({
        errorText: "*Product subcategory_id is required!",
      });
      validation = false;
    }

    if (this.state.brand_id == "") {
      this.setState({
        errorText: "*Product brand_id is required!",
      });
      validation = false;
    }

    if (this.state.price == "") {
      this.setState({
        errorText: "*Product price is required!",
      });
      validation = false;
    }

    if (validation == true) {
      let formData = new FormData();
      formData.append("image", this.state.image);
      formData.append("name", this.state.name);
      formData.append("description", this.state.description);
      formData.append("stock", this.state.stock);
      formData.append("category_id", this.state.category_id.toString());
      formData.append("subcategory_id", this.state.subcategory_id.toString());
      formData.append("brand_id", this.state.brand_id.toString());
      formData.append("discount_percent", this.state.discount_percent);
      formData.append("price", this.state.price);
      formData.append("discounted_price", this.state.discounted_price);

      this.setState({
        loading: true,
      });

      console.log("formData of CreateProduct is: ", formData);

      axios({
        method: "post",
        url: Serverurl + "products_add",
        data: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        config: {
          headers: { "Content-Type": "application/json" },
        },
      })
        .then((res) => {
          console.log("res.data of products_add API is: ", res.data);

          swal("Product Succesfully Added!", {
            icon: "success",
          });

          setTimeout(() => {
            window.location.href = "/component/gridProducts";
          }, 2000);
        })
        .catch((err) => {
          console.log("Error from products_add API is: ", err);
        });
    }
  }

  onKeyDown = (event) => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.handleBtnSubmitClick();
    }
  };

  handleChangeProduct = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: "",
    });
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
                    <h4 class="mt-0 header-title">Add Product</h4>

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
                          onChange={this.handleChangeProduct.bind(this)}
                        />
                      </div>
                    </div>

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
                          onChange={this.handleChangeProduct.bind(this)}
                        />
                      </div>
                    </div>

                    <div class="form-group row input-margin">
                      <label
                        for="example-text-input"
                        class="col-sm-2 col-form-label"
                      >
                        Stock
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="stock"
                          type="text"
                          id="example-text-input"
                          onChange={this.handleChangeProduct.bind(this)}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-sm-2 col-form-label">Category</label>
                      <div class="col-sm-10">
                        <select
                          name="category_id"
                          class="form-control"
                          onChange={this.handleChangeProduct.bind(this)}
                        >
                          <option>Select Category</option>
                          {this.state.categoryData.map((category) => {
                            return (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-sm-2 col-form-label">
                        Sub Category
                      </label>
                      <div class="col-sm-10">
                        <select
                          name="subcategory_id"
                          class="form-control"
                          onChange={this.handleChangeProduct.bind(this)}
                        >
                          <option>Select Sub Category</option>
                          {this.state.subCategoryData.map((sub_category) => {
                            return (
                              <option
                                key={sub_category.id}
                                value={sub_category.id}
                              >
                                {sub_category.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-sm-2 col-form-label">Brand</label>
                      <div class="col-sm-10">
                        <select
                          name="brand_id"
                          class="form-control"
                          onChange={this.handleChangeProduct.bind(this)}
                        >
                          <option>Select Brand</option>
                          {this.state.brandData.map((brand) => {
                            return (
                              <option key={brand.id} value={brand.id}>
                                {brand.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label
                        for="example-email-input"
                        class="col-sm-2 col-form-label"
                      >
                        Discount Percent
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="discount_percent"
                          type="text"
                          id="example-email-input"
                          onChange={this.handleChangeProduct.bind(this)}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label
                        for="example-email-input"
                        class="col-sm-2 col-form-label"
                      >
                        Price
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="price"
                          type="text"
                          id="example-email-input"
                          onChange={this.handleChangeProduct.bind(this)}
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <label
                        for="example-email-input"
                        class="col-sm-2 col-form-label"
                      >
                        Discounted Price
                      </label>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          name="discounted_price"
                          type="text"
                          id="example-email-input"
                          onChange={this.handleChangeProduct.bind(this)}
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
                          onClick={this.handleBtnSubmitClick.bind(this)}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <h4 class="mt-0 header-title ar">صارف بنائیں</h4>

                                        <div class="form-group row input-margin urdu">
                                            <label for="example-search-input" class="col-sm-2 col-form-label">پروفائل تصویری اپ لوڈ</label>
                                            <div class="col-sm-12">
                                                <input type="file" id="input-file-now" name="avatar"  class="dropify" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">پہلا نام</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="first_name" type="text" id="example-text-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">آخری نام</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="last_name" type="text" id="example-text-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row urdu">
                                            <label for="example-email-input" class="col-sm-2 col-form-label">ای میل</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="email" type="email" id="example-email-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">صارف کا نام</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="username" type="text" id="example-text-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row urdu">
                                            <label for="example-number-input" class="col-sm-2 col-form-label">رابطہ نمبر</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="contact_number" type="number" id="example-number-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row urdu">
                                            <label for="example-password-input" class="col-sm-2 col-form-label">پاس ورڈ</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="password" type="password" id="example-password-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row urdu">
                                            <label class="col-sm-2 col-form-label">حالت</label>
                                            <div class="col-sm-10">
                                                <select name="status" class="form-control">
                                                    <option>حیثیت منتخب کریں</option>
                                                    <option value="active">فعال</option>
                                                    <option value="inactive">غیر فعال</option>
                                                    <option value="block"> بلاک کریں</option>
                                                </select>
                                            </div>
                                        </div>
                                        {this.state.errorText ?
                                            <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                            : null
                                        }
                                        <div id="err">{this.state.error}</div>
                                       

                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProduct;
