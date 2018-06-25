import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDropdown = styled.select`
margin: 2rem 0.5rem;
padding: 0rem 0.5rem;
font-family: Roboto;
font-size: 1rem;
height: 5vh;
width: 10vw;
`

class DropDown extends Component{
    render(){
        return (
            <div>
        <StyledDropdown>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </StyledDropdown>
      </div>
           
        )
    }
}

export default DropDown;