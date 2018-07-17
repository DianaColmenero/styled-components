import React, { Component } from 'react';
import styled from 'styled-components';
import Dashboard from '../dashboard/Dashboard';
import Button from './../button/Button';
import Input from './../input/Input';
import TodoList from './TodoList';

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


var rand = require('random-key');

class TodoInput extends Component {
    constructor () {
        super();
        this.state = { title: '', 
        todos:[ { title: 'run', done: false, id: 1},
         {title: 'walk', done: true, id: 2}, 
         {title: 'swim', done: false, id: 3} 
        ],
        backUpTodos:[ { title: 'run', done: false, id: 1},
         {title: 'walk', done: true, id: 2}, 
         {title: 'swim', done: false, id: 3} 
        ],
    };
    } 

    handleDone (idMarkedAsDone) {
        var _todos = this.state.todos;
        var todo = _todos.filter((todo) => {
            return todo.id === idMarkedAsDone;
        })[0];
    
        todo.done = !todo.done;
    
        this.setState({todos: _todos});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        var title = this.state.title;
        var newTodos = this.state.todos.concat({ title: title, 
            id: rand.generate(), done: false });
        // console.log("submit", title);
        this.setState({ title: '', todos: newTodos, backUpTodos: newTodos });
        // console.log(newItems);
    }
    
    handleChange(e) {
        var title = e.target.value;
        this.setState({ title: title });
    };
    
    handleDelete(idToDelete) {
    var newTodos = this.state.todos.filter( (todo) => {
        return todo.id !== idToDelete
    
    });
    
    this.setState( {todos: newTodos, backUpTodos: newTodos });
    
    }
    
    allTasks () {
        // console.log('prueba');
        var backUpTodos = this.state.todos.slice();
        // console.log(backUpTodos);
        backUpTodos.push();
        this.setState({ todos: this.state.backUpTodos });
      }
    
      completedTasks (e) {
        // console.log('complete');
        var backUpTodos = this.state.backUpTodos.filter((todo) => { return todo.done});
        // console.log(backUpTodos);
        this.setState({ todos: backUpTodos });
      }
    
      pendingTasks (e) {
        // console.log('pending');
        var backUpTodos = this.state.backUpTodos.filter((todo) => { return !todo.done});
        this.setState({ todos: backUpTodos });
      }

    render() {
        return(
            <div>
            <Dashboard />
            <StyCont className="StyCont">
            <h2
            style={{ textAlign: 'center' }}>React to-do-list</h2>
            <Wrapp>
            <form onSubmit={ this.handleSubmit.bind(this)}>
                <Input  
                type="text"
                handleChange={ this.handleChange.bind(this)} 
                value={this.state.title}
                />
                <Button
                title={'Add'}
                />
            </form>

            <TodoList 
                handleDone={this.handleDone.bind(this)}
                todos={this.state.todos}
                handleDelete={this.handleDelete.bind(this)}
                />
            
            <Button title={'all tasks'}
            style={{ display: 'inline-block' }}
            onClick={this.allTasks.bind(this)}
            />
            <Button title={'complete tasks'}
            style={{ display: 'inline-block' }}
            onClick={this.completedTasks.bind(this)}
            />
            <Button title={'pending tasks'}
            style={{ display: 'inline-block' }}
            onClick={this.pendingTasks.bind(this)}
            />
            <br/>
            <br/>
                    
            All: ({this.state.todos.length})
            Completed: ({this.state.todos.filter((todo) => { return todo.done }).length})
            Incomplete:({this.state.todos.filter((todo) => { return !todo.done }).length})
                
          </Wrapp>
        </StyCont>

            </div>
        );
    }
}

export default TodoInput;

