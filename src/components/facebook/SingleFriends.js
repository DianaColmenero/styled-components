import React from 'react';
import styled from 'styled-components';

const FriendStyled = styled.p`
	color: black;
	display: inline;
	vertical-align: middle;
	padding-left: 10px;
`;
//SingleFriends
export default props => {
	return <FriendStyled>{props.friend}</FriendStyled>;
};