import React, { Component } from 'react';
import Card from './card/Card';
import Composer from './Composer';
import styled from 'styled-components';
import Clock from './Clock';
import SidebarLeft from './SidebarLeft';
// import { months, currentMonth, getDay, getExactDate } from './MainTimelineHelpers';



const MainTimelineStyled = styled.div`
	max-width: 100%;
	width: 1000px;
`;

const Middle = styled.div`
	margin-left: 185px;
	float: left;
	clean: both;
`;

class WallFb extends Component {
	constructor() {
		super();
		this.state = {
			userPosts: [],
			textareaValue: '',
			disabledButton: true,
			previewDisplay: 'none',
			image: null,
		};
	}

	uploadImage = event => {
		let reader = new FileReader();
		reader.onload = function() {
			this.setState({ image: reader.result, previewDisplay: 'block', disabledButton: false });
		}.bind(this);
		if (event.target.files[0]) {
			reader.readAsDataURL(event.target.files[0]);
		}
	};
	handleChange = event => {
		event.target.value.trim().length === 0 || event.target.value === ''
			? this.setState({
					disabledButton: true,
					textareaValue: event.target.value,
			  })
			: this.setState({ disabledButton: false, textareaValue: event.target.value });
	};
	handleClick = () => {
		console.log('handleclick');
		let newUserPosts = [...this.state.userPosts];
		newUserPosts.unshift({ text: this.state.textareaValue, image: this.state.image });
		this.setState({
			userPosts: newUserPosts,
			textareaValue: '',
			disabledButton: true,
			previewDisplay: 'none',
			image: null,
		});
	};
	render () {
		let data;
		// let currentDay = getDay();
		let posts = this.state.userPosts.map((post, index) => {
			return <Card pic={post.image} text={post.text} key={index} 
			// month={months[currentMonth]} day={currentDay} 
			/>;
		});
		if (this.props.data) {
			data = Object.keys(this.props.data).map((element, index) => {
				// let date = getExactDate(this.props.data[element].created_time);
				// let [day, month] = date;
				if (this.props.data[element].message) {
					return (
						<div key={index}>
								<Clock/>
							<Card 
								pic="https://source.unsplash.com/BSEifmkrBdE/1600x900"
								id={this.props.data[element].id}
								text={this.props.data[element].message}
								labelDisplay="none"
								>
								
							</Card>
						</div>
					);
				} else {
					return null;
				}
			});
		} else {
			data = null;
		}

		return (
			<MainTimelineStyled>
				<SidebarLeft fullName={this.props.fullName} picture={this.props.picture} />
				<Middle>
					<Composer
						picture={this.props.picture}
						image={this.state.image}
						uploadImage={this.uploadImage}
						previewDisplay={this.state.previewDisplay}
						name={this.props.name}
						value={this.state.textareaValue}
						handleClick={this.handleClick}
						handleChange={this.handleChange}
						disabled={this.state.disabledButton}
					/>
					{posts}
					{data}
				</Middle>
			</MainTimelineStyled>


		);
	}
}

export default WallFb;