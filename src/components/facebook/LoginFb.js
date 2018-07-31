import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GlobalContainer from './GlobalContainer';
import WallFb from './WallFb';
import Header from './Header'
import SidebarLeft from './SidebarLeft';


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
            
            fbContent = (
                
                <div>

                    <Header name={firstName} picture={this.state.picture} />
                    

                    <WallFb data={this.state.data} />

                <SidebarLeft fullname={this.state.name} picture={this.state.picture} />
				
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
            {fbContent}
            <GlobalContainer
            />
            

            </div>
        );
    }
}

export default LoginFb;


