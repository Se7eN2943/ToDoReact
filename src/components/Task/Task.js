import React from 'react';

// const Task2 = ({ label, importent = false }) => {
//     const style = {
//         color: importent ? 'tomato' : 'black'
//     }
//     return (
//         <span style={style}>{label}</span>
//     )
// }



const Task = () => {
    return (
        // <li class="completed">
        <li> 
            <div class="view">
                <input class="toggle" type="checkbox" />
                <label>
                    <span class="description">Completed task</span>
                    <span class="created">created 17 seconds ago</span>
                </label>
                <button class="icon icon-edit"></button>
                <button class="icon icon-destroy"></button>
            </div>
        </li>
    )
}

export default Task