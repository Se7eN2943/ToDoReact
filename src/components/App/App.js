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
    state = { todoData: data, togleClass: 'All' };

    clearComplite = () => this.setState(() => ({ todoData: this.state.todoData.filter(item => !item.checked) }));

    todoFilter = status => this.setState({ togleClass: status });;

    timeOnData = (minutes, seconds, id, timerPlay) =>
        this.setState(() => ({
            todoData: this.state.todoData.map(item => {
                if (item.id === id) {
                    item.minutes = minutes
                    item.seconds = seconds
                    item.timerPlay = timerPlay
                }
                return item
            })
        }))

    onChecked = id => {
        this.setState(() => ({
            todoData: this.state.todoData.map(item => {
                item.id === id && (item.checked = !item.checked);
                return item;
            })
        }));
    };

    onDelTasks = id => this.setState(() => ({
        todoData: this.state.todoData.filter(item => item.id !== id)
    }));

    onAdd = (value, min, sec) => {
        if (min || sec) {
            min ? (+ min < 10 && (min = `0${min}`)) : sec && (min = '00')
            sec ? (+sec < 10 && (sec = `0${sec}`)) : sec = '00'
        }
        const newTask = [{
            label: value,
            minutes: min,
            seconds: sec,
            timerPlay: false,
            id: Math.random(),
            checked: false,
            timestamp: new Date(),
        }];
        this.setState(() => ({ todoData: newTask.concat(this.state.todoData) }));
    };

    render() {
        return (
            <div>
                <NewTaskForm onAdd={this.onAdd} />
                <TaskList tododata={this.state.todoData}
                    onDelTasks={(id) => this.onDelTasks(id)}
                    timeOnData={this.timeOnData}
                    onChecked={this.onChecked}
                    togleClass={this.state.togleClass}
                />
                <Footer
                    clearComplite={this.clearComplite}
                    dataLength={this.state.todoData.length}
                    todoFilter={this.todoFilter}
                    togleClass={this.state.togleClass}
                />
            </div>
        );
    }
}