import React, {Component} from 'react';

// This "hello.js" file is an example that shows a state update passed onto a UI component as a prop

export default class Hello2 extends Component {
    state = {
        name: ''
    }

    handleChange = event => {
        this.setState({ name: event.target.value })
    }

    render () {
        return <div>
            <Title name={this.state.name} />
            <input type="text" name="name" onChange={this.handleChange}></input>
        </div>
    }
}

// This would normally be its own file, but its ok to place small components in the same file as the main component
class Title extends Component {
    render() {
        return <h1>Hello {this.props.name}!</h1>
    }
}