import React from 'react';

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import TodoList from "../todo-list/todo-list";
import "./todo-app.css";

const todos = [
    {
        value: "Drink Coffee",
        important: false,
        key: 1
    }, {
        value: "Build Awesome App",
        important: true,
        key: 2
    }];

const App = () => {
    return (<div className="todo-app">
        <AppHeader toDo="1" done="3"/>
        <div className="top-panel d-flex">
            <SearchPanel/>
            <ItemStatusFilter/>
        </div>
        <TodoList todos={todos}/>
    </div>);
};

export default App;