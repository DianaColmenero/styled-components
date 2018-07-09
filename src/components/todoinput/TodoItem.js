
import React, { Component } from 'react';
import Checkbox from './../checkbox/Checkbox';

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <Checkbox className="removeTodo" 
        onClick={(e)=> this.removeTodo(this.props.id) }></Checkbox>{this.props.todo.text}
      </div>
    );
  }
}

export default TodoItem;