import React, { Component } from 'react';
import styled from 'styled-components';

const StyledRadioButton = styled.input`
font-size: 30px;
`

const StyledLabel = styled.label`
margin: 4px;
`

const Label = styled.label`
margin: 4px;
`

class RadioButton extends Component {
    render() {

        return(
            <div>
            <StyledLabel>RadioButton</StyledLabel>
            <StyledRadioButton type="radio"></StyledRadioButton>
            <Label></Label>
            </div>
        )
    }
}

export default RadioButton;