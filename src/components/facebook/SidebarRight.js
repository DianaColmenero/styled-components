import React, {Component} from 'react';
import styled from 'styled-components';
import Stories from './Stories';
import Publicity from './Publicity';
// import Sponsor from './Sponsor';


const HistoriesWrapp = styled.div`
float: right;
position: fixed;
width: 300px;
min-height: 295;
background: #fff;
// overflow-y: scroll;
border-radius: 5px;
padding: 12px;
border: 1px solid #DADBDE;
margin: auto;
// margin-right: 9%;
margin-left: 69%;
margin-top: 60px;
`;

const PublicityWrapp = styled.div`
float: right;
position: fixed;
width: 300px;
min-height: 450px;
background: #fff;
margin-left: 69%;
margin-top: 395px;
border-radius: 5px;
padding: 12px;
border: 1px solid #DADBDE;
`;

class SidebarRight extends Component {
    render() {
        return (
            <div>
            <HistoriesWrapp>
            <Stories />

            </HistoriesWrapp>
            <PublicityWrapp>
                <Publicity />
            </PublicityWrapp>
            
            {/* <Sponsor /> */}
            </div>
        );
    }
}

export default SidebarRight;
