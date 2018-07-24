//Library
import React from 'react';
//Styles
// import { Name, Picture, Wrapper } from './AvatarStyled';
import styled from 'styled-components';

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
`;

export const Picture = styled.img`
	border-radius: 50%;
	height: 30px;
	width: 30px;
	margin-top: 10px;
	margin-right: 10px;
	margin-left: 10px;
`;

export const Wrapper = styled.div`
	display: flex;
`;


export default props => {
	return (
		<Wrapper>
			<Picture src={props.picture} />
			<Name>{props.name}</Name>
		</Wrapper>
	);
};