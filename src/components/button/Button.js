import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
height: 6vh;
font-size: 0.8rem;
width: 7vw;
border-radius: 10px;
`

class Button extends Component {
    render() {

        return(
            <StyledButton> Button </StyledButton>
        )
    }
}

export default Button;