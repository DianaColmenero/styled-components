import React, { Component } from 'react';
import styled from 'styled-components';
import Dashboard from '../dashboard/Dashboard';
import Button from './../button/Button';
// import Checkbox from './../checkbox/Checkbox';
// import DropDown from './../dropdown/DropDown';
// import RadioButton from './../radiobutton/RadioButton';
import Input from './../input/Input';
import TodoItem from './TodoItem';

const StyCont = styled.div`
width: 50%;
height: 70vh;
border: 2px solid black;
margin: 0 auto;
border-radius: 8px;
`


class TodoInput extends Component {
    constructor(props) {
        super(props);

        this.state = {value: ' ',
            todos: [
              {id: 0, text: "do my homework"},
              {id: 1, text: "Learn React"}
            ],
            nextId: 2
        };
        console.log(this.state.todos);

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        // this.addTodo = this.addTodo.bind(this);
        // this.removeTodo = this.removeTodo.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
        console.log("change here");
    }

    addTodo(todoText) {
        console.log("PRUB2");
        console.log("todo add: ", todoText);

        let todos = this.state.todos.slice();
        todos.push({id: this.state.nextId, text: todoText});
        this.setState({
        todos: todos,
        nextId: ++this.state.nextId

    });
    console.log(todos);
  
      }

    //   unfinishedTasks = event => {
	// 	let filter = this.state.todos.filter(task => {
	// 		return task.checked === false;
	// 	});
	// 	this.setState({ tasks: filter });
	// }; 

    // removeTodo(id) {
    //     this.setState({
    //         todos: this.state.todos.filter((todo, index) => todo.id !== id)
    //       });
    //   }

    render() {
        return(
            <div>
            <Dashboard />
            <StyCont>
            <h2>Todo List</h2>
                <Input 
                value={this.state.value}
                handleChange={ this.handleChange }
                todoText=""
                addTodo={this.addTodo}
                />

                <Button 
                style={{ borderColor: 'red', display: 'none' }}
                title={'Add'}
                onClick={() => this.addTodo(this.state.value)}
                />
                {/* <Button title={'complete'}/>
                <Button title={'incomplete'}/>
                <Button title={'all'}/> */}
            <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem 
                todo={todo} key={todo.id} 
                id={todo.id} 
                // removeTodo={this.removeTodo}
                />
              })
            }
          </ul>
            </StyCont>

            </div>
        );
    }
}

export default TodoInput;

