import React, {Component} from 'react';

// This "hello.js" file is an example that alerts the user when the title component has been updated

export default class Hello3 extends Component {
    state = {
        name: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render () {
        return <div>
            <Title name={this.state.name} />
            <input type="text" name="name" onChange={this.handleChange}></input>
        </div>
    }
}

class Title extends Component {
    alertUser = () => console.log("component updated");

    showMessage = () => console.log("component mounted");

    componentDidMount() {
        this.showMessage();
    }

    componentDidUpdate() {
        this.alertUser();
    }

    render() {
        const {
            name
        } = this.props;

        return <h1>Hello {name}!</h1>
    }
}