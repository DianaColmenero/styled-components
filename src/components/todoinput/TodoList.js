import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Checkbox from './../checkbox/Checkbox';
// import Button from '../button/Button';
import styled from 'styled-components';

const UlWrapp= styled.ul`
margin: 0;
list-style-type: none;
padding-left: 14px;
`;

class TodoList extends Component {
  render() {
      return (
        <UlWrapp>
          { this.props.todos.map((todo, i) => {
                return <TodoItem 
                        key={todo.id}
                        todo={todo}
                        handleDone={this.props.handleDone}
                        handleDelete={this.props.handleDelete.bind(null, todo.id)}
                        />
                    })}       
        </UlWrapp>
    );
  }
}

export default TodoList;