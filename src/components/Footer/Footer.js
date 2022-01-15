import React, {Component} from 'react';



export default class Footer extends Component {

    render() {
        
        const{dataLength} = this.props
        return (
            <footer className="footer">
                <span className="todo-count">{dataLength} items left</span>
                <ul className="filters">
                    <li>
                        <button className="selected">All</button>
                    </li>
                    <li>
                        <button>Active</button>
                    </li>
                    <li>
                        <button>Completed</button>
                    </li>
                </ul>
                <button className="clear-completed">Clear completed</button>
            </footer>
        )

    }
}


