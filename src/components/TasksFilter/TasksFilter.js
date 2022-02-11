import React from 'react';
import PropTypes from 'prop-types';

const TasksFilter = ({ toggle, togleClass: className }) => {
  let classNameAll
  let classNameActiv
  let classNameCompleted
  switch (className) {
    case "All":
      classNameAll = "selected"
      classNameActiv = " "
      classNameCompleted = " "
      break;
    case "Active":
      classNameAll = " "
      classNameActiv = "selected"
      classNameCompleted = " "
      break;
    case "Completed":
      classNameAll = " "
      classNameActiv = " "
      classNameCompleted = "selected"
      break;
    default:
      classNameAll = "selected"
      classNameActiv = " "
      classNameCompleted = " "
  }

  return (
    <ul className="filters">
      <li>
        <button type="button" onClick={() => toggle('All', 'All')} className={classNameAll}>
          All
        </button>
      </li>
      <li>
        <button type="button" onClick={() => toggle(false, 'Active')} className={classNameActiv}>
          Active
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => toggle(true, 'Completed')}
          className={classNameCompleted}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

TasksFilter.defaultProps = {
  toggle: () => { },
};

TasksFilter.propTypes = {
  toggle: PropTypes.func,
};

export default TasksFilter;
