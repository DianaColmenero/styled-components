import React from 'react';
import namor from 'namor';
import styled from 'styled-components';

const Stories = styled.div`
	// background: white;
	padding: 10px;
	border-radius: 5px;
    // border: 1px solid #dbdad8;
    // margin-top: 60px;∫
`;

const Text = styled.p`
	margin: 0;
	font-size: 0.8em;
	color: #61676f;
`;

const StoryContainer = styled.div`
	display: flex;
	margin: 8px 0;
`;

const AddStory = styled.div`
	background: #f5f6f7;
	width: 58px;
	height: 52px;
	border-radius: 50%;
	border: 1px solid #dbdad8;
	display: inline-block;
`;

const TextWrapper = styled.div`
	margin-left: 10px;
	margin-top: 8px;
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
`;

const SeeMore = styled.a`
	font-size: 0.8em;
	color: #385997;
`;

export default () => {
	return (
		<Stories>
			<Text>Stories</Text>
			<StoryContainer>
				<AddStory />
				<TextWrapper>
					<LinkStory href="#">Add to your story</LinkStory>
					<Text>Share a photo, video or write something</Text>
				</TextWrapper>
			</StoryContainer>
			<StoryContainer>
				<Profile src="https://source.unsplash.com/1600x900/?sky/" />
				<TextWrapper>
					<LinkStory href="#">{namor.generate({ words: 2, numbers: 0, manly: false })}</LinkStory>
					<Text>Random hours ago</Text>
				</TextWrapper>
			</StoryContainer>

			<StoryContainer>
				<Profile src="https://source.unsplash.com/1600x900/?clouds/" />
				<TextWrapper>
					<LinkStory href="#">{namor.generate({ words: 2, numbers: 0, manly: false })}</LinkStory>
					<Text>Random hours ago</Text>
				</TextWrapper>
			</StoryContainer>
			<SeeMore href="#">See More</SeeMore>
		</Stories>
	);
};