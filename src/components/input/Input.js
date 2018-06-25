import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: blue;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

class Input extends Component {
    render() {
        return(
        <div>
            <StyledInput placeholder="username" type="text" />
            <StyledInput type="password" />
        </div>
        )
    }
}

export default Input;