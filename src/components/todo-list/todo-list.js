import React from 'react';
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';

const TodoList = (props) => {
    const elements = props.todos.map(item =>
        <li key={item.key} className="list-group-item">
            <TodoListItem value={item.value} important={item.important}/>
        </li>);

    return (<ul className="list-group todo-list ">
        {elements}
    </ul>);
};

export default TodoList;