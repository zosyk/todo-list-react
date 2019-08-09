import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({data: todos}) => {
    return (<div>
        <ul>
            {todos.map(item => <li><TodoItem value={item.value} important={item.important}/></li>)}
        </ul>
    </div>);
};

export default TodoList;