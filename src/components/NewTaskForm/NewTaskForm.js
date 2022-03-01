import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AppHeader() {
  return <h1>ToDoes</h1>;
}

const NewTaskForm = ({ onAdd }) => {
  const [label, setLabel] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  const onSubmit = event => {
    event.preventDefault();
    onAdd(label, minutes, seconds);
    setLabel('');
    setMinutes('');
    setSeconds('');
  };

  return (
    <div>
      <header className="header">
        <AppHeader />
        <form onSubmit={onSubmit}>
          <input
            name='label'
            value={label}
            type="text"
            onChange={e => setLabel(e.target.value)}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            required
          />
          <input
            name='minutes'
            type="number"
            className="new-todo-form__timer"
            placeholder="Min"
            value={minutes}
            onChange={e => setMinutes(e.target.value)}
            autoFocus
            min={0} />
          <input
            name='seconds'
            type="number"
            className="new-todo-form__timer"
            placeholder="Sec"
            value={seconds}
            onChange={e => setSeconds(e.target.value)}
            autoFocus
            max={60}
            min={0} />
          <input id='submit' type="submit" />
        </form>
      </header>
    </div >
  );
}

NewTaskForm.defaultProps = {
  onAdd: () => { },
};

NewTaskForm.propTypes = {
  onAdd: PropTypes.func,
};

export default NewTaskForm
