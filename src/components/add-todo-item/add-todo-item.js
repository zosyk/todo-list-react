import React,{Component} from 'react';
import './add-todo-item.css';

export default class AddTodoItem extends Component {

    state = {
      label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
    };


    render() {
        return (
            <form className="add-todo-item-form d-flex" onSubmit={this.onFormSubmit}>
                <input type="text" className="form-control"
                       placeholder="What needs to be done"
                       onChange={this.onLabelChange} required/>
                <button type="submit" className="button btn btn-outline-secondary">Add Item</button>
            </form>
        );
    }
}
