import React, { Component } from 'react';
import Task from '../Task/Task'



export default class TaskList extends Component {

    render() {
        const { tododata, onDelTasks } = this.props
        const elements = tododata.map(item => <Task onDelTasks={() => onDelTasks(item.id)} key={item.id} {...item} />)


        return (
            <section className="main">
                <ul className="todo-list">
                    {elements}
                </ul>
            </section>
        )
    }

}





