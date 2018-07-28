import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    //子组件如果想和父组件通信，子组件要调用父组件传递过来的方法

    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const {content} = this.props;
        if (nextProps.content !== content) {
            return true
        } else {
            return false
        }
    }

    handleDelete = () => {
        const {deleteItem, index} = this.props;
        deleteItem(index)
    };

    render() {
        const {content} = this.props;
        return (
            <div onClick={this.handleDelete}>{content}</div>
        )
    };
}

TodoItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func,
};
export default TodoItem;