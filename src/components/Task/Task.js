import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns'

export default class Task extends Component {
    render() {
        const { label, id, checked, onDelTasks, onChecked } = this.props;
        const createData = formatDistanceToNow(new Date())
        let checkClass = 'view'
        if (checked) checkClass = 'completed'

        return (
            <li className={checkClass}>
                <div className='view'>
                    <input id={id} className="toggle" type="checkbox" onClick={onChecked} />
                    <label htmlFor={id} >
                        <span className="description">{label}</span>
                        <span className="created">created {createData} ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={onDelTasks}></button>
                </div>
            </li >
        )
    }
}


