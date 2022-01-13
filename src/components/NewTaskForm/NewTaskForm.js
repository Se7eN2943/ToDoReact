import React from 'react';



const NewTaskForm = () => {
    return (
        <li class="editing">
            <div class="view">
                <input class="toggle" type="checkbox" />
                <label>
                    <span class="description">Editing task</span>
                    <span class="created">created 5 minutes ago</span>
                </label>
                <button class="icon icon-edit"></button>
                <button class="icon icon-destroy"></button>
            </div>
            <input type="text" class="edit" value="Editing task" />
        </li>
    )
}

export default NewTaskForm