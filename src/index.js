import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';



let todoapp = document.querySelector('.todoapp');

let data = [
    { label: 'Drink coffe', id: 1, checked: false, },
    { label: 'Create react app', id: 2, checked: false, },
    { label: 'Rejoice', id: 3, checked: false, },
]

export default class App extends Component {
    state = {todoData:data};

    clearComplite = () => {
        data = this.state.todoData.filter(item => item.checked === false)
        return this.setState({ todoData: data })
    };

    todoFilter = (status = 'All') => {
        if (status === "All") return this.setState({ todoData: data })
        return this.setState({todoData: data.filter(item => item.checked === status)})
    };

    onChecked = id => {
        data = this.state.todoData.map(item => {
            if (item.id === id) item.checked = !item.checked
            return item
        })
        return this.setState({ todoData: data })
    };     

    onDelTasks = id => {
            data = this.state.todoData.filter(item => item.id !== id)
            return this.setState({ todoData: data })
    };

    onAdd = value => {
        let newTask = {
            label: value,
            id: Math.random(),
            checked: false
        }
        data.unshift(newTask)
        return this.setState({ todoData: data }) 
    };

    render() {
        return (
            <div>
                <NewTaskForm onAdd={this.onAdd} />
                <TaskList
                    tododata={this.state.todoData}
                    onDelTasks={id => this.onDelTasks(id)}
                    onChecked={this.onChecked} />
                <Footer clearComplite={this.clearComplite} todoFilter={this.todoFilter} dataLength={this.state.todoData.length} />
            </div>
        )
    };
};

ReactDOM.render(<App />, todoapp)