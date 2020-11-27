import React, { Component } from 'react'
import { socket } from '../../Common/socketConfig';

export class Create2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      address: '',
      contactData: '',
      createDate: '',
      name: '',
      error: ''
    }
  }

  handleChangeHospital = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addHospital(e) {
    e.preventDefault();

    var data = {
      address: this.state.address,
      contactData: this.state.contactData,
      createDate: this.state.createDate,
      name: this.state.name
    }

    console.log('mydata', data)

    var error = document.getElementById('err');
    if (this.state.address === '' ||
      this.state.contactData === '' ||
      this.state.createDate === '' ||
      this.state.name === ''
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
      var Reg = {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkM2EyYmFmNjhhNmRkMDAxZWM0YzlhMCIsImlhdCI6MTU2NzUxMTA4M30.DLvYRMc6HpaiPRXupoohOrv4x1n4MrBVQ6v854m3PUY"
      }
      socket.emit('create-hospital', Reg)
      // window.location.reload()
    }
  }



  api_key: "$2a$10$ukmmvc7ih1RUDgVfr6hUgOHeM8eYbi8qdUoc9GWbL/w14QDuW5Hca"
  avatar: ""
  certifications: "Passed"
  city: "southern pines"
  country: "pakistan"
  created_at: "2019-07-25T15:54:13.088Z"
  email: "ahmed.khan@cloudway.com"
  facebook_token: null
  first_name: "ahmed"
  gmail_token: null
  id: "5d39d0a56f8eff001d8f3633"
  is_online: false
  last_name: "khan"
  is_verified: false
  password: "$2a$10$C.7ptWC1rgnExv0LiA1ToO26bYHvtWfF0mMvqp7yXeivKbXvdCxqi"
  phone_number: ""
  shift_availability: "morning"
  software_proficiency: "excellent"
  state: "sindh"
  updated_at: "2019-07-25T15:54:13.088Z"
  user_type: "nurse"
  zip: "759550"






  componentDidMount() {

    socket.on('created-hospitals', socketData => {
      console.log('awsumData', socketData)
      console.log('greatData', socketData.data)
      this.setState({
        data: socketData.data
      })
    })
  }

  componentWillUnmount() {
    socket.off('created-hospitals')
  }




  render() {

    return (
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-8">
          <div className="create-form-head">
            <h2>Add Hospital</h2>
          </div>
          <div className="create-form nurse-form">
            <div id="err">{this.state.error}</div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type Name" onChange={this.handleChangeHospital.bind(this)} />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" name="address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type Address" onChange={this.handleChangeHospital.bind(this)} />
            </div>
            <div className="form-group">
              <label>Contact Data</label>
              <div className="form-group">
                <input type="number" name="contactData" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Data" onChange={this.handleChangeHospital.bind(this)} />
              </div>
            </div>
            <div className="form-group">
              <label>Create Date</label>
              <input type="date" name="createDate" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Date" onChange={this.handleChangeHospital.bind(this)} />
            </div>
            <div className="form-group button">
              <button className="btn btn-primary" type="submit" onClick={this.addHospital.bind(this)}>
                {/* {loading && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>} */}
                Add Hospital
                                </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Create2





#!/usr/bin / env node

/**
 * Module dependencies.
 */

var app = require("../app");
var debug = require("debug")("nursingnat:server");
var http = require("http");
var NATS = require("nats");
var request = require("request");
const apiUrl = "http://198.46.182.152:3000/";
var requestOptions = {
  method: "POST",
  headers: {
    "content-type": "application/json"
  }
};

var nats = NATS.connect({
  url: "nats://nat:4222",
  json: true
});

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

var io = require("socket.io")(server);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

io.on("connection", socket => {
  socket.on("login", data => {
    console.log("login: ", data);
    requestOptions.uri = apiUrl + "login";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    request(requestOptions, function (error, response, body) {
      socket.emit("logged-in", body);
    });
  });
  socket.on("register", data => {
    requestOptions.uri = apiUrl + "register";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    console.log("register");
    request(requestOptions, function (error, response, body) {
      socket.emit("registered", body);
    });
  });

  socket.on("register-social", data => {
    requestOptions.uri = apiUrl + "signup/" + data.request;
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    console.log("register-social");
    request(requestOptions, function (error, response, body) {
      socket.emit("registered-social", data);
    });
  });

  socket.on("forget-password", data => {
    requestOptions.uri = apiUrl + "forget-password";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    console.log("forget-password");

    request(requestOptions, function (error, response, body) {
      socket.emit("forgetted-password", body);
    });
  });

  socket.on("user-details", function (data) {
    requestOptions.uri = apiUrl + "users";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("user-details");

    request(requestOptions, function (error, response, body) {
      console.log(typeof body);

      socket.emit("user-detailed", body);
    });
  });

  socket.on("update-user", data => {
    requestOptions.uri = apiUrl + "users";
    requestOptions.method = "PUT";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("update-user");

    request(requestOptions, function (error, response, body) {
      socket.emit("updated-user", body);
    });
  });

  socket.on("get-jobs", function (data) {
    requestOptions.uri = apiUrl + "job";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-jobs");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-jobs", body);
    });
  });

  socket.on("post-job", function (data) {
    requestOptions.uri = apiUrl + "job";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("post-jobs");

    request(requestOptions, function (error, response, body) {
      socket.emit("posted-jobs", body);
    });
  });

  socket.on("get-job", function (data) {
    requestOptions.uri = apiUrl + "job/" + data.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-job");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-job", body);
    });
  });

  socket.on("update-job", function (data) {
    requestOptions.uri = apiUrl + "job/" + data.request;
    requestOptions.method = "PUT";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("update-job");

    request(requestOptions, function (error, response, body) {
      socket.emit("updated-job", body);
    });
  });

  socket.on("delete-job", function (data) {
    requestOptions.uri = apiUrl + "job/" + data.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("delete-job");

    request(requestOptions, function (error, response, body) {
      socket.emit("deleted-job", body);
    });
  });

  socket.on("apply-job", function (data) {
    requestOptions.uri = apiUrl + "job/" + data.request + '/apply';
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("apply-job");

    request(requestOptions, function (error, response, body) {
      socket.emit("applied-job", body);
    });
  });

  socket.on("get-nurses", function (data) {
    requestOptions.uri = apiUrl + "nurse" 
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-nurses");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-nurses", body);
    });
  });

  socket.on("create-nurse", function (data) {
    requestOptions.uri = apiUrl + "nurse";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("create-nurse");

    request(requestOptions, function (error, response, body) {
      socket.emit("created-nurse", body);
    });
  });

  socket.on("get-nurse", function (data) {
    requestOptions.uri = apiUrl + "nurse/" + data.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-nurse");

    request(requestOptions, function (error, response, body) {
      console.log("nurse: ", reply);
      socket.emit("getted-nurse", body);
    });
  });

  socket.on("update-nurse", function (data) {
    requestOptions.uri = apiUrl + "nurse/" + data.request;
    requestOptions.method = "PUT";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("update-nurse");

    request(requestOptions, function (error, response, body) {
      socket.emit("updated-nurse", body);
    });
  });

  socket.on("delete-nurse", function (data) {
    requestOptions.uri = apiUrl + "nurse/" + data.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("delete-nurse");

    request(requestOptions, function (error, response, body) {
      socket.emit("deleted-nurse", body);
    });
  });

  socket.on("get-hospitals", function (data) {
    requestOptions.uri = apiUrl + "hospitals";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-hospitals");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-hospitals", body);
    });
  });

  socket.on("create-hospital", function (data) {
    requestOptions.uri = apiUrl + "hospitals";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("create-hospitals");

    request(requestOptions, function (error, response, body) {
      socket.emit("created-hospitals", body);
    });
  });

  socket.on("get-hospital", function (data) {
    requestOptions.uri = apiUrl + "hospitals/" + data.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-hospital");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-hospital", body);
    });
  });

  socket.on("update-hospital", function (data) {
    requestOptions.uri = apiUrl + "hospitals/" + data.request;
    requestOptions.method = "PUT";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("update-hospital");

    request(requestOptions, function (error, response, body) {
      socket.emit("updated-hospital", body);
    });
  });

  socket.on("delete-hospital", function (data) {
    requestOptions.uri = apiUrl + "hospitals/" + data.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("delete-hospital");

    request(requestOptions, function (error, response, body) {
      socket.emit("deleted-hospital", body);
    });
  });

  socket.on("get-chats", data => {
    requestOptions.uri = apiUrl + "chat/";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-chats");
    request(requestOptions, function (error, response, body) {
      socket.emit("getted-chats", body);
    });
  });

  socket.on("create-chat", data => {
    requestOptions.uri = apiUrl + "chat/";
    requestOptions.method = "POST";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("create-chat");

    request(requestOptions, function (error, response, body) {
      socket.emit("created-chat", body);
    });
  });

  socket.on("chat-details", data => {
    requestOptions.uri = apiUrl + "chat/" + data.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("chat-details");

    request(requestOptions, function (error, response, body) {
      socket.emit("chat-detailed", body);
    });
  });

  socket.on("get-clinics", function (data) {
    requestOptions.uri = apiUrl + "clinics";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-client");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-client", body);
    });
  });

  socket.on("create-clinic", function (data) {
    requestOptions.uri = apiUrl + "clinics";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("create-client");

    request(requestOptions, function (error, response, body) {
      socket.emit("created-client", body);
    });
  });

  socket.on("get-clinic", function (data) {
    requestOptions.uri = apiUrl + "clinic/" + data.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-clients");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-clients", body);
    });
  });

  socket.on("update-clinic", function (data) {
    requestOptions.uri = apiUrl + "clinics/" + data.request;
    requestOptions.method = "PUT";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("update-client");

    request(requestOptions, function (error, response, body) {
      socket.emit("updated-client", body);
    });
  });

  socket.on("delete-clinic", function (data) {
    requestOptions.uri = apiUrl + "clinics/" + data.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("delete-client");

    request(requestOptions, function (error, response, body) {
      socket.emit("deleted-client", body);
    });
  });

  socket.on("get-nurse-groups", function (data) {
    requestOptions.uri = apiUrl + "nurse-group";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-nurse-groups");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-nurse-groups", body);
    });
  });

  socket.on("create-nurse-group", function (data) {
    requestOptions.uri = apiUrl + "nurse-group";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("create-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("created-nurse-group", body);
    });
  });

  socket.on("get-nurse-group", function (data) {
    requestOptions.uri = apiUrl + "nurse-group/" + data.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-nurse-group", body);
    });
  });

  socket.on("update-nurse-group", function (data) {
    requestOptions.uri = apiUrl + "nurse-group/" + data.request;
    requestOptions.method = "PUT";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("update-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("updated-nurse-group", body);
    });
  });

  socket.on("delete-nurse-group", function (data) {
    requestOptions.uri = apiUrl + "nurse-group/" + data.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("delete-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("deleted-nurse-group", body);
    });
  });

  socket.on("get-manage-nurse-groups", function (data) {
    requestOptions.uri = apiUrl + "manage-nurse-group";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-manage-nurse-group", body);
    });
  });

  socket.on("create-manage-nurse-group", function (data) {
    requestOptions.uri = apiUrl + "manage-nurse-group";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("create-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("created-manage-nurse-group", body);
    });
  });

  socket.on("get-manage-nurse-group", function (data) {
    requestOptions.uri = apiUrl + "manage-nurse-group/" + data.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-manage-nurse-group", body);
    });
  });

  socket.on("update-manage-nurse-group", function (data) {
    requestOptions.uri = apiUrl + "manage-nurse-group/" + data.request;
    requestOptions.method = "PUT";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("update-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("updated-manage-nurse-group", body);
    });
  });

  socket.on("delete-manage-nurse-group", function (data) {
    requestOptions.uri = apiUrl + "manage-nurse-group/" + data.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("delete-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("deleted-manage-nurse-group", body);
    });
  });

  socket.on("create-roles", function (data) {
    requestOptions.uri = apiUrl + "roles";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("create-roles");

    request(requestOptions, function (error, response, body) {
      socket.emit("created-roles", body);
    });
  });

  socket.on("get-roles", function (data) {
    requestOptions.uri = apiUrl + "roles/";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-roles");

    request(requestOptions, function (error, response, body) {
      socket.emit("geted-roles", body);
    });
  });

  socket.on("assign-roles", function (data) {
    requestOptions.uri = apiUrl + "roles/assign-role";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("assign-roles");

    request(requestOptions, function (error, response, body) {
      socket.emit("assigned-roles", body);
    });
  });

  socket.on("get-references", function (data) {
    requestOptions.uri = apiUrl + "references";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    request(requestOptions, function (error, response, body) {
      socket.emit("getted-references", body);
    });
  });

  socket.on("create-reference", function (data) {
    requestOptions.uri = apiUrl + "references";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    request(requestOptions, function (error, response, body) {
      socket.emit("created-reference", body);
    });
  });

  socket.on("get-reference", function (data) {
    requestOptions.uri = apiUrl + "references/" + data.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    request(requestOptions, function (error, response, body) {
      socket.emit("geted-reference", body);
    });
  });

  socket.on("update-reference", function (data) {
    requestOptions.uri = apiUrl + "references/" + data.request;
    requestOptions.method = "PUT";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    request(requestOptions, function (error, response, body) {
      socket.emit("updated-reference", body);
    });
  });

  socket.on("delete-reference", function (data) {
    requestOptions.uri = apiUrl + "references/" + data.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: data.token
    };
    request(requestOptions, function (error, response, body) {
      socket.emit("deleted-reference", body);
    });
  });
});













nats.on("error", function (err) {
  console.log("error", err);
});

nats.on("connect", function () {
  console.log("connected");

  nats.subscribe("login", function (msg, reply) {
    requestOptions.uri = apiUrl + "login";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    console.log("login");
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("register", (msg, reply) => {
    requestOptions.uri = apiUrl + "register";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    console.log("register");
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("register-social", (msg, reply) => {
    requestOptions.uri = apiUrl + "signup/" + msg.request;
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    console.log("register-social");
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("forget-password", (msg, reply) => {
    requestOptions.uri = apiUrl + "forget-password";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    console.log("forget-password");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("user-details", function (msg, reply) {
    requestOptions.uri = apiUrl + "users";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("user-details");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("update-user", function (msg, reply) {
    requestOptions.uri = apiUrl + "users";
    requestOptions.method = "PUT";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("update-user");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-jobs", function (msg, reply) {
    requestOptions.uri = apiUrl + "job";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-jobs");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("post-job", function (msg, reply) {
    requestOptions.uri = apiUrl + "job";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("post-jobs");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-job", function (msg, reply) {
    requestOptions.uri = apiUrl + "job/" + msg.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-job");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("update-job", function (msg, reply) {
    requestOptions.uri = apiUrl + "job/" + msg.request;
    requestOptions.method = "PUT";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("update-job");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("delete-job", function (msg, reply) {
    requestOptions.uri = apiUrl + "job/" + msg.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("delete-job");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("apply-job", function (msg, reply) {
    requestOptions.uri = apiUrl + "job/" + msg.request;
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("apply-job");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-nurses", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-nurses");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("create-nurse", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("create-nurse");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-nurse", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse/" + msg.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-nurse");

    request(requestOptions, function (error, response, body) {
      console.log("nurse", reply);
      nats.publish(reply, body);
    });
  });

  nats.subscribe("update-nurse", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse/" + msg.request;
    requestOptions.method = "PUT";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("update-nurse");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("delete-nurse", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse/" + msg.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("delete-nurse");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-hospitals", function (msg, reply) {
    requestOptions.uri = apiUrl + "hospitals";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-hospitals");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("create-hospital", function (msg, reply) {
    requestOptions.uri = apiUrl + "hospital";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("create-hospitals");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-hospital", function (msg, reply) {
    requestOptions.uri = apiUrl + "hospital/" + msg.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-hospital");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("update-hospital", function (msg, reply) {
    requestOptions.uri = apiUrl + "hospital/" + msg.request;
    requestOptions.method = "PUT";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("update-hospital");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("delete-hospital", function (msg, reply) {
    requestOptions.uri = apiUrl + "hospital/" + msg.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("delete-hospital");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-chats", (msg, reply) => {
    requestOptions.uri = apiUrl + "chat/";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-chats");
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("create-chat", (msg, reply) => {
    requestOptions.uri = apiUrl + "chat/";
    requestOptions.method = "POST";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("create-chat");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("chat-details", (msg, reply) => {
    requestOptions.uri = apiUrl + "chat/" + msg.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("chat-details");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-clinics", function (msg, reply) {
    requestOptions.uri = apiUrl + "clinics";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-client");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("create-clinic", function (msg, reply) {
    requestOptions.uri = apiUrl + "clinics";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("create-client");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-clinic", function (msg, reply) {
    requestOptions.uri = apiUrl + "clinic/" + msg.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-clients");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("update-clinic", function (msg, reply) {
    requestOptions.uri = apiUrl + "clinics/" + msg.request;
    requestOptions.method = "PUT";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("update-client");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("delete-clinic", function (msg, reply) {
    requestOptions.uri = apiUrl + "clinics/" + msg.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("delete-client");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-nurse-groups", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse-group";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-nurse-groups");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("create-nurse-group", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse-group";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("create-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-nurse-group", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse-group/" + msg.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("update-nurse-group", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse-group/" + msg.request;
    requestOptions.method = "PUT";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("update-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("delete-nurse-group", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse-group/" + msg.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("delete-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-manage-nurse-groups", function (msg, reply) {
    requestOptions.uri = apiUrl + "manage-nurse-group";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("create-manage-nurse-group", function (msg, reply) {
    requestOptions.uri = apiUrl + "manage-nurse-group";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("create-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-manage-nurse-group", function (msg, reply) {
    requestOptions.uri = apiUrl + "manage-nurse-group/" + msg.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("update-manage-nurse-group", function (msg, reply) {
    requestOptions.uri = apiUrl + "manage-nurse-group/" + msg.request;
    requestOptions.method = "PUT";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("update-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("delete-manage-nurse-group", function (msg, reply) {
    requestOptions.uri = apiUrl + "manage-nurse-group/" + msg.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("delete-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("create-roles", function (msg, reply) {
    requestOptions.uri = apiUrl + "roles";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("create-roles");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-roles", function (msg, reply) {
    requestOptions.uri = apiUrl + "roles/";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-roles");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });
  nats.subscribe("get-references", function (msg, reply) {
    requestOptions.uri = apiUrl + "references";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("create-reference", function (msg, reply) {
    requestOptions.uri = apiUrl + "references";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-reference", function (msg, reply) {
    requestOptions.uri = apiUrl + "references/" + msg.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("update-reference", function (msg, reply) {
    requestOptions.uri = apiUrl + "references/" + msg.request;
    requestOptions.method = "PUT";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("delete-reference", function (msg, reply) {
    requestOptions.uri = apiUrl + "references/" + msg.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: msg.token
    };
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });
});

















































#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require("../app");
var debug = require("debug")("nursingnat:server");
var http = require("http");
var NATS = require("nats");
var request = require("request");
const apiUrl = "http://198.46.182.152:3000/";
var requestOptions = {
  method: "POST",
  headers: {
    "content-type": "application/json"
  }
};

var nats = NATS.connect({
  url: "nats://nat:4222",
  json: true
});

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

var io = require("socket.io")(server);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

io.on("connection", socket => {
  socket.on("login", data => {
    console.log("login: ", data);
    requestOptions.uri = apiUrl + "login";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    request(requestOptions, function (error, response, body) {
      socket.emit("logged-in", body);
    });
  });
  socket.on("register", data => {
    requestOptions.uri = apiUrl + "register";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    console.log("register");
    request(requestOptions, function (error, response, body) {
      socket.emit("registered", body);
    });
  });

  socket.on("register-social", data => {
    requestOptions.uri = apiUrl + "signup/" + data.request;
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    console.log("register-social");
    request(requestOptions, function (error, response, body) {
      socket.emit("registered-social", data);
    });
  });

  socket.on("forget-password", data => {
    requestOptions.uri = apiUrl + "forget-password";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    console.log("forget-password");

    request(requestOptions, function (error, response, body) {
      socket.emit("forgetted-password", body);
    });
  });

  socket.on("user-details", function (data) {
    requestOptions.uri = apiUrl + "users";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("user-details");

    request(requestOptions, function (error, response, body) {
      console.log(typeof body);

      socket.emit("user-detailed", body);
    });
  });

  socket.on("update-user", data => {
    requestOptions.uri = apiUrl + "users";
    requestOptions.method = "PUT";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("update-user");

    request(requestOptions, function (error, response, body) {
      socket.emit("updated-user", body);
    });
  });

  socket.on("get-jobs", function (data) {
    requestOptions.uri = apiUrl + "job";
    requestOptions.method = "GET";
    requestOptions.qs = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-jobs");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-jobs", body);
    });
  });

  socket.on("post-job", function (data) {
    requestOptions.uri = apiUrl + "job";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("post-jobs");

    request(requestOptions, function (error, response, body) {
      socket.emit("posted-jobs", body);
    });
  });

  socket.on("get-job", function (data) {
    requestOptions.uri = apiUrl + "job/" + data.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-job");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-job", body);
    });
  });

  socket.on("update-job", function (data) {
    requestOptions.uri = apiUrl + "job/" + data.request;
    requestOptions.method = "PUT";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("update-job");

    request(requestOptions, function (error, response, body) {
      socket.emit("updated-job", body);
    });
  });

  socket.on("delete-job", function (data) {
    requestOptions.uri = apiUrl + "job/" + data.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("delete-job");

    request(requestOptions, function (error, response, body) {
      socket.emit("deleted-job", body);
    });
  });

  socket.on("apply-job", function (data) {
    requestOptions.uri = apiUrl + "job/" + data.request + "/apply";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("apply-job");

    request(requestOptions, function (error, response, body) {
      socket.emit("applied-job", body);
    });
  });

  socket.on("get-nurses", function (data) {
    requestOptions.uri = apiUrl + "nurse";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-nurses");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-nurses", body);
    });
  });

  socket.on("create-nurse", function (data) {
    requestOptions.uri = apiUrl + "nurse";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("create-nurse");

    request(requestOptions, function (error, response, body) {
      socket.emit("created-nurse", body);
    });
  });

  socket.on("get-nurse", function (data) {
    requestOptions.uri = apiUrl + "nurse/" + data.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-nurse");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-nurse", body);
    });
  });

  socket.on("update-nurse", function (data) {
    requestOptions.uri = apiUrl + "nurse/" + data.request;
    requestOptions.method = "PUT";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("update-nurse");

    request(requestOptions, function (error, response, body) {
      socket.emit("updated-nurse", body);
    });
  });

  socket.on("delete-nurse", function (data) {
    requestOptions.uri = apiUrl + "nurse/" + data.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("delete-nurse");

    request(requestOptions, function (error, response, body) {
      socket.emit("deleted-nurse", body);
    });
  });

  socket.on("get-hospitals", function (data) {
    requestOptions.uri = apiUrl + "hospitals";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-hospitals");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-hospitals", body);
    });
  });

  socket.on("create-hospital", function (data) {
    requestOptions.uri = apiUrl + "hospitals";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("create-hospitals");

    request(requestOptions, function (error, response, body) {
      socket.emit("created-hospitals", body);
    });
  });

  socket.on("get-hospital", function (data) {
    requestOptions.uri = apiUrl + "hospitals/" + data.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-hospital");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-hospital", body);
    });
  });

  socket.on("update-hospital", function (data) {
    requestOptions.uri = apiUrl + "hospitals/" + data.request;
    requestOptions.method = "PUT";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("update-hospital");

    request(requestOptions, function (error, response, body) {
      socket.emit("updated-hospital", body);
    });
  });

  socket.on("delete-hospital", function (data) {
    requestOptions.uri = apiUrl + "hospitals/" + data.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("delete-hospital");

    request(requestOptions, function (error, response, body) {
      socket.emit("deleted-hospital", body);
    });
  });

  socket.on("get-chats", data => {
    requestOptions.uri = apiUrl + "chat/";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-chats");
    request(requestOptions, function (error, response, body) {
      socket.emit("getted-chats", body);
    });
  });

  socket.on("create-chat", data => {
    requestOptions.uri = apiUrl + "chat/";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("create-chat");

    request(requestOptions, function (error, response, body) {
      socket.emit("created-chat", body);
    });
  });

  socket.on("chat-details", data => {
    requestOptions.uri = apiUrl + "chat/" + data.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("chat-details");

    request(requestOptions, function (error, response, body) {
      socket.emit("chat-detailed", body);
    });
  });

  socket.on("get-clinics", function (data) {
    requestOptions.uri = apiUrl + "clinics";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-client");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-client", body);
    });
  });

  socket.on("create-clinic", function (data) {
    requestOptions.uri = apiUrl + "clinics";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("create-client");

    request(requestOptions, function (error, response, body) {
      socket.emit("created-client", body);
    });
  });

  socket.on("get-clinic", function (data) {
    requestOptions.uri = apiUrl + "clinic/" + data.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-clients");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-clients", body);
    });
  });

  socket.on("update-clinic", function (data) {
    requestOptions.uri = apiUrl + "clinics/" + data.request;
    requestOptions.method = "PUT";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("update-client");

    request(requestOptions, function (error, response, body) {
      socket.emit("updated-client", body);
    });
  });

  socket.on("delete-clinic", function (data) {
    requestOptions.uri = apiUrl + "clinics/" + data.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("delete-client");

    request(requestOptions, function (error, response, body) {
      socket.emit("deleted-client", body);
    });
  });

  socket.on("get-nurse-groups", function (data) {
    requestOptions.uri = apiUrl + "nurse-group";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-nurse-groups");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-nurse-groups", body);
    });
  });

  socket.on("create-nurse-group", function (data) {
    requestOptions.uri = apiUrl + "nurse-group";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("create-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("created-nurse-group", body);
    });
  });

  socket.on("get-nurse-group", function (data) {
    requestOptions.uri = apiUrl + "nurse-group/" + data.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-nurse-group", body);
    });
  });

  socket.on("update-nurse-group", function (data) {
    requestOptions.uri = apiUrl + "nurse-group/" + data.request;
    requestOptions.method = "PUT";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("update-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("updated-nurse-group", body);
    });
  });

  socket.on("delete-nurse-group", function (data) {
    requestOptions.uri = apiUrl + "nurse-group/" + data.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("delete-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("deleted-nurse-group", body);
    });
  });

  socket.on("get-manage-nurse-groups", function (data) {
    requestOptions.uri = apiUrl + "manage-nurse-group";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-manage-nurse-group", body);
    });
  });

  socket.on("create-manage-nurse-group", function (data) {
    requestOptions.uri = apiUrl + "manage-nurse-group";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("create-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("created-manage-nurse-group", body);
    });
  });

  socket.on("get-manage-nurse-group", function (data) {
    requestOptions.uri = apiUrl + "manage-nurse-group/" + data.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("getted-manage-nurse-group", body);
    });
  });

  socket.on("update-manage-nurse-group", function (data) {
    requestOptions.uri = apiUrl + "manage-nurse-group/" + data.request;
    requestOptions.method = "PUT";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("update-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("updated-manage-nurse-group", body);
    });
  });

  socket.on("delete-manage-nurse-group", function (data) {
    requestOptions.uri = apiUrl + "manage-nurse-group/" + data.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("delete-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      socket.emit("deleted-manage-nurse-group", body);
    });
  });

  socket.on("create-roles", function (data) {
    requestOptions.uri = apiUrl + "roles";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("create-roles");

    request(requestOptions, function (error, response, body) {
      socket.emit("created-roles", body);
    });
  });

  socket.on("get-roles", function (data) {
    requestOptions.uri = apiUrl + "roles/";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("get-roles");

    request(requestOptions, function (error, response, body) {
      socket.emit("geted-roles", body);
    });
  });

  socket.on("assign-roles", function (data) {
    requestOptions.uri = apiUrl + "roles/assign-role";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    console.log("assign-roles");

    request(requestOptions, function (error, response, body) {
      socket.emit("assigned-roles", body);
    });
  });

  socket.on("get-references", function (data) {
    requestOptions.uri = apiUrl + "references";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    request(requestOptions, function (error, response, body) {
      socket.emit("getted-references", body);
    });
  });

  socket.on("create-reference", function (data) {
    requestOptions.uri = apiUrl + "references";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    request(requestOptions, function (error, response, body) {
      socket.emit("created-reference", body);
    });
  });

  socket.on("get-reference", function (data) {
    requestOptions.uri = apiUrl + "references/" + data.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    request(requestOptions, function (error, response, body) {
      socket.emit("geted-reference", body);
    });
  });

  socket.on("update-reference", function (data) {
    requestOptions.uri = apiUrl + "references/" + data.request;
    requestOptions.method = "PUT";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    request(requestOptions, function (error, response, body) {
      socket.emit("updated-reference", body);
    });
  });

  socket.on("delete-reference", function (data) {
    requestOptions.uri = apiUrl + "references/" + data.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: data.token
    };
    request(requestOptions, function (error, response, body) {
      socket.emit("deleted-reference", body);
    });
  });

  socket.on("find-users", function (data) {
    requestOptions.uri = apiUrl + "users/find";
    requestOptions.method = "POST";
    requestOptions.json = data.body;
    requestOptions.auth = {
      bearer: data.token
    };
    request(requestOptions, function (error, response, body) {
      socket.emit("finded-users", body);
    });
  });

  socket.on("get-nurse-referrences", function (data) {
    requestOptions.uri = apiUrl + "nurse/references/" + data.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: data.token
    };
    request(requestOptions, function (error, response, body) {
      socket.emit("get-nurse-referrenced", body);
    });
  });
});

nats.on("error", function (err) {
  console.log("error", err);
});

nats.on("connect", function () {
  console.log("connected");

  nats.subscribe("login", function (msg, reply) {
    requestOptions.uri = apiUrl + "login";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    console.log("login");
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("register", (msg, reply) => {
    requestOptions.uri = apiUrl + "register";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    console.log("register");
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("register-social", (msg, reply) => {
    requestOptions.uri = apiUrl + "signup/" + msg.request;
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    console.log("register-social");
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("forget-password", (msg, reply) => {
    requestOptions.uri = apiUrl + "forget-password";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    console.log("forget-password");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("user-details", function (msg, reply) {
    requestOptions.uri = apiUrl + "users";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("user-details");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("update-user", function (msg, reply) {
    requestOptions.uri = apiUrl + "users";
    requestOptions.method = "PUT";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("update-user");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-jobs", function (msg, reply) {
    requestOptions.uri = apiUrl + "job";
    requestOptions.method = "GET";
    requestOptions.qs = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-jobs");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("post-job", function (msg, reply) {
    requestOptions.uri = apiUrl + "job";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("post-jobs");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-job", function (msg, reply) {
    requestOptions.uri = apiUrl + "job/" + msg.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-job");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("update-job", function (msg, reply) {
    requestOptions.uri = apiUrl + "job/" + msg.request;
    requestOptions.method = "PUT";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("update-job");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("delete-job", function (msg, reply) {
    requestOptions.uri = apiUrl + "job/" + msg.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("delete-job");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("apply-job", function (msg, reply) {
    requestOptions.uri = apiUrl + "job/" + msg.request;
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("apply-job");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-nurses", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-nurses");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("create-nurse", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("create-nurse");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-nurse", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse/" + msg.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-nurse");

    request(requestOptions, function (error, response, body) {
      console.log("nurse", reply);
      nats.publish(reply, body);
    });
  });

  nats.subscribe("update-nurse", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse/" + msg.request;
    requestOptions.method = "PUT";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("update-nurse");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("delete-nurse", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse/" + msg.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("delete-nurse");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-hospitals", function (msg, reply) {
    requestOptions.uri = apiUrl + "hospitals";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-hospitals");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("create-hospital", function (msg, reply) {
    requestOptions.uri = apiUrl + "hospital";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("create-hospitals");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-hospital", function (msg, reply) {
    requestOptions.uri = apiUrl + "hospital/" + msg.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-hospital");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("update-hospital", function (msg, reply) {
    requestOptions.uri = apiUrl + "hospital/" + msg.request;
    requestOptions.method = "PUT";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("update-hospital");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("delete-hospital", function (msg, reply) {
    requestOptions.uri = apiUrl + "hospital/" + msg.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("delete-hospital");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-chats", (msg, reply) => {
    requestOptions.uri = apiUrl + "chat/";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-chats");
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("create-chat", (msg, reply) => {
    requestOptions.uri = apiUrl + "chat/";
    requestOptions.method = "POST";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("create-chat");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("chat-details", (msg, reply) => {
    requestOptions.uri = apiUrl + "chat/" + msg.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("chat-details");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-clinics", function (msg, reply) {
    requestOptions.uri = apiUrl + "clinics";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-client");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("create-clinic", function (msg, reply) {
    requestOptions.uri = apiUrl + "clinics";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("create-client");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-clinic", function (msg, reply) {
    requestOptions.uri = apiUrl + "clinic/" + msg.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-clients");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("update-clinic", function (msg, reply) {
    requestOptions.uri = apiUrl + "clinics/" + msg.request;
    requestOptions.method = "PUT";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("update-client");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("delete-clinic", function (msg, reply) {
    requestOptions.uri = apiUrl + "clinics/" + msg.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("delete-client");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-nurse-groups", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse-group";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-nurse-groups");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("create-nurse-group", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse-group";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("create-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-nurse-group", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse-group/" + msg.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("update-nurse-group", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse-group/" + msg.request;
    requestOptions.method = "PUT";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("update-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("delete-nurse-group", function (msg, reply) {
    requestOptions.uri = apiUrl + "nurse-group/" + msg.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("delete-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-manage-nurse-groups", function (msg, reply) {
    requestOptions.uri = apiUrl + "manage-nurse-group";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("create-manage-nurse-group", function (msg, reply) {
    requestOptions.uri = apiUrl + "manage-nurse-group";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("create-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-manage-nurse-group", function (msg, reply) {
    requestOptions.uri = apiUrl + "manage-nurse-group/" + msg.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("update-manage-nurse-group", function (msg, reply) {
    requestOptions.uri = apiUrl + "manage-nurse-group/" + msg.request;
    requestOptions.method = "PUT";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("update-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("delete-manage-nurse-group", function (msg, reply) {
    requestOptions.uri = apiUrl + "manage-nurse-group/" + msg.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("delete-manage-nurse-group");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("create-roles", function (msg, reply) {
    requestOptions.uri = apiUrl + "roles";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("create-roles");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-roles", function (msg, reply) {
    requestOptions.uri = apiUrl + "roles/";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    console.log("get-roles");

    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });
  nats.subscribe("get-references", function (msg, reply) {
    requestOptions.uri = apiUrl + "references";
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("create-reference", function (msg, reply) {
    requestOptions.uri = apiUrl + "references";
    requestOptions.method = "POST";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("get-reference", function (msg, reply) {
    requestOptions.uri = apiUrl + "references/" + msg.request;
    requestOptions.method = "GET";
    requestOptions.auth = {
      bearer: msg.token
    };
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("update-reference", function (msg, reply) {
    requestOptions.uri = apiUrl + "references/" + msg.request;
    requestOptions.method = "PUT";
    requestOptions.json = msg.body;
    requestOptions.auth = {
      bearer: msg.token
    };
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });

  nats.subscribe("delete-reference", function (msg, reply) {
    requestOptions.uri = apiUrl + "references/" + msg.request;
    requestOptions.method = "DELETE";
    requestOptions.auth = {
      bearer: msg.token
    };
    request(requestOptions, function (error, response, body) {
      nats.publish(reply, body);
    });
  });
});