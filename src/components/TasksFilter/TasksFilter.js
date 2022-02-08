import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TasksFilter extends Component {
  static defaultProps = {
    toggle: () => { },
  };

  static propTypes = {
    toggle: PropTypes.func,

  };

  render() {
    const { toggle } = this.props
    const { classNameAll, classNameActiv, classNameCompleted } = this.props.togleClasses
    let classNameAll
    let classNameActiv
    let classNameCompleted
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
}
