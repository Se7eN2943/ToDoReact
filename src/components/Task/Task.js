import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

const Task = props => {
  const { label, id, checked, onChecked, onDelTasks, timestamp: dataTimestamp, minutes: min, seconds: sec } = props
  const [timestamp, setTimestamp] = useState(formatDistanceToNow(Date.now(), { includeSeconds: true }))
  const [minutes, setMinutes] = useState(min)
  const [seconds, setSeconds] = useState(sec)
  const [intervalId, setIntervalId] = useState()
  let timeOut = 1000
  let timerInterval;

  if (checked) clearInterval(intervalId);

  useEffect(() => {
    setMinutes(min)
    setSeconds(sec)
    const interval = setInterval(() => {
      setTimestamp(formatDistanceToNow(dataTimestamp, { includeSeconds: true }))
      const createInterval = Math.floor((Date.now() - timestamp) / 1000);
      switch (createInterval) {
        case createInterval > 60:
          timeOut = 1000 * 60; // 1 минута
          break;
        case createInterval > 2700:
          timeOut = 1000 * 60 * 45; // меньше часа назад
          break;
        case createInterval > 86_400:
          timeOut = 1000 * 60 * 60 * 24; // 1 день
          break;
        default:
          timeOut = 10_000;
          break;
      }
    }, timeOut);
    return () => {
      clearInterval(interval);
      clearInterval(intervalId);
    }
  }, [])

  const timer = (event) => {
    clearInterval(intervalId)
    let time = (+minutes * 60 + +seconds)
    if (event?.target?.name === 'play' && !checked && time > 0) {
      timerInterval = setInterval(() => {
        time--
        let timerMin = Math.floor(time / 60)
        let timerSec = Math.floor(time % 60)
        timerSec < 10 && (timerSec = `0${timerSec}`)
        timerMin < 10 && (timerMin = `0${timerMin}`)
        setMinutes(timerMin)
        setSeconds(timerSec)
        if (time === 0) return clearInterval(timerInterval)
      }, 1000)
      setIntervalId(timerInterval)
    }
  }

  return (
    <li className={checked ? 'completed' : 'view'}>
      <div className="view">
        <input id={id} className="toggle" type="checkbox" onChange={onChecked} checked={checked} />
        <label htmlFor={id}>
          <span className="title">{label}</span>
          {(minutes || seconds) &&
            < span className="description">
              <button name="play" onClick={timer} className="icon icon-play"></button>
              <button name="pause" onClick={timer} className="icon icon-pause"></button>
              {minutes + ':' + seconds}
            </span>
          }
          <span className="description">created {timestamp} ago</span>
        </label>
        <button type="button" className="icon icon-edit" />
        <button type="button" className="icon icon-destroy" onClick={onDelTasks} />
      </div>
    </li>
  );
}

Task.defaultProps = {
  checked: false,
  timestamp: new Date(),
  onChecked: () => { },
  onDelTasks: () => { },
  timeOnData: () => { },
  label: '',
  id: Math.random(),
  minutes: "00",
  seconds: "00",
  timerPlay: false,
};

Task.propTypes = {
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

export default Task
