import React, { Component } from 'react';
import IoHappy from 'react-icons/lib/io/happy';
// import { faThumbsUp, faCommentAlt, faShare } from '@fortawesome/free-solid-svg-icons';
// import { StyledCard, Img, Text, Options, OptionWrapper, OptionText, InputWrapper } from './CardStyled';
//Components
import Input from './../../input/Input';
import styled from 'styled-components';
// import { options } from './CardHelpers';

const StyledCard = styled.div`
	min-height: 20%;
	background: #FFFFFF;
	padding: 12px 12px 0;
	margin-bottom: 15px;
	display: inline-block;
	// border: 1px solid #DADBDE;
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
	background: yellow;
`;

const Text = styled.p`
	font-size: 14px;
	text-align: left;
	line-height: 25px;
`;

const circleWrapp = styled.div`
	padding-bottom: 3px;
	margin-right: 8px;
	font-size: 2.4;
	display: inline;
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
			text: '',
			display: 'none',
			name: 'Random',
		};
	}

	pressed = () => {
		console.log('pressed');
	};

	handleChange = event => {
		console.log('change');
		this.setState({ text: event.target.value });
	};

	commentInput = () => {
		console.log('commentInput');
		this.setState({ display: 'block' });
	};


	render() {

		const options = [
			{ text: 'Like', action: this.pressed },
			{ text: 'Comment', action: this.commentInput },
			{ text: 'Share', action: this.pressed },
		];
		
		return (
			<StyledCard >
				{/* <circleWrapp>
				<IoHappy/>
					</circleWrapp> */}
				<Text className="texts">{this.props.month} {this.props.day}</Text>
				<Text>{this.props.text}</Text>
				<Img src={this.props.pic} alt="" />
				<Options>
					{options.map((element, index) => {
						return (
							<OptionWrapper className="optionwra" key={index}>
								{/* <FontAwesomeIcon icon={element.icon} /> */}
								<OptionText onClick={element.action}>{element.text}</OptionText>
							</OptionWrapper>
						);
					})}
				</Options>
				<InputWrapper  style={{ display: this.state.display }}>
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