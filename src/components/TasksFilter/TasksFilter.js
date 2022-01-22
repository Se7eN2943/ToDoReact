import React, { Component } from 'react';

export default class TasksFilter extends Component {
    state = {
        classNameAll: 'selected',
        classNameActiv: ' ',
        classNameCompleted: ' '
    }
    toggle(value, name) {
        this.props.todoFilter(value)
        if (name === 'Active') {
            return this.setState(
                {
                    classNameAll: ' ',
                    classNameActiv: 'selected',
                    classNameCompleted: ' '
                }
            )
        }
        if (name === 'All') {
            return this.setState(
                {
                    classNameAll: 'selected',
                    classNameActiv: ' ',
                    classNameCompleted: ' '
                }
            )
        }
        if (name === 'Completed') {
            return this.setState(
                {
                    classNameAll: ' ',
                    classNameActiv: ' ',
                    classNameCompleted: 'selected'
                }
            )
        }
        
    }

    render() {
        return (
            <ul className="filters">
                <li>
                    <button onClick={() => this.toggle('All', 'All')} className={this.state.classNameAll}>All</button>
                </li>
                <li>
                    <button onClick={() => this.toggle(false, 'Active')} className={this.state.classNameActiv}>Active</button>
                </li>
                <li>
                    <button onClick={() => this.toggle(true, 'Completed')} className={this.state.classNameCompleted}>Completed</button>
                </li>
            </ul>
        )
    }
}

