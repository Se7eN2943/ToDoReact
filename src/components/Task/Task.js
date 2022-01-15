import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns'
// const Task2 = ({ label, importent = false }) => {
//     console.log(label)
//     const style = {
//         color: importent ? 'tomato' : 'black'
//     }
//     return (
//         <span style={style}>{label}</span>
//     )
// }



export default class Task extends Component {
    
    state = {
        checked: false,
    }

    onChecked = () => this.setState(state => { 
        return { checked: !state.checked } 
    })

    render() {
        
        const { label, id, onDelTasks } = this.props;
        const createData = formatDistanceToNow(new Date())
        let checkClass = 'view'
        if (this.state.checked) checkClass = 'completed'
        return (
            <li className={checkClass}>
                <div className='view'>
                    <input id={id} className="toggle" type="checkbox" onClick={this.onChecked} />
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


