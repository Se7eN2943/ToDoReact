import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

export default class Task extends Component {

  state = {
    timestamp: formatDistanceToNow(Date.now(), { addSuffis: false, includeSeconds: false }),
    minutes: 0,
    seconds: 0,
    timerPlay: false
  };

  static defaultProps = {
    checked: false,
    timestamp: new Date(),
    onChecked: () => { },
    onDelTasks: () => { },
    timeOnData: () => { },
    label: '',
    id: Math.random(),
    minutes: 0,
    seconds: 0,
    timerPlay: false,
  };

  static propTypes = {
    checked: PropTypes.bool,
    timestamp: PropTypes.object,
    onChecked: PropTypes.func,
    onDelTasks: PropTypes.func,
    timeOnData: PropTypes.func,
    label: PropTypes.string,
    id: PropTypes.number,
    minutes: PropTypes.string,
    minutes: PropTypes.string,
    timerPlay: PropTypes.bool,
  };

  componentDidMount = async () => {
    const { timestamp, minutes, seconds, timerPlay } = this.props;
    await this.setState({ minutes: minutes, seconds: seconds, timerPlay: timerPlay });
    timerPlay && this.timer('continue')
    let timeOut
    this.interval = setInterval(() => {
      this.setState({ timestamp: formatDistanceToNow(timestamp, { includeSeconds: true }) });
      const timer = Math.floor((Date.now() - timestamp) / 1000);
      switch (timer) {
        case timer > 60:
          timeOut = 1000 * 60; // 1 минута
          break;
        case timer > 2700:
          timeOut = 1000 * 60 * 45; // меньше часа назад
          break;
        case timer > 86_400:
          timeOut = 1000 * 60 * 60 * 24; // 1 день
          break;
        default:
          timeOut = 10_000;
          break;
      }
    }, timeOut);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  delTask = () => {
    clearInterval(this.timerInterval)
    this.props.onDelTasks()
  }

  timer = (event) => {
    clearInterval(this.timerInterval)
    const { id, timeOnData, checked } = this.props;
    let { minutes, seconds } = this.state;
    let time = (+minutes * 60 + +seconds)
    if (!event) return
    if ((event === 'continue' || event.target.name === 'play') && !checked && time !== 0) {
      this.setState({ timerPlay: true })
      this.timerInterval = setInterval(() => {
        time--
        minutes = Math.floor(time / 60)
        seconds = Math.floor(time % 60)
        seconds < 10 && (seconds = `0${seconds}`)
        minutes < 10 && (minutes = `0${minutes}`)
        this.setState({ minutes: minutes, seconds: seconds })
        timeOnData(minutes, seconds, id, true);
        if (time === 0) {
          clearInterval(this.timerInterval)
          this.setState({ timerPlay: true })
          return timeOnData(minutes, seconds, id, false);
        }
      }, 1000)
    } else {
      this.setState({ timerPlay: false })
      return timeOnData(minutes, seconds, id, false);
    }
  }

  render() {
    const { label, id, checked, onChecked } = this.props;
    const { minutes, seconds } = this.state;
    let checkClass = 'view';
    if (checked) {
      checkClass = 'completed';
      this.timer()
    }
    return (
      <li className={checkClass}>
        <div className="view">
          <input id={id} className="toggle" type="checkbox" onChange={onChecked} checked={checked} />
          <label htmlFor={id}>
            <span className="title">{label}</span>
            <span className="description">
              <button name="play" onClick={this.timer} className="icon icon-play"></button>
              <button onClick={this.timer} className="icon icon-pause"></button>
              {minutes + ':' + seconds}
            </span>
            <span className="description">created {this.state.timestamp} ago</span>
          </label>
          <button type="button" className="icon icon-edit" />
          <button type="button" className="icon icon-destroy" onClick={this.delTask} />
        </div>
      </li>
    );
  }
}
