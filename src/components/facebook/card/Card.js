import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faCommentAlt, faShare } from '@fortawesome/free-solid-svg-icons';
// import { StyledCard, Img, Text, Options, OptionWrapper, OptionText, InputWrapper } from './CardStyled';
//Components
import Input from './../../input/Input';
import styled from 'styled-components';
//Helpers
// import { options } from './CardHelpers';

const StyledCard = styled.div`
	min-height: 250px;
	background: white;
	padding: 2% 5%;
	margin-bottom: 15px;
	display: inline-block;
	border: 1px solid #dbdad8;
	border-radius: 5px;
	width: 100%;
	max-width: 500px;
`;

const Img = styled.img`
	width: 100%;
	height: auto;
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: 30px;
	margin-bottom: 40px;
`;

const Text = styled.p`
	font-size: 0.9em;
	text-align: left;
	line-height: 25px;
`;

const Options = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 10px 0;
`;

const OptionWrapper = styled.div`
	color: #61676f;
	font-size: 0.9em;
	cursor: pointer;
`;

const OptionText = styled.span`
	margin-left: 5px;
	color: #61676f;
`;

const InputWrapper = styled.div`
	margin: 10px 0;
`;

class Card extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Random',
			text: '',
			display: 'none',
		};
	}
	handleChange = event => {
		this.setState({ text: event.target.value });
	};

	showInput = () => {
		this.setState({ display: 'block' });
	};
	print = () => {
		console.log('print');
	};

	render() {
		const options = [
			{ text: 'Like', action: this.print },
			{ text: 'Comment', action: this.showInput },
			{ text: 'Share', action: this.print },
		];
		return (
			<StyledCard>
				<Text>
					{this.props.month} {this.props.day}
				</Text>
				<Text>{this.props.text}</Text>
				<Img src={this.props.pic} alt="" />
				<Options>
					{options.map((element, index) => {
						return (
							<OptionWrapper key={index}>
								{/* <FontAwesomeIcon icon={element.icon} /> */}
								<OptionText onClick={element.action}>{element.text}</OptionText>
							</OptionWrapper>
						);
					})}
				</Options>
				<InputWrapper style={{ display: this.state.display }}>
					<Input
						borderRadius="50px"
						width="440px"
						labelDisplay="none"
						label="Insert your comment"
						handleChange={this.handleChange}
						title={this.state.text}
						
					/>
				</InputWrapper>
			</StyledCard>
		);
	}
}

export default Card;