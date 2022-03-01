import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../TasksFilter/TasksFilter';
import filter from '../../utils';

const Footer = ({ clearComplite, todoFilter, togleClass, todoData }) => {
  const filterData = filter(todoData, togleClass)
  return (
    <footer className="footer">
      <span className="todo-count">{filterData.length} items left</span>
      <TasksFilter todoFilter={todoFilter} togleClass={togleClass} />
      <button type="button" onClick={() => clearComplite()} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  dataLength: 1,
  todoFilter: () => { },
  clearComplite: () => { },
};

Footer.propTypes = {
  todoFilter: PropTypes.func,
  clearComplite: PropTypes.func,
};

export default Footer