import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 0.5em;
  color: blue;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  margin: 15px;
`

const Label = styled.label`
margin: 8px;
`

class Input extends Component {
    render() {
        return(
        <div>
            <StyledInput placeholder="username" type="text" />
            <StyledInput type="password" placeholder="password"/>
            <Label></Label>
        </div>
        )
    }
}

export default Input;