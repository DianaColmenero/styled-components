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
height: 80vh;
border: 2px solid black;
margin: 0 auto;
border-radius: 8px;
text-aligne: center;
`;

const Wrapp = styled.div`
text-aligne: center;
width: 50%;
height: 85%;
// border: 2px solid red;
margin: 0 auto;
`;

const UlWrapp= styled.ul`
margin: 0;
list-style-type: none;
padding-left: 14px;
`;


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

    render() {
        return(
            <div>
            <Dashboard />
            <StyCont className="StyCont">
            <h2
            style={{ textAlign: 'center' }}>Todo List
            </h2>
            <Wrapp>
                <Input  
                value={this.state.value}
                handleChange={ this.handleChange }
                todoText=""
                addTodo={this.addTodo}
                />

                <Button 
        
                title={'Add'}
                onClick={() => this.addTodo(this.state.value)}
                />
                {/* <Button title={'complete'}/>
                <Button title={'incomplete'}/>
                <Button title={'all'}/> */}
            <UlWrapp>
            {
              this.state.todos.map((todo) => {
                return <TodoItem 
                todo={todo}  
                id={todo.id} 
                key={todo.id}
                // removeTodo={this.removeTodo}
                />
              })
            }            
          </UlWrapp>
          </Wrapp>
        </StyCont>

            </div>
        );
    }
}

export default TodoInput;

