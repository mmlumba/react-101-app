import React from 'react';
import ToDoList from './ToDoList';

export default class ToDo extends React.Component {
    constructor(props){
        super(props);
        this.todo = React.createRef();
        this.state = {
            data: [],
            value: ''
        }
    }

    handleChange = event => {
        this.setState({ value: event.target.value })
    }

    handleSubmit = event => {
        this.state.data.push(this.state.value);
        this.setState({data: this.state.data, value: ''});
        this.refs.form.reset();
        event.preventDefault();
    }

    render () {
        return <div>
            <h1>My ToDo List</h1>
            <p>Submit a task:</p>
            <form ref="form">
                <input type="text" onChange={this.handleChange} ref={this.todo}></input>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </form>
            <ToDoList items={this.state.data} />
        </div>
    }
}