import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AppHeader() {
  return <h1>ToDoes</h1>;
}

const NewTaskForm = props => {

  const [label, setLabel] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  const changeSub = event => {
    event.target.name === 'label' && setLabel(event.target.value);
    event.target.name === 'minutes' && setMinutes(event.target.value);
    event.target.name === 'seconds' && setSeconds(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    props.onAdd(label, minutes, seconds);
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
            onChange={changeSub}
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
            onChange={changeSub}
            autoFocus
            min={0} />
          <input
            name='seconds'
            type="number"
            className="new-todo-form__timer"
            placeholder="Sec"
            value={seconds}
            onChange={changeSub}
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