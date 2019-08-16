import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {


    state = {
        done: false
    };

    onItemClick = () => {
        this.setState((prevState) => {
            return {
                done: !prevState.done
            };
        });
    };


    render() {
        const {value, important = false, makeImportant, onDelete} = this.props;
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        let classes = 'todo-list-item';
        if (this.state.done) {
           classes += " done";
        }

        return (
            <span className={classes}>
            <span className="todo-list-item-label" onClick={this.onItemClick}
                  style={style}>
                {value}
            </span>

            <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={makeImportant}>
                <i className="fa fa-exclamation"/>
            </button>
             <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={onDelete}>
                <i className="fa fa-trash-o"/>
            </button>
        </span>
        );
    }
}