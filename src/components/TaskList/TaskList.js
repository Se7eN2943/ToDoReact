import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

const TaskList = function TaskList(props) {
  const { tododata, onDelTasks, onChecked, timeOnData, togleClass } = props;
  let filteretData;
  switch (togleClass) {
    case true:
      filteretData = tododata.filter(task => task.checked === true)
      break;
    case false:
      filteretData = tododata.filter(task => task.checked === false)
      break;
    default:
      filteretData = tododata
  }
  const elements = filteretData.map(item => {
    return <Task
      timeOnData={timeOnData}
      onChecked={() => onChecked(item.id)}
      onDelTasks={() => onDelTasks(item.id)}
      key={item.id} {...item}
    />
  });
  return (
    <section className="main">
      <ul className="todo-list">{elements}</ul>
    </section>
  );
};

TaskList.defaultProps = {
  tododata: [],
  onChecked: () => { },
  onDelTasks: () => { },
};
TaskList.propTypes = {
  tododata: PropTypes.arrayOf(PropTypes.object),
  onChecked: PropTypes.func,
  onDelTasks: PropTypes.func,
};

export default TaskList;
