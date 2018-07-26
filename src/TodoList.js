import React, {Component, Fragment} from 'react';

import TodoItem from './TodoItem';
import './style.css'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputValue: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    };

    handleAdd = () => {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    };

    handleDelete = (index) => {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
        })
    };

    getTodoItem() {
        return (
            this.state.list.map((value, index) => {
                return (
                    <TodoItem
                        key={index}
                        delete={this.handleDelete}
                        content={value}
                        index={index}
                    />
                )
            })
        )
    }

    //父组件通过属性的形式向子组件传递参数
    //子组件通过props来接受父组件传递过来的参数
    render() {
        const {inputValue} = this.state;
        return (
            <Fragment>
                <div>
                    <input value={inputValue} onChange={this.handleChange}/>
                    <button className='red-btn' onClick={this.handleAdd}>add</button>
                </div>
                <ul>{this.getTodoItem()}</ul>
            </Fragment>
        );
    }
}

export default TodoList;
