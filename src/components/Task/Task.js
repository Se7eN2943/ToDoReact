import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';


const Task = props => {
  const { label, id, checked, onChecked, onDelTasks, timestamp: dataTimestamp, minutes: min, seconds: sec, timerPlay: dataTimerPlay, timeOnData } = props;
  const [timestamp, setTimestamp] = useState(formatDistanceToNow(Date.now(), { includeSeconds: true }))
  let [minutes, setMinutes] = useState(0)
  let [seconds, setSeconds] = useState(0)
  const [timerPlay, setTimerPlay] = useState(false)

  let timerInterval




  useEffect(() => {
    setMinutes(min)
    setSeconds(sec)
    setTimerPlay(dataTimerPlay)
    dataTimerPlay && timer('continue')
    let timeOut
    const interval = setInterval(() => {
      setTimestamp(formatDistanceToNow(dataTimestamp, { includeSeconds: true }))
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
    return () => clearInterval(interval);
  }, [])

  const timer = event => {
    clearInterval(timerInterval)
    let time = (+minutes * 60 + +seconds)
    if (event === undefined) return
    if ((event === 'continue' || event.target.name === 'play') && !checked && time !== 0) {
      setTimerPlay(true)
      timerInterval = setInterval(() => {
        time--
        minutes = Math.floor(time / 60)
        seconds = Math.floor(time % 60)
        seconds < 10 && (seconds = `0${seconds}`)
        minutes < 10 && (minutes = `0${minutes}`)
        setMinutes(minutes)
        setSeconds(seconds)
        timeOnData(minutes, seconds, id, true);
        if (time === 0) {
          clearInterval(timerInterval)
          setTimerPlay(false)
          return timeOnData(minutes, seconds, id, false);
        }
      }, 1000)
    } else {
      setTimerPlay(false)
      return timeOnData(minutes, seconds, id, false);
    }
  }

  const delTask = () => {
    clearInterval(timerInterval)
    onDelTasks()
  }

  let checkClass = 'view';
  if (checked) {
    checkClass = 'completed';
    timer()
  }
  return (
    <li className={checkClass}>
      <div className="view">
        <input id={id} className="toggle" type="checkbox" onChange={onChecked} checked={checked} />
        <label htmlFor={id}>
          <span className="title">{label}</span>
          <span className="description">
            <button name="play" onClick={timer} className="icon icon-play"></button>
            <button onClick={timer} className="icon icon-pause"></button>
            {minutes + ':' + seconds}
          </span>
          <span className="description">created {timestamp} ago</span>
        </label>
        <button type="button" className="icon icon-edit" />
        <button type="button" className="icon icon-destroy" onClick={delTask} />
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
  minutes: 0,
  seconds: 0,
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