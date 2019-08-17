import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({item, onImportant, onDelete, onDone}) => {
        const {label, important = false, done = false} = item;
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        let classes = 'todo-list-item';
        if (done) {
           classes += " done";
        }

        return (
            <span className={classes}>
            <span className="todo-list-item-label" onClick={onDone}
                  style={style}>
                {label}
            </span>

            <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={onImportant}>
                <i className="fa fa-exclamation"/>
            </button>
             <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={onDelete}>
                <i className="fa fa-trash-o"/>
            </button>
        </span>
        );
};

export default TodoListItem;