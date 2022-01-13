import React from 'react';
import ToDoListItem from '../Task/Task';

let TaskList = ({ todos }) => {

    const elements = todos.map(item => {
        const{id, ...itemProps} = item
        return (
            <li key={id}>
                <ToDoListItem {...itemProps} />
            </li>
        )
    })


    return (
        <ul>
            {elements}
        </ul>
    )
}

export default TaskList