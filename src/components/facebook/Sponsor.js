import React from 'react';
import namor from 'namor';
import styled from 'styled-components';

const SponsorTextWrapper = styled.div`
	display: flex;
	font-size: 0.8em;
	justify-content: space-between;
	margin-bottom: 10px;
`;
const SponsorPic = styled.img`
	width: 253px;
	height: 200px;
`;

const Sponsor = styled.div`
	background: white;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #dbdad8;
	margin: 10px 0;
`;

const CreateAdd = styled.a`
	margin: 0;
	color: #385997;
`;

const SponsorText = styled.p`
	margin: 0;
`;


//Sponsor
export default () => {
	return (
		<Sponsor>
			<SponsorTextWrapper>
				<SponsorText>Sponsored</SponsorText>
				<CreateAdd href="#">Create Ad</CreateAdd>
			</SponsorTextWrapper>
			<SponsorPic src="https://source.unsplash.com/1600x900/?tree/" />
			<p style={{ marin: 0, fontSize: '.9em' }}>{namor.generate({ words: 4, numbers: 0, manly: false })}...</p>
			<SponsorPic src="https://source.unsplash.com/1600x900/?tree/" />
			<p style={{ marin: 0, fontSize: '.9em' }}>{namor.generate({ words: 4, numbers: 0, manly: false })}...</p>
		</Sponsor>
	);
};