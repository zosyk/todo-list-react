import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {


    state = {
        done: false
    };

    onItemClick = () => {
        this.setState((prevState) => (
        {
            done: !prevState.done
        }));
    };


    render() {
        const {value, important = false} = this.props;
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        let classes = 'todo-list-item';
        if (this.state.done) {
           classes += " done";
        }

        return (
            <span className={classes} onClick={this.onItemClick}>
            <span className="todo-list-item-label"
                  style={style}>
                {value}
            </span>

            <button type="button" className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"/>
            </button>
             <button type="button" className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o"/>
            </button>
        </span>
        );
    }
}