import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GlobalContainer from './GlobalContainer';
import styled from 'styled-components';
import WallFb from './WallFb';
import Header from './Header'


const TimeLineStyled = styled.div`
	background: #e9ebee;
`;

class LoginFb extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        picture: ''
    }

    responseFacebook = response => {

        this.setState({
            isLoggedIn: true,
            userID: response.userId,
            name: response.name,
            picture: response.picture.data.url,
            redirect: true
        },
        () => {
            this.setPosts();
        }
    );
};
    setPosts() {
        if (this.state.isLoggedIn) {
            fetch(
                'https://graph.facebook.com/v3.0/820882001277849/posts?access_token=403108406768407|amJGwlHjGLWXcKOMow0MGmJpTgU'
			)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json.data });
                console.log(json);
            });
            
		}
    };


    componentClicked = () => console.log('click');
    
    render () {
        let firstName;
		if (this.state.name) {
			let name = this.state.name.split(' ');
			firstName = name[0];
		}

        let fbContent;
        if(this.state.isLoggedIn){
            // return <Redirect to="/wall" />
            fbContent = (

                <div>
                    <Header name={firstName} picture={this.state.picture} />
                    <WallFb data={this.state.data} name={firstName} />
				
                </div>
                
            );
        } else {
            fbContent = (
                <div style={{ margin: 'auto', width: '700px' }}>
                <FacebookLogin
    appId="272490939996928"
    autoLoad={true}
    fields="name,picture"
    onClick={this.componentClicked}
    callback={this.responseFacebook} />
                </div>
            );
            
        }

        return (
            <div>
            <TimeLineStyled>{fbContent}</TimeLineStyled>
            <GlobalContainer
            />
            

            </div>
        );
    }
}

export default LoginFb;


