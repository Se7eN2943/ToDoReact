import React, { Component } from 'react';
import TasksFilter from '../TasksFilter/TasksFilter.js'

export default class Footer extends Component {

    render() {
        const { dataLength, todoFilter, clearComplite } = this.props
        return (
            < footer className="footer" >
                <span className="todo-count">{dataLength} items left</span>
                <TasksFilter todoFilter={todoFilter} />
                <button onClick={() => clearComplite()} className="clear-completed">Clear completed</button>
            </footer>
        )
    }
}

