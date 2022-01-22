import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

export default class Task extends Component {
  state = {
    timestamp: formatDistanceToNow(Date.now(), { addSuffis: true, includeSeconds: true }),
  };

  static defaultProps = {
    checked: false,
    timestamp: new Date(),
    onChecked: () => {},
    onDelTasks: () => {},
    label: '',
    id: Math.random(),
  };

  static propTypes = {
    checked: PropTypes.bool,
    timestamp: PropTypes.object,
    onChecked: PropTypes.func,
    onDelTasks: PropTypes.func,
    label: PropTypes.string,
    id: PropTypes.number,
  };

  render() {
    const { label, id, checked, timestamp, onDelTasks, onChecked } = this.props;
    let timeOut;
    setInterval(() => {
      this.setState({ timestamp: formatDistanceToNow(timestamp, { includeSeconds: true }) });
      const timer = Math.floor((Date.now() - timestamp) / 1000);
      switch (timer) {
        case timer > 60:
          timeOut = 1000 * 60; // 1 минута
          break;
        case timer > 2700:
          timeOut = 1000 * 60 * 45; // меньше часа назад
          break;
        case timer > 86400:
          timeOut = 1000 * 60 * 60 * 24; // 1 день
          break;
        default:
          timeOut = 10000;
          break;
      }
    }, timeOut);
    let checkClass = 'view';
    if (checked) checkClass = 'completed';

    return (
      <li className={checkClass}>
        <div className="view">
          <input id={id} className="toggle" type="checkbox" onClick={onChecked} />
          <label htmlFor={id}>
            <span className="description">{label}</span>
            <span className="created">created {this.state.timestamp} ago</span>
          </label>
          <button type="button" className="icon icon-edit" />
          <button type="button" className="icon icon-destroy" onClick={onDelTasks} />
        </div>
      </li>
    );
  }
}
