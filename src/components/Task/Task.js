import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns'

export default class Task extends Component {
    state = {
        timestamp: formatDistanceToNow(Date.now(), { addSuffis: true, includeSeconds: true })
    }
    render() {
        const { label, id, checked, timestamp, onDelTasks, onChecked } = this.props;
        let timeOut = 10000
        setInterval(() => {
            this.setState({ timestamp: formatDistanceToNow(timestamp, { includeSeconds: true }) })
            const timer = Math.floor((Date.now() - timestamp) / 1000)
            if (timer > 60) timeOut = 1000 * 60 // 1 минута
            if (timer > 2700) timeOut = 1000 * 60 * 45 // меньше часа назад
            if (timer > 86400) timeOut = 1000 * 60 * 60 * 24 // 1 день  
        }, timeOut)
        let checkClass = 'view'
        if (checked) checkClass = 'completed'

        return (
            <li className={checkClass}>
                <div className='view'>
                    <input id={id} className="toggle" type="checkbox" onClick={onChecked} />
                    <label htmlFor={id} >
                        <span className="description">{label}</span>
                        <span className="created">created {this.state.timestamp} ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={onDelTasks}></button>
                </div>
            </li >
        )
    }
}


