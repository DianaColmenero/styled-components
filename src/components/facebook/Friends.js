import React, { Component } from 'react';
import namor from 'namor';
import Friend from './../SingleFriend/SingleFriend';
import Picture from './../Picture/Picture';
import styled from 'styled-components';

const FriendsStyled = styled.div`
	position: fixed;
	margin-top: 50px;
	height: 852px;
	width: 230px;
	border-left: 1px solid #dbdad8;
	margin-left: 88%;
	vertical-align: middle;
	@media (max-width: 1700px) {
		margin-left: 86%;
	}
	@media (max-width: 1600px) {
		margin-left: 85%;
	}
	@media (max-width: 1500px) {
		margin-left: 84%;
	}
	@media (max-width: 1350px) {
		margin-left: 83%;
	}
	@media (max-width: 1250px) {
		display: none;
	}
`;

const FriendWrapper = styled.div`
	margin: 2px 0 2px 0;
	display: flex;
	padding-left: 10px;
	&:hover {
		background: #dee0e2;
	}
`;

const Dot = styled.span`
	color: #47b536;
	vertical-align: middle;
	margin-top: 16px;
	margin-left: auto;
	padding-right: 20px;
`;

//Friends Component
export default class Friends extends Component {
	constructor() {
		super();
		this.state = {
			friends: [],
		};
	}
	render() {
		let friends = [];
		let friendsNumber = 18;
		while (friends.length < friendsNumber) {
			friends.push(namor.generate({ words: 1, numbers: 0, manly: true }));
		}

		return (
			<FriendsStyled>
				{friends.map((friend, index) => {
					return (
						<FriendWrapper key={index}>
							<Picture src="https://source.unsplash.com/1600x900/?water" alt="" />
							<Friend friend={friend} />
							<Dot>&#x25cf;</Dot>
						</FriendWrapper>
					);
				})}
			</FriendsStyled>
		);
	}
}