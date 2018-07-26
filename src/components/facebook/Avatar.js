import React from 'react';
// import { Name, Picture, Wrapper } from './AvatarStyled';
import styled from 'styled-components';

const Name = styled.p`
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

const Picture = styled.img`
	border-radius: 50%;
	height: 38px;
	width: 38px;
	margin-top: 3px;
	
`;

const Wrapper = styled.div`
    display: flex;
    margin: 10px;
`;

export default props => {
	return (
		<Wrapper>
			<Picture src={props.picture} />
			<Name>{props.name}</Name>
		</Wrapper>
	);
};



