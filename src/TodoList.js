import React, {Component, Fragment} from 'react';
// import axios from 'axios';
import TodoItem from './TodoItem';
import './style.css'

class TodoList extends Component {

    constructor(props) {
        super(props);
        //当组件的state或者props发生变化的时候，render函数就会重新执行
        this.state = {
            list: [],
            inputValue: '',
            fontVisible: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChangeVisible = this.handleChangeVisible.bind(this);
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    };

    handleAdd = () => {
        if (this.state.inputValue !== "") {
            this.setState((prevState) => ({
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            }));
        }
    };

    handleDelete = (index) => {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        });
    };

    getTodoItem() {
        return this.state.list.map((value, index) => {
            return (
                <TodoItem
                    key={index}
                    deleteItem={this.handleDelete}
                    content={value}
                    index={index}
                />
            )
        })
    }


    handleChangeVisible = () => {
        this.setState(() => {
            return {
                fontVisible: this.state.fontVisible ? false : true
            }
        })
    };

    //父组件通过属性的形式向子组件传递参数
    //子组件通过props来接受父组件传递过来的参数
    render() {
        const {inputValue, fontVisible} = this.state;
        return (
            <Fragment>
                <fieldset>
                    <legend>todoList演示</legend>
                    <div>
                        <input value={inputValue} onChange={this.handleChange}/>
                        <button className='red-btn' onClick={this.handleAdd}>add</button>
                    </div>
                    <ul>{this.getTodoItem()}</ul>
                </fieldset>
                <fieldset>
                    <legend>动画效果演示</legend>
                    <p className={fontVisible ? 'show' : 'hide'}>hello</p>
                    <button onClick={this.handleChangeVisible}>toggle</button>
                </fieldset>


            </Fragment>
        );
    }

    //需要开启charles作为接口代理
    // componentDidMount() {
    //     axios.get('/api/todoList')
    //         .then((res) => {
    //             // console.log(res.data);
    //             this.setState(() => {
    //                 return {
    //                     list: [...res.data]
    //                 }
    //             })
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

}

export default TodoList;
