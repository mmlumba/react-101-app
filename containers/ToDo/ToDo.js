import React from 'react';
import ToDoList from './ToDoList';

// Example App with React!

export default class ToDo extends React.Component {
    constructor(props){
        super(props);
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
    }

    render () {
        return <div>
            <h1>My ToDo List</h1>
            <p>Submit a task:</p>
                <input type="text" onChange={this.handleChange} ref={this.todo} value={this.state.value}></input>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            <ToDoList items={this.state.data} />
        </div>
    }
}