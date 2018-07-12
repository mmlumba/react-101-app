import React from 'react';

export default class ToDoList extends React.Component {
    render() {
        const {
            items
        } = this.props;

        return <ul className="list-group">
            { items.map((item, i) => <li className="list-group-item" key={i}>{item}</li>) }
        </ul>
    }
}