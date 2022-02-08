import React, { Component } from 'react';
import PropTypes from 'prop-types';

function AppHeader() {
  return <h1>ToDoes</h1>;
}
export default class NewTaskForm extends Component {
  static defaultProps = {
    onAdd: () => { },
  };

  static propTypes = {
    onAdd: PropTypes.func,
  };

  state = {
    label: '', minutes: '', seconds: ''
  };

  changeSub = (event) => {
    event.target.name === 'label' && this.setState({ label: event.target.value });
    event.target.name === 'minutes' && this.setState({ minutes: event.target.value });
    event.target.name === 'seconds' && this.setState({ seconds: event.target.value });
  };

  onSubmit = (event) => {
    const { label, minutes, seconds } = this.state
    event.preventDefault();
    this.props.onAdd(label, minutes, seconds);
    this.setState({ label: '', minutes: '', seconds: '' });
  };

  render() {
    const { label, minutes, seconds } = this.state
    return (
      <div>
        <header className="header">
          <AppHeader />
          <form onSubmit={this.onSubmit}>
            <input
              name='label'
              value={label}
              type="text"
              onChange={this.changeSub}
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
              onChange={this.changeSub}
              autoFocus
              min={0} />
            <input
              name='seconds'
              type="number"
              className="new-todo-form__timer"
              placeholder="Sec"
              value={seconds}
              onChange={this.changeSub}
              autoFocus
              max={60}
              min={0} />
            <input id='submit' type="submit" />
          </form>
        </header>
      </div >
    );
  }
}
