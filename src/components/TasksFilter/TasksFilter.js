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
    const { todoFilter, togleClass: className } = this.props
    let All
    let Activ
    let Completed
    switch (className) {
      case "All":
        All = "selected"
        Activ = " "
        Completed = " "
        break;
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
}
