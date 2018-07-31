import React from 'react';
import styled from 'styled-components';

const Name = styled.p`
	font-size: 0.8rem;
	color: white;
	padding: 4px;
	text-align: left;
	cursor: pointer;
	margin: 10px 5px 10px 0;
	display: inline;
	border-right: 0.01em solid #3A3034;
	height: 2vh;
	padding-right: 7px;
`;

const Picture = styled.img`
	border-radius: 50%;
	height: 38px;
	width: 38px;
	margin-top: 4px;
	
`;

const Wrapper = styled.div`
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




