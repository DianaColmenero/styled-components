import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 0.5em;
  color: blue;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  margin: 15px;
  width: 20vw;
  height: 4vh;
`

const Label = styled.label`
margin: 8px;
`

class Input extends Component {
    render() {
        const { title, placeholder,hasError, disabled, value } = this.props;
        return(
        <div>
            <StyledInput
            placeholder={placeholder} 
            hasError={hasError}
            disabled={disabled}/>
            <Label>{title}</Label>
        </div>
        )
    }
}

export default Input;