import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa'
import styled from 'styled-components';
// import {
// 	faUser,
// 	FaCommentO,
// 	// faBell,
// 	// faPlusCircle,
// 	// faQuestionCircle,
// 	// faSortDown,
// 	// faCouch,
// }
//Styles
// import { StyledNav, Home, Wrapper, Icons, IconWrapper, InputWrapper, CouchWrapper } from './HeaderStyled';
//Components
import Avatar from './Avatar';

const Nav = styled.nav`
	width: 100%;
	background-color: #4958A3;
	position: fixed;
    max-width: 100%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

const Home = styled.p`
	font-size: 0.8em;
	color: white;
	margin: 0px 20px 15px 20px;
	padding-top: 15px;
	text-align: left;
	cursor: pointer;
	display: inline;
`;

const IconWrapper = styled.div`
	display: inline-block;
    margin: 0 7px;
    font-size: 1.3em;
`;

const InputWrapper = styled.div`
	display: inline-block;
	margin-right: 18%;
`;

const StyledInputSearch = styled.input`
  border: none;
  border-radius: 3px;
  margin: 10px;
  width: 45vw;
  height: 2vh;
  font-size: 0.8em;
  display: inline-block;
  padding: 6px;
`


class Header extends Component {
	handleChange(event) {
		console.log(event.target.value);
	}
	render() {
        // let icons = [faUser, FaCommentO 
        //     // faBell, faPlusCircle, faQuestionCircle, faSortDown
        // ];
		return (
			<Nav>
					<InputWrapper>
                        <StyledInputSearch
                        placeholder='Search'
                        hangleChange={this.handleChange} title="Search" />
					</InputWrapper>

					<Avatar name={this.props.name} picture={this.props.picture} />
					
					<IconWrapper>
                    <FontAwesome.FaUserPlus />
                    </IconWrapper>

                    <Home>Home</Home>
						{/* {icons.map((element, index) => {
							return ( */}
								{/* <IconWrapper key={index}> */}
									{/* <FontAwesomeIcon icon={element} /> */}
								{/* </IconWrapper> */}
							{/* );
						})} */}
			</Nav>
		);
	}
}

export default Header;