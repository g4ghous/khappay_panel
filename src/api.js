import React, { Component } from 'react';
import { serverUrl } from '../../../utils/Constants';
import axios from 'axios';
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';


const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

export class Logistic extends Component {

    constructor(props) {
        super(props);
        const contentState = convertFromRaw(content);
        this.state = {
            contentState,
        }
        const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
        const contentBlock = htmlToDraft(html);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState = EditorState.createWithContent(contentState);
            this.state = {
                editorState,
            };
        }
        this.state = {
            data: [],
            title: '',
            template: '',
            content: '',
            title_edit: '',
            template_edit: '',
            content_edit: '',
            error: '',
            logistic: [],
            editorState: EditorState.createEmpty(),
        }
    }

    
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
        console.log(editorState);


    };

    handleChangeLogistic = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addLogistics(e) {
        e.preventDefault();
        var abc = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
        console.log(abc);
        var data = {
            title: this.state.title,
            template: this.state.template,
            content: abc,
            eventId: localStorage.getItem('event'),  
        }
        // let formData = new FormData()
        // formData.append('title', this.state.title)
        // formData.append('template', this.state.template)
        // formData.append('editorState', this.state.editorState)
        // console.log(formData)

        var error = document.getElementById('err');
        if (this.state.title === '' ||
            this.state.template === ''
            // this.state.content === ''

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
            console.log(data);

            axios({
                method: 'post',
                url: serverUrl + 'logistics/add/' + localStorage.getItem('event'),
                data: data
            })
                .then((res) => {
                    console.log('res', res)
                    if (res.data.message === 'success') {
                        window.location.reload();
                        this.setState({
                            loading: true
                        })
                    }
                })
                .catch((err) => {
                    console.log('err', err.response)
                    if (err) {
                        this.setState({
                            loading: true
                        })
                        setTimeout(() => {
                            this.setState({
                                loading: false
                            })
                        }, 3000)
                    }
                })
        }

    }

    editLogistic(_id) {
        localStorage.setItem('logistcId', _id)
        // var abc = convertToRaw((this.state.editorState.getCurrentContent()))
        axios({
            method: 'get',
            url: serverUrl + 'logistics/edit/' + _id
        })
        
        .then((res) => {
            console.log({"Data": res})
            this.setState({
                title_edit: res.data.logistic.title,
                template_edit: res.data.logistic.template,
                content_edit:  htmlToDraft(convertFromRaw(res.data.logistic.content))
            })
        })
        .catch((err) => {
            console.log({ err })
        })
    }

    updateLogistic(e) {
        e.preventDefault();
        var id = localStorage.getItem('logisticId')
        var abc = convertToRaw((this.state.editorState.getCurrentContent()))
        var MyData = {
            'title': this.state.title_edit,
            'template': this.state.template_edit,
            'content': abc, 
        }
        console.log( "data", MyData )

        if(
            this.state.title_edit === "" ||
            this.state.template_edit === "" ||
            this.state.content_edit === ""
        ){}
        else {
            axios({
                method: 'PUT',
                url: serverUrl + 'logistics/edit/' + id,
                data: MyData
            })

            .then((res) => {

            })
            .catch((err) => {
                console.log({err})
            })
        }
    }

    componentDidMount() {
        axios({
            type: 'get',
            url: serverUrl + 'logistics/' + localStorage.getItem('event')
        })
            .then(res => {
                console.log('res', res.data.logistic)
                this.setState({
                    logistic: res.data.logistic
                })
            })
    }

    render() {
        if (!localStorage.getItem('userId')) return window.location.href = '/';
        const { loading } = this.state;
        const { editorState } = this.state;
        const { contentState } = this.state;
        return (
            <div className="col-md-9">
                <div className="contentTemp">
                    <div className="headingTemp">
                        <h4>Event Logistics</h4>
                    </div>
                    <div className="p">
                        <p>Add Logistics information such as transportation, restaurants, hotel, and parking info. Drag to reorder the items.</p>
                    </div>
                    <ul id="sortable" className="list-group">
                        {this.state.logistic.map((logistic) =>
                            <li key={logistic._id} className="list-group-item active">
                                <div className="logistic-icon-dotes">
                                    <i className="fas fa-ellipsis-v"></i>
                                </div>
                                <div className="logistic-text-icon">
                                    <div className="logistic-text">
                                        <h4>{logistic.title}</h4>
                                    </div>
                                    <div className="logistic-icons">
                                        <i className="fas fa-pencil-alt" onClick={this.editLogistic.bind(this, logistic._id)} data-toggle="modal" data-target="#editLogistic"></i>
                                        <i className="fas fa-trash-alt" data-toggle="modal" data-target="#deleteSpeaker"></i>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                    <div className="logistic-button">
                        <button className="btn btn-primary" data-toggle="modal" data-target="#editButton">
                            <i className="fa fa-plus"></i>
                            Add Logistics
                        </button>
                    </div>
                    <div className="modal fade" id="deleteSpeaker" role="dialog" aria-labelledby="deleteSpeaker" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Delete this logistic?</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>You're about to delete a speaker from this event. Are you sure?</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="button cancel" data-dismiss="modal">Cancel</button>
                                    <button type="button" className="button">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="editLogistic" role="dialog" aria-labelledby="editLogistic" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Edit Logistic</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div id="err">{this.state.error}</div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" onChange={this.handleChangeLogistic.bind(this)} id="exampleRadios1" />
                                        <label className="form-check-label">
                                            Use HTML Editor
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" onChange={this.handleChangeLogistic.bind(this)} id="exampleRadios2" />
                                        <label className="form-check-label">
                                            Use Web URL
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group col-md-12 logistic-form-select">
                                    <label>State</label>
                                    <select className="form-control" name="template_edit" value={this.state.template_edit} onChange={this.handleChangeLogistic.bind(this)}>
                                        <option selected>Choose...</option>
                                        <option>website</option>
                                    </select>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label padin">Title:</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="inputPassword" value={this.state.title_edit} name="title_edit" onChange={this.handleChangeLogistic.bind(this)} placeholder="Title" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label padin">Content:</label>
                                    <div className="col-sm-10">
                                        {/* {console.log(this.state.editorState)} */}
                                        <Editor
                                            editorState={this.state.editorState}
                                            toolbarClassName="toolbarClassName"
                                            wrapperClassName="wrapperClassName"
                                            editorClassName="editorClassName"
                                            // onEditorStateChange={this.onEditorStateChange}
                                            onContentStateChange={this.onContentStateChange}
                                            value={this.state.content_edits}
                                        />
                                        {/* <textarea
                                                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                                            /> */}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="button cancel" data-dismiss="modal">Cancel</button>
                                    <button onClick={this.updateLogistic.bind(this)} type="button" className="button" disabled={loading}>
                                    {loading && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>}
                                    Update
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="editButton" role="dialog" aria-labelledby="deleteSpeaker" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Edit Logistic</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div id="err">{this.state.error}</div>
                                    <div className="logistic-form-check">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" onChange={this.handleChangeLogistic.bind(this)} id="exampleRadios1" />
                                            <label className="form-check-label">
                                                Use HTML Editor
                                        </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" onChange={this.handleChangeLogistic.bind(this)} id="exampleRadios2" />
                                            <label className="form-check-label">
                                                Use Web URL
                                        </label>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-12 logistic-form-select">
                                        <label>State</label>
                                        <select className="form-control" name="template" onChange={this.handleChangeLogistic.bind(this)}>
                                            <option selected>Choose...</option>
                                            <option>website</option>
                                        </select>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label padin">Title:</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputPassword" name="title" onChange={this.handleChangeLogistic.bind(this)} placeholder="Title" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label padin">Content:</label>
                                        <div className="col-sm-10">
                                            {/* {console.log(this.state.editorState)} */}
                                            <Editor
                                                editorState={this.state.editorState}
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName"
                                                onEditorStateChange={this.onEditorStateChange}
                                            />
                                            {/* <textarea
                                                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                                            /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="button cancel" data-dismiss="modal">Cancel</button>
                                    <button type="button" className="button" onClick={this.addLogistics.bind(this)} disabled={loading}>
                                        {loading && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>}
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Logistic