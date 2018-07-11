import React, { Component } from 'react';
import Checkbox from './../checkbox/Checkbox';
// import Button from '../button/Button';
import styled from 'styled-components';

class TodoItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    let _style = "line-through";
    return (
      <div className="todoWrapper">
        <Checkbox />
        <span style={{"textDecoration": _style}}>{this.props.todo.text}</span>
      </div>
    );
  }
}

export default TodoItem;