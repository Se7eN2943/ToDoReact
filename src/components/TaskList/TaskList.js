import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

const TaskList = function TaskList(props) {
    const { tododata, onDelTasks, onChecked } = props;
    const elements = tododata.map((item) => (
        <Task onChecked={() => onChecked(item.id)} onDelTasks={() => onDelTasks(item.id)} key={item.id} {...item} />
    ));
    return (
        <section className="main">
            <ul className="todo-list">{elements}</ul>
        </section>
    );
};

TaskList.defaultProps = {
    tododata: [],
    onChecked: () => { },
    onDelTasks: () => { }
}
TaskList.propTypes = {
    tododata: PropTypes.arrayOf(PropTypes.object),
    onChecked: PropTypes.func,
    onDelTasks: PropTypes.func
}

export default TaskList;

