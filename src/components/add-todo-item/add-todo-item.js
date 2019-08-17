import React from 'react';
import './add-todo-item.css';

const AddTodoItem = ({onAddItem}) => {
        return (
            <button type="button" className="btn btn-outline-secondary top-panel" onClick={() => onAddItem("Hello World")}>Add Item</button>
        );
    };

export default AddTodoItem;