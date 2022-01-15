import React from 'react';

const AppHeader = () => <h1>ToDoes</h1>

const TasksFilter = () => {
    return (
        <div>
            <header className="header">
                <AppHeader />
                <input className="new-todo" placeholder="What needs to be done?" autoFocus />
            </header>
        </div>
    )
}

export default TasksFilter


