import React from 'react';
import Task from '../Task/Task.js'



const TaskList = function TaskList(props) {
    const { tododata, onDelTasks, onChecked } = props
    const elements = tododata.map(item => <Task onChecked={() => onChecked(item.id)} onDelTasks={() => onDelTasks(item.id)} key={item.id} {...item} />)
    return (
        <section className="main">
            <ul className="todo-list">
                {elements}
            </ul>
        </section>
    )

}

export default TaskList



