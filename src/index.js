import React from 'react';
import ReactDOM from 'react-dom';

import TasksFilter from './/components/TasksFilter/TasksFilter'
import TaskList from './/components/TaskList/TaskList'
import Footer from './/components/Footer/Footer'


// import TodoList from './/components/ToDoList'





let todoapp = document.querySelector('.todoapp');

const App = () => {
    const todoData = [
        { label: 'Первое дело', importent: false, id: 1 },
        { label: 'Второе дело', importent: true, id: 2 },
        { label: 'Третье дело', importent: false, id: 3 },
    ]
    return (
        <div>
            <TasksFilter />
            <TaskList />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, todoapp)