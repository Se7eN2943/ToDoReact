import React from 'react';
import Task from '../Task/Task'
import NewTaskForm from '../NewTaskForm/NewTaskForm'

const TaskList = () => {

    // const elements = todos.map(item => {
    //     const { id, ...itemProps } = item
    //     return (
    //         <li key={id}>
    //             <ToDoListItem {...itemProps} />
    //         </li>
    //     )
    // })


    return (
        <section class="main">
            <ul class="todo-list">
                <Task />
                <NewTaskForm />
                <Task />
            </ul>
        </section>
    )
}

export default TaskList



