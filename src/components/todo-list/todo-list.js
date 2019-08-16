import React from 'react';
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';

const TodoList = (props) => {
    const elements = props.todos.map(item =>
        <li key={item.key} className="list-group-item">
            <TodoListItem item={item} onImportant={() => props.onImportant(item.key)} onDelete={() => props.onDelete(item.key)} onDone={() => props.onDone(item.key)}/>
        </li>);

    return (<ul className="list-group todo-list ">
        {elements}
    </ul>);
};

export default TodoList;