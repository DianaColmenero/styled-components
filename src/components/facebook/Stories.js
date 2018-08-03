import React from 'react';
import namor from 'namor';
import styled from 'styled-components';
import FaPlus from 'react-icons/lib/fa/plus';

const Stories = styled.div`
	// background: white;
	// padding: 10px;
	border-radius: 5px;
    // border: 1px solid #dbdad8;
	// margin-top: 60px;
	// background: blue;
	height: 300px;
`;

const Title = styled.div`
align-self: stretch;
display: flex;
height: 16px;
justify-content: space-between;
padding-bottom: 12px;
color: #5C5F68;
font-size: 0.8em;
`;

const TitleSpan = styled.span`
color: #5C5F68;
font-weight: 600;
`;

const StoryContainer = styled.div`
	display: flex;
	margin: 8px 0;
	// background: red;
`;

const AddStory = styled.div`
	background: #f5f6f7;
	border: 1px solid #dbdad8;
	display: inline-block;
	width: 52px;
	height: 52px;
	border-radius: 50%;
`;

const TextWrapper = styled.div`
	margin-left: 10px;
	margin-top: 8px;
	// background: yellow;
`;

const Profile = styled.img`
	width: 52px;
	height: 52px;
	border-radius: 50%;
`;

const LinkStory = styled.a`
	margin: 0;
	font-size: 0.8em;
	color: #385997;
	font-weight: bold;
	text-decoration:none;
`;

const SeeMore = styled.a`
	font-size: 0.8em;
	color: #385997;
	text-decoration:none;
`;

export default () => {
	return (
		<Stories>
			<Title>
				<TitleSpan>Histories</TitleSpan>
				</Title>
			<StoryContainer>
				<AddStory> <div className="fa-plus"
				style={{ marginTop: '17px', color: '#4B67E8' }}
				> 
				<FaPlus /> 
				</div> </AddStory>
				<TextWrapper>
					<LinkStory href="#">Add to your story</LinkStory>
					{/* <Text>Share a photo, video or write something</Text> */}
				</TextWrapper>
			</StoryContainer>
			<StoryContainer>
				<Profile src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/80/80c137bc0e470ef86312244cf4fc1c59b23f9eed.jpg" />
				<TextWrapper>
					<LinkStory href="#">{namor.generate({ words: 2, numbers: 0, manly: false })}</LinkStory>
					{/* <Text>Random hours ago</Text> */}
				</TextWrapper>
			</StoryContainer>

			<StoryContainer>
				<Profile src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/47/47003dfa9d1aa5af80c701aec95d7b1de7f269fd.jpg" />
				<TextWrapper>
					<LinkStory href="#">{namor.generate({ words: 2, numbers: 0, manly: false })}</LinkStory>
					{/* <Text>Random hours ago</Text> */}
				</TextWrapper>
			</StoryContainer>
			<StoryContainer>
				<Profile src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/00c527551a6771346682ad6e5edd97806d899620.jpg" />
				<TextWrapper>
					<LinkStory href="#">{namor.generate({ words: 2, numbers: 0, manly: false })}</LinkStory>
					{/* <Text>Random hours ago</Text> */}
				</TextWrapper>
			</StoryContainer>
			<SeeMore href="#">See More</SeeMore>
		</Stories>
	);
};