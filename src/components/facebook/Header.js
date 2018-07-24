//Libraries
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faComment,
	faBell,
	faPlusCircle,
	faQuestionCircle,
	faSortDown,
	faCouch,
} from '@fortawesome/free-solid-svg-icons';
//Styles
// import { StyledNav, Home, Wrapper, Icons, IconWrapper, InputWrapper, CouchWrapper } from './HeaderStyled';
//Components
import Avatar from './Avatar';
import Input from './../input/Input';
//Header
import styled from 'styled-components';

export const StyledNav = styled.nav`
	height: 50px;
	width: 100%;
	background-color: #4e6cb6;
	position: fixed;
`;

export const Name = styled.p`
	font-size: 0.8em;
	color: white;
	margin-top: 0px;
	padding-top: 15px;
	text-align: left;
	margin-left: 10px;
	cursor: pointer;
	margin-bottom: 15px;
	display: inline;
	float: right;
`;

export const Home = styled.p`
	font-size: 0.8em;
	color: white;
	margin: 0px 20px 15px 20px;
	padding-top: 15px;
	text-align: left;
	cursor: pointer;
	display: inline;
`;

export const Picture = styled.img`
	border-radius: 50%;
	height: 30px;
	width: 30px;
	margin-top: 10px;
	margin-right: 10px;
`;

export const Wrapper = styled.div`
	width: 1000px;
	max-width: 100%;
	height: 50px;
	margin: 0 auto;
	display: flex;
	align-items: center;
`;

export const Icons = styled.div`
	display: inline-block;
	color: #1b2a46;
	font-size: 1.2em;
	align-items: center;
`;

export const IconWrapper = styled.div`
	display: inline-block;
	margin: 0 7px;
`;

export const InputWrapper = styled.div`
	display: inline-block;
	margin-right: 25%;
`;

export const CouchWrapper = styled.div`
	color: white;
	display: inline-block;
	margin-right: 5px;
`;

export default class extends Component {
	handleChange(event) {
		console.log(event.target.value);
	}
	render() {
		let icons = [faUser, faComment, faBell, faPlusCircle, faQuestionCircle, faSortDown];
		return (
			<StyledNav>
				<Wrapper>
					<InputWrapper>
						<CouchWrapper>
							<FontAwesomeIcon icon={faCouch} />
						</CouchWrapper>
						<Input hangleChange={this.handleChange} title="Search" />
					</InputWrapper>

					<Avatar name={this.props.name} picture={this.props.picture} />
					<Home>Home</Home>
					<Icons>
						{icons.map((element, index) => {
							return (
								<IconWrapper key={index}>
									<FontAwesomeIcon icon={element} />
								</IconWrapper>
							);
						})}
					</Icons>
				</Wrapper>
			</StyledNav>
		);
	}
}