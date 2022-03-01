import React, { useState } from 'react';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';

let data = [
    { label: 'Drink coffe', id: 1, checked: false, timestamp: new Date(), minutes: '09', seconds: '59', timerPlay: false, availableTimer: true },
    { label: 'Create react app', id: 2, checked: false, timestamp: new Date(), minutes: '00', seconds: '02', timerPlay: false, availableTimer: true },
    { label: 'Rejoice', id: 3, checked: false, timestamp: new Date(), minutes: '00', seconds: '20', timerPlay: false, availableTimer: true }
];

const App = () => {
    const [todoData, setTodoData] = useState(data)
    const [togleClass, setTogleClass] = useState('All')

    const todoFilter = status => setTogleClass(status);

    const clearComplite = () => setTodoData(todoData => todoData.filter(item => !item.checked));

    const timeOnData = (minutes, seconds, id, timerPlay) =>
        setTodoData(todoData => {
            return todoData.map(item => {
                if (item.id === id) {
                    item.minutes = minutes
                    item.seconds = seconds
                    item.timerPlay = timerPlay
                }
                return item
            })
        })

    const onChecked = id => {
        return setTodoData(todoData => todoData.map((item) => {
            item.id === id && (item.checked = !item.checked);
            return item;
        }))
    };

    const onDelTasks = id => setTodoData(() => todoData.filter(item => item.id !== id));

    const onAdd = (value, min, sec) => {
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
        return setTodoData(newTask.concat(todoData))
    };

    return (
        <div>
            <NewTaskForm onAdd={onAdd} />
            <TaskList
                togleClass={togleClass}
                tododata={todoData}
                onDelTasks={id => onDelTasks(id)}
                timeOnData={timeOnData}
                onChecked={onChecked}
            />
            <Footer
                clearComplite={clearComplite}
                todoData={todoData}
                todoFilter={todoFilter}
                togleClass={togleClass}
            />
        </div>
    );
}

export default App
