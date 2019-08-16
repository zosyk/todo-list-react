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
            key: 1,
            done: false
        }, {
            value: "Build Awesome App",
            important: true,
            key: 2,
            done: false
        }]};

    onImportant = (id) => {
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

    onDone = (id) => {
        this.setState(({todos}) => {
            const idx = todos.findIndex((el) => el.key === id);
            const item = {...todos[idx], done: !todos[idx].done};

            const before = todos.slice(0, idx);
            const after = todos.slice(idx+1);
            const newTodos = [...before, ...[item], ...after];

            return {
                todos: newTodos
            }
        });
    };



    render() {
        const totalCount = this.state.todos.length;
        const doneCount = this.state.todos.filter((el) => el.done).length;
        return (<div className="todo-app">
            <AppHeader toDo={totalCount - doneCount} done={doneCount}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={this.state.todos} onImportant={this.onImportant} onDelete={this.onDelete} onDone={this.onDone}/>
        </div>);
    }
};