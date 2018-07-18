import React from 'react';

export default class ToDoList extends React.Component {
    render() {
        return <ul className="list-group">
            { this.props.items.map((item, i) => <li className="list-group-item" key={i}>{item}</li>) }
        </ul>
    }
}