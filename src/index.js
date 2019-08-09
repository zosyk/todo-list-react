import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/AppHeader";
import TodoList from "./components/TodoList";
import SearchPanel from "./components/SearchPanel";

const todos = [
    {
    value: "Drink Coffee",
    important: false
}, {
    value: "Build Awesome App",
    important: true
}];

const App = () => {
    return (<div>
        <AppHeader/>
        <SearchPanel/>
        <TodoList data={todos}/>
    </div>);
};

ReactDOM.render(<App />, document.getElementById('root'));
