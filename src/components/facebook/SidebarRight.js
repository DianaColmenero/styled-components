import React, {Component} from 'react';
import styled from 'styled-components';
import Stories from './Stories';
// import Sponsor from './Sponsor';


const HistoriesWrapp = styled.div`
float: right;
position: fixed;
width: 300px;
min-height: 265px;
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

const PageWrapp = styled.div`
float: right;
position: fixed;
width: 300px;
min-height: 295px;
background: #fff;
margin-left: 69%;
// overflow-y: scroll;
margin-top: 360px;
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
            <PageWrapp/>
            
            {/* <Sponsor /> */}
            </div>
        );
    }
}

export default SidebarRight;
