import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input`
    font-size: 20px;
  `;

const StyledLabel = styled.label`
  margin: 10px;
`;

class Checkbox extends Component {
    render() {

        return(
            <div>
            <StyledLabel>Checkbox</StyledLabel>
            <StyledCheckbox type="checkbox"></StyledCheckbox>
            </div>
        )
    }
}

export default Checkbox;
