import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            course: '',
            tag: '',
            description: '',
            selectedFiles: null

        };
    }

    onChange = (e) => {
        /*
         Because we named the inputs to match their
         corresponding values in state, it's
         super easy to update the state
         */
        this.setState({ [e.target.name]: e.target.value });
    }

    fileChangedHandler = event => {
        this.setState({selectedFile: event.target.files[0]})

    }

    onSubmit = selectedFiles => {
        const uploaders = selectedFiles.map(selectedFile => {
        const formData = new FormData();
        formData.append(
            'newfile',
            selectedFile
        );
        const config = { headers: { 'Access-Control-Allow-Origin': '*' } };
        axios.post('http://bacalaureat.local/api/v1/upload', formData,config);
        // get our form data out of state
        const { name, course, tag, description} = this.state;
        axios.post('http://bacalaureat.local/api/v1/create',
            { name, course, tag, description})
            .then((result) => {
                //access the results here....
            });
        });
    }

    render() {
        const { name, course, tag, description } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <Dropzone
                    onDrop={this.handleDrop}
                    multiple
                    accept="image/*"
                />
                <input
                    type="file"
                    name="newfile"
                    onChange={this.fileChangedHandler} />
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="course"
                    value={course}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="tag"
                    value={tag}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.onChange}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default Admin;