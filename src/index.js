import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TasksFilter from './/components/TasksFilter/TasksFilter'
import TaskList from './/components/TaskList/TaskList'
import Footer from './/components/Footer/Footer'
// import NewTaskForm from './/components/NewTaskForm/NewTaskForm'








let todoapp = document.querySelector('.todoapp');

export default class App extends Component {
    state = {
        todoData: [
            { label: 'Первое дело', importent: false, id: 1 },
            { label: 'Второе дело', importent: true, id: 2 },
            { label: 'Третье дело', importent: false, id: 3 },
        ]
    }

    onDelTasks = id => {
        this.setState(state => {
            let newStateArr = state.todoData.filter(item => item.id !== id)
            return {todoData: newStateArr}
        })
    }

    render() {
        const{todoData} = this.state
        return (
            <div>
                <TasksFilter />
                <TaskList tododata={todoData} onDelTasks={(id) => this.onDelTasks(id)} />
                <Footer dataLength={todoData.length} />
            </div>
        )
    }
}



ReactDOM.render(<App />, todoapp)