import React, {Component} from 'react';

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import TodoList from "../todo-list/todo-list";
import AddTodoItem from "../add-todo-item";
import "./todo-app.css";

export default class App extends Component {

    maxId = 100;

    state ={todos : [
        this.createTodoItem("Hello there"),
        this.createTodoItem("Drink Coffee"),
        this.createTodoItem("Build Awesome App", true),
       ]};

    createTodoItem(label, important = false) {
        return {
            label,
            important: important,
            done: false,
            id: this.maxId++
        }
    }

    onAddItem = (label) => {
      const  newItem = this.createTodoItem(label);

      this.setState(({todos}) => {
        const newTodos = [...todos, newItem];

        return {
            todos: newTodos
        }
      });
    };

    onDelete = (id) => {
        this.setState(({todos}) => {
            const idx = todos.findIndex((el) => el.id === id);

            const before = todos.slice(0, idx);
            const after = todos.slice(idx+1);
            const newTodos = [...before, ...after];

            return {
                todos: newTodos
            }
        });
    };

    onImportant = (id) => {
        this.setState(({todos}) => {
            return {
                todos: this.toggleProperty(todos, id, 'important')
            }
        });
    };

    onDone = (id) => {
        this.setState(({todos}) => {
            return {
                todos: this.toggleProperty(todos, id, 'done')
            }
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        let oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [...arr.slice(0, idx), newItem, ...arr.slice(idx+1)];
    }

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
            <AddTodoItem onAddItem={this.onAddItem}/>
        </div>);
    }
};