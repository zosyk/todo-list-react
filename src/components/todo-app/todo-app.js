import React, {Component} from 'react';

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import TodoList from "../todo-list/todo-list";
import AddTodoItem from "../add-todo-item";
import "./todo-app.css";

export default class App extends Component {

    maxId = 100;

    state = {
        activeStatus: 'All',
        searchString: '',
        todos: [
            this.createTodoItem("Hello there"),
            this.createTodoItem("Drink Coffee"),
            this.createTodoItem("Build Awesome App", true),
        ]
    };

    createTodoItem(label, important = false) {
        return {
            label,
            important: important,
            done: false,
            id: this.maxId++
        }
    }

    onAddItem = (label) => {
        const newItem = this.createTodoItem(label);

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
            const after = todos.slice(idx + 1);
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

    onChangeSearchPanel = (searchString) => {
        this.setState({
            searchString: searchString
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        let oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    }

    onItemStatusFilterClicked = (label) => {
        this.setState({
            activeStatus: label
        });
    };

    getFilteredTodos() {
        const {todos, searchString, activeStatus} = this.state;

        let filtered = todos.filter((el) => el.label.toLowerCase().includes(searchString.toLowerCase()));

        switch (activeStatus) {
            case "Active":
                filtered = filtered.filter((el) => !el.done);
                break;
            case "Done":
                filtered = filtered.filter((el) => el.done);
                break;
        }

        return filtered;
    }

    render() {
        const {todos, activeStatus}= this.state;

        const totalCount = todos.length;
        const doneCount = todos.filter((el) => el.done).length;
        const filteredTodos = this.getFilteredTodos(todos);

        return (<div className="todo-app">
            <AppHeader toDo={totalCount - doneCount} done={doneCount}/>
            <div className="add-todo-item-form d-flex">
                <SearchPanel onChange={this.onChangeSearchPanel} searchString={this.state.searchString}/>
                <ItemStatusFilter onItemStatusFilterClicked={this.onItemStatusFilterClicked} activeStatus={activeStatus}/>
            </div>
            <TodoList todos={filteredTodos}
                      onImportant={this.onImportant} onDelete={this.onDelete} onDone={this.onDone}/>
            <AddTodoItem onAddItem={this.onAddItem}/>
        </div>);
    }
};