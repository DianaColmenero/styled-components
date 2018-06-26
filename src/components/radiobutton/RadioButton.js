import React, { Component } from 'react';
import styled from 'styled-components';

const StyledRadioButton = styled.input`
    font-size: 30px;
  `;

const StyledLabel = styled.label`
  margin: 4px;
`;

class RadioButton extends Component {
    render() {

        return(
            <div>
            <StyledLabel>RadioButton</StyledLabel>
            <StyledRadioButton type="radio"></StyledRadioButton>
            </div>
        )
    }
}

export default RadioButton;