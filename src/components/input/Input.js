import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 0.5em;
//   color: blue;
//   background: papayawhip;
  border: none;
  border-radius: 3px;
  margin: 15px;
  width: 20vw;
  height: 4vh;
  font-size: 0.8em;
  display: inline-block;
`

// const Label = styled.label`
// margin: 5px 15px;
// font-size: 0.8rem;
// `

// const Span = styled.span`
// margin-top: 15px;
// margin-left: 15px;
// `

class Input extends Component {
    render() {
        const { hasError, 
            // title,placeholder, 
             disabled,handleChange, 
            // labeldisplay, value 
        } = this.props;
        return(
        <div>
            {/* <Span style={{ display: 'inline-block', color: hasError !== true ? 'black' : 'red' }}>{title}</Span> */}
            <StyledInput
            onChange={handleChange}
            style={{ borderColor: hasError !== true ? 'black' : 'red'}}
            // placeholder={placeholder}
            placeholder="What are you thinking?"
            value={this.props.handleSubmit}
            disabled={disabled}
            />
            {/* <Label style={{ display: labeldisplay }}></Label> */}
        </div>
        )
    }
}

export default Input;