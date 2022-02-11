import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../TasksFilter/TasksFilter';

const Footer = ({ dataLength, clearComplite, toggle, togleClass }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{dataLength} items left</span>
      <TasksFilter toggle={toggle} togleClass={togleClass} />
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
  dataLength: PropTypes.number,
  todoFilter: PropTypes.func,
  clearComplite: PropTypes.func,
};

export default Footer