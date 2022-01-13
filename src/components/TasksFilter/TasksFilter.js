import React from 'react';

const AppHeader = () => <h1>ToDoes</h1>

const TasksFilter = () => {
    return (
        <div>
            <header class="header">
                <AppHeader />
                <input class="new-todo" placeholder="What needs to be done?" autofocus />
            </header>
        </div>
    )
}

export default TasksFilter


