import React, { Component } from 'react';
import styled from 'styled-components';
const StyledCheckbox = styled.input`
    font-size: 20px;
    margin: 15px;
  `;

const Label = styled.label`
margin: 10px;
`;

class Checkbox extends Component {
    render() {

        return(
            <div>
            <Label>Checkbox</Label>
            <StyledCheckbox type="checkbox"></StyledCheckbox>
            </div>
        )
    }
}

export default Checkbox;
