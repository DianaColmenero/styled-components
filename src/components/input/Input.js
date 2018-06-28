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
  font-size: 0.8em;
`

const Label = styled.label`
margin: 10px 15px;
`

class Input extends Component {
    render() {
        const { hasError, title, placeholder, disabled, labeldisplay, value } = this.props;
        return(
        <div>
            <StyledInput
            style={{ borderColor: hasError !== true ? 'black' : 'red'}}
            placeholder={placeholder}
            value={value}
            disabled={disabled}/>
            <Label style={{ display: labeldisplay, color: hasError !== true ? 'black' : 'red' }}>{title}</Label>
        </div>
        )
    }
}

export default Input;