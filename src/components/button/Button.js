import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
height: 5vh;
font-size: 0.8rem;
width: 9vw;
border-radius: 8px;
display: inline-block;
margin: 15px;
`
const Label = styled.label`
margin: 5px 15px;
font-size: 0.8rem;
`
const Span = styled.span`
margin-top: 15px;
margin-left: 15px;
`

class Button extends Component {
    render() {
        const { hasError, disabled, labeldisplay, title } = this.props;
        return(
            <div className="button-wrapper">
                {/* <Span style={{ display: 'inline-block' }}></Span> */}
            <StyledButton
            onClick={this.props.onClick}
            disabled={disabled}
            style={{ borderColor: hasError !== true ? 'gray' : 'red'}}
            >{title}</StyledButton>
            {/* <Label style={{ display: labeldisplay, color: hasError !== true ? 'black' : 'red' }}></Label> */}
            </div>
        )
    }
}


export default Button;