import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
height: 2rem;
font-size: 1rem;
width: 25vw;
border-radius: 20px;
`

class Button extends Component {
    render() {

        return(
            <StyledButton> Button </StyledButton>
        )
    }
}

export default Button;