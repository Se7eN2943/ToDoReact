import React, { Component } from 'react';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';

let data = [
    { label: 'Drink coffe', id: 1, checked: false, timestamp: new Date(), minutes: '09', seconds: '59', timerPlay: false },
    { label: 'Create react app', id: 2, checked: false, timestamp: new Date(), minutes: '00', seconds: '02', timerPlay: false },
    { label: 'Rejoice', id: 3, checked: false, timestamp: new Date(), minutes: '00', seconds: '20', timerPlay: false }
];

export default class App extends Component {
    state = { todoData: data, togleClasses: { classNameAll: 'selected', classNameActiv: ' ', classNameCompleted: ' ' } };

    toggle = (value, name = 'All') => {
        this.todoFilter(value);
        if (name === 'Active') {
            return this.setState({
                togleClasses: {
                    classNameAll: ' ',
                    classNameActiv: 'selected',
                    classNameCompleted: ' '
                }
            });
        }
        if (name === 'All') {
            return this.setState({
                togleClasses: {
                    classNameAll: 'selected',
                    classNameActiv: ' ',
                    classNameCompleted: ' '
                }
            });
        }
        if (name === 'Completed') {
            return this.setState({
                togleClasses: {
                    classNameAll: ' ',
                    classNameActiv: ' ',
                    classNameCompleted: 'selected'
                }
            });
        }
    }

    clearComplite = () => {
        data = data.filter(item => !item.checked);
        return this.setState({ todoData: this.state.todoData.filter((item) => !item.checked) });
    };

    todoFilter = (status = 'All') => {
        if (status === 'All') return this.setState({ todoData: data });
        return this.setState({ todoData: data.filter((item) => item.checked === status) });
    };

    timeOnData = (minutes, seconds, id, timerPlay) => {
        data = data.map(item => {
            if (item.id === id) {
                item.minutes = minutes
                item.seconds = seconds
                item.timerPlay = timerPlay
            }
            return item
        })
    }

    onChecked = (id) => {
        this.setState({
            todoData: this.state.todoData.map((item) => {
                if (item.id === id) item.checked = !item.checked;
                return item;
            })
        });
    };

    onDelTasks = (id) => {
        data = this.state.todoData.filter((item) => item.id !== id);
        return this.setState({ todoData: data });
    };

    onAdd = (value, min, sec) => {
        const newTask = {
            label: value,
            minutes: min,
            seconds: sec,
            timerPlay: false,
            id: Math.random(),
            checked: false,
            timestamp: new Date(),
        };
        data.unshift(newTask);
        this.setState({ todoData: data });
        this.toggle()
    };

    render() {
        return (
            <div>
                <NewTaskForm onAdd={this.onAdd} />
                <TaskList tododata={this.state.todoData} onDelTasks={(id) => this.onDelTasks(id)} timeOnData={this.timeOnData} onChecked={this.onChecked} />
                <Footer
                    clearComplite={this.clearComplite}
                    dataLength={this.state.todoData.length}
                    toggle={this.toggle}
                    togleClasses={this.state.togleClasses}
                />
            </div>
        );
    }
}