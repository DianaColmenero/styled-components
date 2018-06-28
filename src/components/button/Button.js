import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
height: 6vh;
font-size: 0.9rem;
width: 10vw;
border-radius: 8px;
display: inline-block;
margin: 15px;
`
const Label = styled.label`
margin: 10px 15px;
`

class Button extends Component {
    render() {
        const { hasError, disabled, labeldisplay, title } = this.props;
        return(
            <div>
            <StyledButton
            disabled={disabled}
            style={{ borderColor: hasError !== true ? 'gray' : 'red'}}
            > Button </StyledButton>
            <Label style={{ display: labeldisplay, color: hasError !== true ? 'black' : 'red' }}>{title}</Label>
            </div>
        )
    }
}


export default Button;