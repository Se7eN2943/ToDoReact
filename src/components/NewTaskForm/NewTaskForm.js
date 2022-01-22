import React, { Component } from 'react';
const AppHeader = () => <h1>ToDoes</h1>
export default class NewTaskForm extends Component {

    state = {
        label: ""
    }


    changeSub = e => { this.setState({ label: e.target.value }) }
    onSubmit = e => {
        e.preventDefault()
        this.props.onAdd(this.state.label)
        this.setState({ label: "" })
    }
    render() {
        return (
            <div>
                <header className="header">
                    <AppHeader />
                    <form onSubmit={this.onSubmit}>
                        <input value={this.state.label} type="text" onChange={this.changeSub} className="new-todo" placeholder="What needs to be done?" autoFocus />
                    </form>
                </header>
            </div>
        )
    }
}