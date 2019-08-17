import React from 'react';
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';

const TodoList = (props) => {
    const elements = props.todos.map(item =>
        <li key={item.id} className="list-group-item">
            <TodoListItem item={item} onImportant={() => props.onImportant(item.id)} onDelete={() => props.onDelete(item.id)} onDone={() => props.onDone(item.id)}/>
        </li>);

    return (<ul className="list-group todo-list ">
        {elements}
    </ul>);
};

export default TodoList;