import React, { Component } from 'react';





export default class TasksFilter extends Component {

    render() {
        const{todoFilter} = this.props;
        return (
            <ul className="filters">
                <li>
                    <button onClick={() => todoFilter('All')} className="selected">All</button>
                </li>
                <li>
                    <button onClick={() => todoFilter(false)} >Active</button>
                </li>
                <li>
                    <button onClick={() => todoFilter(true)} >Completed</button>
                </li>
            </ul>
        )
    }
}

