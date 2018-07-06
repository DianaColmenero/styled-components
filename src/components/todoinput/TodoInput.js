import React, { Component } from 'react';
import styled from 'styled-components';
import Dashboard from '../dashboard/Dashboard';
import Button from './../button/Button';
// import Checkbox from './../checkbox/Checkbox';
// import DropDown from './../dropdown/DropDown';
import Input from './../input/Input';
// import RadioButton from './../radiobutton/RadioButton';

const StyCont = styled.div`
width: 50%;
height: 60vh;
border: 2px solid black;
margin: 0 auto;
border-radius: 8px;
`


class TodoInput extends Component {
    constructor(props){
        super(props)

        this.state = {value: "test"};

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleChange(e) {
        console.log("change here");
        
    }

    addTodo(todo) {
        console.log("TODO", todo);
        
        
    }



    render() {
        return(
            <div>
            <Dashboard />
            <h2>Todo List</h2>
            <StyCont>
                <Input
                onChange={ this.handleChange }/>
                <Button 
                style={{ borderColor: 'red', display: 'none' }}
                title={'add'}
                onClick={() => this.addTodo(this.state.value)}
                />
                {/* <Button title={'complete'}/>
                <Button title={'incomplete'}/>
                <Button title={'all'}/> */}

            </StyCont>

            </div>
        );
    }
}

export default TodoInput;

