import React, {Component} from 'react';

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import TodoList from "../todo-list/todo-list";
import "./todo-app.css";

export default class App extends Component {


    state ={todos : [
        {
            value: "Drink Coffee",
            important: false,
            key: 1
        }, {
            value: "Build Awesome App",
            important: true,
            key: 2
        }]};

    makeImportant = (id) => {
        this.setState(({todos}) => {
            const idx = todos.findIndex((el) => el.key === id);
            const item = {...todos[idx], important: !todos[idx].important};

            const before = todos.slice(0, idx);
            const after = todos.slice(idx+1);
            const newTodos = [...before, ...[item], ...after];

            return {
                todos: newTodos
            }
        });
    };

    onDelete = (id) => {
        this.setState(({todos}) => {
            const idx = todos.findIndex((el) => el.key === id);

            const before = todos.slice(0, idx);
            const after = todos.slice(idx+1);
            const newTodos = [...before, ...after];

            return {
                todos: newTodos
            }
        });
    };



    render() {
        return (<div className="todo-app">
            <AppHeader toDo="1" done="3"/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={this.state.todos} makeImportant={this.makeImportant} onDelete={this.onDelete}/>
        </div>);
    }
};