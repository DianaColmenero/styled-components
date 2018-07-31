import React, {Component} from 'react';
import SidebarRight from './SidebarRight';



class GlobalContainer extends Component {
    render (){
        return(
            <div>
            <div className={'global-container'} style={{
                width: '100%',
                height: '2570vh',
                background: '#E7E8EC',
            }}>
            <SidebarRight />

            </div>
            </div>
        );
    }
}

export default GlobalContainer;