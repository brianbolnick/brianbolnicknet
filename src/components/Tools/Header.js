import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import '../../css/Tools.css';
import MenuModal from '../Home/MenuModal';


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


