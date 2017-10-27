import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './Tools.css';
import MenuModal from './MenuModal';


class HeaderContent extends Component {
    render() {
        return (
            <Menu fixed='top' secondary className="tool-nav" style={{ backgroundColor: '#212121' }}>
                <Menu.Menu position='left'>
                    <Menu.Item>
                        <MenuModal />
                    </Menu.Item>
                </Menu.Menu>            
            </Menu>
        )
    }
}

export default HeaderContent;


