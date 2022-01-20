import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NewTaskForm from './/components/NewTaskForm/NewTaskForm'
import TaskList from './/components/TaskList/TaskList'
import Footer from './/components/Footer/Footer'



let todoapp = document.querySelector('.todoapp');

const data = [
    { label: 'Drink coffe', id: 1, checked: false, },
    { label: 'Create react app', id: 2, checked: false, },
    { label: 'Rejoice', id: 3, checked: false, },
]

export default class App extends Component {
    
    state = {
        todoData:[]
    }

    clearComplite = () => {
        this.setState(state => {
            let newStateArr = this.state.todoData.filter(item => item.checked === false)
            return { todoData: newStateArr }
        })
    };


    todoFilter = (status = 'All') => {
        console.log(this.state)
        if (status === "All") this.setState({ todoData: data })
        console.log(this.state)
        this.setState(state => {
            let newStateArr = data.filter(item => item.checked === status)
                
                return ({ todoData: newStateArr }, this.state)
        })
                
                
                
    }

    onChecked = id => this.setState(state => {
        let newStateArr = state.todoData.map(item => {
            if (item.id === id) item.checked = !item.checked
            return item
        })
        return { todoData: newStateArr }
    })

    onDelTasks = id => {
        this.setState(state => {
            let newStateArr = state.todoData.filter(item => item.id !== id)
            return { todoData: newStateArr }
        })
    }

    onAdd = value => this.setState(state => {
        let newTask = {
            label: value,
            id: Math.random(),
            checked: false
        }
        let newStateArr = state.todoData
        newStateArr.unshift(newTask)
        return { todoData: newStateArr }
    })

    render() {
        console.log(this.state)
        return (
            <div>
                <NewTaskForm onAdd={this.onAdd} />
                <TaskList
                    tododata={this.todoFilter()}
                    onDelTasks={id => this.onDelTasks(id)}
                    onChecked={this.onChecked} />
                <Footer clearComplite={this.clearComplite} todoFilter={this.todoFilter} dataLength={this.state.todoData.length} />
            </div>
        )
    }
}

ReactDOM.render(<App />, todoapp)