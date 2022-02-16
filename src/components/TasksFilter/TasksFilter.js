import React from 'react';
import PropTypes from 'prop-types';

const TasksFilter = ({ todoFilter, togleClass: className }) => {
  let All
  let Activ
  let Completed
  switch (className) {
    case false:
      All = " "
      Activ = "selected"
      Completed = " "
      break;
    case true:
      All = " "
      Activ = " "
      Completed = "selected"
      break;
    default:
      All = "selected"
      Activ = " "
      Completed = " "
  }

  return (
    <ul className="filters">
      <li>
        <button type="button" onClick={() => todoFilter('All')} className={All}>
          All
        </button>
      </li>
      <li>
        <button type="button" onClick={() => todoFilter(false)} className={Activ}>
          Active
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => todoFilter(true)}
          className={Completed}
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
