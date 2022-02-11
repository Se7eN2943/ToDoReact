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

    const todoFilter = (status = 'All') => {
        if (status === 'All') return setTodoData(data);
        return setTodoData(data.filter(item => item.checked === status))
    };

    const toggle = (value, name = 'All') => {
        todoFilter(value);
        return setTogleClass(name)
    }

    const clearComplite = () => {
        data = data.filter(item => !item.checked);
        return setTodoData(todoData => todoData.filter(item => !item.checked))
    };

    const timeOnData = (minutes, seconds, id, timerPlay) => {
        return data = data.map(item => {
            if (item.id === id) {
                item.minutes = minutes
                item.seconds = seconds
                item.timerPlay = timerPlay
            }
            return item
        })
    }

    const onChecked = id => {
        return setTodoData(todoData => todoData.map((item) => {
            item.id === id && (item.checked = !item.checked);
            return item;
        }))
    };

    const onDelTasks = id => {
        data = todoData.filter((item) => item.id !== id);
        return setTodoData(data)
    };

    const onAdd = (value, min, sec) => {
        if (min || sec) {
            !sec ? sec = '00' : min = '00'
            sec && sec.length < 2 && (sec = `0${sec}`)
            min && min.length < 2 && (min = `0${min}`)
        }
        const newTask = [{
            label: value,
            minutes: min,
            seconds: sec,
            timerPlay: false,
            id: Math.random(),
            checked: false,
            timestamp: new Date(),
            availableTimer: (!sec && !min) ? false : true
        }];
        data = newTask.concat(data)
        toggle()
        return setTodoData(data)
    };

    return (
        <div>
            <NewTaskForm onAdd={onAdd} />
            <TaskList tododata={todoData} onDelTasks={id => onDelTasks(id)} timeOnData={timeOnData} onChecked={onChecked} />
            <Footer
                clearComplite={clearComplite}
                dataLength={data.length}
                toggle={toggle}
                togleClass={togleClass}
            />
        </div>
    );
}

export default App
